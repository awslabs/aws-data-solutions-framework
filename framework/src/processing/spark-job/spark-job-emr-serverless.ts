// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Aws, Duration } from 'aws-cdk-lib';
import { Effect, IRole, PolicyDocument, PolicyStatement, Role } from 'aws-cdk-lib/aws-iam';
import { FailProps, JsonPath } from 'aws-cdk-lib/aws-stepfunctions';
import { CallAwsServiceProps } from 'aws-cdk-lib/aws-stepfunctions-tasks';
import { Construct } from 'constructs';
import { SparkJob, SparkJobProps } from './spark-job';
import { SparkEmrServerlessRuntime } from '../../processing/spark-runtime/emr-serverless';
import { TrackedConstruct } from '../../utils';

/**
 * A construct to run Spark Jobs using EMR Serverless.
 * creates a State Machine that orchestrates the Spark Job.
 * @see EmrServerlessSparkJobProps parameters to be specified for the construct
 * @default ExecutionTimeoutMinutes: 30
 * @default ClientToken: universally unique identifier (v4 UUID) generated using random numbers
 *
 * **Usage example**
 * @example
 * ```typescript
 *
 * const myFileSystemPolicy = new PolicyDocument({
 *   statements: [new PolicyStatement({
 *     actions: [
 *       's3:GetObject',
 *     ],
 *     resources: ['*'],
 *   })],
 * });
 *
 *
 * const myExecutionRole = SparkRuntimeServerless.createExecutionRole(stack, 'execRole1', myFileSystemPolicy);
 * const applicationId = "APPLICATION_ID";
 * const job = new SparkJob(stack, 'SparkJob', {
 *          jobConfig:{
 *               "Name": JsonPath.format('ge_profile-{}', JsonPath.uuid()),
 *               "ApplicationId": applicationId,
 *               "ExecutionRoleArn": myExecutionRole.roleArn,
 *               "JobDriver": {
 *                   "SparkSubmit": {
 *                       "EntryPoint": "s3://S3-BUCKET/pi.py",
 *                       "EntryPointArguments": [],
 *                       "SparkSubmitParameters": "--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4"
 *                   },
 *               }
 *          }
 * } as EmrServerlessSparkJobApiProps);
 *
 * new cdk.CfnOutput(stack, 'SparkJobStateMachine', {
 *   value: job.stateMachine.stateMachineArn,
 * });
 * ```
 */
export class EmrServerlessSparkJob extends SparkJob {
  private config!: EmrServerlessSparkJobApiProps;

  /**
   * Spark Job execution role. Use this property to add additional IAM permissions if necessary.
   */
  sparkJobExecutionRole?: IRole;

  constructor(scope: Construct, id: string, props: EmrServerlessSparkJobProps | EmrServerlessSparkJobApiProps) {
    super(scope, id, EmrServerlessSparkJob.name, props as SparkJobProps);

    if ('jobConfig' in props) {
      this.setJobApiPropsDefaults(props as EmrServerlessSparkJobApiProps);
    } else {
      this.setJobPropsDefaults(scope, props as EmrServerlessSparkJobProps);
    }
    //Tag the AWs Step Functions State Machine
    if (!this.config.jobConfig.Tags) {
      this.config.jobConfig.Tags = {};
    }
    this.config.jobConfig.Tags[TrackedConstruct.ADSF_OWNED_TAG] = 'true';

    this.stateMachine = this.createStateMachine(scope, Duration.minutes(5+this.config.jobConfig.ExecutionTimeoutMinutes!), this.config.schedule);

    this.s3LogBucket?.grantReadWrite(this.getSparkJobExecutionRole(scope));
    this.cloudwatchGroup?.grantWrite(this.getSparkJobExecutionRole(scope));

  }


  /**
   * Returns the props for the Step Functions CallAwsService Construct that starts the Spark job
   * @see CallAwsService @link[https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_stepfunctions_tasks.CallAwsService.html]
   * @returns CallAwsServiceProps
   */
  getJobStartTaskProps(): CallAwsServiceProps {
    return {
      service: 'emrserverless',
      action: 'startJobRun',
      iamAction: 'emrserverless:StartJobRun',
      parameters: this.config.jobConfig,
      iamResources: [`arn:${Aws.PARTITION}:emr-serverless:${Aws.REGION}:${Aws.ACCOUNT_ID}:/applications/${this.config.jobConfig.ApplicationId}/jobruns/*`],
      resultSelector: {
        'JobRunId.$': '$.JobRunId',
      },
    } as CallAwsServiceProps;
  }

  /**
   * Returns the props for the Step Functions CallAwsService Construct that checks the execution status of the Spark job
   * @see CallAwsService @link[https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_stepfunctions_tasks.CallAwsService.html]
   * @returns CallAwsServiceProps
   */
  getJobMonitorTaskProps(): CallAwsServiceProps {
    return {
      service: 'emrserverless',
      action: 'getJobRun',
      iamAction: 'emrserverless:GetJobRun',
      parameters: {
        ApplicationId: this.config.jobConfig.ApplicationId,
        JobRunId: JsonPath.stringAt('$.JobRunId'),
      },
      iamResources: [`arn:${Aws.PARTITION}:emr-serverless:${Aws.REGION}:${Aws.ACCOUNT_ID}:/applications/${this.config.jobConfig.ApplicationId}/jobruns/*`],
      resultSelector: {
        'State.$': '$.JobRun.State',
        'StateDetails.$': '$.JobRun.StateDetails',
      },
      resultPath: '$.JobRunState',
    } as CallAwsServiceProps;
  }

  /**
   * Returns the props for the step function task that handles the failure if the EMR Serverless job fails.
   * @returns FailProps The error details of the failed Spark Job
   */
  getJobFailTaskProps(): FailProps {
    return {
      cause: 'EMRServerlessJobFailed',
      error: JsonPath.stringAt('$.JobRunState.StateDetails'),
    } as FailProps;
  }


  /**
   * Returns the status of the EMR Serverless job that succeeded based on the GetJobRun API response
   * @returns string
   */
  getJobStatusSucceed(): string {
    return 'SUCCESS';
  }

  /**
   * Returns the status of the EMR Serverless job that failed based on the GetJobRun API response
   * @returns string
   */
  getJobStatusFailed(): string {
    return 'FAILED';
  }

  /**
   * Returns the spark job execution role. Creates a new role if it is not passed as props.
   * @returns IRole
   */
  getSparkJobExecutionRole(scope:Construct): IRole {

    console.log(`${this.config.jobConfig.JobDriver.SparkSubmit.EntryPoint.replace('s3://', 'arn:aws:s3:::')}`);

    if (!this.sparkJobExecutionRole) {
      this.sparkJobExecutionRole = this.config.jobConfig.ExecutionRoleArn ?
        Role.fromRoleArn(scope, 'SparkJobEmrServerlessExecutionRole', this.config.jobConfig.ExecutionRoleArn) :
        SparkEmrServerlessRuntime.createExecutionRole(scope, 'SparkJobEmrServerlessExecutionRole', new PolicyDocument({
          statements: [new PolicyStatement({
            effect: Effect.ALLOW,
            actions: [
              's3:GetObject',
            ],
            resources: [`${this.config.jobConfig.JobDriver.SparkSubmit.EntryPoint.replace('s3://', 'arn:aws:s3:::')}`],
          })],
        }));
    }
    return this.sparkJobExecutionRole;
  }


  /**
   * Grants the necessary permissions to the Step Functions StateMachine to be able to start EMR Serverless job
   * @param role Step Functions StateMachine IAM role
   * @see SparkRuntimeServerless.grantJobExecution
   */

  grantExecutionRole(role: IRole): void {

    const arn = `arn:aws:emr-serverless:${Aws.REGION}:${Aws.ACCOUNT_ID}:/applications/${this.config.jobConfig.ApplicationId}`;
    role.addToPrincipalPolicy(new PolicyStatement({
      effect: Effect.ALLOW,
      actions: [
        'emr-serverless:TagResource',
      ],
      resources: [arn],
    }));
    SparkEmrServerlessRuntime.grantJobExecution(role, [this.config.jobConfig.ExecutionRoleArn], [arn, `${arn}/jobruns/*`]);
  }

  /**
   * Set defaults for the EmrServerlessSparkJobApiProps.
   * @param props EmrServerlessSparkJobApiProps
   */
  private setJobApiPropsDefaults(props: EmrServerlessSparkJobApiProps): void {

    //Set defaults
    props.jobConfig.ClientToken ??= JsonPath.uuid();
    props.jobConfig.ExecutionTimeoutMinutes ??= 30;

    this.config = props;

  }

  /**
   * Set defaults for the EmrOnEksSparkJobProps.
   * @param props EmrOnEksSparkJobProps
   */
  private setJobPropsDefaults(scope:Construct, props: EmrServerlessSparkJobProps): void {

    const config = {
      jobConfig: {
        ConfigurationOverrides: {
          MonitoringConfiguration: {
            S3MonitoringConfiguration: {},
          },
        },
        JobDriver: {
          SparkSubmit: {},
        },
      },
    } as EmrServerlessSparkJobApiProps;

    config.jobConfig.Name = props.Name;
    config.jobConfig.ClientToken = JsonPath.uuid();
    config.jobConfig.ExecutionTimeoutMinutes = props.ExecutionTimeoutMinutes ?? 30;
    config.jobConfig.ApplicationId = props.ApplicationId;
    config.jobConfig.JobDriver.SparkSubmit.EntryPoint = props.SparkSubmitEntryPoint;
    if (props.SparkSubmitEntryPointArguments) {
      config.jobConfig.JobDriver.SparkSubmit.EntryPointArguments = props.SparkSubmitEntryPointArguments;
    }
    if (props.SparkSubmitParameters) {
      config.jobConfig.JobDriver.SparkSubmit.SparkSubmitParameters = props.SparkSubmitParameters;
    }

    config.jobConfig.ConfigurationOverrides!.ApplicationConfiguration ??= props.ApplicationConfiguration;

    if (props.S3LogUri && !props.S3LogUri.match(/^s3:\/\/([^\/]+)/)) {
      throw new Error(`Invalid S3 URI: ${props.S3LogUri}`);
    }

    config.jobConfig.ConfigurationOverrides.MonitoringConfiguration.S3MonitoringConfiguration!.LogUri =
    this.createS3LogBucket(scope, props.S3LogUri, props.S3LogUriKeyArn);

    if ( props.S3LogUriKeyArn ) {
      config.jobConfig.ConfigurationOverrides.MonitoringConfiguration.S3MonitoringConfiguration!.EncryptionKeyArn = props.S3LogUriKeyArn;
    }


    if (props.CloudWatchLogGroupName) {
      this.createCloudWatchLogsLogGroup(scope, props.CloudWatchLogGroupName, props.CloudWatchEncryptionKeyArn);
      config.jobConfig.ConfigurationOverrides.MonitoringConfiguration.CloudWatchLoggingConfiguration = {
        Enabled: true,
        EncryptionKeyArn: props.CloudWatchEncryptionKeyArn,
        LogGroupName: props.CloudWatchLogGroupName ?? props.Name,
        LogStreamNamePrefix: props.CloudWatchLogGroupStreamPrefix,
      };
    }


    config.jobConfig.Tags = props.Tags;

    this.config = config;


  }


}


/**
 * Simplified configuration for the EMR Serverless Job.
 * @param name Spark job name @default Autogenerated
 * @param applicationId EMR Serverless application ID
 * @param executionRoleArn EMR Serverless execution role ARN @default new IAM Role create
 * @param sparkSubmitEntryPoint The entry point for the Spark submit job run. @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_SparkSubmit.html)
 * @param sparkSubmitEntryPointArguments The arguments for the Spark submit job run. @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_SparkSubmit.html)
 * @param sparkSubmitParameters The parameters for the Spark submit job run. @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_SparkSubmit.html)
 * @param applicationConfiguration The override configurations for the application. @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ConfigurationOverrides.html)
 * @param executionTimeoutMinutes Job execution timeout in minutes. @default 30
 * @param persistentAppUi Enable Persistent UI. @default true @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ManagedPersistenceMonitoringConfiguration.html)
 * @param persistentAppUIKeyArn Persistent application UI encryption key ARN @default AWS Managed default KMS key used @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_ManagedPersistenceMonitoringConfiguration.html)
 * @param s3LogUri The Amazon S3 destination URI for log publishing. @example s3://BUCKET_NAME/ @default Create new bucket. @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_S3MonitoringConfiguration.html)
 * @param s3LogUriKeyArn KMS Encryption key for S3 log monitoring bucket. @default AWS Managed default KMS key used. @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_S3MonitoringConfiguration.html)
 * @param cloudWatchLogGroupName CloudWatch log group name for job monitoring.  @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CloudWatchLoggingConfiguration.html)
 * @param cloudWatchEncryptionKeyArn CloudWatch log encryption key ARN. @default AWS Managed default KMS key used. @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CloudWatchLoggingConfiguration.html)
 * @param cloudWatchLogGroupStreamPrefix CloudWatch log group stream prefix. @default The name of the spark job. @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CloudWatchLoggingConfiguration.html)
 * @param cloudWatchLogtypes CloudWatch log verbosity type. @default ERROR @see @link(https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_CloudWatchLoggingConfiguration.html)
 * @param tags Tags to be added to the EMR Serverless job. @see @link[https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html]
 */

export interface EmrServerlessSparkJobProps {
  readonly Name: string;
  readonly ApplicationId: string;
  readonly ExecutionRoleArn?: string;
  readonly SparkSubmitEntryPoint: string;
  readonly SparkSubmitEntryPointArguments?: [ string ];
  readonly SparkSubmitParameters?: string;
  readonly ApplicationConfiguration?: [
    {
      Classification: string;
      Configurations: [{ [key: string]: any }];
      Properties: {
        string : string;
      };
    }
  ];
  readonly ExecutionTimeoutMinutes?: number;
  readonly PersistentAppUi?: boolean;
  readonly PersistentAppUIKeyArn?: string;
  readonly S3LogUri?: string;
  readonly S3LogUriKeyArn?: string;
  readonly CloudWatchLogGroupName?: string;
  readonly CloudWatchEncryptionKeyArn?: string;
  readonly CloudWatchLogGroupStreamPrefix?: string;
  readonly CloudWatchLogtypes?: string;
  readonly Tags?: {
    string : string;
  };

}


/**
 * Configuration for the EMR Serverless Job API.
 * Use this interface when EmrServerlessJobProps doesn't give you access to the configuration parameters you need.
 * @param jobConfig The job configuration. @link[https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html]
 */

export interface EmrServerlessSparkJobApiProps extends SparkJobProps {

  /**
   * EMR Serverless Job Configuration.
   * @link[https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html]
   */
  readonly jobConfig: {
    ApplicationId: string;
    ClientToken?: string;
    Name?:string;
    ConfigurationOverrides:{
      ApplicationConfiguration?: [
        {
          Classification: string;
          Configurations: [ { [key:string] : any}];
          Properties: {
            string : string;
          };
        }
      ];
      MonitoringConfiguration: {
        CloudWatchLoggingConfiguration?: {
          Enabled: boolean;
          EncryptionKeyArn?: string;
          LogGroupName?: string;
          LogStreamNamePrefix?: string;
          LogTypes?: {
            string : [ string ];
          };
        };
        ManagedPersistenceMonitoringConfiguration?: {
          Enabled: boolean;
          EncryptionKeyArn: string;
        };
        S3MonitoringConfiguration?: {
          EncryptionKeyArn?: string;
          LogUri: string;
        };
      };
    };
    ExecutionRoleArn:string;
    JobDriver:{
      SparkSubmit:{
        EntryPoint: string;
        EntryPointArguments?: [ string ];
        SparkSubmitParameters?: string;
      };
    };
    ExecutionTimeoutMinutes?:number;
    Tags?:{ [key:string] : any};
  };

}

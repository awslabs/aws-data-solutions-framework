// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0


/**
 * Tests SparkJob construct
 *
 * @group unit/data-processing/spark-job
*/


import { Stack, App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { JsonPath } from 'aws-cdk-lib/aws-stepfunctions';
import { SparkJob, SparkJobProps } from '../../../src/data-processing';
import { SparkRuntimeServerless } from '../../../src/processing-runtime';


describe('Create an SparkJob using EMR Serverless Application for Spark and grant access', () => {

  const app = new App();
  const stack = new Stack(app, 'Stack');

  const myFileSystemPolicy = new PolicyDocument({
    statements: [new PolicyStatement({
      actions: [
        's3:GetObject',
      ],
      resources: ['*'],
    })],
  });


  const myExecutionRole = SparkRuntimeServerless.createExecutionRole(stack, 'execRole1', myFileSystemPolicy);


  new SparkJob(stack, 'SparkJobServerless', {
    EmrServerlessJobConfig: {
      applicationId: 'appId',
      executionRoleArn: myExecutionRole.roleArn,
      jobConfig: {
        Name: JsonPath.format('sparkServerless', JsonPath.uuid()),
        ApplicationId: 'appId',
        ClientToken: JsonPath.uuid(),
        ExecutionRoleArn: myExecutionRole.roleArn,
        ExecutionTimeoutMinutes: 30,
        JobDriver: {
          SparkSubmit: {
            EntryPoint: 's3://S3-BUCKET/pi.py',
            EntryPointArguments: [],
            SparkSubmitParameters: '--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4',
          },
        },

      },
    },
  } as SparkJobProps);


  const template = Template.fromStack(stack, {});

  test('State function is created EMR Serverless', () => {
    template.resourceCountIs('AWS::StepFunctions::StateMachine', 1);
  });

  test('State template definition matches expected format EMR Serverless', () => {
    template.hasResourceProperties('AWS::StepFunctions::StateMachine', {
      DefinitionString: {
        'Fn::Join': [
          '',
          [
            '{"StartAt":"EmrStartJobTask","States":{"EmrStartJobTask":{"Next":"Wait","Type":"Task","ResultSelector":{"JobRunId.$":"$.JobRunId"},"Resource":"arn:',
            { Ref: 'AWS::Partition' },
            ":states:::aws-sdk:emrserverless:startJobRun\",\"Parameters\":{\"Name.$\":\"States.Format('sparkServerless', States.UUID())\",\"ApplicationId\":\"appId\",\"ClientToken.$\":\"States.UUID()\",\"ExecutionRoleArn\":\"",
            { 'Fn::GetAtt': ['execRole1F3395738', 'Arn'] },
            '","ExecutionTimeoutMinutes":30,"JobDriver":{"SparkSubmit":{"EntryPoint":"s3://S3-BUCKET/pi.py","EntryPointArguments":[],"SparkSubmitParameters":"--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4"}},"Tags":{"adsf-owned":"true"}}},"Wait":{"Type":"Wait","Seconds":60,"Next":"EmrMonitorJobTask"},"EmrMonitorJobTask":{"Next":"JobSucceededOrFailed","Type":"Task","ResultPath":"$.JobRunState","ResultSelector":{"State.$":"$.JobRun.State","StateDetails.$":"$.JobRun.StateDetails"},"Resource":"arn:',
            { Ref: 'AWS::Partition' },
            ':states:::aws-sdk:emrserverless:getJobRun","Parameters":{"ApplicationId":"appId","JobRunId.$":"$.JobRunId"}},"JobSucceededOrFailed":{"Type":"Choice","Choices":[{"Variable":"$.JobRunState.State","StringEquals":"SUCCESS","Next":"JobSucceeded"},{"Variable":"$.JobRunState.State","StringEquals":"FAILED","Next":"JobFailed"}],"Default":"Wait"},"JobSucceeded":{"Type":"Succeed"},"JobFailed":{"Type":"Fail","Error":"$.JobRunState.StateDetails","Cause":"EMRServerlessJobFailed"}},"TimeoutSeconds":1800}',
          ],
        ],
      },
    });
  });

});


describe('Create an SparkJob using EMRonEKS for Spark and grant access', () => {

  const app = new App();
  const stack = new Stack(app, 'Stack');

  const myFileSystemPolicy = new PolicyDocument({
    statements: [new PolicyStatement({
      actions: [
        's3:GetObject',
      ],
      resources: ['*'],
    })],
  });


  const myExecutionRole = SparkRuntimeServerless.createExecutionRole(stack, 'execRole1', myFileSystemPolicy);

  new SparkJob(stack, 'SparkJobEmrOnEks', {
    EmrOnEksJobConfig: {
      virtualClusterId: 'clusterId',
      executionRoleArn: myExecutionRole.roleArn,
      jobConfig: {
        Name: JsonPath.format('sparkEmrOnEks', JsonPath.uuid()),
        ApplicationId: 'clusterId',
        ClientToken: JsonPath.uuid(),
        ReleaseLabel: 'emr-6.2.0-latest',
        ExecutionRoleArn: myExecutionRole.roleArn,
        ExecutionTimeoutMinutes: 30,
        JobDriver: {
          SparkSubmit: {
            EntryPoint: 's3://S3-BUCKET/pi.py',
            EntryPointArguments: [],
            SparkSubmitParameters: '--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4',
          },
        },
      },
    },
  } as SparkJobProps);

  const template = Template.fromStack(stack, {});

  test('State function is created with EmrOnEks', () => {
    template.resourceCountIs('AWS::StepFunctions::StateMachine', 1);
  });

  test('State template definition matches expected format EmrOnEks', () => {
    template.hasResourceProperties('AWS::StepFunctions::StateMachine', {
      DefinitionString: {
        'Fn::Join': [
          '',
          [
            '{"StartAt":"EmrStartJobTask","States":{"EmrStartJobTask":{"Next":"Wait","Type":"Task","ResultSelector":{"JobRunId.$":"$.Id"},"Resource":"arn:',
            { Ref: 'AWS::Partition' },
            ":states:::aws-sdk:emrcontainers:StartJobRun\",\"Parameters\":{\"Name.$\":\"States.Format('sparkEmrOnEks', States.UUID())\",\"ApplicationId\":\"clusterId\",\"ClientToken.$\":\"States.UUID()\",\"ReleaseLabel\":\"emr-6.2.0-latest\",\"ExecutionRoleArn\":\"",
            { 'Fn::GetAtt': ['execRole1F3395738', 'Arn'] },
            '","ExecutionTimeoutMinutes":30,"JobDriver":{"SparkSubmit":{"EntryPoint":"s3://S3-BUCKET/pi.py","EntryPointArguments":[],"SparkSubmitParameters":"--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4"}},"Tags":{"adsf-owned":"true"}}},"Wait":{"Type":"Wait","Seconds":60,"Next":"EmrMonitorJobTask"},"EmrMonitorJobTask":{"Next":"JobSucceededOrFailed","Type":"Task","ResultPath":"$.JobRunState","ResultSelector":{"State.$":"$.State","StateDetails.$":"$.StateDetails"},"Resource":"arn:',
            { Ref: 'AWS::Partition' },
            ':states:::aws-sdk:emrcontainers:describeJobRun","Parameters":{"VirtualClusterId":"clusterId","Id.$":"$.JobRunId"}},"JobSucceededOrFailed":{"Type":"Choice","Choices":[{"Variable":"$.JobRunState.State","StringEquals":"COMPLETED","Next":"JobSucceeded"},{"Variable":"$.JobRunState.State","StringEquals":"FAILED","Next":"JobFailed"}],"Default":"Wait"},"JobSucceeded":{"Type":"Succeed"},"JobFailed":{"Type":"Fail","Error":"$.JobRunState.StateDetails","Cause":"EMRonEKSJobFailed"}},"TimeoutSeconds":1800}',
          ],
        ],
      },
    });
  });
});
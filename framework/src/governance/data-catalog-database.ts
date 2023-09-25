// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Names, Stack } from 'aws-cdk-lib';
import { CfnCrawler, CfnDatabase } from 'aws-cdk-lib/aws-glue';
import { AddToPrincipalPolicyResult, Effect, IPrincipal, PolicyDocument, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Key } from 'aws-cdk-lib/aws-kms';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { TrackedConstruct, TrackedConstructProps } from '../utils';

/**
* An AWS Glue Data Catalog Database configured with the location and a crawler.
*
* @example
* import * as cdk from 'aws-cdk-lib';
* import { DataCatalogDatabase } from 'aws-data-solutions-framework';
*
* const exampleApp = new cdk.App();
* const stack = new cdk.Stack(exampleApp, 'DataCatalogStack');
*
* new DataCatalogDatabase(stack, 'ExampleDatabase', {
*    locationBucket: bucket,
*    locationPrefix: '/databasePath',
*    name: 'example-db'
* });
*/
export class DataCatalogDatabase extends TrackedConstruct {
  /**
   * The Glue Crawler that is automatically created when `autoCrawl` is set to `true` (default value). This property can be undefined if `autoCrawl` is set to `false`.
   */
  readonly crawler?: CfnCrawler;

  /**
   * The Glue database that's created
   */
  readonly database: CfnDatabase;

  /**
   * The Glue database name with the randomized suffix to prevent name collisions in the catalog
   */
  readonly databaseName: string;

  /**
   * Caching constructor properties for internal reuse by constructor methods
   */
  private dataCatalogDatabaseProps: DataCatalogDatabaseProps;

  constructor(scope: Construct, id: string, props: DataCatalogDatabaseProps) {
    const trackedConstructProps: TrackedConstructProps = {
      trackingTag: DataCatalogDatabase.name,
    };

    super(scope, id, trackedConstructProps);
    this.dataCatalogDatabaseProps = props;

    this.databaseName = props.name + '-' + Names.uniqueResourceName(scope, {}).toLowerCase();
    const s3LocationUri = props.locationBucket.s3UrlForObject(props.locationPrefix);
    this.database = new CfnDatabase(this, 'GlueDatabase', {
      catalogId: Stack.of(this).account,
      databaseInput: {
        name: this.databaseName,
        locationUri: s3LocationUri,
      },
    });

    let autoCrawl = props.autoCrawl;

    if (autoCrawl === undefined || autoCrawl === null) {
      autoCrawl = true;
    }

    const autoCrawlSchedule = props.autoCrawlSchedule || {
      scheduleExpression: 'cron(1 0 * * ? *)',
    };

    const currentStack = Stack.of(this);

    if (autoCrawl) {
      const crawlerRole = new Role(this, 'CrawlerRole', {
        assumedBy: new ServicePrincipal('glue.amazonaws.com'),
        inlinePolicies: {
          crawlerPermissions: new PolicyDocument({
            statements: [
              new PolicyStatement({
                effect: Effect.ALLOW,
                actions: [
                  'glue:BatchCreatePartition',
                  'glue:BatchDeletePartition',
                  'glue:BatchDeleteTable',
                  'glue:BatchDeleteTableVersion',
                  'glue:BatchGetPartition',
                  'glue:BatchUpdatePartition',
                  'glue:CreatePartition',
                  'glue:CreateTable',
                  'glue:DeletePartition',
                  'glue:DeleteTable',
                  'glue:GetDatabase',
                  'glue:GetDatabases',
                  'glue:GetPartition',
                  'glue:GetPartitions',
                  'glue:GetTable',
                  'glue:GetTables',
                  'glue:UpdateDatabase',
                  'glue:UpdatePartition',
                  'glue:UpdateTable',
                ],
                resources: [
                  `arn:aws:glue:${currentStack.region}:${currentStack.account}:catalog`,
                  `arn:aws:glue:${currentStack.region}:${currentStack.account}:database/${this.databaseName}`,
                  `arn:aws:glue:${currentStack.region}:${currentStack.account}:table/${this.databaseName}/*`,
                ],
              }),
            ],
          }),
        },
      });

      props.locationBucket.grantRead(crawlerRole, props.locationPrefix+'/*');

      const crawlerName = `${this.databaseName}-crawler-${Names.uniqueResourceName(this, {})}`;
      this.crawler = new CfnCrawler(this, 'DatabaseAutoCrawler', {
        role: crawlerRole.roleArn,
        targets: {
          s3Targets: [{
            path: s3LocationUri,
          }],
        },
        schedule: autoCrawlSchedule,
        databaseName: this.databaseName,
        name: crawlerName,
      });

      const logGroup = `arn:aws:logs:${currentStack.region}:${currentStack.account}:log-group:/aws-glue/crawlers`;
      crawlerRole.addToPolicy(new PolicyStatement({
        effect: Effect.ALLOW,
        actions: [
          'logs:CreateLogGroup',
          'logs:CreateLogStream',
          'logs:PutLogEvents',
        ],
        resources: [
          logGroup,
          `${logGroup}:*`,
        ],
      }));
    }
  }

  /**
   * Grants read access via identity based policy to the principal. This would attach an IAM policy to the principal allowing read access to the database and all its tables.
   * @param principal Principal to attach the database read access to
   * @returns `AddToPrincipalPolicyResult`
   */
  public grantReadOnlyAccess(principal: IPrincipal): AddToPrincipalPolicyResult {
    const currentStack = Stack.of(this);
    this.dataCatalogDatabaseProps.locationBucket.grantRead(principal, this.dataCatalogDatabaseProps.locationPrefix+'/*');
    return principal.addToPrincipalPolicy(new PolicyStatement({
      effect: Effect.ALLOW,
      actions: [
        'glue:GetTable',
        'glue:GetTables',
        'glue:BatchGetPartition',
        'glue:GetDatabase',
        'glue:GetDatabases',
        'glue:GetPartition',
        'glue:GetPartitions',
      ],
      resources: [
        `arn:aws:glue:${currentStack.region}:${currentStack.account}:catalog`,
        `arn:aws:glue:${currentStack.region}:${currentStack.account}:database/${this.databaseName}`,
        `arn:aws:glue:${currentStack.region}:${currentStack.account}:table/${this.databaseName}/*`,
      ],
    }));
  }
}

/**
 * The Database catalog properties
 */
export interface DataCatalogDatabaseProps {
  /**
   * Database name. Construct would add a randomize suffix as part of the name to prevent name collisions.
   */
  readonly name: string;

  /**
   * S3 bucket where data is stored
   */
  readonly locationBucket: IBucket;

  /**
   * Top level location wwhere table data is stored.
   */
  readonly locationPrefix: string;

  /**
   * When enabled, this automatically creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter.
   * @default True
   */
  readonly autoCrawl?: boolean;

  /**
   * The schedule when the Crawler would run. Default is once a day at 00:01h.
   * @default `cron(1 0 * * ? *)`
   */
  readonly autoCrawlSchedule?: CfnCrawler.ScheduleProperty;

  /**
   * Encryption key used for Crawler logs
   * @default Create a new key if none is provided
   */
  readonly crawlerLogEncryptionKey?: Key;
}
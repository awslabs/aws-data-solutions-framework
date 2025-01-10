// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { RemovalPolicy } from 'aws-cdk-lib';
import { CfnCrawler } from 'aws-cdk-lib/aws-glue';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { ISecret } from 'aws-cdk-lib/aws-secretsmanager';
import { PermissionModel } from '../../utils';

/**
 * Properties for the `DataCatalogDatabase` construct
 */
export interface DataCatalogDatabaseProps {
  /**
   * Database name. Construct would add a randomize suffix as part of the name to prevent name collisions.
   */
  readonly name: string;

  /**
   * S3 bucket where data is stored
   */
  readonly locationBucket?: IBucket;

  /**
   * Top level location where table data is stored.
   * @default - the root of the bucket is used as the location prefix.
   */
  readonly locationPrefix?: string;

  /**
   * The connection that would be used by the crawler
   */
  readonly glueConnectionName?: string;

  /**
   * The secret associated with the JDBC connection
   */
  readonly jdbcSecret?: ISecret;

  /**
   * The KMS key used by the JDBC secret
   */
  readonly jdbcSecretKMSKey?: IKey;

  /**
   * The JDBC path that would be included by the crawler
   */
  readonly jdbcPath?: string;

  /**
   * When enabled, this automatically creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter.
   * @default - True
   */
  readonly autoCrawl?: boolean;

  /**
   * The IAM Role used by the Glue Crawler when `autoCrawl` is set to `True`.
   * Additional permissions are granted to this role such as S3 Bucket read only permissions and KMS encrypt/decrypt on the key used by the Glue Crawler logging to CloudWatch Logs.
   * @default - When `autoCrawl` is enabled, a new role is created with least privilege permissions to run the crawler
   */
  readonly crawlerRole?: IRole;

  /**
   * The schedule to run the Glue Crawler. Default is once a day at 00:01h.
   * @default - `cron(1 0 * * ? *)`
   */
  readonly autoCrawlSchedule?: CfnCrawler.ScheduleProperty;

  /**
   * KMS encryption Key used for the Glue Crawler logs
   * @default - Create a new key if none is provided
   */
  readonly crawlerLogEncryptionKey?: IKey;

  /**
   * Directory depth where the table folders are located. This helps the Glue Crawler understand the layout of the folders in S3.
   * @default - calculated based on `locationPrefix`
   */
  readonly crawlerTableLevelDepth?: number;

  /**
   * The removal policy when deleting the CDK resource.
   * If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
   * Otherwise the removalPolicy is reverted to RETAIN.
   * @default - The resources are not deleted (`RemovalPolicy.RETAIN`).
   */
  readonly removalPolicy?: RemovalPolicy;

  /**
   * The permission model to apply to the Glue Database.
   * @default - IAM permission model is used
   */
  readonly permissionModel?: PermissionModel;

  /**
   * The IAM Role used by Lake Formation for data access.
   * Only needed when permissionModel is set to Lake Formation or Hybrid
   * @default - A new role is created
   */
  readonly lakeFormationDataAccessRole?: IRole;

  /**
   * The IAM Role used to perform Lake Formation configuration. 
   * Only needed when permissionModel is set to Lake Formation or Hybrid
   * @default - A new role is created
   */
  readonly lakeFormationConfigurationRole?: IRole;
}
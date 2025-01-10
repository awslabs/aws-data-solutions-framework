// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { RemovalPolicy } from 'aws-cdk-lib';
import { CfnCrawler } from 'aws-cdk-lib/aws-glue';
import { IKey } from 'aws-cdk-lib/aws-kms';
import { DataLakeStorage } from '../../storage';
import { PermissionModel } from '../../utils';
import { IRole } from 'aws-cdk-lib/aws-iam';

/**
 * Properties for the `DataLakeCatalog` Construct
 */
export interface DataLakeCatalogProps {

  /**
   * The DataLakeStorage object to create the data catalog on.
   */
  readonly dataLakeStorage: DataLakeStorage;

  /**
   * The suffix of the Glue Data Catalog Database. The name of the Glue Database is composed of the S3 Bucket name and this suffix.
   * The suffix is also added to the S3 location inside the data lake S3 Buckets.
   * @default - Use the bucket name as the database name and as the S3 location
   */
  readonly databaseName?: string;

  /**
   * When enabled, creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter.
   * @default - True
   */
  readonly autoCrawl?: boolean;

  /**
   * The schedule when the Glue Crawler runs, if enabled. Default is once a day at 00:01h.
   * @default - `cron(1 0 * * ? *)`
   */
  readonly autoCrawlSchedule?: CfnCrawler.ScheduleProperty;

  /**
   * The KMS encryption Key used for the Glue Crawler logs
   * @default - Create a new KMS Key if none is provided
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
   * @default - A new role is created for the entire Data Lake
   */
  readonly lakeFormationDataAccessRole?: IRole;

  /**
   * The IAM Role used to perform Lake Formation configuration. 
   * Only needed when permissionModel is set to Lake Formation or Hybrid
   * @default - A new role is created for the entire Data Lake
   */
  readonly lakeFormationConfigurationRole?: IRole;
}
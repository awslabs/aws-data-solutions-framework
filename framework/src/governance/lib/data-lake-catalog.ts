// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Fn } from 'aws-cdk-lib';
import { IKey, Key } from 'aws-cdk-lib/aws-kms';
import { Construct } from 'constructs';
import { DataCatalogDatabase } from './data-catalog-database';
import { DataLakeCatalogProps } from './data-lake-catalog-props';
import { AnalyticsBucket } from '../../storage';
import { Context, PermissionModel, TrackedConstruct, TrackedConstructProps } from '../../utils';
import { IRole, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';

/**
* Creates a Data Lake Catalog on top of a `DataLakeStorage`.
* The Data Lake Catalog is composed of 3 `DataCatalogDatabase`, one for each storage layer.
* @see https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Governance/data-lake-catalog
 *
* @example
* import { Key } from 'aws-cdk-lib/aws-kms';
*
* const logEncryptionKey = new Key(this, 'ExampleLogKey');
* const storage = new dsf.storage.DataLakeStorage(this, "ExampleStorage");
* const dataLakeCatalog = new dsf.governance.DataLakeCatalog(this, "ExampleDataLakeCatalog", {
*   dataLakeStorage: storage,
*   databaseName: "exampledb",
*   crawlerLogEncryptionKey: logEncryptionKey
* })
*/
export class DataLakeCatalog extends TrackedConstruct {
  /**
   * The Glue Database for the Bronze S3 Bucket
   */
  readonly bronzeCatalogDatabase: DataCatalogDatabase;
  /**
   * The Glue Database for the Silver S3 Bucket
   */
  readonly silverCatalogDatabase: DataCatalogDatabase;
  /**
   * The Glue Database for the Gold S3 Bucket
   */
  readonly goldCatalogDatabase: DataCatalogDatabase;
  /**
   * The KMS Key used to encrypt the Glue Crawler logs.
   */
  readonly crawlerLogEncryptionKey?: IKey;

  /**
   * Constructs a new instance of DataLakeCatalog
   * @param {Construct} scope the Scope of the CDK Construct
   * @param {string} id the ID of the CDK Construct
   * @param {DataLakeCatalogProps} props the DataLakeCatalog properties
   */
  constructor(scope: Construct, id: string, props: DataLakeCatalogProps) {
    const trackedConstructProps: TrackedConstructProps = {
      trackingTag: DataLakeCatalog.name,
    };

    super(scope, id, trackedConstructProps);
    const removalPolicy = Context.revertRemovalPolicy(scope, props.removalPolicy);

    if (props.autoCrawl) {
      this.crawlerLogEncryptionKey = props.crawlerLogEncryptionKey || new Key(this, 'CrawlerLogKey', {
        enableKeyRotation: true,
        removalPolicy: removalPolicy,
      });
    }

    let dataAccessRole : IRole | undefined = undefined;
    let configurationRole : IRole | undefined = undefined;

    if (props.permissionModel === PermissionModel.LAKE_FORMATION || props.permissionModel === PermissionModel.HYBRID) {
      dataAccessRole = props.lakeFormationDataAccessRole || new Role(this, 'LakeFormationDataAccessRole', {
        assumedBy: new ServicePrincipal('lakeformation.amazonaws.com'),
      });
      props.dataLakeStorage.bronzeBucket.grantReadWrite(dataAccessRole);
      props.dataLakeStorage.silverBucket.grantReadWrite(dataAccessRole);
      props.dataLakeStorage.goldBucket.grantReadWrite(dataAccessRole);

      configurationRole = props.lakeFormationConfigurationRole || new Role(this, 'LakeFormationConfigurationRole', {
        assumedBy: new ServicePrincipal('lamnda')
      });
    }

    const extractedBronzeBucketName = this.extractBucketName(props.dataLakeStorage.bronzeBucket);
    const extractedSilverBucketName = this.extractBucketName(props.dataLakeStorage.silverBucket);
    const extractedGoldBucketName = this.extractBucketName(props.dataLakeStorage.goldBucket);
    const bronzeDatabaseName = props.databaseName ? `${extractedBronzeBucketName}_${props.databaseName}` : extractedBronzeBucketName;
    const silverDatabaseName = props.databaseName ? `${extractedSilverBucketName}_${props.databaseName}` : extractedSilverBucketName;
    const goldDatabaseName = props.databaseName ? `${extractedGoldBucketName}_${props.databaseName}` : extractedGoldBucketName;
    const bronzeLocationPrefix = props.databaseName || extractedBronzeBucketName;
    const silverLocationPrefix = props.databaseName || extractedSilverBucketName;
    const goldLocationPrefix = props.databaseName || extractedGoldBucketName;

    this.bronzeCatalogDatabase = new DataCatalogDatabase(this, 'BronzeCatalogDatabase', {
      locationBucket: props.dataLakeStorage.bronzeBucket,
      locationPrefix: bronzeLocationPrefix,
      name: bronzeDatabaseName,
      autoCrawl: props.autoCrawl,
      autoCrawlSchedule: props.autoCrawlSchedule,
      crawlerLogEncryptionKey: this.crawlerLogEncryptionKey,
      crawlerTableLevelDepth: props.crawlerTableLevelDepth,
      removalPolicy,
      permissionModel: props.permissionModel,
      lakeFormationDataAccessRole: dataAccessRole,
      lakeFormationConfigurationRole: configurationRole,
    });

    this.silverCatalogDatabase = new DataCatalogDatabase(this, 'SilverCatalogDatabase', {
      locationBucket: props.dataLakeStorage.silverBucket,
      locationPrefix: silverLocationPrefix,
      name: silverDatabaseName,
      autoCrawl: props.autoCrawl,
      autoCrawlSchedule: props.autoCrawlSchedule,
      crawlerLogEncryptionKey: this.crawlerLogEncryptionKey,
      crawlerTableLevelDepth: props.crawlerTableLevelDepth,
      removalPolicy,
      permissionModel: props.permissionModel,
      lakeFormationDataAccessRole: dataAccessRole,
      lakeFormationConfigurationRole: configurationRole,
    });

    this.goldCatalogDatabase = new DataCatalogDatabase(this, 'GoldCatalogDatabase', {
      locationBucket: props.dataLakeStorage.goldBucket,
      locationPrefix: goldLocationPrefix,
      name: goldDatabaseName,
      autoCrawl: props.autoCrawl,
      autoCrawlSchedule: props.autoCrawlSchedule,
      crawlerLogEncryptionKey: this.crawlerLogEncryptionKey,
      crawlerTableLevelDepth: props.crawlerTableLevelDepth,
      removalPolicy,
      permissionModel: props.permissionModel,
      lakeFormationDataAccessRole: dataAccessRole,
      lakeFormationConfigurationRole: configurationRole,
    });
  }

  /**
   * Extract the bucket prefix from the {@link AnalyticsBucket} bucket name.
   * @param {AnalyticsBucket} bucket
   * @returns
   */
  private extractBucketName(bucket: AnalyticsBucket): string {
    const tokens = Fn.split('-', bucket.bucketName);
    return Fn.select(0, tokens);
  }
}
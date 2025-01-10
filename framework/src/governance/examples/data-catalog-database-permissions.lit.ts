// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as dsf from '../../index';

/// !show
class ExampleDefaultDataCatalogDatabaseStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const bucket = new Bucket(this, 'DataCatalogBucket');
    
    new dsf.governance.DataCatalogDatabase(this, 'DataCatalogDatabase', {
      locationBucket: bucket,
      locationPrefix: '/databasePath',
      name: 'example-db',
      permissionModel: dsf.utils.PermissionModel.LAKE_FORMATION,
    });
  }
}
/// !hide

const app = new cdk.App();
new ExampleDefaultDataCatalogDatabaseStack(app, 'ExampleDefaultDataCatalogDatabaseStack');
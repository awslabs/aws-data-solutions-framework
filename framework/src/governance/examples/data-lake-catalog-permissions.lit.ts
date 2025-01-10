// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dsf from '../../index';

/// !show
class ExampleDefaultDataLakeCatalogStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const storage = new dsf.storage.DataLakeStorage(this, 'MyDataLakeStorage');
    
    new dsf.governance.DataLakeCatalog(this, 'DataCatalog', {
      dataLakeStorage: storage,
      permissionModel: dsf.utils.PermissionModel.LAKE_FORMATION,
    });
  }
}
/// !hide

const app = new cdk.App();
new ExampleDefaultDataLakeCatalogStack(app, 'ExampleDefaultDataLakeCatalogStack');
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { CfnOutput, RemovalPolicy } from 'aws-cdk-lib';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Key } from 'aws-cdk-lib/aws-kms';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { TestStack } from './test-stack';
import { DataCatalogDatabase } from '../../src/governance';
import { PermissionModel } from '../../src/utils';

/**
 * E2E test for DataCatalogDatabase
 * @group e2e/governance/data-catalog-database
 */

jest.setTimeout(6000000);
const testStack = new TestStack('DataCatalogTestStack');
const { stack } = testStack;
stack.node.setContext('@data-solutions-framework-on-aws/removeDataOnDestroy', true);


const encryptionKey = new Key(stack, 'DataKey', {
  removalPolicy: RemovalPolicy.DESTROY,
});

const bucket = new Bucket(stack, 'TestBucket', {
  removalPolicy: RemovalPolicy.DESTROY,
  encryptionKey,
});

const database = new DataCatalogDatabase(stack, 'TestDatabase', {
  locationBucket: bucket,
  locationPrefix: 'test_database',
  name: 'test_database',
  removalPolicy: RemovalPolicy.DESTROY,
  permissionModel: PermissionModel.IAM,
});

const database2 = new DataCatalogDatabase(stack, 'TestDatabase2', {
  locationBucket: bucket,
  locationPrefix: 'test_database2',
  name: 'test_database2',
  removalPolicy: RemovalPolicy.DESTROY,
  permissionModel: PermissionModel.HYBRID,
});

const database3 = new DataCatalogDatabase(stack, 'TestDatabase3', {
  locationBucket: bucket,
  locationPrefix: 'test_database3',
  name: 'test_database3',
  removalPolicy: RemovalPolicy.DESTROY,
  permissionModel: PermissionModel.LAKE_FORMATION,
});

const role = new Role(stack, 'TestPrincipal', {
  assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
});

database.grantReadOnlyAccess(role);

new CfnOutput(stack, 'DatabaseName', {
  value: database.databaseName,
  exportName: 'DatabaseName',
});

new CfnOutput(stack, 'DatabaseName2', {
  value: database2.databaseName,
  exportName: 'DatabaseName2',
});

new CfnOutput(stack, 'DatabaseName3', {
  value: database3.databaseName,
  exportName: 'DatabaseName3',
});

let deployResult: Record<string, string>;

beforeAll(async() => {
  deployResult = await testStack.deploy();
}, 900000);

test('Database in data catalog is created', async() => {
  expect(deployResult.DatabaseName).toContain('test_database');
  expect(deployResult.DatabaseName2).toContain('test_database2');
  expect(deployResult.DatabaseName3).toContain('test_database3');
});

afterAll(async () => {
  await testStack.destroy();
}, 900000);
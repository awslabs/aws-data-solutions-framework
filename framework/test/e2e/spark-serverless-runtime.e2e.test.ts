// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

/**
 * E2E test for SparkServerlessRunime
 *
 * @group e2e/spark-runtime-serverless
 */

import { PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { TestStack } from './test-stack';
import { SparkEmrServerlessRuntime } from '../../src/';
import { App, CfnOutput, RemovalPolicy } from 'aws-cdk-lib';

jest.setTimeout(6000000);

// GIVEN
const app = new App();
const testStack = new TestStack('SparkServerlessTestStack', app);
const { stack } = testStack;

stack.node.setContext('@aws-data-solutions-framework/removeDataOnDestroy', true);

// creation of the construct(s) under test
const serverlessRuntime = new SparkEmrServerlessRuntime(stack, 'EmrApp', {
  name: 'SparkRuntimeServerless',
  vpcFlowlogRemovalPolicy: RemovalPolicy.DESTROY,
});

const s3Read = new PolicyDocument({
  statements: [new PolicyStatement({
    actions: [
      's3:GetObject',
    ],
    resources: ['arn:aws:s3:::aws-data-analytics-workshop'],
  })],
});

const execRole = SparkEmrServerlessRuntime.createExecutionRole(stack, 'execRole', s3Read);

new CfnOutput(stack, 'applicationArn', {
  value: serverlessRuntime.applicationArn,
});

new CfnOutput(stack, 'execRoleArn', {
  value: execRole.roleArn,
});

let deployResult: Record<string, string>;

beforeAll(async() => {
  // WHEN
  deployResult = await testStack.deploy();
}, 900000);

it('Serverless runtime created successfully', async () => {
  // THEN
  expect(deployResult.applicationArn).toContain('applications');
  expect(deployResult.execRoleArn).toContain('arn');
});

afterAll(async () => {
  await testStack.destroy();
}, 900000);

// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0


/**
 * Tests OpenSearch cluster construct
 *
 * @group unit/nag/consumption/opensearch
 */

import { App, Aspects, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Annotations, Match } from 'aws-cdk-lib/assertions';
import { AwsSolutionsChecks, NagSuppressions } from 'cdk-nag';
import { OpenSearchCluster } from '../../../../src/consumption';


const app = new App();
const stack = new Stack(app, 'Stack');

stack.node.setContext('@data-solutions-framework-on-aws/removeDataOnDestroy', true);

// Instantiate AccessLogsBucket Construct with default
new OpenSearchCluster(stack, 'OpenSearch', {
  domainName: 'test',
  masterNodeInstanceCount: 3,
  dataNodeInstanceCount: 4,
  samlEntityId: '<idpTest>',
  samlMetadataContent: 'xmlCOntent',
  samlMasterBackendRole: 'IdpGroupId',
  deployInVpc: true,
  removalPolicy: RemovalPolicy.DESTROY,
});

Aspects.of(stack).add(new AwsSolutionsChecks({ verbose: true }));

NagSuppressions.addResourceSuppressionsByPath(
  stack,
  '/Stack/OpenSearch/SecurityGroup/Resource',
  [{ id: 'CdkNagValidationFailure', reason: 'VPC can be created or supplied as props, so cidr block is not known in advance' }],
);
NagSuppressions.addResourceSuppressionsByPath(
  stack,
  '/Stack/OpenSearch/AccessRole/Resource',
  [{ id: 'AwsSolutions-IAM4', reason: 'this is default recommended IAM Role to use' }],
);

NagSuppressions.addResourceSuppressionsByPath(
  stack,
  '/Stack/OpenSearch/CreateSLR',
  [
    { id: 'AwsSolutions-IAM4', reason: 'Separately handled in SLR construct' },
    { id: 'AwsSolutions-IAM5', reason: 'Separately handled in SLR construct' },
    { id: 'AwsSolutions-L1', reason: 'Separately handled in SLR construct' },
  ],
  true,
);

NagSuppressions.addResourceSuppressionsByPath(
  stack,
  '/Stack/AWS679f53fac002430cb0da5b7982bd2287/ServiceRole/Resource',
  [
    { id: 'AwsSolutions-IAM4', reason: 'AWSLambdaBasicExecutionRole this is default recommended IAM Policy to use' },
  ],
);
NagSuppressions.addResourceSuppressionsByPath(
  stack,
  '/Stack/LogRetentionaae0aa3c5b4d4f87b02d85b201efdd8a',
  [
    { id: 'AwsSolutions-IAM4', reason: 'The permissions are provided by the Custom Resource framework and can\'t be updated' },
    { id: 'AwsSolutions-IAM5', reason: 'The policy is provided by the Custom Resource framework and can\'t be updated' },
  ],
  true,
);

NagSuppressions.addResourceSuppressionsByPath(
  stack,
  '/Stack/AWS679f53fac002430cb0da5b7982bd2287/Resource',
  [
    { id: 'AwsSolutions-L1', reason: 'The Lambda is part of the CDK custom resource framework for SDK calls and can\'t be changed' },
  ],
);

NagSuppressions.addResourceSuppressionsByPath(
  stack,
  '/Stack/OpenSearch/Domain/ESLogGroupPolicyc8fcef8a0773977d390b894952b755dcb5cb887768/CustomResourcePolicy/Resource',
  [{ id: 'AwsSolutions-IAM5', reason: 'this is default recommended IAM Role to use' }],
);


NagSuppressions.addResourceSuppressionsByPath(
  stack,
  '/Stack/OpenSearch/MasterRolePolicy/Resource',
  [
    { id: 'AwsSolutions-IAM5', reason: 'Role needs access to all OpenSearch APIs' },
    { id: 'AwsSolutions-IAM4', reason: 'Role needs access to all OpenSearch APIs' },
  ],
);

//recommendaed FGAC https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html
NagSuppressions.addResourceSuppressionsByPath(
  stack,
  '/Stack/OpenSearch/Domain/Resource',
  [
    { id: 'AwsSolutions-OS3', reason: 'SAML authentication is used to restrict access' },
    { id: 'AwsSolutions-OS5', reason: 'IAM-based access and SAML authentication for dashboards are used to restrict access' },
  ],
);


NagSuppressions.addResourceSuppressionsByPath(
  stack, [
    '/Stack/OpenSearchApi/Provider/VpcPolicy/Resource',
    '/Stack/OpenSearchApi/Provider/CleanUpProvider',
    '/Stack/OpenSearchApi/Provider/CustomResourceProvider/framework-onEvent',
  ],
  [
    { id: 'AwsSolutions-IAM5', reason: 'Resource is not part of the test scope' },
    { id: 'AwsSolutions-IAM4', reason: 'Resource is not part of the test scope' },
    { id: 'AwsSolutions-L1', reason: 'Resource is not part of the test scope' },
  ],
  true,
);

NagSuppressions.addResourceSuppressionsByPath(stack,
  [
    '/Stack/OpenSearchApi/Provider',
    '/Stack/AWS679f53fac002430cb0da5b7982bd2287',
    '/Stack/OpenSearch/CreateSLR/Provider',
  ],
  [
    { id: 'CdkNagValidationFailure', reason: 'CDK custom resource provider framework is using intrinsic function to get latest node runtime per region which makes the NAG validation fails' },
  ],
  true,
);


test('No unsuppressed Warnings', () => {
  const warnings = Annotations.fromStack(stack).findWarning('*', Match.stringLikeRegexp('AwsSolutions-.*'));
  console.log(warnings);
  expect(warnings).toHaveLength(0);
});

test('No unsuppressed Errors', () => {
  const errors = Annotations.fromStack(stack).findError('*', Match.stringLikeRegexp('AwsSolutions-.*'));
  for (const error of errors) {
    expect(error.id+' '+error.entry.data).toHaveLength(0);
    console.log(error.id);
  }
  console.log(errors);
  expect(errors).toHaveLength(0);
});


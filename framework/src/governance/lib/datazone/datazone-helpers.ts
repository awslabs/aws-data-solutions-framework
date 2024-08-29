// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { CfnSubscriptionTarget } from 'aws-cdk-lib/aws-datazone';
import { IRole } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';
import { CustomAssetType } from './datazone-custom-asset-type-factory';
import { DataZoneFormType } from './datazone-custom-asset-type-props';


// The list of valid types for specifying smithy models in typescript
const validSmithyTypes = [
  'string', 'boolean', 'byte', 'short', 'integer', 'long', 'float', 'double',
  'bigInteger', 'bigDecimal', 'blob', 'document', 'timestamp', 'enum', 'intEnum',
];

/**
 * Check if a type is a valid smithy type.
 * @param type The smithy type to check.
 * @returns True if the type is a valid smithy type, false otherwise.
 */
function isValidSmithyType(type: string): boolean {
  return validSmithyTypes.includes(type.toLowerCase());
}


/**
 * Build a Smithy model string from model fields.
 * @param name The name of the model structure.
 * @param fields The list of fields in the model.
 * @returns The Smithy model string.
 */
export function buildModelString(formType: DataZoneFormType): string|undefined {

  if (formType.model !== undefined) {
    const fieldStrings = formType.model.map(field => {
      const requiredIndicator = field.required ? '@required' : '';
      // Check if field.type is a valid Smithy type
      if (isValidSmithyType(field.type)) {
        const uppercasedType = field.type.charAt(0).toUpperCase() + field.type.toLowerCase().slice(1);
        return `${requiredIndicator}\n${field.name}: ${uppercasedType}`;
      } else {
        throw new Error(`Invalid field type: ${field.type}`);
      }
    });

    return `
      structure ${formType.name} {
        ${fieldStrings.join('\n')}
      }
    `;
  } else {
    return undefined;
  }
}

/**
 * Creates a DataZone subscription target for a custom asset type. 
 * Subscription targets are used to automatically add asset to environments when a custom asset is subscribed by a project.
 * @param scope The scope of the construct.
 * @param id The id of the construct.
 * @param customAssetType The custom asset type that can be added to the environment.
 * @param name The name of the subscription target.
 * @param provider The provider of the subscription target. @example dsf.
 * @param environmentId The DataZone environment identifier.
 * @param authorizedPrincipals The authorized principals to be granted when assets are subscribed.
 * @param manageAccessRole The IAM role creating the subscription target.
 * @returns The DataZone subscription target.
 */
export function createSubscriptionTarget(
  scope: Construct,
  id: string,
  customAssetType: CustomAssetType,
  name: string,
  provider: string,
  environmentId: string,
  authorizedPrincipals: [IRole],
  manageAccessRole: IRole) {

  // const stack = Stack.of(scope);

  // const crApiCall = {
  //   service: 'DataZone',
  //   action: 'GetEnvironment',
  //   parameters: {
  //     domainIdentifier: customAssetType.domainIdentifier,
  //     identifier: environmentId,
  //   },
  //   physicalResourceId: PhysicalResourceId.of(Date.now().toString()),
  // };

  // const environment = new AwsCustomResource(scope, 'API1', {
  //   onCreate: crApiCall,
  //   onUpdate: crApiCall,
  //   onDelete: crApiCall,
  //   policy: AwsCustomResourcePolicy.fromSdkCalls({
  //     resources: [`arn:${stack.partition}:datazone:${stack.region}:${stack.account}:domain/${customAssetType.domainIdentifier}`],
  //   }),
  // });

  // const userRoleArn = Fn.select(0,Fn.split('\"}',Fn.select(1,Fn.split('value\":\"',Fn.select(1,Fn.split('userRoleArn',environment.getResponseField('provisionedResources')))))));

  return new CfnSubscriptionTarget(
    scope,
    `${id}SubscriptionTarget`,
    {
      applicableAssetTypes: [customAssetType.name],
      authorizedPrincipals: authorizedPrincipals.map( r => r.roleArn),
      domainIdentifier: customAssetType.domainIdentifier,
      environmentIdentifier: environmentId,
      manageAccessRole: manageAccessRole.roleArn,
      name,
      provider,
      subscriptionTargetConfig: [],
      type: 'BaseSubscriptionTargetType',
    },
  );
}
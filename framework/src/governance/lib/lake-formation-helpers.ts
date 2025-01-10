// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { Duration, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Effect, IRole, ISamlProvider, IUser, PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { CfnDataLakeSettings, CfnPrincipalPermissions, CfnResource } from 'aws-cdk-lib/aws-lakeformation';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import { AwsCustomResource, AwsCustomResourcePolicy, PhysicalResourceId } from 'aws-cdk-lib/custom-resources';
import { Construct } from 'constructs';
import { PermissionModel } from '../../utils';

/**
 * Configure the DataLakeSettings of LakeFormation
 * @param scope the construct scope
 * @param id the construct id
 * @param principals the list of principals to add as LakeFormation admin
 * @returns the CfnDataLakeSettings to configure Lake Formation
 */
export function putDataLakeSettings(scope: Construct, id: string, principals: (IRole|IUser|[ISamlProvider, string])[]): CfnDataLakeSettings {

  // Check if the principals are Amazon IAM Roles or Users and extract the arns and names
  const principalArns: CfnDataLakeSettings.DataLakePrincipalProperty[] = [];
  for (const principal of principals) {
    const principalId = getPrincipalArn(principal);
    principalArns.push({
      dataLakePrincipalIdentifier: principalId,
    });
  }

  return new CfnDataLakeSettings(scope, id, {
    admins: principalArns,
    mutationType: 'APPEND',
    parameters: {
      CROSS_ACCOUNT_VERSION: 4,
    },
  });
}

/**
 * Register an Amazon S3 location in AWS Lake Formation.
 * It creates an IAM Role dedicated per location and register the location using either Lake Formation or Hybrid access model.
 * @param scope the construct scope
 * @param id the construct id
 * @param locationBucket the Amazon S3 location bucket
 * @param locationPrefix the Amazon S3 location prefix
 * @param accessMode the Amazon S3 location access model
 * @return the CfnDataLakeSettings to register the Amazon S3 location in AWS Lake Formation
 */
export function registerS3Location(
  scope: Construct,
  id: string,
  locationBucket: IBucket,
  locationPrefix: string,
  accessMode?: PermissionModel,
  dataAccessRole?: IRole,
) : [IRole, CfnResource] {

  // create the IAM role for LF data access
  const lfDataAccessRole = dataAccessRole || new Role(scope, `${id}DataAccessRole`, {
    assumedBy: new ServicePrincipal('lakeformation.amazonaws.com'),
  });

  const grantReadWrite = locationBucket.grantReadWrite(lfDataAccessRole, locationPrefix);

  const dataLakeLocation = new CfnResource(scope, `${id}DataLakeLocation`, {
    hybridAccessEnabled: accessMode === PermissionModel.HYBRID ? true : false,
    useServiceLinkedRole: false,
    roleArn: lfDataAccessRole.roleArn,
    resourceArn: locationBucket.arnForObjects(locationPrefix),
  });

  dataLakeLocation.node.addDependency(grantReadWrite);

  return [lfDataAccessRole, dataLakeLocation];

}

/**
 * Revoke the IAMAllowedPrincipal permissions from the database.
 * @param scope the construct scope
 * @param id the construct id
 * @param database the database to remove the IAMAllowedPrincipal permission
 * @return the CfnDataLakeSettings to remove the IAMAllowedPrincipal permission
 */
export function revokeIamAllowedPrincipal(
  scope: Construct,
  id: string,
  database: string,
  execRole: IRole,
  removalPolicy: RemovalPolicy,
): AwsCustomResource {

  const stack = Stack.of(scope);

  // eslint-disable-next-line local-rules/no-tokens-in-construct-id
  const cr = new AwsCustomResource(scope, id, {
    removalPolicy,
    role: execRole,
    onCreate: {
      service: 'LakeFormation',
      action: 'RevokePermissions',
      parameters: {
        Permissions: ['ALL'],
        Principal: {
          DataLakePrincipalIdentifier: 'IAM_ALLOWED_PRINCIPALS',
        },
        Resource: {
          Database: {
            Name: database,
          },
        },
      },
      physicalResourceId: PhysicalResourceId.of(`${database}`),
    },
    policy: AwsCustomResourcePolicy.fromStatements([
      new PolicyStatement({
        actions: ['lakeformation:RevokePermissions'],
        effect: Effect.ALLOW,
        resources: [
          `arn:${stack.partition}:lakeformation:${stack.region}:${stack.account}:catalog:${stack.account}`,
        ],
      }),
      new PolicyStatement({
        actions: [
          'glue:GetDatabase',
        ],
        effect: Effect.ALLOW,
        resources: [
          `arn:${stack.partition}:glue:${stack.region}:${stack.account}:database/${database}`,
          `arn:${stack.partition}:glue:${stack.region}:${stack.account}:catalog`,

        ],
      }),
    ]),
    logRetention: RetentionDays.ONE_WEEK,
    timeout: Duration.seconds(60),
  });

  return cr;
}

/**
 * Grant Lake Formation access on Data Lake Location
 * @param scope the construct scope
 * @param id the construct id
 * @param location the Amazon S3 location in ARN format
 * @param principal the IAM Principal to grant Lake Formation access on Data Lake Location
 * @param grantable whether the grantable permission is set. @default - false
 * @return the CfnPermissions to grant Lake Formation access on Data Lake Location
 */

export function grantDataLakeLocation(
  scope: Construct,
  id: string,
  location: string,
  principal: IRole,
  grantable?: boolean,
): CfnPrincipalPermissions {

  return new CfnPrincipalPermissions(scope, id, {
    permissions: ['DATA_LOCATION_ACCESS'],
    permissionsWithGrantOption: grantable === true ? ['DATA_LOCATION_ACCESS']: [],
    principal: {
      dataLakePrincipalIdentifier: principal.roleArn,
    },
    resource: {
      dataLocation: {
        catalogId: Stack.of(scope).account,
        resourceArn: location,
      },
    },
  });
}

/**
 * Grant Lake Formation permissions required by crawlers
 * @param scope the construct scope
 * @param id the construct id
 * @param database the database to grant Lake Formation permissions
 * @param principal the IAM Principal to grant Lake Formation permissions
 * @return the CfnPrincipalPermissions granting Lake Formation permissions
 */
export function grantCrawler(scope: Construct, id: string, database: string, principal: IRole): [CfnPrincipalPermissions, CfnPrincipalPermissions] {

  const lfDbGrant = new CfnPrincipalPermissions(scope, `${id}LfDbGrant`, {
    permissions: ['CREATE_TABLE'],
    permissionsWithGrantOption: [],
    principal: {
      dataLakePrincipalIdentifier: getPrincipalArn(principal),
    },
    resource: {
      database: {
        catalogId: Stack.of(scope).account,
        name: database,
      },
    },
  });

  const lfTablesGrant = new CfnPrincipalPermissions(scope, `${id}LfTablesGrant`, {
    permissions: ['SELECT', 'DESCRIBE', 'ALTER'],
    permissionsWithGrantOption: [],
    principal: {
      dataLakePrincipalIdentifier: getPrincipalArn(principal),
    },
    resource: {
      table: {
        catalogId: Stack.of(scope).account,
        tableWildcard: {},
        databaseName: database,
      },
    },
  });

  return [lfDbGrant, lfTablesGrant];
}

/**
 * Extract the principalArn (Arn) from the IAM Principal
 * @param principal the IAM Principal to extract the principal id from
 * @returns the principal ARN
 */
function getPrincipalArn(principal: IRole | IUser | [ISamlProvider, string] ): string {

  let principalArn: string;

  if ((principal as IRole).roleArn) {
    principalArn = (principal as IRole).roleArn;
  } else if ((principal as IUser).userArn) {
    principalArn = (principal as IUser).userArn;
  } else {
    const samlIdentity = (principal as [ISamlProvider, string]);
    principalArn = samlIdentity[0].samlProviderArn + samlIdentity[1];
  }

  return principalArn;
}
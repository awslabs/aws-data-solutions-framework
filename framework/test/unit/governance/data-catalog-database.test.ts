// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


/**
 * Tests DataCatalogDatabase construct
 *
 * @group unit/data-catalog/data-catalog-database
 */

import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { DataCatalogDatabase } from '../../../src/governance';
import { PermissionModel } from '../../../src/utils';
import { Key } from 'aws-cdk-lib/aws-kms';

describe('DataCatalogDatabase with passed role', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const dbBucketName = 'sample-db';

  const dbBucket = new Bucket(stack, 'dbBucket', {
    bucketName: dbBucketName,
  });

  const locationPrefix = '/';
  const dbName = 'sample';

  const crawlerRole = new Role(stack, 'SampleCrawlerRole', {
    assumedBy: new ServicePrincipal('glue.amazonaws.com'),
  });

  new DataCatalogDatabase(stack, 'database', {
    locationBucket: dbBucket,
    locationPrefix: locationPrefix,
    name: dbName,
    removalPolicy: RemovalPolicy.DESTROY,
    crawlerRole,
  });

  const template = Template.fromStack(stack);

  test('DataCatalogDatabase should not create crawler execution role', () => {
    template.resourcePropertiesCountIs('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Service: 'glue.amazonaws.com',
            },
            Action: 'sts:AssumeRole',
          },
        ],
      },
      Policies: [
        {
          PolicyName: 'crawlerPermissions',
        },
      ],
    }, 0);
  });

  test('DataCatalogDatabase should grant the crawler execution role proper permissions', () => {
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: Match.arrayWith([
          {
            Action: [
              's3:GetObject*',
              's3:GetBucket*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              Match.objectLike({
                'Fn::GetAtt': [
                  'dbBucket53E3A0D8',
                  'Arn',
                ],
              }),
              Match.objectLike({
                'Fn::Join': [
                  '',
                  [
                    {
                      'Fn::GetAtt': [
                        Match.stringLikeRegexp('.*dbBucket.*'),
                        'Arn',
                      ],
                    },
                    Match.stringLikeRegexp('\\*'),
                  ],
                ],
              }),
            ],
          },
        ]),
      },
      Roles: [
        {
          Ref: Match.stringLikeRegexp('.*SampleCrawlerRole.*'),
        },
      ],
    });
  });
});

describe('DataCatalogDatabase with no top-level database', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const dbBucketName = 'sample-db';

  const dbBucket = new Bucket(stack, 'dbBucket', {
    bucketName: dbBucketName,
  });

  const locationPrefix = '/';
  const dbName = 'sample';
  new DataCatalogDatabase(stack, 'database', {
    locationBucket: dbBucket,
    locationPrefix: locationPrefix,
    name: dbName,
    removalPolicy: RemovalPolicy.DESTROY,
  });

  const template = Template.fromStack(stack);

  test('DataCatalogDatabase should create crawler', () => {
    template.hasResourceProperties('AWS::Glue::Crawler', {
      Configuration: '{"Version":1,"Grouping":{"TableLevelConfiguration":2}}',
      DatabaseName: Match.stringLikeRegexp(`^${dbName}\_.+`),
      Targets: {
        S3Targets: [
          {
            Path: {
              'Fn::Join': [
                '',
                [
                  Match.exact('s3://'),
                  Match.anyValue(),
                  Match.exact(locationPrefix),
                ],
              ],
            },
          },
        ],
      },
      Schedule: {
        ScheduleExpression: 'cron(1 0 * * ? *)',
      },
    });
  });
});

describe('DataCatalogDatabase with multiple org location prefix', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const dbBucketName = 'sample-db';

  const dbBucket = new Bucket(stack, 'dbBucket', {
    bucketName: dbBucketName,
  });

  const locationPrefix = '/org1/database';
  const dbName = 'sample';
  new DataCatalogDatabase(stack, 'database', {
    locationBucket: dbBucket,
    locationPrefix: locationPrefix,
    name: dbName,
    removalPolicy: RemovalPolicy.DESTROY,
  });

  const template = Template.fromStack(stack);

  test('DataCatalogDatabase should create crawler', () => {
    template.hasResourceProperties('AWS::Glue::Crawler', {
      Configuration: '{"Version":1,"Grouping":{"TableLevelConfiguration":4}}',
      DatabaseName: Match.stringLikeRegexp(`^${dbName}\_.+`),
      Targets: {
        S3Targets: [
          {
            Path: {
              'Fn::Join': [
                '',
                [
                  Match.exact('s3://'),
                  Match.anyValue(),
                  Match.exact(locationPrefix),
                ],
              ],
            },
          },
        ],
      },
      Schedule: {
        ScheduleExpression: 'cron(1 0 * * ? *)',
      },
    });
  });
});

describe('DataCatalogDatabase default construct', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const dbBucketName = 'sample-db';
  const testPrincipalRoleName = 'test-principal';
  const dbBucket = new Bucket(stack, 'dbBucket', {
    bucketName: dbBucketName,
  });
  const testPrincipal = new Role(stack, 'testPrincipal', {
    assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
    roleName: testPrincipalRoleName,
  });
  const locationPrefix = '/database';
  const dbName = 'sample';
  const catalogDb = new DataCatalogDatabase(stack, 'database', {
    locationBucket: dbBucket,
    locationPrefix: locationPrefix,
    name: dbName,
    removalPolicy: RemovalPolicy.DESTROY,
  });

  catalogDb.grantReadOnlyAccess(testPrincipal);

  const template = Template.fromStack(stack);
  // console.log(JSON.stringify(template.toJSON(), null, 2));
  test('should create a KMS Key with RETAIN removal policy', () => {
    template.hasResource('AWS::KMS::Key',
      Match.objectLike({
        UpdateReplacePolicy: 'Retain',
        DeletionPolicy: 'Retain',
      }),
    );
  });

  test('DataCatalogDatabase should create catalog database', () => {
    template.hasResourceProperties('AWS::Glue::Database', {
      DatabaseInput: {
        Name: Match.stringLikeRegexp(`^${dbName}\_.+`),
        LocationUri: {
          'Fn::Join': [
            '', ['s3://', Match.anyValue(), locationPrefix],

          ],
        },
      },
    });
  });

  test('DataCatalogDatabase should attach read only IAM policy to the test principal', () => {
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: [
          {
            Action: [
              's3:GetObject*',
              's3:GetBucket*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              Match.objectLike({
                'Fn::GetAtt': [
                  'dbBucket53E3A0D8',
                  'Arn',
                ],
              }),
              Match.objectLike({
                'Fn::Join': [
                  '',
                  [
                    {
                      'Fn::GetAtt': [
                        Match.stringLikeRegexp('.*dbBucket.*'),
                        'Arn',
                      ],
                    },
                    Match.stringLikeRegexp('.*database\/\*'),
                  ],
                ],
              }),
            ],
          },
          {
            Action: [
              'glue:GetTable',
              'glue:GetTables',
              'glue:BatchGetPartition',
              'glue:GetDatabase',
              'glue:GetDatabases',
              'glue:GetPartition',
              'glue:GetPartitions',
            ],
            Effect: 'Allow',
            Resource: [
              {
                'Fn::Join': [
                  '',
                  [
                    'arn:aws:glue:',
                    {
                      Ref: 'AWS::Region',
                    },
                    ':',
                    {
                      Ref: 'AWS::AccountId',
                    },
                    ':catalog',
                  ],
                ],
              },
              {
                'Fn::Join': [
                  '',
                  [
                    'arn:aws:glue:',
                    {
                      Ref: 'AWS::Region',
                    },
                    ':',
                    {
                      Ref: 'AWS::AccountId',
                    },
                    Match.stringLikeRegexp('database\/sample_.*'),
                  ],
                ],
              },
              {
                'Fn::Join': [
                  '',
                  [
                    'arn:aws:glue:',
                    {
                      Ref: 'AWS::Region',
                    },
                    ':',
                    {
                      Ref: 'AWS::AccountId',
                    },
                    Match.stringLikeRegexp('table\/sample_.*\/\*'),
                  ],
                ],
              },
            ],
          },
        ],
      },
      Roles: [
        {
          Ref: Match.stringLikeRegexp('.*testPrincipal.*'),
        },
      ],
    });
  });

  test('DataCatalogDatabase should create crawler execution role', () => {
    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Version: '2012-10-17',
        Statement: [
          {
            Effect: 'Allow',
            Principal: {
              Service: 'glue.amazonaws.com',
            },
            Action: 'sts:AssumeRole',
          },
        ],
      },
      Policies: [
        {
          PolicyName: 'crawlerPermissions',
          PolicyDocument: {
            Version: '2012-10-17',
            Statement: [
              {
                Effect: 'Allow',
                Action: [
                  'glue:BatchCreatePartition',
                  'glue:BatchDeletePartition',
                  'glue:BatchDeleteTable',
                  'glue:BatchDeleteTableVersion',
                  'glue:BatchGetPartition',
                  'glue:BatchUpdatePartition',
                  'glue:CreatePartition',
                  'glue:CreateTable',
                  'glue:DeletePartition',
                  'glue:DeleteTable',
                  'glue:GetDatabase',
                  'glue:GetDatabases',
                  'glue:GetPartition',
                  'glue:GetPartitions',
                  'glue:GetTable',
                  'glue:GetTables',
                  'glue:UpdateDatabase',
                  'glue:UpdatePartition',
                  'glue:UpdateTable',
                ],
                Resource: [
                  {
                    'Fn::Join': [
                      '', [
                        'arn:aws:glue:',
                        Match.anyValue(),
                        ':',
                        Match.anyValue(),
                        ':catalog',
                      ],
                    ],
                  },
                  {
                    'Fn::Join': [
                      '', [
                        'arn:aws:glue:',
                        Match.anyValue(),
                        ':',
                        Match.anyValue(),
                        Match.stringLikeRegexp(`^\:database\/${dbName}\_.+`),
                      ],
                    ],
                  },
                  {
                    'Fn::Join': [
                      '', [
                        'arn:aws:glue:',
                        Match.anyValue(),
                        ':',
                        Match.anyValue(),
                        Match.stringLikeRegexp(`^\:table\/${dbName}\_.+`),
                      ],
                    ],
                  },
                ],
              },
              {
                Effect: 'Allow',
                Action: [
                  'glue:GetSecurityConfigurations',
                  'glue:GetSecurityConfiguration',
                ],
                Resource: '*',
              },
            ],
          },
        },
      ],
    });
  });

  test('DataCatalogDatabase should create crawler', () => {
    template.hasResourceProperties('AWS::Glue::Crawler', {
      Configuration: '{"Version":1,"Grouping":{"TableLevelConfiguration":3}}',
      DatabaseName: Match.stringLikeRegexp(`^${dbName}\_.+`),
      Targets: {
        S3Targets: [
          {
            Path: {
              'Fn::Join': [
                '',
                [
                  Match.exact('s3://'),
                  Match.anyValue(),
                  Match.exact(locationPrefix),
                ],
              ],
            },
          },
        ],
      },
      Schedule: {
        ScheduleExpression: 'cron(1 0 * * ? *)',
      },
    });
  });
});

describe('DataCatalogDatabase with disabled crawler', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const dbBucketName = 'sample-db';
  const dbBucket = new Bucket(stack, 'dbBucket', {
    bucketName: dbBucketName,
  });
  const locationPrefix = '/database';
  const dbName = 'sample';
  new DataCatalogDatabase(stack, 'database', {
    locationBucket: dbBucket,
    locationPrefix: locationPrefix,
    name: dbName,
    autoCrawl: false,
  });

  const template = Template.fromStack(stack);
  test('DataCatalogDatabase should create catalog database', () => {
    template.hasResourceProperties('AWS::Glue::Database', {
      DatabaseInput: {
        Name: Match.stringLikeRegexp(`^${dbName}\_.+`),
        LocationUri: {
          'Fn::Join': [
            '', ['s3://', Match.anyValue(), locationPrefix],

          ],
        },
      },
    });
  });

  test('DataCatalogDatabase should not create crawler', () => {
    template.resourceCountIs('AWS::Glue::Crawler', 0);
  });
});

describe('DataCatalogDatabase with missing leading slash in the prefix and global destroy config', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  stack.node.setContext('@data-solutions-framework-on-aws/removeDataOnDestroy', true);
  const dbBucketName = 'sample-db';
  const dbBucket = new Bucket(stack, 'dbBucket', {
    bucketName: dbBucketName,
  });
  const locationPrefix = 'database';
  const dbName = 'sample';
  new DataCatalogDatabase(stack, 'database', {
    locationBucket: dbBucket,
    locationPrefix: locationPrefix,
    name: dbName,
    removalPolicy: RemovalPolicy.DESTROY,
  });

  const template = Template.fromStack(stack);
  test('should create a KMS Key with DELETE removal policy', () => {
    template.hasResource('AWS::KMS::Key',
      Match.objectLike({
        UpdateReplacePolicy: 'Delete',
        DeletionPolicy: 'Delete',
      }),
    );
  });

  test('DataCatalogDatabase should create catalog database', () => {
    template.hasResourceProperties('AWS::Glue::Database', {
      DatabaseInput: {
        Name: Match.stringLikeRegexp(`^${dbName}\_.+`),
        LocationUri: {
          'Fn::Join': [
            '', ['s3://', Match.anyValue(), '/'+locationPrefix],

          ],
        },
      },
    });
  });
});

describe('DataCatalogDatabase with / as location prefix', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  stack.node.setContext('@data-solutions-framework-on-aws/removeDataOnDestroy', true);
  const dbBucketName = 'sample-db';
  const dbBucket = new Bucket(stack, 'dbBucket', {
    bucketName: dbBucketName,
  });
  const locationPrefix = '/';
  const dbName = 'sample';
  new DataCatalogDatabase(stack, 'database', {
    locationBucket: dbBucket,
    locationPrefix: locationPrefix,
    name: dbName,
    removalPolicy: RemovalPolicy.DESTROY,
  });

  const template = Template.fromStack(stack);
  test('should create a policy with proper S3 access', () => {
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: {
        Statement: Match.arrayWith([
          {
            Action: [
              's3:GetObject*',
              's3:GetBucket*',
              's3:List*',
            ],
            Effect: 'Allow',
            Resource: [
              Match.objectLike({
                'Fn::GetAtt': [
                  'dbBucket53E3A0D8',
                  'Arn',
                ],
              }),
              Match.objectLike({
                'Fn::Join': [
                  '',
                  [
                    {
                      'Fn::GetAtt': [
                        Match.stringLikeRegexp('.*dbBucket.*'),
                        'Arn',
                      ],
                    },
                    Match.stringLikeRegexp('\\*'),
                  ],
                ],
              }),
            ],
          },
        ]),
      },
    });
  });
});

describe('DataCatalogDatabase with Lake Formation permission model', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const dbBucketName = 'sample-db';
  const bucketEncryptionKey = new Key(stack, 'bucketKey');
  const dbBucket = new Bucket(stack, 'dbBucket', {
    bucketName: dbBucketName,
    encryption: BucketEncryption.KMS,
    encryptionKey: bucketEncryptionKey,
  });
  const locationPrefix = '/';
  const dbName = 'sample';
  new DataCatalogDatabase(stack, 'database', {
    locationBucket: dbBucket,
    locationPrefix: locationPrefix,
    name: dbName,
    removalPolicy: RemovalPolicy.DESTROY,
    permissionModel: PermissionModel.LAKE_FORMATION,
  });

  const template = Template.fromStack(stack);
  // console.log(JSON.stringify(template.toJSON(), null, 2));

  test('should create correct DataLake settings', () => {
    template.hasResourceProperties('AWS::LakeFormation::DataLakeSettings', {
      Admins: [
        {
          DataLakePrincipalIdentifier: {
            "Fn::Sub": Match.stringLikeRegexp(".*role/cdk-.*-cfn-exec-role-.*")
          }
        },
        {
          DataLakePrincipalIdentifier: {
            "Fn::GetAtt": [
              Match.stringLikeRegexp("databaseLfRevokeRole.*"),
              "Arn"
            ]
          }
        }
      ],
      MutationType: "APPEND",
      Parameters: {
        "CROSS_ACCOUNT_VERSION": 4
      }
    });
  });

  test('should register the data location', () => {
    template.hasResourceProperties('AWS::LakeFormation::Resource', {
      HybridAccessEnabled: false,
        ResourceArn: {
          "Fn::Join": [
            "",
            [
              {
                "Fn::GetAtt": [
                  Match.stringLikeRegexp("dbBucket.*"),
                  "Arn"
                ]
              },
              "/"
            ]
          ]
        },
        RoleArn: {
          "Fn::GetAtt": [
            Match.stringLikeRegexp("databaseLakeFormationRegistrationDataAccessRole.*"),
            "Arn"
          ]
        },
        UseServiceLinkedRole: false
    });
  });

  test('should revoke IAMAllowedPrincipal via a custom resource', () => {
    template.hasResourceProperties('Custom::AWS', {
      ServiceToken: {
        "Fn::GetAtt": [
          Match.stringLikeRegexp("AWS.*"),
          "Arn"
        ]
      },
      Create: "{\"service\":\"LakeFormation\",\"action\":\"RevokePermissions\",\"parameters\":{\"Permissions\":[\"ALL\"],\"Principal\":{\"DataLakePrincipalIdentifier\":\"IAM_ALLOWED_PRINCIPALS\"},\"Resource\":{\"Database\":{\"Name\":\"sample_008d4446\"}}},\"physicalResourceId\":{\"id\":\"sample_008d4446\"}}",
      InstallLatestAwsSdk: true
    });
  });

  test('should grant Lake Formation permissions to the crawler for creating tables', () => {
    template.hasResourceProperties('AWS::LakeFormation::PrincipalPermissions', {
      Permissions: [
          "CREATE_TABLE"
      ],
      PermissionsWithGrantOption: [],
      Principal: {
        DataLakePrincipalIdentifier: {
          "Fn::GetAtt": [
            Match.stringLikeRegexp("databaseCrawlerRole.*"),
            "Arn"
          ]
        }
      },
      Resource: {
        Database: {
          CatalogId: {
            Ref: "AWS::AccountId"
          },
          Name: Match.stringLikeRegexp("sample_.*")
        }
      }
    });
  });

  test('should grant Lake Formation permissions to the crawler for creating tables', () => {
    template.hasResourceProperties('AWS::LakeFormation::PrincipalPermissions', {
      Permissions: [
        "SELECT",
        "DESCRIBE",
        "ALTER"
      ],
      PermissionsWithGrantOption: [],
      Principal: {
        DataLakePrincipalIdentifier: {
          "Fn::GetAtt": [
            Match.stringLikeRegexp("databaseCrawlerRole.*"),
            "Arn"
          ]
        }
      },
      Resource: {
        Table: {
          CatalogId: {
            Ref: "AWS::AccountId"
          },
          DatabaseName: Match.stringLikeRegexp("sample_.*"),
          TableWildcard: {}
        }
      }
    });
  });

  test('should create a data location permission for the crawler', () => {
    template.hasResourceProperties('AWS::LakeFormation::PrincipalPermissions', {
      Permissions: [
        "DATA_LOCATION_ACCESS"
      ],
      PermissionsWithGrantOption: [],
      Principal: {
        DataLakePrincipalIdentifier: {
          "Fn::GetAtt": [
            Match.stringLikeRegexp("databaseCrawlerRole.*"),
            "Arn"
          ]
        }
      },
      Resource: {
        DataLocation: {
          CatalogId: {
            "Ref": "AWS::AccountId"
          },
          ResourceArn: {
            "Fn::Join": [
              "",
              [
                {
                  "Fn::GetAtt": [
                    Match.stringLikeRegexp("dbBucket.*"),
                    "Arn"
                  ]
                },
                "/"
              ]
            ]
          }
        }
      }
    });
  });

  test('should crate an IAM role for revoking IAMAllowedPrincipals', () => {
    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: {
        Statement: [
          {
            Action: "sts:AssumeRole",
            Effect: "Allow",
            Principal: {
              Service: "lambda.amazonaws.com"
            }
          }
        ],
        Version: "2012-10-17"
      },
    });
  });
  
  test('should create lambda function for revoking IAMAllowedPrincipals via the custom resource', () => {
    template.hasResourceProperties('AWS::Lambda::Function', {
      Code: {
        S3Bucket: {
          "Fn::Sub": Match.stringLikeRegexp("cdk\-.*\-assets\-.*")
        },
        S3Key: Match.stringLikeRegexp(".*.zip")
      },
      Handler: "index.handler",
      Role: {
        "Fn::GetAtt": [
          Match.stringLikeRegexp("databaseLfRevokeRole.*"),
          "Arn"
        ]
      },
      Runtime: {
        "Fn::FindInMap": [
          "LatestNodeRuntimeMap",
          {
            "Ref": "AWS::Region"
          },
          "value"
        ]
      },
      Timeout: 60
    });
  });

  test('should create an IAM policy for the revoke custom resource', () => {
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: Match.objectLike({
        Statement: [
          {
            Action: "lakeformation:RevokePermissions",
            Effect: "Allow",
            Resource: {
              "Fn::Join": [
                "",
                [
                  "arn:",
                  {
                    "Ref": "AWS::Partition"
                  },
                  ":lakeformation:",
                  {
                    "Ref": "AWS::Region"
                  },
                  ":",
                  {
                    "Ref": "AWS::AccountId"
                  },
                  ":catalog:",
                  {
                    "Ref": "AWS::AccountId"
                  }
                ]
              ]
            }
          },
          {
            Action: "glue:GetDatabase",
            Effect: "Allow",
            Resource: [
              {
                "Fn::Join": [
                  "",
                  [
                    "arn:",
                    {
                      "Ref": "AWS::Partition"
                    },
                    ":glue:",
                    {
                      "Ref": "AWS::Region"
                    },
                    ":",
                    {
                      "Ref": "AWS::AccountId"
                    },
                    Match.stringLikeRegexp(":database/sample_.*")
                  ]
                ]
              },
              {
                "Fn::Join": [
                  "",
                  [
                    "arn:",
                    {
                      "Ref": "AWS::Partition"
                    },
                    ":glue:",
                    {
                      "Ref": "AWS::Region"
                    },
                    ":",
                    {
                      "Ref": "AWS::AccountId"
                    },
                    ":catalog"
                  ]
                ]
              }
            ]
          }
        ],
      }),
      PolicyName: Match.stringLikeRegexp("databaseIamRevokeCustomResourcePolicy.*"),
      Roles: [
        {
          Ref: Match.stringLikeRegexp("databaseLfRevokeRole.*")
        }
      ]
    });
  });

  test('should create a default data access role', () => {
    template.hasResourceProperties('AWS::IAM::Role', {
      AssumeRolePolicyDocument: Match.objectLike({
          Statement: [
            {
              Action: "sts:AssumeRole",
              Effect: "Allow",
              Principal: {
                Service: "lakeformation.amazonaws.com"
              }
            }
          ],
        }),
    });
  });

  test('should create an IAM policy for the data access role ', () => {
    template.hasResourceProperties('AWS::IAM::Policy', {
      PolicyDocument: Match.objectLike({
          Statement: Match.arrayWith([
            {
              Action: [
                "s3:GetObject*",
                "s3:GetBucket*",
                "s3:List*",
                "s3:DeleteObject*",
                "s3:PutObject",
                "s3:PutObjectLegalHold",
                "s3:PutObjectRetention",
                "s3:PutObjectTagging",
                "s3:PutObjectVersionTagging",
                "s3:Abort*"
              ],
              Effect: "Allow",
              Resource: [
                {
                  "Fn::GetAtt": [
                    Match.stringLikeRegexp("dbBucket.*"),
                    "Arn"
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      {
                        "Fn::GetAtt": [
                          Match.stringLikeRegexp("dbBucket.*"),
                          "Arn"
                        ]
                      },
                      "/"
                    ]
                  ]
                }
              ]
            },
            {
              Action: [
                "kms:Decrypt",
                "kms:DescribeKey",
                "kms:Encrypt",
                "kms:ReEncrypt*",
                "kms:GenerateDataKey*"
              ],
              Effect: "Allow",
              Resource: {
                "Fn::GetAtt": [
                  Match.stringLikeRegexp("bucketKey.*"),
                  "Arn"
                ]
              }
            },
          ]),
        }),
        PolicyName: Match.stringLikeRegexp("databaseLakeFormationRegistrationDataAccessRoleDefaultPolicy.*"),
        Roles: [
          {
            Ref: Match.stringLikeRegexp("databaseLakeFormationRegistrationDataAccessRole.*")
          }
        ]
      }
    );
  });
});
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


/**
 * Tests DataLakeCatalog construct
 *
 * @group unit/data-catalog/data-lake-catalog
 */

import { App, RemovalPolicy, Stack } from 'aws-cdk-lib';
import { Match, Template } from 'aws-cdk-lib/assertions';
import { DataLakeCatalog } from '../../../src/governance';
import { DataLakeStorage } from '../../../src/storage';
import { PermissionModel } from '../../../src/utils';
import { Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';

describe ('Create catalog for bronze, silver, gold with no provided databaseName', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const storage = new DataLakeStorage(stack, 'ExampleDLStorage', { removalPolicy: RemovalPolicy.DESTROY });
  new DataLakeCatalog(stack, 'ExampleDLCatalog', {
    dataLakeStorage: storage,
    removalPolicy: RemovalPolicy.DESTROY,
  });

  const template = Template.fromStack(stack);
  test('should create crawlers that uses the bucketName as part of the prefix', () => {
    template.hasResourceProperties('AWS::Glue::Crawler', {
      DatabaseName: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '-',
                    {
                      Ref: Match.stringLikeRegexp('.+?Gold.+'),
                    },
                  ],
                },
              ],
            },
            Match.anyValue(),
          ],
        ],
      },
      Targets: {
        S3Targets: [
          {
            Path: {
              'Fn::Join': [
                '',
                [
                  's3://',
                  {
                    Ref: Match.stringLikeRegexp('.+?Gold.+'),
                  },
                  '/',
                  {
                    'Fn::Select': [
                      0,
                      {
                        'Fn::Split': [
                          '-',
                          {
                            Ref: Match.stringLikeRegexp('.+?Gold.+'),
                          },
                        ],
                      },
                    ],
                  },
                ],
              ],
            },
          },
        ],
      },
    });

    template.hasResourceProperties('AWS::Glue::Crawler', {
      DatabaseName: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '-',
                    {
                      Ref: Match.stringLikeRegexp('.+?Silver.+'),
                    },
                  ],
                },
              ],
            },
            Match.anyValue(),
          ],
        ],
      },
      Targets: {
        S3Targets: [
          {
            Path: {
              'Fn::Join': [
                '',
                [
                  's3://',
                  {
                    Ref: Match.stringLikeRegexp('.+?Silver.+'),
                  },
                  '/',
                  {
                    'Fn::Select': [
                      0,
                      {
                        'Fn::Split': [
                          '-',
                          {
                            Ref: Match.stringLikeRegexp('.+?Silver.+'),
                          },
                        ],
                      },
                    ],
                  },
                ],
              ],
            },
          },
        ],
      },
    });

    template.hasResourceProperties('AWS::Glue::Crawler', {
      DatabaseName: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '-',
                    {
                      Ref: Match.stringLikeRegexp('.+?Bronze.+'),
                    },
                  ],
                },
              ],
            },
            Match.anyValue(),
          ],
        ],
      },
      Targets: {
        S3Targets: [
          {
            Path: {
              'Fn::Join': [
                '',
                [
                  's3://',
                  {
                    Ref: Match.stringLikeRegexp('.+?Bronze.+'),
                  },
                  '/',
                  {
                    'Fn::Select': [
                      0,
                      {
                        'Fn::Split': [
                          '-',
                          {
                            Ref: Match.stringLikeRegexp('.+?Bronze.+'),
                          },
                        ],
                      },
                    ],
                  },
                ],
              ],
            },
          },
        ],
      },
    });
  });
});

describe('Create catalog for bronze, silver, gold with no global data removal', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const storage = new DataLakeStorage(stack, 'ExampleDLStorage', { removalPolicy: RemovalPolicy.DESTROY });
  new DataLakeCatalog(stack, 'ExampleDLCatalog', {
    dataLakeStorage: storage,
    databaseName: 'exampledb',
    removalPolicy: RemovalPolicy.DESTROY,
  });

  const template = Template.fromStack(stack);
  test('should create a KMS Key with RETAIN removal policy', () => {
    template.hasResource('AWS::KMS::Key',
      Match.objectLike({
        UpdateReplacePolicy: 'Retain',
        DeletionPolicy: 'Retain',
      }),
    );
  });

  test('should create crawlers that uses the databaseName', () => {
    template.hasResourceProperties('AWS::Glue::Crawler', {
      DatabaseName: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '-',
                    {
                      Ref: Match.stringLikeRegexp('.+?Gold.+'),
                    },
                  ],
                },
              ],
            },
            Match.stringLikeRegexp('^_exampledb.+'),
          ],
        ],
      },
      Targets: {
        S3Targets: [
          {
            Path: {
              'Fn::Join': [
                '',
                [
                  Match.exact('s3://'),
                  Match.anyValue(),
                  Match.exact('/exampledb'),
                ],
              ],
            },
          },
        ],
      },
    });

    template.hasResourceProperties('AWS::Glue::Crawler', {
      DatabaseName: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '-',
                    {
                      Ref: Match.stringLikeRegexp('.+?Silver.+'),
                    },
                  ],
                },
              ],
            },
            Match.stringLikeRegexp('^_exampledb.+'),
          ],
        ],
      },
      Targets: {
        S3Targets: [
          {
            Path: {
              'Fn::Join': [
                '',
                [
                  Match.exact('s3://'),
                  Match.anyValue(),
                  Match.exact('/exampledb'),
                ],
              ],
            },
          },
        ],
      },
    });

    template.hasResourceProperties('AWS::Glue::Crawler', {
      DatabaseName: {
        'Fn::Join': [
          '',
          [
            {
              'Fn::Select': [
                0,
                {
                  'Fn::Split': [
                    '-',
                    {
                      Ref: Match.stringLikeRegexp('.+?Bronze.+'),
                    },
                  ],
                },
              ],
            },
            Match.stringLikeRegexp('^_exampledb.+'),
          ],
        ],
      },
      Targets: {
        S3Targets: [
          {
            Path: {
              'Fn::Join': [
                '',
                [
                  Match.exact('s3://'),
                  Match.anyValue(),
                  Match.exact('/exampledb'),
                ],
              ],
            },
          },
        ],
      },
    });
  });


  test('DataLakeCatalog should create 3 Glue database, one for each: Bronze, Silver, Gold', () => {
    template.hasResourceProperties('AWS::Glue::Database', {
      DatabaseInput: {
        Name: {
          'Fn::Join': [
            '', [Match.anyValue(), Match.stringLikeRegexp('^_exampledb\_.+')],
          ],
        },
        LocationUri: {
          'Fn::Join': [
            '', ['s3://', Match.anyValue(), '/exampledb'],

          ],
        },
      },
    });
  });
});

describe('Create catalog for bronze, silver, gold with global data removal', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  stack.node.setContext('@data-solutions-framework-on-aws/removeDataOnDestroy', true);
  const storage = new DataLakeStorage(stack, 'ExampleDLStorage', { removalPolicy: RemovalPolicy.DESTROY });
  new DataLakeCatalog(stack, 'ExampleDLCatalog', {
    dataLakeStorage: storage,
    databaseName: 'exampledb',
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
});

describe('Create catalog for data lake with lake formation permission and other defaults', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const storage = new DataLakeStorage(stack, 'ExampleDLStorage');
  new DataLakeCatalog(stack, 'ExampleDLCatalog', {
    dataLakeStorage: storage,
    databaseName: 'exampledb',
    permissionModel: PermissionModel.LAKE_FORMATION,
  });

  const template = Template.fromStack(stack);
  // console.log(JSON.stringify(template.toJSON(), null, 2));

  test('should create one IAM role for data access', () => {
    template.resourcePropertiesCountIs('AWS::IAM::Role',
      Match.objectLike({
        AssumeRolePolicyDocument: {
          Statement: [
            {
              Action: "sts:AssumeRole",
              Effect: "Allow",
              Principal: {
                Service: "lakeformation.amazonaws.com"
              }
            }
          ],
        },
      }),
      1
    );
  });

  test('should create one IAM role for lake formation configuration', () => {
    template.resourcePropertiesCountIs('AWS::IAM::Role',
      Match.objectLike({
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
        },
      }),
      1
    );
  });

  test('should create one IAM policy for data access', () => {
    template.resourcePropertiesCountIs('AWS::IAM::Policy',
      Match.objectLike({
        PolicyDocument: {
          Statement: [
            Match.objectLike({
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
              "Resource": [
                {
                  "Fn::GetAtt": [
                    Match.stringLikeRegexp("ExampleDLStorageBronzeBucket.*"),
                    "Arn"
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      {
                        "Fn::GetAtt": [
                          Match.stringLikeRegexp("ExampleDLStorageBronzeBucket.*"),
                          "Arn"
                        ]
                      },
                      "/*"
                    ]
                  ]
                }
              ]
            }),
            Match.objectLike({
              Action: [
                "kms:Decrypt",
                "kms:DescribeKey",
                "kms:Encrypt",
                "kms:ReEncrypt*",
                "kms:GenerateDataKey*"
              ],
              Resource: {
                "Fn::GetAtt": [
                  Match.stringLikeRegexp("ExampleDLStorageDataKey.*"),
                  "Arn"
                ]
              }
            }),
            Match.objectLike({
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
              Resource: [
                {
                  "Fn::GetAtt": [
                    Match.stringLikeRegexp("ExampleDLStorageSilverBucket.*"),
                    "Arn"
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      {
                        "Fn::GetAtt": [
                          Match.stringLikeRegexp("ExampleDLStorageSilverBucket.*"),
                          "Arn"
                        ]
                      },
                      "/*"
                    ]
                  ]
                }
              ]
            }),
            Match.objectLike({
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
              Resource: [
                {
                  "Fn::GetAtt": [
                    Match.stringLikeRegexp("ExampleDLStorageGoldBucket.*"),
                    "Arn"
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      {
                        "Fn::GetAtt": [
                          Match.stringLikeRegexp("ExampleDLStorageGoldBucket.*"),
                          "Arn"
                        ]
                      },
                      "/*"
                    ]
                  ]
                }
              ]
            }),
            Match.objectLike({
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
              Resource: [
                {
                  "Fn::GetAtt": [
                    Match.stringLikeRegexp("ExampleDLStorageBronzeBucket.*"),
                    "Arn"
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      {
                        "Fn::GetAtt": [
                          Match.stringLikeRegexp("ExampleDLStorageBronzeBucket.*"),
                          "Arn"
                        ]
                      },
                      "/exampledb"
                    ]
                  ]
                }
              ]
            }),
            Match.objectLike({
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
              Resource: [
                {
                  "Fn::GetAtt": [
                    Match.stringLikeRegexp("ExampleDLStorageSilverBucket.*"),
                    "Arn"
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      {
                        "Fn::GetAtt": [
                          Match.stringLikeRegexp("ExampleDLStorageSilverBucket.*"),
                          "Arn"
                        ]
                      },
                      "/exampledb"
                    ]
                  ]
                }
              ]
            }),
            Match.objectLike({
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
              Resource: [
                {
                  "Fn::GetAtt": [
                    Match.stringLikeRegexp("ExampleDLStorageGoldBucket.*"),
                    "Arn"
                  ]
                },
                {
                  "Fn::Join": [
                    "",
                    [
                      {
                        "Fn::GetAtt": [
                          Match.stringLikeRegexp("ExampleDLStorageGoldBucket.*"),
                          "Arn"
                        ]
                      },
                      "/exampledb"
                    ]
                  ]
                }
              ]
            })
          ],
        },
        PolicyName: Match.stringLikeRegexp(".*LakeFormationDataAccessRoleDefaultPolicy.*"),
        Roles: [
          {
            Ref: Match.stringLikeRegexp(".*LakeFormationDataAccessRole.*")
          }
        ]
      }),
      1
    );
  });
});

describe('Create catalog for data lake with lake formation permission and non defaults', () => {
  const app = new App();
  const stack = new Stack(app, 'Stack');
  const storage = new DataLakeStorage(stack, 'ExampleDLStorage');
  const lfAccessRole = new Role(stack, 'LakeFormationAccessRole', {
    assumedBy: new ServicePrincipal('lakeformation.amazonaws.com'),
  });
  const lfConfigRole = new Role(stack, 'LakeFormationConfigRole', {
    assumedBy: new ServicePrincipal('lambda.amazonaws.com'),
  });
  new DataLakeCatalog(stack, 'ExampleDLCatalog', {
    dataLakeStorage: storage,
    databaseName: 'exampledb',
    permissionModel: PermissionModel.LAKE_FORMATION,
    lakeFormationDataAccessRole: lfAccessRole,
    lakeFormationConfigurationRole: lfConfigRole,
  });

  const template = Template.fromStack(stack);
  console.log(JSON.stringify(template.toJSON(), null, 2));

  test('should create a KMS Key with RETAIN removal policy', () => {
    template.hasResource('AWS::KMS::Key',
      Match.objectLike({
        UpdateReplacePolicy: 'Retain',
        DeletionPolicy: 'Retain',
      }),
    );
  });
});
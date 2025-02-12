# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessLogsBucket <a name="AccessLogsBucket" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket"></a>

Amazon S3 Bucket configured with best-practices and smart defaults for storing S3 access logs.

Default bucket name is `accesslogs-<AWS_ACCOUNT_ID>-<AWS_REGION>-<UNIQUE_ID>`

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Storage/access-logs-bucket](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Storage/access-logs-bucket)

*Example*

```typescript
const bucket = new dsf.storage.AccessLogsBucket(this, 'AccessLogsBucket')
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.Initializer"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

new storage.AccessLogsBucket(scope: Construct, id: string, props?: BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_s3.BucketProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addReplicationPolicy">addReplicationPolicy</a></code> | Function to add required permissions to the destination bucket for cross account replication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addEventNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addReplicationPolicy` <a name="addReplicationPolicy" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addReplicationPolicy"></a>

```typescript
public addReplicationPolicy(roleArn: string, accessControlTransition?: boolean, account?: string): void
```

Function to add required permissions to the destination bucket for cross account replication.

These permissions will be added as a resource based policy on the bucket

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html)

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addReplicationPolicy.parameter.roleArn"></a>

- *Type:* string

---

###### `accessControlTransition`<sup>Optional</sup> <a name="accessControlTransition" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addReplicationPolicy.parameter.accessControlTransition"></a>

- *Type:* boolean

---

###### `account`<sup>Optional</sup> <a name="account" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addReplicationPolicy.parameter.account"></a>

- *Type:* string

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: ...string[], keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* ...string[]

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPutAcl` <a name="grantPutAcl" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling `grantWrite` or `grantReadWrite` no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantReadWrite` <a name="grantReadWrite" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.isConstruct"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AccessLogsBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.isOwnedResource"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AccessLogsBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.isResource"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AccessLogsBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketArn"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AccessLogsBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketAttributes"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AccessLogsBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketName"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AccessLogsBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromCfnBucket"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AccessLogsBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.validateBucketName"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AccessLogsBucket.validateBucketName(physicalName: string, allowLegacyBucketNaming?: boolean)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

###### `allowLegacyBucketNaming`<sup>Optional</sup> <a name="allowLegacyBucketNaming" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.validateBucketName.parameter.allowLegacyBucketNaming"></a>

- *Type:* boolean

allow legacy bucket naming style, default is false.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.replicationRoleArn">replicationRoleArn</a></code> | <code>string</code> | Role used to set up permissions on this bucket for replication. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---

##### `replicationRoleArn`<sup>Optional</sup> <a name="replicationRoleArn" id="@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket.property.replicationRoleArn"></a>

```typescript
public readonly replicationRoleArn: string;
```

- *Type:* string

Role used to set up permissions on this bucket for replication.

---


### AnalyticsBucket <a name="AnalyticsBucket" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket"></a>

Amazon S3 Bucket configured with best-practices and defaults for analytics.

The default bucket name is `analytics-<AWS_ACCOUNT_ID>-<AWS_REGION>-<UNIQUE_ID>`

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Storage/analytics-bucket](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Storage/analytics-bucket)

*Example*

```typescript
import { Key } from 'aws-cdk-lib/aws-kms';

// Set context value for global data removal policy (or set in cdk.json).
this.node.setContext('@data-solutions-framework-on-aws/removeDataOnDestroy', true);

const encryptionKey = new Key(this, 'DataKey', {
 removalPolicy: cdk.RemovalPolicy.DESTROY,
 enableKeyRotation: true,
});

new dsf.storage.AnalyticsBucket(this, 'MyAnalyticsBucket', {
 encryptionKey,
 removalPolicy: cdk.RemovalPolicy.DESTROY,
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.Initializer"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

new storage.AnalyticsBucket(scope: Construct, id: string, props: AnalyticsBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addEventNotification">addEventNotification</a></code> | Adds a bucket notification event destination. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addObjectCreatedNotification">addObjectCreatedNotification</a></code> | Subscribes a destination to receive notifications when an object is created in the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addObjectRemovedNotification">addObjectRemovedNotification</a></code> | Subscribes a destination to receive notifications when an object is removed from the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addReplicationPolicy">addReplicationPolicy</a></code> | Function to add required permissions to the destination bucket for cross account replication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addToResourcePolicy">addToResourcePolicy</a></code> | Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.arnForObjects">arnForObjects</a></code> | Returns an ARN that represents all objects within the bucket that match the key pattern specified. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.enableEventBridgeNotification">enableEventBridgeNotification</a></code> | Enables event bridge notification, causing all events below to be sent to EventBridge:. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantDelete">grantDelete</a></code> | Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPublicAccess">grantPublicAccess</a></code> | Allows unrestricted access to objects from this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPut">grantPut</a></code> | Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPutAcl">grantPutAcl</a></code> | Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantRead">grantRead</a></code> | Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantReadWrite">grantReadWrite</a></code> | Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantWrite">grantWrite</a></code> | Grant write permissions to this bucket to an IAM principal. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailEvent">onCloudTrailEvent</a></code> | Define a CloudWatch event that triggers when something happens to this repository. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailPutObject">onCloudTrailPutObject</a></code> | Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailWriteObject">onCloudTrailWriteObject</a></code> | Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.s3UrlForObject">s3UrlForObject</a></code> | The S3 URL of an S3 object. For example:. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.transferAccelerationUrlForObject">transferAccelerationUrlForObject</a></code> | The https Transfer Acceleration URL of an S3 object. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.urlForObject">urlForObject</a></code> | The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.virtualHostedUrlForObject">virtualHostedUrlForObject</a></code> | The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addCorsRule">addCorsRule</a></code> | Adds a cross-origin access configuration for objects in an Amazon S3 bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addInventory">addInventory</a></code> | Add an inventory configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addLifecycleRule">addLifecycleRule</a></code> | Add a lifecycle rule to the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addMetric">addMetric</a></code> | Adds a metrics configuration for the CloudWatch request metrics from the bucket. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventNotification` <a name="addEventNotification" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addEventNotification"></a>

```typescript
public addEventNotification(event: EventType, dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Adds a bucket notification event destination.

> [https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html)

*Example*

```typescript
   declare const myLambda: lambda.Function;
   const bucket = new s3.Bucket(this, 'MyBucket');
   bucket.addEventNotification(s3.EventType.OBJECT_CREATED, new s3n.LambdaDestination(myLambda), {prefix: 'home/myusername/*'});
```


###### `event`<sup>Required</sup> <a name="event" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addEventNotification.parameter.event"></a>

- *Type:* aws-cdk-lib.aws_s3.EventType

The event to trigger the notification.

---

###### `dest`<sup>Required</sup> <a name="dest" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addEventNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (Lambda, SNS Topic or SQS Queue).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addEventNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

S3 object key filter rules to determine which objects trigger this event.

Each filter must include a `prefix` and/or `suffix`
that will be matched against the s3 object key. Refer to the S3 Developer Guide
for details about allowed filter rules.

---

##### `addObjectCreatedNotification` <a name="addObjectCreatedNotification" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addObjectCreatedNotification"></a>

```typescript
public addObjectCreatedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is created in the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_CREATED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addObjectCreatedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addObjectCreatedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addObjectRemovedNotification` <a name="addObjectRemovedNotification" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addObjectRemovedNotification"></a>

```typescript
public addObjectRemovedNotification(dest: IBucketNotificationDestination, filters: ...NotificationKeyFilter[]): void
```

Subscribes a destination to receive notifications when an object is removed from the bucket.

This is identical to calling
`onEvent(EventType.OBJECT_REMOVED)`.

###### `dest`<sup>Required</sup> <a name="dest" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addObjectRemovedNotification.parameter.dest"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucketNotificationDestination

The notification destination (see onEvent).

---

###### `filters`<sup>Required</sup> <a name="filters" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addObjectRemovedNotification.parameter.filters"></a>

- *Type:* ...aws-cdk-lib.aws_s3.NotificationKeyFilter[]

Filters (see onEvent).

---

##### `addReplicationPolicy` <a name="addReplicationPolicy" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addReplicationPolicy"></a>

```typescript
public addReplicationPolicy(roleArn: string, accessControlTransition?: boolean, account?: string): void
```

Function to add required permissions to the destination bucket for cross account replication.

These permissions will be added as a resource based policy on the bucket

> [https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-accesscontroltranslation.html)

###### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addReplicationPolicy.parameter.roleArn"></a>

- *Type:* string

---

###### `accessControlTransition`<sup>Optional</sup> <a name="accessControlTransition" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addReplicationPolicy.parameter.accessControlTransition"></a>

- *Type:* boolean

---

###### `account`<sup>Optional</sup> <a name="account" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addReplicationPolicy.parameter.account"></a>

- *Type:* string

---

##### `addToResourcePolicy` <a name="addToResourcePolicy" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addToResourcePolicy"></a>

```typescript
public addToResourcePolicy(permission: PolicyStatement): AddToResourcePolicyResult
```

Adds a statement to the resource policy for a principal (i.e. account/role/service) to perform actions on this bucket and/or its contents. Use `bucketArn` and `arnForObjects(keys)` to obtain ARNs for this bucket or objects.

Note that the policy statement may or may not be added to the policy.
For example, when an `IBucket` is created from an existing bucket,
it's not possible to tell whether the bucket already has a policy
attached, let alone to re-use that policy to add more statements to it.
So it's safest to do nothing in these cases.

###### `permission`<sup>Required</sup> <a name="permission" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addToResourcePolicy.parameter.permission"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

the policy statement to be added to the bucket's policy.

---

##### `arnForObjects` <a name="arnForObjects" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.arnForObjects"></a>

```typescript
public arnForObjects(keyPattern: string): string
```

Returns an ARN that represents all objects within the bucket that match the key pattern specified.

To represent all keys, specify ``"*"``.

If you need to specify a keyPattern with multiple components, concatenate them into a single string, e.g.:

  arnForObjects(`home/${team}/${user}/*`)

###### `keyPattern`<sup>Required</sup> <a name="keyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.arnForObjects.parameter.keyPattern"></a>

- *Type:* string

---

##### `enableEventBridgeNotification` <a name="enableEventBridgeNotification" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.enableEventBridgeNotification"></a>

```typescript
public enableEventBridgeNotification(): void
```

Enables event bridge notification, causing all events below to be sent to EventBridge:.

Object Deleted (DeleteObject)
- Object Deleted (Lifecycle expiration)
- Object Restore Initiated
- Object Restore Completed
- Object Restore Expired
- Object Storage Class Changed
- Object Access Tier Changed
- Object ACL Updated
- Object Tags Added
- Object Tags Deleted

##### `grantDelete` <a name="grantDelete" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantDelete"></a>

```typescript
public grantDelete(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:DeleteObject* permission to an IAM principal for objects in this bucket.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantDelete.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantDelete.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPublicAccess` <a name="grantPublicAccess" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPublicAccess"></a>

```typescript
public grantPublicAccess(allowedActions: ...string[], keyPrefix?: string): Grant
```

Allows unrestricted access to objects from this bucket.

IMPORTANT: This permission allows anyone to perform actions on S3 objects
in this bucket, which is useful for when you configure your bucket as a
website and want everyone to be able to read objects in the bucket without
needing to authenticate.

Without arguments, this method will grant read ("s3:GetObject") access to
all objects ("*") in the bucket.

The method returns the `iam.Grant` object, which can then be modified
as needed. For example, you can add a condition that will restrict access only
to an IPv4 range like this:

    const grant = bucket.grantPublicAccess();
    grant.resourceStatement!.addCondition(‘IpAddress’, { “aws:SourceIp”: “54.240.143.0/24” });

Note that if this `IBucket` refers to an existing bucket, possibly not
managed by CloudFormation, this method will have no effect, since it's
impossible to modify the policy of an existing bucket.

###### `allowedActions`<sup>Required</sup> <a name="allowedActions" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPublicAccess.parameter.allowedActions"></a>

- *Type:* ...string[]

the set of S3 actions to allow.

Default is "s3:GetObject".

---

###### `keyPrefix`<sup>Optional</sup> <a name="keyPrefix" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPublicAccess.parameter.keyPrefix"></a>

- *Type:* string

the prefix of S3 object keys (e.g. `home/*`). Default is "*".

---

##### `grantPut` <a name="grantPut" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPut"></a>

```typescript
public grantPut(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants s3:PutObject* and s3:Abort* permissions for this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPut.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPut.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantPutAcl` <a name="grantPutAcl" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPutAcl"></a>

```typescript
public grantPutAcl(identity: IGrantable, objectsKeyPattern?: string): Grant
```

Grant the given IAM identity permissions to modify the ACLs of objects in the given Bucket.

If your application has the '@aws-cdk/aws-s3:grantWriteWithoutAcl' feature flag set,
calling `grantWrite` or `grantReadWrite` no longer grants permissions to modify the ACLs of the objects;
in this case, if you need to modify object ACLs, call this method explicitly.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPutAcl.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantPutAcl.parameter.objectsKeyPattern"></a>

- *Type:* string

---

##### `grantRead` <a name="grantRead" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantRead"></a>

```typescript
public grantRead(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grant read permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If encryption is used, permission to use the key to decrypt the contents
of the bucket will also be granted to the same principal.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantRead.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal.

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantRead.parameter.objectsKeyPattern"></a>

- *Type:* any

Restrict the permission to a certain key pattern (default '*').

Parameter type is `any` but `string` should be passed in.

---

##### `grantReadWrite` <a name="grantReadWrite" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantReadWrite"></a>

```typescript
public grantReadWrite(identity: IGrantable, objectsKeyPattern?: any): Grant
```

Grants read/write permissions for this bucket and it's contents to an IAM principal (Role/Group/User).

If an encryption key is used, permission to use the key for
encrypt/decrypt will also be granted.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantReadWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantReadWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

##### `grantWrite` <a name="grantWrite" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantWrite"></a>

```typescript
public grantWrite(identity: IGrantable, objectsKeyPattern?: any, allowedActionPatterns?: string[]): Grant
```

Grant write permissions to this bucket to an IAM principal.

If encryption is used, permission to use the key to encrypt the contents
of written files will also be granted to the same principal.

Before CDK version 1.85.0, this method granted the `s3:PutObject*` permission that included `s3:PutObjectAcl`,
which could be used to grant read/write object access to IAM principals in other accounts.
If you want to get rid of that behavior, update your CDK version to 1.85.0 or later,
and make sure the `@aws-cdk/aws-s3:grantWriteWithoutAcl` feature flag is set to `true`
in the `context` key of your cdk.json file.
If you've already updated, but still need the principal to have permissions to modify the ACLs,
use the `grantPutAcl` method.

###### `identity`<sup>Required</sup> <a name="identity" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantWrite.parameter.identity"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

###### `objectsKeyPattern`<sup>Optional</sup> <a name="objectsKeyPattern" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantWrite.parameter.objectsKeyPattern"></a>

- *Type:* any

---

###### `allowedActionPatterns`<sup>Optional</sup> <a name="allowedActionPatterns" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.grantWrite.parameter.allowedActionPatterns"></a>

- *Type:* string[]

---

##### `onCloudTrailEvent` <a name="onCloudTrailEvent" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailEvent"></a>

```typescript
public onCloudTrailEvent(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Define a CloudWatch event that triggers when something happens to this repository.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailEvent.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailEvent.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailPutObject` <a name="onCloudTrailPutObject" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailPutObject"></a>

```typescript
public onCloudTrailPutObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object is uploaded to the specified paths (keys) in this bucket using the PutObject API call.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using `onCloudTrailWriteObject` may be preferable.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailPutObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailPutObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `onCloudTrailWriteObject` <a name="onCloudTrailWriteObject" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailWriteObject"></a>

```typescript
public onCloudTrailWriteObject(id: string, options?: OnCloudTrailBucketEventOptions): Rule
```

Defines an AWS CloudWatch event that triggers when an object at the specified paths (keys) in this bucket are written to.

This includes
the events PutObject, CopyObject, and CompleteMultipartUpload.

Note that some tools like `aws s3 cp` will automatically use either
PutObject or the multipart upload API depending on the file size,
so using this method may be preferable to `onCloudTrailPutObject`.

Requires that there exists at least one CloudTrail Trail in your account
that captures the event. This method will not create the Trail.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailWriteObject.parameter.id"></a>

- *Type:* string

The id of the rule.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.onCloudTrailWriteObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.OnCloudTrailBucketEventOptions

Options for adding the rule.

---

##### `s3UrlForObject` <a name="s3UrlForObject" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.s3UrlForObject"></a>

```typescript
public s3UrlForObject(key?: string): string
```

The S3 URL of an S3 object. For example:.

`s3://onlybucket`
- `s3://bucket/key`

###### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.s3UrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the S3 URL of the
bucket is returned.

---

##### `transferAccelerationUrlForObject` <a name="transferAccelerationUrlForObject" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.transferAccelerationUrlForObject"></a>

```typescript
public transferAccelerationUrlForObject(key?: string, options?: TransferAccelerationUrlOptions): string
```

The https Transfer Acceleration URL of an S3 object.

Specify `dualStack: true` at the options
for dual-stack endpoint (connect to the bucket over IPv6). For example:

- `https://bucket.s3-accelerate.amazonaws.com`
- `https://bucket.s3-accelerate.amazonaws.com/key`

###### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.transferAccelerationUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.transferAccelerationUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.TransferAccelerationUrlOptions

Options for generating URL.

---

##### `urlForObject` <a name="urlForObject" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.urlForObject"></a>

```typescript
public urlForObject(key?: string): string
```

The https URL of an S3 object. Specify `regional: false` at the options for non-regional URLs. For example:.

`https://s3.us-west-1.amazonaws.com/onlybucket`
- `https://s3.us-west-1.amazonaws.com/bucket/key`
- `https://s3.cn-north-1.amazonaws.com.cn/china-bucket/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.urlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

##### `virtualHostedUrlForObject` <a name="virtualHostedUrlForObject" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.virtualHostedUrlForObject"></a>

```typescript
public virtualHostedUrlForObject(key?: string, options?: VirtualHostedStyleUrlOptions): string
```

The virtual hosted-style URL of an S3 object. Specify `regional: false` at the options for non-regional URL. For example:.

`https://only-bucket.s3.us-west-1.amazonaws.com`
- `https://bucket.s3.us-west-1.amazonaws.com/key`
- `https://bucket.s3.amazonaws.com/key`
- `https://china-bucket.s3.cn-north-1.amazonaws.com.cn/mykey`

###### `key`<sup>Optional</sup> <a name="key" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.virtualHostedUrlForObject.parameter.key"></a>

- *Type:* string

The S3 key of the object.

If not specified, the URL of the
bucket is returned.

---

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.virtualHostedUrlForObject.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_s3.VirtualHostedStyleUrlOptions

Options for generating URL.

---

##### `addCorsRule` <a name="addCorsRule" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addCorsRule"></a>

```typescript
public addCorsRule(rule: CorsRule): void
```

Adds a cross-origin access configuration for objects in an Amazon S3 bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addCorsRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.CorsRule

The CORS configuration rule to add.

---

##### `addInventory` <a name="addInventory" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addInventory"></a>

```typescript
public addInventory(inventory: Inventory): void
```

Add an inventory configuration.

###### `inventory`<sup>Required</sup> <a name="inventory" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addInventory.parameter.inventory"></a>

- *Type:* aws-cdk-lib.aws_s3.Inventory

configuration to add.

---

##### `addLifecycleRule` <a name="addLifecycleRule" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addLifecycleRule"></a>

```typescript
public addLifecycleRule(rule: LifecycleRule): void
```

Add a lifecycle rule to the bucket.

###### `rule`<sup>Required</sup> <a name="rule" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addLifecycleRule.parameter.rule"></a>

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule

The rule to add.

---

##### `addMetric` <a name="addMetric" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addMetric"></a>

```typescript
public addMetric(metric: BucketMetrics): void
```

Adds a metrics configuration for the CloudWatch request metrics from the bucket.

###### `metric`<sup>Required</sup> <a name="metric" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.addMetric.parameter.metric"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics

The metric configuration to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketArn">fromBucketArn</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketAttributes">fromBucketAttributes</a></code> | Creates a Bucket construct that represents an external bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketName">fromBucketName</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromCfnBucket">fromCfnBucket</a></code> | Create a mutable `IBucket` based on a low-level `CfnBucket`. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.validateBucketName">validateBucketName</a></code> | Thrown an exception if the given bucket name is not valid. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.isConstruct"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AnalyticsBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.isOwnedResource"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AnalyticsBucket.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.isResource"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AnalyticsBucket.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromBucketArn` <a name="fromBucketArn" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketArn"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AnalyticsBucket.fromBucketArn(scope: Construct, id: string, bucketArn: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketArn.parameter.id"></a>

- *Type:* string

---

###### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketArn.parameter.bucketArn"></a>

- *Type:* string

---

##### `fromBucketAttributes` <a name="fromBucketAttributes" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketAttributes"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AnalyticsBucket.fromBucketAttributes(scope: Construct, id: string, attrs: BucketAttributes)
```

Creates a Bucket construct that represents an external bucket.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketAttributes.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketAttributes.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `attrs`<sup>Required</sup> <a name="attrs" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketAttributes.parameter.attrs"></a>

- *Type:* aws-cdk-lib.aws_s3.BucketAttributes

A `BucketAttributes` object.

Can be obtained from a call to
`bucket.export()` or manually created.

---

##### `fromBucketName` <a name="fromBucketName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketName"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AnalyticsBucket.fromBucketName(scope: Construct, id: string, bucketName: string)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketName.parameter.id"></a>

- *Type:* string

---

###### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromBucketName.parameter.bucketName"></a>

- *Type:* string

---

##### `fromCfnBucket` <a name="fromCfnBucket" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromCfnBucket"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AnalyticsBucket.fromCfnBucket(cfnBucket: CfnBucket)
```

Create a mutable `IBucket` based on a low-level `CfnBucket`.

###### `cfnBucket`<sup>Required</sup> <a name="cfnBucket" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.fromCfnBucket.parameter.cfnBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.CfnBucket

---

##### `validateBucketName` <a name="validateBucketName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.validateBucketName"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.AnalyticsBucket.validateBucketName(physicalName: string, allowLegacyBucketNaming?: boolean)
```

Thrown an exception if the given bucket name is not valid.

###### `physicalName`<sup>Required</sup> <a name="physicalName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.validateBucketName.parameter.physicalName"></a>

- *Type:* string

name of the bucket.

---

###### `allowLegacyBucketNaming`<sup>Optional</sup> <a name="allowLegacyBucketNaming" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.validateBucketName.parameter.allowLegacyBucketNaming"></a>

- *Type:* boolean

allow legacy bucket naming style, default is false.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketArn">bucketArn</a></code> | <code>string</code> | The ARN of the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketDomainName">bucketDomainName</a></code> | <code>string</code> | The IPv4 DNS name of the specified bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketDualStackDomainName">bucketDualStackDomainName</a></code> | <code>string</code> | The IPv6 DNS name of the specified bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketRegionalDomainName">bucketRegionalDomainName</a></code> | <code>string</code> | The regional domain name of the specified bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketWebsiteDomainName">bucketWebsiteDomainName</a></code> | <code>string</code> | The Domain name of the static website. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketWebsiteUrl">bucketWebsiteUrl</a></code> | <code>string</code> | The URL of the static website. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Optional KMS encryption key associated with this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.isWebsite">isWebsite</a></code> | <code>boolean</code> | If this bucket has been configured for static website hosting. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.policy">policy</a></code> | <code>aws-cdk-lib.aws_s3.BucketPolicy</code> | The resource policy associated with this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.replicationRoleArn">replicationRoleArn</a></code> | <code>string</code> | Role used to set up permissions on this bucket for replication. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketArn"></a>

```typescript
public readonly bucketArn: string;
```

- *Type:* string

The ARN of the bucket.

---

##### `bucketDomainName`<sup>Required</sup> <a name="bucketDomainName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketDomainName"></a>

```typescript
public readonly bucketDomainName: string;
```

- *Type:* string

The IPv4 DNS name of the specified bucket.

---

##### `bucketDualStackDomainName`<sup>Required</sup> <a name="bucketDualStackDomainName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketDualStackDomainName"></a>

```typescript
public readonly bucketDualStackDomainName: string;
```

- *Type:* string

The IPv6 DNS name of the specified bucket.

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the bucket.

---

##### `bucketRegionalDomainName`<sup>Required</sup> <a name="bucketRegionalDomainName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketRegionalDomainName"></a>

```typescript
public readonly bucketRegionalDomainName: string;
```

- *Type:* string

The regional domain name of the specified bucket.

---

##### `bucketWebsiteDomainName`<sup>Required</sup> <a name="bucketWebsiteDomainName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketWebsiteDomainName"></a>

```typescript
public readonly bucketWebsiteDomainName: string;
```

- *Type:* string

The Domain name of the static website.

---

##### `bucketWebsiteUrl`<sup>Required</sup> <a name="bucketWebsiteUrl" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.bucketWebsiteUrl"></a>

```typescript
public readonly bucketWebsiteUrl: string;
```

- *Type:* string

The URL of the static website.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

Optional KMS encryption key associated with this bucket.

---

##### `isWebsite`<sup>Optional</sup> <a name="isWebsite" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.isWebsite"></a>

```typescript
public readonly isWebsite: boolean;
```

- *Type:* boolean

If this bucket has been configured for static website hosting.

---

##### `policy`<sup>Optional</sup> <a name="policy" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.policy"></a>

```typescript
public readonly policy: BucketPolicy;
```

- *Type:* aws-cdk-lib.aws_s3.BucketPolicy

The resource policy associated with this bucket.

If `autoCreatePolicy` is true, a `BucketPolicy` will be created upon the
first call to addToResourcePolicy(s).

---

##### `replicationRoleArn`<sup>Optional</sup> <a name="replicationRoleArn" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket.property.replicationRoleArn"></a>

```typescript
public readonly replicationRoleArn: string;
```

- *Type:* string

Role used to set up permissions on this bucket for replication.

---


### ApplicationStage <a name="ApplicationStage" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage"></a>

ApplicationStage class that creates a CDK Pipelines Stage from an ApplicationStackFactory.

#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

new utils.ApplicationStage(scope: Construct, id: string, props: ApplicationStageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps</code> | the ApplicationStage properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps

the ApplicationStage properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.synth">synth</a></code> | Synthesize this stage into a cloud assembly. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.synth"></a>

```typescript
public synth(options?: StageSynthesisOptions): CloudAssembly
```

Synthesize this stage into a cloud assembly.

Once an assembly has been synthesized, it cannot be modified. Subsequent
calls will return the same assembly.

###### `options`<sup>Optional</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.synth.parameter.options"></a>

- *Type:* aws-cdk-lib.StageSynthesisOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.isStage">isStage</a></code> | Test whether the given construct is a stage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.of">of</a></code> | Return the stage this construct is contained with, if available. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.isConstruct"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.ApplicationStage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isStage` <a name="isStage" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.isStage"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.ApplicationStage.isStage(x: any)
```

Test whether the given construct is a stage.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.isStage.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.of"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.ApplicationStage.of(construct: IConstruct)
```

Return the stage this construct is contained with, if available.

If called
on a nested stage, returns its parent.

###### `construct`<sup>Required</sup> <a name="construct" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.artifactId">artifactId</a></code> | <code>string</code> | Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.assetOutdir">assetOutdir</a></code> | <code>string</code> | The cloud assembly asset output directory. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.outdir">outdir</a></code> | <code>string</code> | The cloud assembly output directory. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.stageName">stageName</a></code> | <code>string</code> | The name of the stage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.account">account</a></code> | <code>string</code> | The default account for all resources defined within this stage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.parentStage">parentStage</a></code> | <code>aws-cdk-lib.Stage</code> | The parent stage or `undefined` if this is the app. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.region">region</a></code> | <code>string</code> | The default region for all resources defined within this stage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.stackOutputsEnv">stackOutputsEnv</a></code> | <code>{[ key: string ]: aws-cdk-lib.CfnOutput}</code> | The list of CfnOutputs created by the CDK Stack. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactId`<sup>Required</sup> <a name="artifactId" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.artifactId"></a>

```typescript
public readonly artifactId: string;
```

- *Type:* string

Artifact ID of the assembly if it is a nested stage. The root stage (app) will return an empty string.

Derived from the construct path.

---

##### `assetOutdir`<sup>Required</sup> <a name="assetOutdir" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.assetOutdir"></a>

```typescript
public readonly assetOutdir: string;
```

- *Type:* string

The cloud assembly asset output directory.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The cloud assembly output directory.

---

##### `policyValidationBeta1`<sup>Required</sup> <a name="policyValidationBeta1" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

The name of the stage.

Based on names of the parent stages separated by
hypens.

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The default account for all resources defined within this stage.

---

##### `parentStage`<sup>Optional</sup> <a name="parentStage" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.parentStage"></a>

```typescript
public readonly parentStage: Stage;
```

- *Type:* aws-cdk-lib.Stage

The parent stage or `undefined` if this is the app.

*

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The default region for all resources defined within this stage.

---

##### `stackOutputsEnv`<sup>Optional</sup> <a name="stackOutputsEnv" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStage.property.stackOutputsEnv"></a>

```typescript
public readonly stackOutputsEnv: {[ key: string ]: CfnOutput};
```

- *Type:* {[ key: string ]: aws-cdk-lib.CfnOutput}

The list of CfnOutputs created by the CDK Stack.

---


### AthenaWorkGroup <a name="AthenaWorkGroup" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup"></a>

An Amazon Athena Workgroup configured with default result bucket.

*Example*

```typescript
new dsf.consumption.AthenaWorkGroup(this, 'AthenaWorkGroupDefault', {
   name: 'athena-default',
   resultLocationPrefix: 'athena-default-results/'
 })
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

new consumption.AthenaWorkGroup(scope: Construct, id: string, props: AthenaWorkgroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.grantRunQueries">grantRunQueries</a></code> | Grants running queries access to Principal. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `grantRunQueries` <a name="grantRunQueries" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.grantRunQueries"></a>

```typescript
public grantRunQueries(principal: IPrincipal): void
```

Grants running queries access to Principal.

###### `principal`<sup>Required</sup> <a name="principal" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.grantRunQueries.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

Principal to attach query access to Athena Workgroup.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.isConstruct"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

consumption.AthenaWorkGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.resultBucket">resultBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | S3 Bucket used for query results. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.resultsEncryptionKey">resultsEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS Key to encrypt the query results. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.workGroup">workGroup</a></code> | <code>aws-cdk-lib.aws_athena.CfnWorkGroup</code> | Athena Workgroup that is created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.workGroupName">workGroupName</a></code> | <code>string</code> | WorkGroup name with the randomized suffix. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Role used to access user resources in an Athena for Apache Spark session. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `resultBucket`<sup>Required</sup> <a name="resultBucket" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.resultBucket"></a>

```typescript
public readonly resultBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

S3 Bucket used for query results.

---

##### `resultsEncryptionKey`<sup>Required</sup> <a name="resultsEncryptionKey" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.resultsEncryptionKey"></a>

```typescript
public readonly resultsEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

KMS Key to encrypt the query results.

---

##### `workGroup`<sup>Required</sup> <a name="workGroup" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.workGroup"></a>

```typescript
public readonly workGroup: CfnWorkGroup;
```

- *Type:* aws-cdk-lib.aws_athena.CfnWorkGroup

Athena Workgroup that is created.

---

##### `workGroupName`<sup>Required</sup> <a name="workGroupName" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.workGroupName"></a>

```typescript
public readonly workGroupName: string;
```

- *Type:* string

WorkGroup name with the randomized suffix.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

Role used to access user resources in an Athena for Apache Spark session.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkGroup.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### BaseRedshiftDataAccess <a name="BaseRedshiftDataAccess" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess"></a>

#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

new consumption.BaseRedshiftDataAccess(scope: Construct, id: string, props: RedshiftDataProps, trackedConstructProps: any)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.Initializer.parameter.trackedConstructProps">trackedConstructProps</a></code> | <code>any</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps

---

##### `trackedConstructProps`<sup>Required</sup> <a name="trackedConstructProps" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.Initializer.parameter.trackedConstructProps"></a>

- *Type:* any

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.isConstruct"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

consumption.BaseRedshiftDataAccess.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.customResourceSecurityGroup">customResourceSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The Security Group used by the Custom Resource when deployed in a VPC. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.vpcEndpoint">vpcEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint</code> | The created Redshift Data API interface vpc endpoint when deployed in a VPC. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.vpcEndpointSecurityGroup">vpcEndpointSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The Security Group used by the VPC Endpoint when deployed in a VPC. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResourceSecurityGroup`<sup>Optional</sup> <a name="customResourceSecurityGroup" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.customResourceSecurityGroup"></a>

```typescript
public readonly customResourceSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The Security Group used by the Custom Resource when deployed in a VPC.

---

##### `vpcEndpoint`<sup>Optional</sup> <a name="vpcEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.vpcEndpoint"></a>

```typescript
public readonly vpcEndpoint: IInterfaceVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint

The created Redshift Data API interface vpc endpoint when deployed in a VPC.

---

##### `vpcEndpointSecurityGroup`<sup>Optional</sup> <a name="vpcEndpointSecurityGroup" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.vpcEndpointSecurityGroup"></a>

```typescript
public readonly vpcEndpointSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The Security Group used by the VPC Endpoint when deployed in a VPC.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataAccess.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### CreateServiceLinkedRole <a name="CreateServiceLinkedRole" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole"></a>

Create service linked role for the indicated service if it doesn't exists.

*Example*

```typescript
const slr = new dsf.utils.CreateServiceLinkedRole(this, 'CreateSLR')
slr.create(dsf.utils.ServiceLinkedRoleService.REDSHIFT)
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

new utils.CreateServiceLinkedRole(scope: Construct, id: string, props?: CreateServiceLinkedRoleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRoleProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRoleProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.create">create</a></code> | Creates the service linked role associated to the provided AWS service. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `create` <a name="create" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.create"></a>

```typescript
public create(slrService: ServiceLinkedRoleService): CustomResource
```

Creates the service linked role associated to the provided AWS service.

###### `slrService`<sup>Required</sup> <a name="slrService" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.create.parameter.slrService"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService

See `ServiceLinkedRoleService` for supported service constant.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.isConstruct"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.CreateServiceLinkedRole.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### DataCatalogDatabase <a name="DataCatalogDatabase" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase"></a>

An AWS Glue Data Catalog Database configured with the location and a crawler.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Governance/data-catalog-database](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Governance/data-catalog-database)

*Example*

```typescript
import { Bucket } from 'aws-cdk-lib/aws-s3';

new dsf.governance.DataCatalogDatabase(this, 'ExampleDatabase', {
   locationBucket: new Bucket(scope, 'LocationBucket'),
   locationPrefix: '/databasePath',
   name: 'example-db'
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

new governance.DataCatalogDatabase(scope: Construct, id: string, props: DataCatalogDatabaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.grantReadOnlyAccess">grantReadOnlyAccess</a></code> | Grants read access via identity based policy to the principal. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `grantReadOnlyAccess` <a name="grantReadOnlyAccess" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.grantReadOnlyAccess"></a>

```typescript
public grantReadOnlyAccess(principal: IPrincipal): AddToPrincipalPolicyResult
```

Grants read access via identity based policy to the principal.

This would attach an IAM Policy to the principal allowing read access to the Glue Database and all its Glue Tables.
Only valid for IAM permission model.

###### `principal`<sup>Required</sup> <a name="principal" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.grantReadOnlyAccess.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

Principal to attach the Glue Database read access to.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.isConstruct"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

governance.DataCatalogDatabase.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.database">database</a></code> | <code>aws-cdk-lib.aws_glue.CfnDatabase</code> | The Glue Database that's created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | The Glue Database name with the randomized suffix to prevent name collisions in the catalog. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawler">crawler</a></code> | <code>aws-cdk-lib.aws_glue.CfnCrawler</code> | The Glue Crawler created when `autoCrawl` is set to `true` (default value). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerLakeFormationDatabaseGrant">crawlerLakeFormationDatabaseGrant</a></code> | <code>aws-cdk-lib.aws_lakeformation.CfnPrincipalPermissions</code> | The Lake Formation grant on the database for the Crawler when Lake Formation or Hybrid is used. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerLakeFormationLocationGrant">crawlerLakeFormationLocationGrant</a></code> | <code>aws-cdk-lib.aws_lakeformation.CfnPrincipalPermissions</code> | The Lake Formation grant on the data location for the Crawler when Lake Formation or Hybrid is used. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerLakeFormationTablesGrant">crawlerLakeFormationTablesGrant</a></code> | <code>aws-cdk-lib.aws_lakeformation.CfnPrincipalPermissions</code> | The Lake Formation grant on the tables for the Crawler when Lake Formation or Hybrid is used. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerLogEncryptionKey">crawlerLogEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS encryption Key used by the Crawler. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerRole">crawlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the Glue crawler when created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerSecurityConfiguration">crawlerSecurityConfiguration</a></code> | <code>aws-cdk-lib.aws_glue.CfnSecurityConfiguration</code> | The Glue security configuration used by the Glue Crawler when created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.dataLakeLocation">dataLakeLocation</a></code> | <code>aws-cdk-lib.aws_lakeformation.CfnResource</code> | The Lake Formation data lake location. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.dataLakeSettings">dataLakeSettings</a></code> | <code>aws-cdk-lib.aws_lakeformation.CfnDataLakeSettings</code> | The DataLakeSettings for Lake Formation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.lakeFormationDataAccessRole">lakeFormationDataAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by Lake Formation to access data. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.lakeFormationRevokeRole">lakeFormationRevokeRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used to revoke LakeFormation IAMAllowedPrincipals. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.revokeIamAllowedPrincipal">revokeIamAllowedPrincipal</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource</code> | The custom resource for revoking IAM permissions from the database. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `database`<sup>Required</sup> <a name="database" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.database"></a>

```typescript
public readonly database: CfnDatabase;
```

- *Type:* aws-cdk-lib.aws_glue.CfnDatabase

The Glue Database that's created.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The Glue Database name with the randomized suffix to prevent name collisions in the catalog.

---

##### `crawler`<sup>Optional</sup> <a name="crawler" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawler"></a>

```typescript
public readonly crawler: CfnCrawler;
```

- *Type:* aws-cdk-lib.aws_glue.CfnCrawler

The Glue Crawler created when `autoCrawl` is set to `true` (default value).

This property can be undefined if `autoCrawl` is set to `false`.

---

##### `crawlerLakeFormationDatabaseGrant`<sup>Optional</sup> <a name="crawlerLakeFormationDatabaseGrant" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerLakeFormationDatabaseGrant"></a>

```typescript
public readonly crawlerLakeFormationDatabaseGrant: CfnPrincipalPermissions;
```

- *Type:* aws-cdk-lib.aws_lakeformation.CfnPrincipalPermissions

The Lake Formation grant on the database for the Crawler when Lake Formation or Hybrid is used.

---

##### `crawlerLakeFormationLocationGrant`<sup>Optional</sup> <a name="crawlerLakeFormationLocationGrant" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerLakeFormationLocationGrant"></a>

```typescript
public readonly crawlerLakeFormationLocationGrant: CfnPrincipalPermissions;
```

- *Type:* aws-cdk-lib.aws_lakeformation.CfnPrincipalPermissions

The Lake Formation grant on the data location for the Crawler when Lake Formation or Hybrid is used.

---

##### `crawlerLakeFormationTablesGrant`<sup>Optional</sup> <a name="crawlerLakeFormationTablesGrant" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerLakeFormationTablesGrant"></a>

```typescript
public readonly crawlerLakeFormationTablesGrant: CfnPrincipalPermissions;
```

- *Type:* aws-cdk-lib.aws_lakeformation.CfnPrincipalPermissions

The Lake Formation grant on the tables for the Crawler when Lake Formation or Hybrid is used.

---

##### `crawlerLogEncryptionKey`<sup>Optional</sup> <a name="crawlerLogEncryptionKey" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerLogEncryptionKey"></a>

```typescript
public readonly crawlerLogEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

KMS encryption Key used by the Crawler.

---

##### `crawlerRole`<sup>Optional</sup> <a name="crawlerRole" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerRole"></a>

```typescript
public readonly crawlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by the Glue crawler when created.

---

##### `crawlerSecurityConfiguration`<sup>Optional</sup> <a name="crawlerSecurityConfiguration" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.crawlerSecurityConfiguration"></a>

```typescript
public readonly crawlerSecurityConfiguration: CfnSecurityConfiguration;
```

- *Type:* aws-cdk-lib.aws_glue.CfnSecurityConfiguration

The Glue security configuration used by the Glue Crawler when created.

---

##### `dataLakeLocation`<sup>Optional</sup> <a name="dataLakeLocation" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.dataLakeLocation"></a>

```typescript
public readonly dataLakeLocation: CfnResource;
```

- *Type:* aws-cdk-lib.aws_lakeformation.CfnResource

The Lake Formation data lake location.

---

##### `dataLakeSettings`<sup>Optional</sup> <a name="dataLakeSettings" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.dataLakeSettings"></a>

```typescript
public readonly dataLakeSettings: CfnDataLakeSettings;
```

- *Type:* aws-cdk-lib.aws_lakeformation.CfnDataLakeSettings

The DataLakeSettings for Lake Formation.

---

##### `lakeFormationDataAccessRole`<sup>Optional</sup> <a name="lakeFormationDataAccessRole" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.lakeFormationDataAccessRole"></a>

```typescript
public readonly lakeFormationDataAccessRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by Lake Formation to access data.

---

##### `lakeFormationRevokeRole`<sup>Optional</sup> <a name="lakeFormationRevokeRole" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.lakeFormationRevokeRole"></a>

```typescript
public readonly lakeFormationRevokeRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used to revoke LakeFormation IAMAllowedPrincipals.

---

##### `revokeIamAllowedPrincipal`<sup>Optional</sup> <a name="revokeIamAllowedPrincipal" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.revokeIamAllowedPrincipal"></a>

```typescript
public readonly revokeIamAllowedPrincipal: AwsCustomResource;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource

The custom resource for revoking IAM permissions from the database.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### DataLakeCatalog <a name="DataLakeCatalog" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog"></a>

Creates a Data Lake Catalog on top of a `DataLakeStorage`.

The Data Lake Catalog is composed of 3 `DataCatalogDatabase`, one for each storage layer.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Governance/data-lake-catalog](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Governance/data-lake-catalog)

*Example*

```typescript
import { Key } from 'aws-cdk-lib/aws-kms';

const logEncryptionKey = new Key(this, 'ExampleLogKey');
const storage = new dsf.storage.DataLakeStorage(this, "ExampleStorage");
const dataLakeCatalog = new dsf.governance.DataLakeCatalog(this, "ExampleDataLakeCatalog", {
  dataLakeStorage: storage,
  databaseName: "exampledb",
  crawlerLogEncryptionKey: logEncryptionKey
})
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

new governance.DataLakeCatalog(scope: Construct, id: string, props: DataLakeCatalogProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps</code> | the DataLakeCatalog properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps

the DataLakeCatalog properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.isConstruct"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

governance.DataLakeCatalog.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.bronzeCatalogDatabase">bronzeCatalogDatabase</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase</code> | The Glue Database for the Bronze S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.goldCatalogDatabase">goldCatalogDatabase</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase</code> | The Glue Database for the Gold S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.silverCatalogDatabase">silverCatalogDatabase</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase</code> | The Glue Database for the Silver S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.crawlerLogEncryptionKey">crawlerLogEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used to encrypt the Glue Crawler logs. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `bronzeCatalogDatabase`<sup>Required</sup> <a name="bronzeCatalogDatabase" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.bronzeCatalogDatabase"></a>

```typescript
public readonly bronzeCatalogDatabase: DataCatalogDatabase;
```

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase

The Glue Database for the Bronze S3 Bucket.

---

##### `goldCatalogDatabase`<sup>Required</sup> <a name="goldCatalogDatabase" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.goldCatalogDatabase"></a>

```typescript
public readonly goldCatalogDatabase: DataCatalogDatabase;
```

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase

The Glue Database for the Gold S3 Bucket.

---

##### `silverCatalogDatabase`<sup>Required</sup> <a name="silverCatalogDatabase" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.silverCatalogDatabase"></a>

```typescript
public readonly silverCatalogDatabase: DataCatalogDatabase;
```

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabase

The Glue Database for the Silver S3 Bucket.

---

##### `crawlerLogEncryptionKey`<sup>Optional</sup> <a name="crawlerLogEncryptionKey" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.crawlerLogEncryptionKey"></a>

```typescript
public readonly crawlerLogEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS Key used to encrypt the Glue Crawler logs.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalog.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### DataLakeStorage <a name="DataLakeStorage" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage"></a>

Creates the storage layer for a data lake, composed of 3 `AnalyticsBucket` for Bronze, Silver, and Gold data.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Storage/data-lake-storage](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Storage/data-lake-storage)

*Example*

```typescript
// Set the context value for global data removal policy
this.node.setContext('@data-solutions-framework-on-aws/removeDataOnDestroy', true);

new dsf.storage.DataLakeStorage(this, 'MyDataLakeStorage', {
 bronzeBucketName: 'my-bronze',
 bronzeBucketInfrequentAccessDelay: 90,
 bronzeBucketArchiveDelay: 180,
 silverBucketName: 'my-silver',
 silverBucketInfrequentAccessDelay: 180,
 silverBucketArchiveDelay: 360,
 goldBucketName: 'my-gold',
 goldBucketInfrequentAccessDelay: 180,
 goldBucketArchiveDelay: 360,
 removalPolicy: cdk.RemovalPolicy.DESTROY,
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.Initializer"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

new storage.DataLakeStorage(scope: Construct, id: string, props?: DataLakeStorageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps</code> | the DataLakeStorageProps properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps

the DataLakeStorageProps properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.isConstruct"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

storage.DataLakeStorage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.accessLogsBucket">accessLogsBucket</a></code> | <code>@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket</code> | The S3 Bucket for access logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.bronzeBucket">bronzeBucket</a></code> | <code>@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket</code> | The S3 Bucket for Bronze layer. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.dataLakeKey">dataLakeKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used to encrypt all DataLakeStorage S3 buckets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.goldBucket">goldBucket</a></code> | <code>@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket</code> | The S3 Bucket for Gold layer. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.silverBucket">silverBucket</a></code> | <code>@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket</code> | The S3 Bucket for Silver layer. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `accessLogsBucket`<sup>Required</sup> <a name="accessLogsBucket" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.accessLogsBucket"></a>

```typescript
public readonly accessLogsBucket: AccessLogsBucket;
```

- *Type:* @cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket

The S3 Bucket for access logs.

---

##### `bronzeBucket`<sup>Required</sup> <a name="bronzeBucket" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.bronzeBucket"></a>

```typescript
public readonly bronzeBucket: AnalyticsBucket;
```

- *Type:* @cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket

The S3 Bucket for Bronze layer.

---

##### `dataLakeKey`<sup>Required</sup> <a name="dataLakeKey" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.dataLakeKey"></a>

```typescript
public readonly dataLakeKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS Key used to encrypt all DataLakeStorage S3 buckets.

---

##### `goldBucket`<sup>Required</sup> <a name="goldBucket" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.goldBucket"></a>

```typescript
public readonly goldBucket: AnalyticsBucket;
```

- *Type:* @cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket

The S3 Bucket for Gold layer.

---

##### `silverBucket`<sup>Required</sup> <a name="silverBucket" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.silverBucket"></a>

```typescript
public readonly silverBucket: AnalyticsBucket;
```

- *Type:* @cdklabs/aws-data-solutions-framework.storage.AnalyticsBucket

The S3 Bucket for Silver layer.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### DataVpc <a name="DataVpc" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc"></a>

Creates a VPC with best practices for securely deploying data solutions.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Utils/data-vpc](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Utils/data-vpc)

*Example*

```typescript
const vpc = new dsf.utils.DataVpc(this, 'DataVpc', {
  vpcCidr: '10.0.0.0/16',
});

vpc.tagVpc('Name', 'My VPC');
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

new utils.DataVpc(scope: Construct, id: string, props: DataVpcProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.DataVpcProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.utils.DataVpcProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.tagVpc">tagVpc</a></code> | Tag the VPC and the subnets. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `tagVpc` <a name="tagVpc" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.tagVpc"></a>

```typescript
public tagVpc(key: string, value: string): void
```

Tag the VPC and the subnets.

###### `key`<sup>Required</sup> <a name="key" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.tagVpc.parameter.key"></a>

- *Type:* string

the tag key.

---

###### `value`<sup>Required</sup> <a name="value" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.tagVpc.parameter.value"></a>

- *Type:* string

the tag value.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.isConstruct"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.DataVpc.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.flowLogGroup">flowLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group created for the VPC flow logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.flowLogKey">flowLogKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used to encrypt VPC flow logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.flowLogRole">flowLogRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role used to publish VPC Flow Logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.s3VpcEndpoint">s3VpcEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.IGatewayVpcEndpoint</code> | The S3 VPC endpoint gateway. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | The amazon VPC created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.clientVpnEndpoint">clientVpnEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.ClientVpnEndpoint</code> | The Client VPN Endpoint. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.vpnLogGroup">vpnLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group for Client VPN Endpoint. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.vpnSecurityGroups">vpnSecurityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The security group for Client VPN Endpoint. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `flowLogGroup`<sup>Required</sup> <a name="flowLogGroup" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.flowLogGroup"></a>

```typescript
public readonly flowLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group created for the VPC flow logs.

---

##### `flowLogKey`<sup>Required</sup> <a name="flowLogKey" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.flowLogKey"></a>

```typescript
public readonly flowLogKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS Key used to encrypt VPC flow logs.

---

##### `flowLogRole`<sup>Required</sup> <a name="flowLogRole" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.flowLogRole"></a>

```typescript
public readonly flowLogRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role used to publish VPC Flow Logs.

---

##### `s3VpcEndpoint`<sup>Required</sup> <a name="s3VpcEndpoint" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.s3VpcEndpoint"></a>

```typescript
public readonly s3VpcEndpoint: IGatewayVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.IGatewayVpcEndpoint

The S3 VPC endpoint gateway.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc

The amazon VPC created.

---

##### `clientVpnEndpoint`<sup>Optional</sup> <a name="clientVpnEndpoint" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.clientVpnEndpoint"></a>

```typescript
public readonly clientVpnEndpoint: ClientVpnEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.ClientVpnEndpoint

The Client VPN Endpoint.

---

##### `vpnLogGroup`<sup>Optional</sup> <a name="vpnLogGroup" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.vpnLogGroup"></a>

```typescript
public readonly vpnLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The log group for Client VPN Endpoint.

---

##### `vpnSecurityGroups`<sup>Optional</sup> <a name="vpnSecurityGroups" id="@cdklabs/aws-data-solutions-framework.utils.DataVpc.property.vpnSecurityGroups"></a>

```typescript
public readonly vpnSecurityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The security group for Client VPN Endpoint.

---


### DataZoneCustomAssetTypeFactory <a name="DataZoneCustomAssetTypeFactory" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory"></a>

Factory construct providing resources to create a DataZone custom asset type.

*Example*

```typescript
new dsf.governance.DataZoneCustomAssetTypeFactory(this, 'CustomAssetTypeFactory', {
 domainId: 'aba_dc999t9ime9sss',
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

new governance.DataZoneCustomAssetTypeFactory(scope: Construct, id: string, props: DataZoneCustomAssetTypeFactoryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps</code> | The DataZoneCustomAssetTypeFactory properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps

The DataZoneCustomAssetTypeFactory properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.createCustomAssetType">createCustomAssetType</a></code> | Creates a DataZone custom asset type based on the provided properties. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `createCustomAssetType` <a name="createCustomAssetType" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.createCustomAssetType"></a>

```typescript
public createCustomAssetType(id: string, customAssetType: DataZoneCustomAssetTypeProps): CustomAssetType
```

Creates a DataZone custom asset type based on the provided properties.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.createCustomAssetType.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

###### `customAssetType`<sup>Required</sup> <a name="customAssetType" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.createCustomAssetType.parameter.customAssetType"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps

the properties of the custom asset type.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.isConstruct"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

governance.DataZoneCustomAssetTypeFactory.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.createFunction">createFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function for the DataZone custom asset type creation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.createLogGroup">createLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Logs Log Group for the DataZone custom asset type creation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.createRole">createRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the DataZone custom asset type creation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.serviceToken">serviceToken</a></code> | <code>string</code> | The service token for the custom resource. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `createFunction`<sup>Required</sup> <a name="createFunction" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.createFunction"></a>

```typescript
public readonly createFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function for the DataZone custom asset type creation.

---

##### `createLogGroup`<sup>Required</sup> <a name="createLogGroup" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.createLogGroup"></a>

```typescript
public readonly createLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Logs Log Group for the DataZone custom asset type creation.

---

##### `createRole`<sup>Required</sup> <a name="createRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.createRole"></a>

```typescript
public readonly createRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the DataZone custom asset type creation.

---

##### `serviceToken`<sup>Required</sup> <a name="serviceToken" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

The service token for the custom resource.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### DataZoneGsrMskDataSource <a name="DataZoneGsrMskDataSource" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource"></a>

A DataZone custom data source for MSK (Managed Streaming for Kafka) with integration for Glue Schema Registry.

The construct creates assets with the MskTopicAssetType in DataZone based on schema definitions in a Glue Schema Registry.
It can be either scheduled or react on Schema Registry events (Create Schema, Update Schema, Create Schema Revision).

*Example*

```typescript
import { Schedule } from 'aws-cdk-lib/aws-events';

new dsf.governance.DataZoneGsrMskDataSource(this, 'MskDatasource', {
  domainId: 'aba_dc999t9ime9sss',
  projectId: '999999b3m5cpz',
  registryName: 'MyRegistry',
  clusterName: 'MyCluster',
  runSchedule: Schedule.cron({ minute: '0', hour: '12' }), // Trigger daily at noon
  enableSchemaRegistryEvent: true, // Enable events for Glue Schema Registry changes
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

new governance.DataZoneGsrMskDataSource(scope: Construct, id: string, props: DataZoneGsrMskDataSourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps</code> | The DataZoneGsrMskDataSourceProps properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps

The DataZoneGsrMskDataSourceProps properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.isConstruct"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

governance.DataZoneGsrMskDataSource.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.dataZoneMembership">dataZoneMembership</a></code> | <code>aws-cdk-lib.aws_datazone.CfnProjectMembership</code> | The membership of the Lambda Role on the DataZone Project. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.lambdaFunction">lambdaFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function creating DataZone Inventory Assets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.lambdaLogGroup">lambdaLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The Log Group for the Lambda Function creating DataZone Inventory Assets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.lambdaRole">lambdaRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role of the Lambda Function interacting with DataZone API to create inventory assets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.ssmParameterKey">ssmParameterKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | The KMS Key used to encrypt the SSM Parameter storing assets information. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.createUpdateEventRule">createUpdateEventRule</a></code> | <code>aws-cdk-lib.aws_events.IRule</code> | The Event Bridge Rule for schema creation and update. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.deleteEventRule">deleteEventRule</a></code> | <code>aws-cdk-lib.aws_events.IRule</code> | The Event Bridge Rule for schema deletion. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.scheduleRule">scheduleRule</a></code> | <code>aws-cdk-lib.aws_events.IRule</code> | The Event Bridge Rule for trigger the data source execution. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `dataZoneMembership`<sup>Required</sup> <a name="dataZoneMembership" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.dataZoneMembership"></a>

```typescript
public readonly dataZoneMembership: CfnProjectMembership;
```

- *Type:* aws-cdk-lib.aws_datazone.CfnProjectMembership

The membership of the Lambda Role on the DataZone Project.

---

##### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.lambdaFunction"></a>

```typescript
public readonly lambdaFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function creating DataZone Inventory Assets.

---

##### `lambdaLogGroup`<sup>Required</sup> <a name="lambdaLogGroup" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.lambdaLogGroup"></a>

```typescript
public readonly lambdaLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The Log Group for the Lambda Function creating DataZone Inventory Assets.

---

##### `lambdaRole`<sup>Required</sup> <a name="lambdaRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.lambdaRole"></a>

```typescript
public readonly lambdaRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role of the Lambda Function interacting with DataZone API to create inventory assets.

---

##### `ssmParameterKey`<sup>Required</sup> <a name="ssmParameterKey" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.ssmParameterKey"></a>

```typescript
public readonly ssmParameterKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

The KMS Key used to encrypt the SSM Parameter storing assets information.

---

##### `createUpdateEventRule`<sup>Optional</sup> <a name="createUpdateEventRule" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.createUpdateEventRule"></a>

```typescript
public readonly createUpdateEventRule: IRule;
```

- *Type:* aws-cdk-lib.aws_events.IRule

The Event Bridge Rule for schema creation and update.

---

##### `deleteEventRule`<sup>Optional</sup> <a name="deleteEventRule" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.deleteEventRule"></a>

```typescript
public readonly deleteEventRule: IRule;
```

- *Type:* aws-cdk-lib.aws_events.IRule

The Event Bridge Rule for schema deletion.

---

##### `scheduleRule`<sup>Optional</sup> <a name="scheduleRule" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.scheduleRule"></a>

```typescript
public readonly scheduleRule: IRule;
```

- *Type:* aws-cdk-lib.aws_events.IRule

The Event Bridge Rule for trigger the data source execution.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSource.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### DataZoneMskAssetType <a name="DataZoneMskAssetType" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType"></a>

A DataZone custom asset type representing an MSK topic.

*Example*

```typescript
new dsf.governance.DataZoneMskAssetType(this, 'MskAssetType', {
  domainId: 'aba_dc999t9ime9sss',
  projectId: '999999b3m5cpz',
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

new governance.DataZoneMskAssetType(scope: Construct, id: string, props: DataZoneMskAssetTypeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps</code> | The DataZoneMskAssetTypeProps properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps

The DataZoneMskAssetTypeProps properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.isConstruct"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

governance.DataZoneMskAssetType.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.mskCustomAssetType">mskCustomAssetType</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.CustomAssetType</code> | The custom asset type for MSK. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.owningProject">owningProject</a></code> | <code>aws-cdk-lib.aws_datazone.CfnProject</code> | The project owning the MSK asset type. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `mskCustomAssetType`<sup>Required</sup> <a name="mskCustomAssetType" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.mskCustomAssetType"></a>

```typescript
public readonly mskCustomAssetType: CustomAssetType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.governance.CustomAssetType

The custom asset type for MSK.

---

##### `owningProject`<sup>Optional</sup> <a name="owningProject" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.owningProject"></a>

```typescript
public readonly owningProject: CfnProject;
```

- *Type:* aws-cdk-lib.aws_datazone.CfnProject

The project owning the MSK asset type.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetType.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### DataZoneMskCentralAuthorizer <a name="DataZoneMskCentralAuthorizer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer"></a>

A central authorizer workflow for granting read access to Kafka topics.

The workflow is triggered by an event sent to the DataZone event bus.
First, it collects metadata from DataZone about the Kafka topics.
Then, it grants access to the relevant IAM roles.
Finally acknowledge the subscription grant in DataZone.

*Example*

```typescript
new dsf.governance.DataZoneMskCentralAuthorizer(this, 'MskAuthorizer', {
  domainId: 'aba_dc999t9ime9sss',
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

new governance.DataZoneMskCentralAuthorizer(scope: Construct, id: string, props: DataZoneMskCentralAuthorizerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps</code> | The DataZoneMskCentralAuthorizer properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps

The DataZoneMskCentralAuthorizer properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.registerAccount">registerAccount</a></code> | Connect the central authorizer workflow with environment authorizer workflows in other accounts. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `registerAccount` <a name="registerAccount" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.registerAccount"></a>

```typescript
public registerAccount(id: string, accountId: string): void
```

Connect the central authorizer workflow with environment authorizer workflows in other accounts.

This method grants the environment workflow to send events in the default Event Bridge bus for orchestration.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.registerAccount.parameter.id"></a>

- *Type:* string

The construct ID to use.

---

###### `accountId`<sup>Required</sup> <a name="accountId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.registerAccount.parameter.accountId"></a>

- *Type:* string

The account ID to register the authorizer with.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.isConstruct"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

governance.DataZoneMskCentralAuthorizer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneCallbackFunction">datazoneCallbackFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function used to acknowledge the subscription grant in DataZone. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneCallbackLogGroup">datazoneCallbackLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The Cloudwatch Log Group for logging the datazone callback. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneCallbackRole">datazoneCallbackRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used to acknowledge the subscription grant in DataZone. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneEventRole">datazoneEventRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used by the DataZone event to trigger the authorizer workflow. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneEventRule">datazoneEventRule</a></code> | <code>aws-cdk-lib.aws_events.IRule</code> | The event rule used to trigger the authorizer workflow. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.deadLetterKey">deadLetterKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The key used to encrypt the dead letter queue. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS Queue used as a dead letter queue for the authorizer workflow. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.metadataCollectorFunction">metadataCollectorFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function used to collect metadata from DataZone. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.metadataCollectorLogGroup">metadataCollectorLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The Cloudwatch Log Group for logging the metadata collector. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.metadataCollectorRole">metadataCollectorRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The role used to collect metadata from DataZone. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | The state machine used to orchestrate the authorizer workflow. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.stateMachineCallbackRole">stateMachineCallbackRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used by the authorizer workflow callback. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.stateMachineRole">stateMachineRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used by the authorizer workflow State Machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used to log the authorizer state machine. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `datazoneCallbackFunction`<sup>Required</sup> <a name="datazoneCallbackFunction" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneCallbackFunction"></a>

```typescript
public readonly datazoneCallbackFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function used to acknowledge the subscription grant in DataZone.

---

##### `datazoneCallbackLogGroup`<sup>Required</sup> <a name="datazoneCallbackLogGroup" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneCallbackLogGroup"></a>

```typescript
public readonly datazoneCallbackLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The Cloudwatch Log Group for logging the datazone callback.

---

##### `datazoneCallbackRole`<sup>Required</sup> <a name="datazoneCallbackRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneCallbackRole"></a>

```typescript
public readonly datazoneCallbackRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used to acknowledge the subscription grant in DataZone.

---

##### `datazoneEventRole`<sup>Required</sup> <a name="datazoneEventRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneEventRole"></a>

```typescript
public readonly datazoneEventRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used by the DataZone event to trigger the authorizer workflow.

---

##### `datazoneEventRule`<sup>Required</sup> <a name="datazoneEventRule" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.datazoneEventRule"></a>

```typescript
public readonly datazoneEventRule: IRule;
```

- *Type:* aws-cdk-lib.aws_events.IRule

The event rule used to trigger the authorizer workflow.

---

##### `deadLetterKey`<sup>Required</sup> <a name="deadLetterKey" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.deadLetterKey"></a>

```typescript
public readonly deadLetterKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The key used to encrypt the dead letter queue.

---

##### `deadLetterQueue`<sup>Required</sup> <a name="deadLetterQueue" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The SQS Queue used as a dead letter queue for the authorizer workflow.

---

##### `metadataCollectorFunction`<sup>Required</sup> <a name="metadataCollectorFunction" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.metadataCollectorFunction"></a>

```typescript
public readonly metadataCollectorFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function used to collect metadata from DataZone.

---

##### `metadataCollectorLogGroup`<sup>Required</sup> <a name="metadataCollectorLogGroup" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.metadataCollectorLogGroup"></a>

```typescript
public readonly metadataCollectorLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The Cloudwatch Log Group for logging the metadata collector.

---

##### `metadataCollectorRole`<sup>Required</sup> <a name="metadataCollectorRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.metadataCollectorRole"></a>

```typescript
public readonly metadataCollectorRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The role used to collect metadata from DataZone.

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

The state machine used to orchestrate the authorizer workflow.

---

##### `stateMachineCallbackRole`<sup>Required</sup> <a name="stateMachineCallbackRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.stateMachineCallbackRole"></a>

```typescript
public readonly stateMachineCallbackRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The IAM Role used by the authorizer workflow callback.

---

##### `stateMachineRole`<sup>Required</sup> <a name="stateMachineRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.stateMachineRole"></a>

```typescript
public readonly stateMachineRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The IAM Role used by the authorizer workflow State Machine.

---

##### `stateMachineLogGroup`<sup>Required</sup> <a name="stateMachineLogGroup" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used to log the authorizer state machine.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.AUTHORIZER_NAME">AUTHORIZER_NAME</a></code> | <code>string</code> | The name of the authorizer. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.MSK_ASSET_TYPE">MSK_ASSET_TYPE</a></code> | <code>string</code> | The asset type for the DataZone custom asset type. |

---

##### `AUTHORIZER_NAME`<sup>Required</sup> <a name="AUTHORIZER_NAME" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.AUTHORIZER_NAME"></a>

```typescript
public readonly AUTHORIZER_NAME: string;
```

- *Type:* string

The name of the authorizer.

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

##### `MSK_ASSET_TYPE`<sup>Required</sup> <a name="MSK_ASSET_TYPE" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizer.property.MSK_ASSET_TYPE"></a>

```typescript
public readonly MSK_ASSET_TYPE: string;
```

- *Type:* string

The asset type for the DataZone custom asset type.

---

### DataZoneMskEnvironmentAuthorizer <a name="DataZoneMskEnvironmentAuthorizer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer"></a>

An environment authorizer workflow for granting read access to Kafka topics.

The workflow is triggered by an event sent by the central authorizer construct.
It creates IAM policies required for the Kafka client to access the relevant topics.
It supports MSK provisioned and serverless, in single and cross accounts, and grant/revoke requests.

*Example*

```typescript
new dsf.governance.DataZoneMskEnvironmentAuthorizer(this, 'MskAuthorizer', {
  domainId: 'aba_dc999t9ime9sss',
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

new governance.DataZoneMskEnvironmentAuthorizer(scope: Construct, id: string, props: DataZoneMskEnvironmentAuthorizerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The CDK Construct scope. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.Initializer.parameter.id">id</a></code> | <code>string</code> | The CDK Construct id. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps</code> | The props for the DataZoneMskEnvironmentAuthorizer construct. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The CDK Construct scope.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.Initializer.parameter.id"></a>

- *Type:* string

The CDK Construct id.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps

The props for the DataZoneMskEnvironmentAuthorizer construct.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.isConstruct"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

governance.DataZoneMskEnvironmentAuthorizer.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.grantFunction">grantFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The lambda function used to grant access to Kafka topics. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.grantLogGroup">grantLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.LogGroup</code> | The CloudWatch Log Group used by the grant function. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.grantRole">grantRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role used to grant access to Kafka topics. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IStateMachine</code> | The environment authorizer State Machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used by the Step Functions state machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.stateMachineRole">stateMachineRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role used by the environment authorizer State Machine. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `grantFunction`<sup>Required</sup> <a name="grantFunction" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.grantFunction"></a>

```typescript
public readonly grantFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The lambda function used to grant access to Kafka topics.

---

##### `grantLogGroup`<sup>Required</sup> <a name="grantLogGroup" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.grantLogGroup"></a>

```typescript
public readonly grantLogGroup: LogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.LogGroup

The CloudWatch Log Group used by the grant function.

---

##### `grantRole`<sup>Required</sup> <a name="grantRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.grantRole"></a>

```typescript
public readonly grantRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role used to grant access to Kafka topics.

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.stateMachine"></a>

```typescript
public readonly stateMachine: IStateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IStateMachine

The environment authorizer State Machine.

---

##### `stateMachineLogGroup`<sup>Required</sup> <a name="stateMachineLogGroup" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used by the Step Functions state machine.

---

##### `stateMachineRole`<sup>Required</sup> <a name="stateMachineRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.stateMachineRole"></a>

```typescript
public readonly stateMachineRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role used by the environment authorizer State Machine.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.PERMISSIONS_BOUNDARY_STATEMENTS">PERMISSIONS_BOUNDARY_STATEMENTS</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

##### `PERMISSIONS_BOUNDARY_STATEMENTS`<sup>Required</sup> <a name="PERMISSIONS_BOUNDARY_STATEMENTS" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizer.property.PERMISSIONS_BOUNDARY_STATEMENTS"></a>

```typescript
public readonly PERMISSIONS_BOUNDARY_STATEMENTS: PolicyStatement;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement

---

### KafkaApi <a name="KafkaApi" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi"></a>

A construct to create a Kafka API admin client.

> [https://awslabs.github.io/data-solutions-framework-on-aws/](https://awslabs.github.io/data-solutions-framework-on-aws/)

#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

new streaming.KafkaApi(scope: Construct, id: string, props: KafkaApiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantConsume">grantConsume</a></code> | Grant a principal permissions to consume from a topic. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantProduce">grantProduce</a></code> | Grant a principal permissions to produce to a topic. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setAcl">setAcl</a></code> | Creates a ACL in the MSK Cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setTopic">setTopic</a></code> | Creates a topic in the MSK Cluster. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `grantConsume` <a name="grantConsume" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantConsume"></a>

```typescript
public grantConsume(id: string, topicName: string, clientAuthentication: Authentication, principal: string | IPrincipal, host?: string, removalPolicy?: RemovalPolicy, customResourceAuthentication?: Authentication): CustomResource
```

Grant a principal permissions to consume from a topic.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantConsume.parameter.id"></a>

- *Type:* string

the CDK resource ID.

---

###### `topicName`<sup>Required</sup> <a name="topicName" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantConsume.parameter.topicName"></a>

- *Type:* string

the target topic to grant consume permissions on.

---

###### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantConsume.parameter.clientAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication mode of the consumer.

---

###### `principal`<sup>Required</sup> <a name="principal" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantConsume.parameter.principal"></a>

- *Type:* string | aws-cdk-lib.aws_iam.IPrincipal

the principal receiveing grant consume permissions.

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantConsume.parameter.host"></a>

- *Type:* string

the host of the consumer.

---

###### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantConsume.parameter.removalPolicy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

the removal policy to apply to the grant.

---

###### `customResourceAuthentication`<sup>Optional</sup> <a name="customResourceAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantConsume.parameter.customResourceAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication used by the Kafka API admin client to create the ACL.

---

##### `grantProduce` <a name="grantProduce" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantProduce"></a>

```typescript
public grantProduce(id: string, topicName: string, clientAuthentication: Authentication, principal: string | IPrincipal, host?: string, removalPolicy?: RemovalPolicy, customResourceAuthentication?: Authentication): CustomResource
```

Grant a principal permissions to produce to a topic.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantProduce.parameter.id"></a>

- *Type:* string

the CDK resource ID.

---

###### `topicName`<sup>Required</sup> <a name="topicName" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantProduce.parameter.topicName"></a>

- *Type:* string

the target topic to grant produce permissions on.

---

###### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantProduce.parameter.clientAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication mode of the producer.

---

###### `principal`<sup>Required</sup> <a name="principal" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantProduce.parameter.principal"></a>

- *Type:* string | aws-cdk-lib.aws_iam.IPrincipal

the principal receiving grant produce permissions.

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantProduce.parameter.host"></a>

- *Type:* string

the host of the producer.

---

###### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantProduce.parameter.removalPolicy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

the removal policy to apply to the grant.

---

###### `customResourceAuthentication`<sup>Optional</sup> <a name="customResourceAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.grantProduce.parameter.customResourceAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication used by the Kafka API admin client to create the ACL.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

##### `setAcl` <a name="setAcl" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setAcl"></a>

```typescript
public setAcl(id: string, aclDefinition: Acl, removalPolicy?: RemovalPolicy, clientAuthentication?: Authentication): CustomResource
```

Creates a ACL in the MSK Cluster.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setAcl.parameter.id"></a>

- *Type:* string

the CDK ID of the ACL.

---

###### `aclDefinition`<sup>Required</sup> <a name="aclDefinition" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setAcl.parameter.aclDefinition"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Acl

the Kafka ACL definition.

---

###### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setAcl.parameter.removalPolicy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

Wether to keep the ACL or delete it when removing the resource from the Stack.

---

###### `clientAuthentication`<sup>Optional</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setAcl.parameter.clientAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication used by the Kafka API admin client to create the ACL.

---

##### `setTopic` <a name="setTopic" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setTopic"></a>

```typescript
public setTopic(id: string, clientAuthentication: Authentication, topicDefinition: MskTopic, removalPolicy?: RemovalPolicy, waitForLeaders?: boolean, timeout?: number): CustomResource
```

Creates a topic in the MSK Cluster.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setTopic.parameter.id"></a>

- *Type:* string

the CDK ID for Topic.

---

###### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setTopic.parameter.clientAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication used by the Kafka API admin client to create the topic.

---

###### `topicDefinition`<sup>Required</sup> <a name="topicDefinition" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setTopic.parameter.topicDefinition"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskTopic

the Kafka topic definition.

---

###### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setTopic.parameter.removalPolicy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

Wether to keep the topic or delete it when removing the resource from the Stack.

---

###### `waitForLeaders`<sup>Optional</sup> <a name="waitForLeaders" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setTopic.parameter.waitForLeaders"></a>

- *Type:* boolean

If set to true, waits until metadata for the new topics doesn't throw LEADER_NOT_AVAILABLE.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.setTopic.parameter.timeout"></a>

- *Type:* number

The time in ms to wait for a topic to be completely created on the controller node.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.isConstruct"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.KafkaApi.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskAclFunction">mskAclFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function used by the Custom Resource provider when MSK is using mTLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskAclLogGroup">mskAclLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The Cloudwatch Log Group used by the Custom Resource provider when MSK is using mTLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskAclRole">mskAclRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the Custom Resource provider when MSK is using mTLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskAclSecurityGroup">mskAclSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Group used by the Custom Resource provider when MSK is using mTLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskIamFunction">mskIamFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function used by the Custom Resource provider when MSK is using IAM authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskIamLogGroup">mskIamLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The Cloudwatch Log Group used by the Custom Resource provider when MSK is using IAM authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskIamRole">mskIamRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the Custom Resource provider when MSK is using IAM authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskIamSecurityGroup">mskIamSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Group used by the Custom Resource provider when MSK is using IAM authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.serviceToken">serviceToken</a></code> | <code>string</code> | If there is an already existing service token deployed for the custom resource you can reuse it to reduce the number of resource created. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `mskAclFunction`<sup>Optional</sup> <a name="mskAclFunction" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskAclFunction"></a>

```typescript
public readonly mskAclFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function used by the Custom Resource provider when MSK is using mTLS authentication.

---

##### `mskAclLogGroup`<sup>Optional</sup> <a name="mskAclLogGroup" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskAclLogGroup"></a>

```typescript
public readonly mskAclLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The Cloudwatch Log Group used by the Custom Resource provider when MSK is using mTLS authentication.

---

##### `mskAclRole`<sup>Optional</sup> <a name="mskAclRole" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskAclRole"></a>

```typescript
public readonly mskAclRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by the Custom Resource provider when MSK is using mTLS authentication.

---

##### `mskAclSecurityGroup`<sup>Optional</sup> <a name="mskAclSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskAclSecurityGroup"></a>

```typescript
public readonly mskAclSecurityGroup: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The Security Group used by the Custom Resource provider when MSK is using mTLS authentication.

---

##### `mskIamFunction`<sup>Optional</sup> <a name="mskIamFunction" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskIamFunction"></a>

```typescript
public readonly mskIamFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function used by the Custom Resource provider when MSK is using IAM authentication.

---

##### `mskIamLogGroup`<sup>Optional</sup> <a name="mskIamLogGroup" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskIamLogGroup"></a>

```typescript
public readonly mskIamLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The Cloudwatch Log Group used by the Custom Resource provider when MSK is using IAM authentication.

---

##### `mskIamRole`<sup>Optional</sup> <a name="mskIamRole" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskIamRole"></a>

```typescript
public readonly mskIamRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by the Custom Resource provider when MSK is using IAM authentication.

---

##### `mskIamSecurityGroup`<sup>Optional</sup> <a name="mskIamSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.mskIamSecurityGroup"></a>

```typescript
public readonly mskIamSecurityGroup: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The Security Group used by the Custom Resource provider when MSK is using IAM authentication.

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

If there is an already existing service token deployed for the custom resource you can reuse it to reduce the number of resource created.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApi.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### MskProvisioned <a name="MskProvisioned" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned"></a>

A construct to create an MSK Provisioned cluster.

> [https://awslabs.github.io/data-solutions-framework-on-aws/](https://awslabs.github.io/data-solutions-framework-on-aws/)

*Example*

```typescript
const msk = new dsf.streaming.MskProvisioned(this, 'cluster');
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

new streaming.MskProvisioned(scope: Construct, id: string, props?: MskProvisionedProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.addClusterPolicy">addClusterPolicy</a></code> | Add a cluster policy. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.deleteClusterPolicy">deleteClusterPolicy</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.getBootstrapBrokers">getBootstrapBrokers</a></code> | Method to get bootstrap broker connection string based on the authentication mode. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantConsume">grantConsume</a></code> | Grant a principal permissions to consume from a topic. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantProduce">grantProduce</a></code> | Grant a principal permissions to produce to a topic. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.putClusterPolicy">putClusterPolicy</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setAcl">setAcl</a></code> | Creates ACL in the Msk Cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setTopic">setTopic</a></code> | Creates a topic in the Msk Cluster. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addClusterPolicy` <a name="addClusterPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.addClusterPolicy"></a>

```typescript
public addClusterPolicy(policy: PolicyDocument, id: string): CfnClusterPolicy
```

Add a cluster policy.

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.addClusterPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

the IAM principal to grand the consume action.

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.addClusterPolicy.parameter.id"></a>

- *Type:* string

the CDK id for the Cluster Policy.

---

##### `deleteClusterPolicy` <a name="deleteClusterPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.deleteClusterPolicy"></a>

```typescript
public deleteClusterPolicy(): void
```

##### `getBootstrapBrokers` <a name="getBootstrapBrokers" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.getBootstrapBrokers"></a>

```typescript
public getBootstrapBrokers(authentication: Authentication): string
```

Method to get bootstrap broker connection string based on the authentication mode.

###### `authentication`<sup>Required</sup> <a name="authentication" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.getBootstrapBrokers.parameter.authentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

the authentication mode.

---

##### `grantConsume` <a name="grantConsume" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantConsume"></a>

```typescript
public grantConsume(id: string, topicName: string, clientAuthentication: Authentication, principal: string | IPrincipal, host?: string, removalPolicy?: RemovalPolicy, customResourceAuthentication?: Authentication): CustomResource
```

Grant a principal permissions to consume from a topic.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantConsume.parameter.id"></a>

- *Type:* string

the CDK resource ID.

---

###### `topicName`<sup>Required</sup> <a name="topicName" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantConsume.parameter.topicName"></a>

- *Type:* string

the target topic to grant consume permissions on.

---

###### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantConsume.parameter.clientAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication mode of the consumer.

---

###### `principal`<sup>Required</sup> <a name="principal" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantConsume.parameter.principal"></a>

- *Type:* string | aws-cdk-lib.aws_iam.IPrincipal

the principal receiveing grant consume permissions.

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantConsume.parameter.host"></a>

- *Type:* string

the host of the consumer.

---

###### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantConsume.parameter.removalPolicy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

the removal policy to apply to the grant.

---

###### `customResourceAuthentication`<sup>Optional</sup> <a name="customResourceAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantConsume.parameter.customResourceAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication used by the Kafka API admin client to create the ACL.

---

##### `grantProduce` <a name="grantProduce" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantProduce"></a>

```typescript
public grantProduce(id: string, topicName: string, clientAuthentication: Authentication, principal: string | IPrincipal, host?: string, removalPolicy?: RemovalPolicy, customResourceAuthentication?: Authentication): CustomResource
```

Grant a principal permissions to produce to a topic.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantProduce.parameter.id"></a>

- *Type:* string

the CDK resource ID.

---

###### `topicName`<sup>Required</sup> <a name="topicName" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantProduce.parameter.topicName"></a>

- *Type:* string

the target topic to grant produce permissions on.

---

###### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantProduce.parameter.clientAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication mode of the producer.

---

###### `principal`<sup>Required</sup> <a name="principal" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantProduce.parameter.principal"></a>

- *Type:* string | aws-cdk-lib.aws_iam.IPrincipal

the principal receiving grant produce permissions.

---

###### `host`<sup>Optional</sup> <a name="host" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantProduce.parameter.host"></a>

- *Type:* string

the host of the producer.

---

###### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantProduce.parameter.removalPolicy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

the removal policy to apply to the grant.

---

###### `customResourceAuthentication`<sup>Optional</sup> <a name="customResourceAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.grantProduce.parameter.customResourceAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication used by the Kafka API admin client to create the ACL.

---

##### `putClusterPolicy` <a name="putClusterPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.putClusterPolicy"></a>

```typescript
public putClusterPolicy(policy: string, id: string, currentVersion?: string): void
```

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.putClusterPolicy.parameter.policy"></a>

- *Type:* string

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.putClusterPolicy.parameter.id"></a>

- *Type:* string

---

###### `currentVersion`<sup>Optional</sup> <a name="currentVersion" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.putClusterPolicy.parameter.currentVersion"></a>

- *Type:* string

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

##### `setAcl` <a name="setAcl" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setAcl"></a>

```typescript
public setAcl(id: string, aclDefinition: Acl, removalPolicy?: RemovalPolicy, clientAuthentication?: Authentication): CustomResource
```

Creates ACL in the Msk Cluster.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setAcl.parameter.id"></a>

- *Type:* string

the CDK ID of the ACL.

---

###### `aclDefinition`<sup>Required</sup> <a name="aclDefinition" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setAcl.parameter.aclDefinition"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Acl

the Kafka Acl definition.

---

###### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setAcl.parameter.removalPolicy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

Wether to keep the ACL or delete it when removing the resource from the Stack {@default RemovalPolicy.RETAIN}.

---

###### `clientAuthentication`<sup>Optional</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setAcl.parameter.clientAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication used by the Kafka API admin client to create the ACL.

---

##### `setTopic` <a name="setTopic" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setTopic"></a>

```typescript
public setTopic(id: string, clientAuthentication: Authentication, topicDefinition: MskTopic, removalPolicy?: RemovalPolicy, waitForLeaders?: boolean, timeout?: number): CustomResource
```

Creates a topic in the Msk Cluster.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setTopic.parameter.id"></a>

- *Type:* string

the CDK ID of the Topic.

---

###### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setTopic.parameter.clientAuthentication"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.Authentication

The authentication used by the Kafka API admin client to create the topic.

---

###### `topicDefinition`<sup>Required</sup> <a name="topicDefinition" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setTopic.parameter.topicDefinition"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskTopic

the Kafka topic definition.

---

###### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setTopic.parameter.removalPolicy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

Wether to keep the topic or delete it when removing the resource from the Stack {@default RemovalPolicy.RETAIN}.

---

###### `waitForLeaders`<sup>Optional</sup> <a name="waitForLeaders" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setTopic.parameter.waitForLeaders"></a>

- *Type:* boolean

If this is true it will wait until metadata for the new topics doesn't throw LEADER_NOT_AVAILABLE.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.setTopic.parameter.timeout"></a>

- *Type:* number

The time in ms to wait for a topic to be completely created on the controller node.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.createClusterConfiguration">createClusterConfiguration</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.isConstruct"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.MskProvisioned.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `createClusterConfiguration` <a name="createClusterConfiguration" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.createClusterConfiguration"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.MskProvisioned.createClusterConfiguration(scope: Construct, id: string, name: string, serverPropertiesFilePath: string, kafkaVersions?: KafkaVersion[], configurationDescription?: string, latestRevision?: LatestRevisionProperty)
```

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.createClusterConfiguration.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.createClusterConfiguration.parameter.id"></a>

- *Type:* string

---

###### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.createClusterConfiguration.parameter.name"></a>

- *Type:* string

---

###### `serverPropertiesFilePath`<sup>Required</sup> <a name="serverPropertiesFilePath" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.createClusterConfiguration.parameter.serverPropertiesFilePath"></a>

- *Type:* string

---

###### `kafkaVersions`<sup>Optional</sup> <a name="kafkaVersions" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.createClusterConfiguration.parameter.kafkaVersions"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion[]

---

###### `configurationDescription`<sup>Optional</sup> <a name="configurationDescription" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.createClusterConfiguration.parameter.configurationDescription"></a>

- *Type:* string

---

###### `latestRevision`<sup>Optional</sup> <a name="latestRevision" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.createClusterConfiguration.parameter.latestRevision"></a>

- *Type:* aws-cdk-lib.aws_msk.CfnConfiguration.LatestRevisionProperty

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_msk.CfnCluster</code> | The MSK cluster created by the construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.encryptionAtRestKey">encryptionAtRestKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS CMK key for encrypting data within the cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the MSK cluster is deployed. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.applyConfigurationFunction">applyConfigurationFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function responsible for applying MSK configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.applyConfigurationLogGroup">applyConfigurationLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used by the Lambda responsible for applying MSK configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.applyConfigurationRole">applyConfigurationRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the Lambda responsible for applying MSK configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.applyConfigurationSecurityGroup">applyConfigurationSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Group used by the Lambda responsible for applying MSK configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.brokerLogGroup">brokerLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch log group associated with brokers activity. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.brokerSecurityGroup">brokerSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group associated with the MSK brokers. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.clusterConfiguration">clusterConfiguration</a></code> | <code>aws-cdk-lib.aws_msk.CfnConfiguration</code> | The MSK cluster configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.iamCrudAdminFunction">iamCrudAdminFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function responsible for CRUD operations via IAM authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.iamCrudAdminLogGroup">iamCrudAdminLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used by the Lambda responsible for CRUD operations via IAM authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.iamCrudAdminRole">iamCrudAdminRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role used by the Lambda responsible for CRUD operations via IAM authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.iamCrudAdminSecurityGroup">iamCrudAdminSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Group used by the Lambda responsible for CRUD operations via IAM authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.inClusterAclFunction">inClusterAclFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function responsible for CRUD operations via mTLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.inClusterAclLogGroup">inClusterAclLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used by the Lambda responsible for CRUD operations via mTLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.inClusterAclRole">inClusterAclRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role used by the Lambda responsible for CRUD operations via mTLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.inClusterAclSecurityGroup">inClusterAclSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Group used by the Lambda responsible for CRUD operations via mTLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.serviceToken">serviceToken</a></code> | <code>string</code> | If there is an already existing service token deployed for the custom resource you can reuse it to reduce the number of resource created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateConnectivityFunction">updateConnectivityFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function responsible for updating MSK Connectivity. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateConnectivityLogGroup">updateConnectivityLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used by the Lambda responsible for updating MSK Connectivity. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateConnectivityRole">updateConnectivityRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the Lambda responsible for updating MSK Connectivity. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateConnectivitySecurityGroup">updateConnectivitySecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The Security Group used by the Lambda responsible for updating MSK Connectivity. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateZookepeerFunction">updateZookepeerFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function responsible for updating Zookeeper. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateZookepeerLogGroup">updateZookepeerLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used by the Lambda responsible for updating Zookeeper. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateZookepeerRole">updateZookepeerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the Lambda responsible for updating Zookeeper. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateZookepeerSecurityGroup">updateZookepeerSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | THe Security Group associated to the Lambda responsible for updating Zookeeper. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.cluster"></a>

```typescript
public readonly cluster: CfnCluster;
```

- *Type:* aws-cdk-lib.aws_msk.CfnCluster

The MSK cluster created by the construct.

---

##### `encryptionAtRestKey`<sup>Required</sup> <a name="encryptionAtRestKey" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.encryptionAtRestKey"></a>

```typescript
public readonly encryptionAtRestKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS CMK key for encrypting data within the cluster.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the MSK cluster is deployed.

---

##### `applyConfigurationFunction`<sup>Optional</sup> <a name="applyConfigurationFunction" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.applyConfigurationFunction"></a>

```typescript
public readonly applyConfigurationFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function responsible for applying MSK configuration.

---

##### `applyConfigurationLogGroup`<sup>Optional</sup> <a name="applyConfigurationLogGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.applyConfigurationLogGroup"></a>

```typescript
public readonly applyConfigurationLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used by the Lambda responsible for applying MSK configuration.

---

##### `applyConfigurationRole`<sup>Optional</sup> <a name="applyConfigurationRole" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.applyConfigurationRole"></a>

```typescript
public readonly applyConfigurationRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by the Lambda responsible for applying MSK configuration.

---

##### `applyConfigurationSecurityGroup`<sup>Optional</sup> <a name="applyConfigurationSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.applyConfigurationSecurityGroup"></a>

```typescript
public readonly applyConfigurationSecurityGroup: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The Security Group used by the Lambda responsible for applying MSK configuration.

---

##### `brokerLogGroup`<sup>Optional</sup> <a name="brokerLogGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.brokerLogGroup"></a>

```typescript
public readonly brokerLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch log group associated with brokers activity.

---

##### `brokerSecurityGroup`<sup>Optional</sup> <a name="brokerSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.brokerSecurityGroup"></a>

```typescript
public readonly brokerSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The security group associated with the MSK brokers.

---

##### `clusterConfiguration`<sup>Optional</sup> <a name="clusterConfiguration" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.clusterConfiguration"></a>

```typescript
public readonly clusterConfiguration: CfnConfiguration;
```

- *Type:* aws-cdk-lib.aws_msk.CfnConfiguration

The MSK cluster configuration.

---

##### `iamCrudAdminFunction`<sup>Optional</sup> <a name="iamCrudAdminFunction" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.iamCrudAdminFunction"></a>

```typescript
public readonly iamCrudAdminFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function responsible for CRUD operations via IAM authentication.

---

##### `iamCrudAdminLogGroup`<sup>Optional</sup> <a name="iamCrudAdminLogGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.iamCrudAdminLogGroup"></a>

```typescript
public readonly iamCrudAdminLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used by the Lambda responsible for CRUD operations via IAM authentication.

---

##### `iamCrudAdminRole`<sup>Optional</sup> <a name="iamCrudAdminRole" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.iamCrudAdminRole"></a>

```typescript
public readonly iamCrudAdminRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role used by the Lambda responsible for CRUD operations via IAM authentication.

---

##### `iamCrudAdminSecurityGroup`<sup>Optional</sup> <a name="iamCrudAdminSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.iamCrudAdminSecurityGroup"></a>

```typescript
public readonly iamCrudAdminSecurityGroup: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The Security Group used by the Lambda responsible for CRUD operations via IAM authentication.

---

##### `inClusterAclFunction`<sup>Optional</sup> <a name="inClusterAclFunction" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.inClusterAclFunction"></a>

```typescript
public readonly inClusterAclFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function responsible for CRUD operations via mTLS authentication.

---

##### `inClusterAclLogGroup`<sup>Optional</sup> <a name="inClusterAclLogGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.inClusterAclLogGroup"></a>

```typescript
public readonly inClusterAclLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used by the Lambda responsible for CRUD operations via mTLS authentication.

---

##### `inClusterAclRole`<sup>Optional</sup> <a name="inClusterAclRole" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.inClusterAclRole"></a>

```typescript
public readonly inClusterAclRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role used by the Lambda responsible for CRUD operations via mTLS authentication.

---

##### `inClusterAclSecurityGroup`<sup>Optional</sup> <a name="inClusterAclSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.inClusterAclSecurityGroup"></a>

```typescript
public readonly inClusterAclSecurityGroup: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The Security Group used by the Lambda responsible for CRUD operations via mTLS authentication.

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

If there is an already existing service token deployed for the custom resource you can reuse it to reduce the number of resource created.

---

##### `updateConnectivityFunction`<sup>Optional</sup> <a name="updateConnectivityFunction" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateConnectivityFunction"></a>

```typescript
public readonly updateConnectivityFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function responsible for updating MSK Connectivity.

---

##### `updateConnectivityLogGroup`<sup>Optional</sup> <a name="updateConnectivityLogGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateConnectivityLogGroup"></a>

```typescript
public readonly updateConnectivityLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used by the Lambda responsible for updating MSK Connectivity.

---

##### `updateConnectivityRole`<sup>Optional</sup> <a name="updateConnectivityRole" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateConnectivityRole"></a>

```typescript
public readonly updateConnectivityRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by the Lambda responsible for updating MSK Connectivity.

---

##### `updateConnectivitySecurityGroup`<sup>Optional</sup> <a name="updateConnectivitySecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateConnectivitySecurityGroup"></a>

```typescript
public readonly updateConnectivitySecurityGroup: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The Security Group used by the Lambda responsible for updating MSK Connectivity.

---

##### `updateZookepeerFunction`<sup>Optional</sup> <a name="updateZookepeerFunction" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateZookepeerFunction"></a>

```typescript
public readonly updateZookepeerFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function responsible for updating Zookeeper.

---

##### `updateZookepeerLogGroup`<sup>Optional</sup> <a name="updateZookepeerLogGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateZookepeerLogGroup"></a>

```typescript
public readonly updateZookepeerLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used by the Lambda responsible for updating Zookeeper.

---

##### `updateZookepeerRole`<sup>Optional</sup> <a name="updateZookepeerRole" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateZookepeerRole"></a>

```typescript
public readonly updateZookepeerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by the Lambda responsible for updating Zookeeper.

---

##### `updateZookepeerSecurityGroup`<sup>Optional</sup> <a name="updateZookepeerSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.updateZookepeerSecurityGroup"></a>

```typescript
public readonly updateZookepeerSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

THe Security Group associated to the Lambda responsible for updating Zookeeper.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.MSK_DEFAULT_VERSION">MSK_DEFAULT_VERSION</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

##### `MSK_DEFAULT_VERSION`<sup>Required</sup> <a name="MSK_DEFAULT_VERSION" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisioned.property.MSK_DEFAULT_VERSION"></a>

```typescript
public readonly MSK_DEFAULT_VERSION: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

---

### MskServerless <a name="MskServerless" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless"></a>

A construct to create an MSK Serverless cluster.

> [https://awslabs.github.io/data-solutions-framework-on-aws/](https://awslabs.github.io/data-solutions-framework-on-aws/)

*Example*

```typescript
const msk = new dsf.streaming.MskServerless(this, 'cluster');
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

new streaming.MskServerless(scope: Construct, id: string, props?: MskServerlessProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addClusterPolicy">addClusterPolicy</a></code> | Add a cluster policy. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addTopic">addTopic</a></code> | Creates a topic in the MSK Serverless. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.grantConsume">grantConsume</a></code> | Grant a principal the right to consume data from a topic. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.grantProduce">grantProduce</a></code> | Grant a principal to produce data to a topic. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addClusterPolicy` <a name="addClusterPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addClusterPolicy"></a>

```typescript
public addClusterPolicy(policy: PolicyDocument, id: string): CfnClusterPolicy
```

Add a cluster policy.

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addClusterPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

the IAM principal to grand the consume action.

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addClusterPolicy.parameter.id"></a>

- *Type:* string

the CDK id for the Cluster Policy.

---

##### `addTopic` <a name="addTopic" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addTopic"></a>

```typescript
public addTopic(id: string, topicDefinition: MskTopic, removalPolicy?: RemovalPolicy, waitForLeaders?: boolean, timeout?: number): CustomResource
```

Creates a topic in the MSK Serverless.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addTopic.parameter.id"></a>

- *Type:* string

the CDK id for the topic.

---

###### `topicDefinition`<sup>Required</sup> <a name="topicDefinition" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addTopic.parameter.topicDefinition"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskTopic

the Kafka topic definition.

---

###### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addTopic.parameter.removalPolicy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

Wether to keep the topic or delete it when removing the resource from the Stack.

---

###### `waitForLeaders`<sup>Optional</sup> <a name="waitForLeaders" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addTopic.parameter.waitForLeaders"></a>

- *Type:* boolean

Wait until metadata for the new topics doesn't throw LEADER_NOT_AVAILABLE.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.addTopic.parameter.timeout"></a>

- *Type:* number

The time in ms to wait for a topic to be completely created on the controller node.

---

##### `grantConsume` <a name="grantConsume" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.grantConsume"></a>

```typescript
public grantConsume(topicName: string, principal: IPrincipal): CustomResource
```

Grant a principal the right to consume data from a topic.

###### `topicName`<sup>Required</sup> <a name="topicName" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.grantConsume.parameter.topicName"></a>

- *Type:* string

the topic to which the principal can consume data from.

---

###### `principal`<sup>Required</sup> <a name="principal" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.grantConsume.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

the IAM principal to grand the consume action.

---

##### `grantProduce` <a name="grantProduce" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.grantProduce"></a>

```typescript
public grantProduce(topicName: string, principal: IPrincipal): CustomResource
```

Grant a principal to produce data to a topic.

###### `topicName`<sup>Required</sup> <a name="topicName" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.grantProduce.parameter.topicName"></a>

- *Type:* string

the name of the topic to grant producer permissions.

---

###### `principal`<sup>Required</sup> <a name="principal" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.grantProduce.parameter.principal"></a>

- *Type:* aws-cdk-lib.aws_iam.IPrincipal

the IAM principal to grand producer permissions.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.isConstruct"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.MskServerless.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.cluster">cluster</a></code> | <code>aws-cdk-lib.aws_msk.CfnServerlessCluster</code> | The MSK cluster as a CloudFormation resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.clusterBoostrapBrokers">clusterBoostrapBrokers</a></code> | <code>string</code> | The list of bootstrap servers for client to connect. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.lambdaSecurityGroup">lambdaSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group used by the configuration Lambda. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the MSK cluster is deployed. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.brokerSecurityGroup">brokerSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group used by the cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.serviceToken">serviceToken</a></code> | <code>string</code> | If there is an already existing service token deployed for the custom resource you can reuse it to reduce the number of resource created. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.cluster"></a>

```typescript
public readonly cluster: CfnServerlessCluster;
```

- *Type:* aws-cdk-lib.aws_msk.CfnServerlessCluster

The MSK cluster as a CloudFormation resource.

---

##### `clusterBoostrapBrokers`<sup>Required</sup> <a name="clusterBoostrapBrokers" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.clusterBoostrapBrokers"></a>

```typescript
public readonly clusterBoostrapBrokers: string;
```

- *Type:* string

The list of bootstrap servers for client to connect.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the cluster.

---

##### `lambdaSecurityGroup`<sup>Required</sup> <a name="lambdaSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.lambdaSecurityGroup"></a>

```typescript
public readonly lambdaSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The security group used by the configuration Lambda.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the MSK cluster is deployed.

---

##### `brokerSecurityGroup`<sup>Optional</sup> <a name="brokerSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.brokerSecurityGroup"></a>

```typescript
public readonly brokerSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The security group used by the cluster.

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

If there is an already existing service token deployed for the custom resource you can reuse it to reduce the number of resource created.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerless.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### OpenSearchApi <a name="OpenSearchApi" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi"></a>

A construct to create an OpenSearch API client.

*Example*

```typescript
 const domainEndpoint='search-XXXXXX.XXXXXX.es.amazonaws.com';
 const apiRole = cdk.iam.Role.fromRoleName(this, 'ApiRole', '<IAMRoleWithOpenSearchPermissions>');
 const osApi = new dsf.consumption.OpenSearchApi(this, 'MyOpenSearchApi',{
   iamHandlerRole:apiRole,
   openSearchEndpoint:domainEndpoint,
   openSearchClusterType:dsf.consumption.OpenSearchClusterType.PROVISIONED,
   removalPolicy:cdk.RemovalPolicy.DESTROY
 });

 const roleMap = osApi.addRoleMapping('DashBoardUser', 'dashboards_user','<IAMIdentityCenterDashboardUsersGroupId>');
 const add1Cr = osApi.callOpenSearchApi('AddData1', 'movies-01/_doc/1111',{"title": "Rush", "year": 2013}, 'PUT');
 add1Cr.node.addDependency(roleMap);
 const add2Cr = osApi.callOpenSearchApi('AddData3', 'movies-01/_doc/2222',{"title": "Toy Story", "year": 2014}, 'PUT');
 add2Cr.node.addDependency(roleMap);
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

new consumption.OpenSearchApi(scope: Construct, id: string, props: OpenSearchApiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.Initializer.parameter.id">id</a></code> | <code>string</code> | unique ID for the construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.Initializer.parameter.id"></a>

- *Type:* string

unique ID for the construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.addRoleMapping">addRoleMapping</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.callOpenSearchApi">callOpenSearchApi</a></code> | Calls OpenSearch API using custom resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addRoleMapping` <a name="addRoleMapping" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.addRoleMapping"></a>

```typescript
public addRoleMapping(id: string, name: string, role: string, persist?: boolean): CustomResource
```

> [https://opensearch.org/docs/2.9/security/access-control/users-roles/#predefined-roles](https://opensearch.org/docs/2.9/security/access-control/users-roles/#predefined-roles)

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.addRoleMapping.parameter.id"></a>

- *Type:* string

The CDK resource ID.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.addRoleMapping.parameter.name"></a>

- *Type:* string

OpenSearch role name.

---

###### `role`<sup>Required</sup> <a name="role" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.addRoleMapping.parameter.role"></a>

- *Type:* string

list of IAM roles.

For IAM Identity center provide SAML group Id as a role

---

###### `persist`<sup>Optional</sup> <a name="persist" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.addRoleMapping.parameter.persist"></a>

- *Type:* boolean

Set to true if you want to prevent the roles to be ovewritten by subsequent PUT API calls.

Default false.

---

##### `callOpenSearchApi` <a name="callOpenSearchApi" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.callOpenSearchApi"></a>

```typescript
public callOpenSearchApi(id: string, apiPath: string, body: any, method?: string): CustomResource
```

Calls OpenSearch API using custom resource.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.callOpenSearchApi.parameter.id"></a>

- *Type:* string

The CDK resource ID.

---

###### `apiPath`<sup>Required</sup> <a name="apiPath" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.callOpenSearchApi.parameter.apiPath"></a>

- *Type:* string

OpenSearch API path.

---

###### `body`<sup>Required</sup> <a name="body" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.callOpenSearchApi.parameter.body"></a>

- *Type:* any

OpenSearch API request body.

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.callOpenSearchApi.parameter.method"></a>

- *Type:* string

Opensearch API method,.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.isConstruct"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

consumption.OpenSearchApi.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.apiFunction">apiFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function used for the onEventHandler. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.apiLogGroup">apiLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the  onEventHandler Lambda Function. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.apiRole">apiRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the onEventHandler Lambba Function. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.apiSecurityGroups">apiSecurityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of EC2 Security Groups used by the Lambda Functions. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `apiFunction`<sup>Required</sup> <a name="apiFunction" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.apiFunction"></a>

```typescript
public readonly apiFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function used for the onEventHandler.

---

##### `apiLogGroup`<sup>Required</sup> <a name="apiLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.apiLogGroup"></a>

```typescript
public readonly apiLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the  onEventHandler Lambda Function.

---

##### `apiRole`<sup>Required</sup> <a name="apiRole" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.apiRole"></a>

```typescript
public readonly apiRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the onEventHandler Lambba Function.

---

##### `apiSecurityGroups`<sup>Optional</sup> <a name="apiSecurityGroups" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.apiSecurityGroups"></a>

```typescript
public readonly apiSecurityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The list of EC2 Security Groups used by the Lambda Functions.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApi.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### OpenSearchCluster <a name="OpenSearchCluster" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster"></a>

A construct to provision Amazon OpenSearch Cluster and OpenSearch Dashboards.

Uses IAM Identity Center SAML authentication.
If OpenSearch cluster is deployed in vpc created using DataVpc construct,
ClientVPNEndpoint will be provisioned automatically for secure access to OpenSearch Dashboards.

*Example*

```typescript
 const osCluster = new dsf.consumption.OpenSearchCluster(this, 'MyOpenSearchCluster',{
   domainName:"mycluster1",
   samlEntityId:'<IdpIdentityId>',
   samlMetadataContent:'<IdpMetadataXml>',
   samlMasterBackendRole:'<IAMIdentityCenterAdminGroupId>',
   deployInVpc:true,
   removalPolicy:cdk.RemovalPolicy.DESTROY
 });

 osCluster.addRoleMapping('DashBoardUser', 'dashboards_user','<IAMIdentityCenterDashboardUsersGroupId>');
 osCluster.addRoleMapping('ReadAllRole', 'readall','<IAMIdentityCenterDashboardUsersGroupId>');
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

new consumption.OpenSearchCluster(scope: Construct, id: string, props: OpenSearchClusterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the AWS CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the AWS CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps</code> | the OpenSearchCluster [properties]{@link OpenSearchClusterProps}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the AWS CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.Initializer.parameter.id"></a>

- *Type:* string

the ID of the AWS CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps

the OpenSearchCluster [properties]{@link OpenSearchClusterProps}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.addRoleMapping">addRoleMapping</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.callOpenSearchApi">callOpenSearchApi</a></code> | Calls OpenSearch API using custom resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addRoleMapping` <a name="addRoleMapping" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.addRoleMapping"></a>

```typescript
public addRoleMapping(id: string, name: string, role: string, persist?: boolean): CustomResource
```

> [https://opensearch.org/docs/2.9/security/access-control/users-roles/#predefined-roles](https://opensearch.org/docs/2.9/security/access-control/users-roles/#predefined-roles)

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.addRoleMapping.parameter.id"></a>

- *Type:* string

The CDK resource ID.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.addRoleMapping.parameter.name"></a>

- *Type:* string

OpenSearch role name.

---

###### `role`<sup>Required</sup> <a name="role" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.addRoleMapping.parameter.role"></a>

- *Type:* string

list of IAM roles.

For IAM Identity center provide SAML group Id as a role

---

###### `persist`<sup>Optional</sup> <a name="persist" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.addRoleMapping.parameter.persist"></a>

- *Type:* boolean

Set to true if you want to prevent the roles to be ovewritten by subsequent PUT API calls.

Default false.

---

##### `callOpenSearchApi` <a name="callOpenSearchApi" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.callOpenSearchApi"></a>

```typescript
public callOpenSearchApi(id: string, apiPath: string, body: any, method?: string): CustomResource
```

Calls OpenSearch API using custom resource.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.callOpenSearchApi.parameter.id"></a>

- *Type:* string

The CDK resource ID.

---

###### `apiPath`<sup>Required</sup> <a name="apiPath" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.callOpenSearchApi.parameter.apiPath"></a>

- *Type:* string

OpenSearch API path.

---

###### `body`<sup>Required</sup> <a name="body" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.callOpenSearchApi.parameter.body"></a>

- *Type:* any

OpenSearch API request body.

---

###### `method`<sup>Optional</sup> <a name="method" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.callOpenSearchApi.parameter.method"></a>

- *Type:* string

Opensearch API method,.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.isConstruct"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

consumption.OpenSearchCluster.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.domain">domain</a></code> | <code>aws-cdk-lib.aws_opensearchservice.IDomain</code> | OpenSearchCluster domain. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used to encrypt data and logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | CloudWatch Logs Log Group to store OpenSearch cluster logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.masterRole">masterRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | IAM Role used to provision and configure OpenSearch domain. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.openSearchApiFunction">openSearchApiFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | Lambda Function used for OpenSearch API. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.openSearchApiLogGroup">openSearchApiLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | CloudWatch Logs Log Group to store OpenSearch API logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.apiSecurityGroups">apiSecurityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | Security Group for OpenSearch API Lambda Function. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | VPC OpenSearch cluster is provisioned in. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.domain"></a>

```typescript
public readonly domain: IDomain;
```

- *Type:* aws-cdk-lib.aws_opensearchservice.IDomain

OpenSearchCluster domain.

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS Key used to encrypt data and logs.

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

CloudWatch Logs Log Group to store OpenSearch cluster logs.

---

##### `masterRole`<sup>Required</sup> <a name="masterRole" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.masterRole"></a>

```typescript
public readonly masterRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

IAM Role used to provision and configure OpenSearch domain.

---

##### `openSearchApiFunction`<sup>Required</sup> <a name="openSearchApiFunction" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.openSearchApiFunction"></a>

```typescript
public readonly openSearchApiFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

Lambda Function used for OpenSearch API.

> [OpenSearchApi](OpenSearchApi)

---

##### `openSearchApiLogGroup`<sup>Required</sup> <a name="openSearchApiLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.openSearchApiLogGroup"></a>

```typescript
public readonly openSearchApiLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

CloudWatch Logs Log Group to store OpenSearch API logs.

---

##### `apiSecurityGroups`<sup>Optional</sup> <a name="apiSecurityGroups" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.apiSecurityGroups"></a>

```typescript
public readonly apiSecurityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

Security Group for OpenSearch API Lambda Function.

> [OpenSearchApi](OpenSearchApi)

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

VPC OpenSearch cluster is provisioned in.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchCluster.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### PySparkApplicationPackage <a name="PySparkApplicationPackage" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage"></a>

A construct that takes your PySpark application, packages its virtual environment and uploads it along its entrypoint to an Amazon S3 bucket This construct requires Docker daemon installed locally to run.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/pyspark-application-package](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/pyspark-application-package)

*Example*

```typescript
let pysparkPacker = new dsf.processing.PySparkApplicationPackage (this, 'pysparkPacker', {
  applicationName: 'my-pyspark',
  entrypointPath: '/Users/my-user/my-spark-job/app/app-pyspark.py',
  dependenciesFolder: '/Users/my-user/my-spark-job/app',
  removalPolicy: cdk.RemovalPolicy.DESTROY,
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

new processing.PySparkApplicationPackage(scope: Construct, id: string, props: PySparkApplicationPackageProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps</code> | {@link PySparkApplicationPackageProps}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps

{@link PySparkApplicationPackageProps}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.isConstruct"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.PySparkApplicationPackage.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.artifactsBucket">artifactsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 Bucket for storing the artifacts (entrypoint and virtual environment archive). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.assetUploadManagedPolicy">assetUploadManagedPolicy</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | The IAM Managed Policy used by the custom resource for the assets deployment. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.assetUploadRole">assetUploadRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the BucketDeployment to upload the artifacts to an s3 bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.entrypointUri">entrypointUri</a></code> | <code>string</code> | The location (generally it's an S3 URI) where the entry point is saved. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.artifactsAccessLogsBucket">artifactsAccessLogsBucket</a></code> | <code>@cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket</code> | The access logs bucket to log accesses on the artifacts bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.sparkVenvConf">sparkVenvConf</a></code> | <code>string</code> | The Spark Config containing the configuration of virtual environment archive with all dependencies. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.venvArchiveUri">venvArchiveUri</a></code> | <code>string</code> | The location (generally an S3 URI) where the archive of the Python virtual environment with all dependencies is stored. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactsBucket`<sup>Required</sup> <a name="artifactsBucket" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.artifactsBucket"></a>

```typescript
public readonly artifactsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 Bucket for storing the artifacts (entrypoint and virtual environment archive).

---

##### `assetUploadManagedPolicy`<sup>Required</sup> <a name="assetUploadManagedPolicy" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.assetUploadManagedPolicy"></a>

```typescript
public readonly assetUploadManagedPolicy: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The IAM Managed Policy used by the custom resource for the assets deployment.

---

##### `assetUploadRole`<sup>Required</sup> <a name="assetUploadRole" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.assetUploadRole"></a>

```typescript
public readonly assetUploadRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by the BucketDeployment to upload the artifacts to an s3 bucket.

In case you provide your own S3 Bucket for storing the artifacts (entrypoint and virtual environment archive),
you must provide S3 write access to this role to upload the artifacts.

---

##### `entrypointUri`<sup>Required</sup> <a name="entrypointUri" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.entrypointUri"></a>

```typescript
public readonly entrypointUri: string;
```

- *Type:* string

The location (generally it's an S3 URI) where the entry point is saved.

You can pass this location to your Spark job.

---

##### `artifactsAccessLogsBucket`<sup>Optional</sup> <a name="artifactsAccessLogsBucket" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.artifactsAccessLogsBucket"></a>

```typescript
public readonly artifactsAccessLogsBucket: AccessLogsBucket;
```

- *Type:* @cdklabs/aws-data-solutions-framework.storage.AccessLogsBucket

The access logs bucket to log accesses on the artifacts bucket.

---

##### `sparkVenvConf`<sup>Optional</sup> <a name="sparkVenvConf" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.sparkVenvConf"></a>

```typescript
public readonly sparkVenvConf: string;
```

- *Type:* string

The Spark Config containing the configuration of virtual environment archive with all dependencies.

---

##### `venvArchiveUri`<sup>Optional</sup> <a name="venvArchiveUri" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.venvArchiveUri"></a>

```typescript
public readonly venvArchiveUri: string;
```

- *Type:* string

The location (generally an S3 URI) where the archive of the Python virtual environment with all dependencies is stored.

You can pass this location to your Spark job.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.ARTIFACTS_PREFIX">ARTIFACTS_PREFIX</a></code> | <code>string</code> | The prefix used to store artifacts on the artifact bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `ARTIFACTS_PREFIX`<sup>Required</sup> <a name="ARTIFACTS_PREFIX" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.ARTIFACTS_PREFIX"></a>

```typescript
public readonly ARTIFACTS_PREFIX: string;
```

- *Type:* string

The prefix used to store artifacts on the artifact bucket.

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackage.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### RedshiftData <a name="RedshiftData" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData"></a>

Creates an asynchronous custom resource that handles the execution of SQL using Redshift's Data API.

If `vpc` and `vpcSubnets` are passed, this construct would also create the Redshift Data Interface VPC endpoint and configure the custom resource in the same VPC subnet.

*Example*

```typescript
const namespace = new dsf.consumption.RedshiftServerlessNamespace(this, 'RedshiftNamespace', {
   name: "default",
   dbName: 'defaultdb',
});

const workgroup = new dsf.consumption.RedshiftServerlessWorkgroup(this, "RedshiftWorkgroup", {
   name: "redshift-workgroup",
   namespace: namespace,
});

const rsData = workgroup.accessData('DataApi');
rsData.createDbRole("EngineeringRole", "defaultdb", "engineering");
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

new consumption.RedshiftData(scope: Construct, id: string, props: RedshiftDataProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.assignDbRolesToIAMRole">assignDbRolesToIAMRole</a></code> | Assigns Redshift DB roles to IAM role vs the `RedshiftDbRoles` tag. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.createDbRole">createDbRole</a></code> | Creates a new DB role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbAllPrivilegesToRole">grantDbAllPrivilegesToRole</a></code> | Grants both read and write permissions on all the tables in the `schema` to the DB role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbSchemaToRole">grantDbSchemaToRole</a></code> | Grants access to the schema to the DB role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantSchemaReadToRole">grantSchemaReadToRole</a></code> | Grants read permission on all the tables in the `schema` to the DB role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.ingestData">ingestData</a></code> | Ingest data from S3 into a Redshift table. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.mergeToTargetTable">mergeToTargetTable</a></code> | Run the `MERGE` query using simplified mode. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.runCustomSQL">runCustomSQL</a></code> | Runs a custom SQL. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

##### `assignDbRolesToIAMRole` <a name="assignDbRolesToIAMRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.assignDbRolesToIAMRole"></a>

```typescript
public assignDbRolesToIAMRole(dbRoles: string[], targetRole: IRole): void
```

Assigns Redshift DB roles to IAM role vs the `RedshiftDbRoles` tag.

###### `dbRoles`<sup>Required</sup> <a name="dbRoles" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.assignDbRolesToIAMRole.parameter.dbRoles"></a>

- *Type:* string[]

List of Redshift DB roles to assign to IAM role.

---

###### `targetRole`<sup>Required</sup> <a name="targetRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.assignDbRolesToIAMRole.parameter.targetRole"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role to assign the Redshift DB roles to.

---

##### `createDbRole` <a name="createDbRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.createDbRole"></a>

```typescript
public createDbRole(id: string, databaseName: string, roleName: string): CustomResource
```

Creates a new DB role.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.createDbRole.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.createDbRole.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.createDbRole.parameter.roleName"></a>

- *Type:* string

The name of the role to create.

---

##### `grantDbAllPrivilegesToRole` <a name="grantDbAllPrivilegesToRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbAllPrivilegesToRole"></a>

```typescript
public grantDbAllPrivilegesToRole(id: string, databaseName: string, schema: string, roleName: string): CustomResource
```

Grants both read and write permissions on all the tables in the `schema` to the DB role.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbAllPrivilegesToRole.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbAllPrivilegesToRole.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbAllPrivilegesToRole.parameter.schema"></a>

- *Type:* string

The schema where the tables are located in.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbAllPrivilegesToRole.parameter.roleName"></a>

- *Type:* string

The DB role to grant the permissions to.

---

##### `grantDbSchemaToRole` <a name="grantDbSchemaToRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbSchemaToRole"></a>

```typescript
public grantDbSchemaToRole(id: string, databaseName: string, schema: string, roleName: string): CustomResource
```

Grants access to the schema to the DB role.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbSchemaToRole.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbSchemaToRole.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbSchemaToRole.parameter.schema"></a>

- *Type:* string

The schema where the tables are located in.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantDbSchemaToRole.parameter.roleName"></a>

- *Type:* string

The DB role to grant the permissions to.

---

##### `grantSchemaReadToRole` <a name="grantSchemaReadToRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantSchemaReadToRole"></a>

```typescript
public grantSchemaReadToRole(id: string, databaseName: string, schema: string, roleName: string): CustomResource
```

Grants read permission on all the tables in the `schema` to the DB role.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantSchemaReadToRole.parameter.id"></a>

- *Type:* string

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantSchemaReadToRole.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantSchemaReadToRole.parameter.schema"></a>

- *Type:* string

The schema where the tables are located in.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.grantSchemaReadToRole.parameter.roleName"></a>

- *Type:* string

The DB role to grant the permissions to.

---

##### `ingestData` <a name="ingestData" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.ingestData"></a>

```typescript
public ingestData(id: string, databaseName: string, targetTable: string, sourceBucket: IBucket, sourcePrefix: string, ingestAdditionalOptions?: string, role?: IRole): CustomResource
```

Ingest data from S3 into a Redshift table.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.ingestData.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.ingestData.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.ingestData.parameter.targetTable"></a>

- *Type:* string

The target table to load the data into.

---

###### `sourceBucket`<sup>Required</sup> <a name="sourceBucket" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.ingestData.parameter.sourceBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket where the source data would be coming from.

---

###### `sourcePrefix`<sup>Required</sup> <a name="sourcePrefix" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.ingestData.parameter.sourcePrefix"></a>

- *Type:* string

The location inside the bucket where the data would be ingested from.

---

###### `ingestAdditionalOptions`<sup>Optional</sup> <a name="ingestAdditionalOptions" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.ingestData.parameter.ingestAdditionalOptions"></a>

- *Type:* string

Optional.

Additional options to pass to the `COPY` command. For example, `delimiter '|'` or `ignoreheader 1`

---

###### `role`<sup>Optional</sup> <a name="role" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.ingestData.parameter.role"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

Optional.

The IAM Role to use to access the data in S3. If not provided, it would use the default IAM role configured in the Redshift Namespace

---

##### `mergeToTargetTable` <a name="mergeToTargetTable" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.mergeToTargetTable"></a>

```typescript
public mergeToTargetTable(id: string, databaseName: string, sourceTable: string, targetTable: string, sourceColumnId?: string, targetColumnId?: string): CustomResource
```

Run the `MERGE` query using simplified mode.

This command would do an upsert into the target table.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.mergeToTargetTable.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.mergeToTargetTable.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.mergeToTargetTable.parameter.sourceTable"></a>

- *Type:* string

The source table name.

Schema can also be included using the following format: `schemaName.tableName`

---

###### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.mergeToTargetTable.parameter.targetTable"></a>

- *Type:* string

The target table name.

Schema can also be included using the following format: `schemaName.tableName`

---

###### `sourceColumnId`<sup>Optional</sup> <a name="sourceColumnId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.mergeToTargetTable.parameter.sourceColumnId"></a>

- *Type:* string

The column in the source table that's used to determine whether the rows in the `sourceTable` can be matched with rows in the `targetTable`.

Default is `id`

---

###### `targetColumnId`<sup>Optional</sup> <a name="targetColumnId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.mergeToTargetTable.parameter.targetColumnId"></a>

- *Type:* string

The column in the target table that's used to determine whether the rows in the `sourceTable` can be matched with rows in the `targetTable`.

Default is `id`

---

##### `runCustomSQL` <a name="runCustomSQL" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.runCustomSQL"></a>

```typescript
public runCustomSQL(id: string, databaseName: string, sql: string, deleteSql?: string): CustomResource
```

Runs a custom SQL.

Once the custom resource finishes execution, the attribute `Data` contains an attribute `execId` which contains the Redshift Data API execution ID. You can then use this to retrieve execution results via the `GetStatementResult` API.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.runCustomSQL.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.runCustomSQL.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `sql`<sup>Required</sup> <a name="sql" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.runCustomSQL.parameter.sql"></a>

- *Type:* string

The sql to run.

---

###### `deleteSql`<sup>Optional</sup> <a name="deleteSql" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.runCustomSQL.parameter.deleteSql"></a>

- *Type:* string

Optional.

The sql to run when this resource gets deleted

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.isConstruct"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

consumption.RedshiftData.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.customResourceSecurityGroup">customResourceSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The Security Group used by the Custom Resource when deployed in a VPC. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.vpcEndpoint">vpcEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint</code> | The created Redshift Data API interface vpc endpoint when deployed in a VPC. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.vpcEndpointSecurityGroup">vpcEndpointSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The Security Group used by the VPC Endpoint when deployed in a VPC. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.dataAccessTargetProps">dataAccessTargetProps</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps</code> | Contains normalized details of the target Redshift cluster/workgroup for data access. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the Redshift Data API execution. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.statusFunction">statusFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function for the Redshift Data API status checks. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.statusLogGroup">statusLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the Redshift Data API status checks. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.submitFunction">submitFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function for the Redshift Data submission. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.submitLogGroup">submitLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the Redshift Data API submission. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.taggingManagedPolicy">taggingManagedPolicy</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy</code> | The managed IAM policy allowing IAM Role to retrieve tag information. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.cleanUpFunction">cleanUpFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function for the S3 data copy cleaning up lambda. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.cleanUpLogGroup">cleanUpLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the Redshift Data cleaning up lambda. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.cleanUpRole">cleanUpRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the the S3 data copy cleaning up lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResourceSecurityGroup`<sup>Optional</sup> <a name="customResourceSecurityGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.customResourceSecurityGroup"></a>

```typescript
public readonly customResourceSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The Security Group used by the Custom Resource when deployed in a VPC.

---

##### `vpcEndpoint`<sup>Optional</sup> <a name="vpcEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.vpcEndpoint"></a>

```typescript
public readonly vpcEndpoint: IInterfaceVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint

The created Redshift Data API interface vpc endpoint when deployed in a VPC.

---

##### `vpcEndpointSecurityGroup`<sup>Optional</sup> <a name="vpcEndpointSecurityGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.vpcEndpointSecurityGroup"></a>

```typescript
public readonly vpcEndpointSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The Security Group used by the VPC Endpoint when deployed in a VPC.

---

##### `dataAccessTargetProps`<sup>Required</sup> <a name="dataAccessTargetProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.dataAccessTargetProps"></a>

```typescript
public readonly dataAccessTargetProps: RedshiftDataAccessTargetProps;
```

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps

Contains normalized details of the target Redshift cluster/workgroup for data access.

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the Redshift Data API execution.

---

##### `statusFunction`<sup>Required</sup> <a name="statusFunction" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.statusFunction"></a>

```typescript
public readonly statusFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function for the Redshift Data API status checks.

---

##### `statusLogGroup`<sup>Required</sup> <a name="statusLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.statusLogGroup"></a>

```typescript
public readonly statusLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the Redshift Data API status checks.

---

##### `submitFunction`<sup>Required</sup> <a name="submitFunction" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.submitFunction"></a>

```typescript
public readonly submitFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function for the Redshift Data submission.

---

##### `submitLogGroup`<sup>Required</sup> <a name="submitLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.submitLogGroup"></a>

```typescript
public readonly submitLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the Redshift Data API submission.

---

##### `taggingManagedPolicy`<sup>Required</sup> <a name="taggingManagedPolicy" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.taggingManagedPolicy"></a>

```typescript
public readonly taggingManagedPolicy: IManagedPolicy;
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

The managed IAM policy allowing IAM Role to retrieve tag information.

---

##### `cleanUpFunction`<sup>Optional</sup> <a name="cleanUpFunction" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.cleanUpFunction"></a>

```typescript
public readonly cleanUpFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function for the S3 data copy cleaning up lambda.

---

##### `cleanUpLogGroup`<sup>Optional</sup> <a name="cleanUpLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.cleanUpLogGroup"></a>

```typescript
public readonly cleanUpLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the Redshift Data cleaning up lambda.

---

##### `cleanUpRole`<sup>Optional</sup> <a name="cleanUpRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.cleanUpRole"></a>

```typescript
public readonly cleanUpRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the the S3 data copy cleaning up lambda.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftData.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### RedshiftDataSharing <a name="RedshiftDataSharing" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing"></a>

Creates an asynchronous custom resource to manage the data sharing lifecycle for both data producers and data consumers.

This also covers both same account and cross account access.

*Example*

```typescript
const redshiftAdminSecret = Secret.fromSecretPartialArn(this, 'RedshiftAdminCredentials', 'arn:aws:secretsmanager:us-east-1:XXXXXXXX:secret:YYYYYYYY');

const redshiftVpc = Vpc.fromLookup(this, 'RedshiftVpc', {
  vpcId: 'XXXXXXXX',
});

const dataAccess = new dsf.consumption.RedshiftData(this, 'RedshiftDataAccess', {
  workgroupId: 'XXXXXXXXXXXXXXX',
  secret: redshiftAdminSecret,
  vpc: redshiftVpc,
  subnets: redshiftVpc.selectSubnets({
    subnetGroupName: 'YYYYYYYY'
  }),
  createInterfaceVpcEndpoint: true,
  executionTimeout: Duration.minutes(10),
});

const dataShare = new dsf.consumption.RedshiftDataSharing(this, 'RedshiftDataShare', {
  redshiftData: dataAccess,
  workgroupId: 'XXXXXXXXXXXXXXX',
  secret: redshiftAdminSecret,
  vpc: redshiftVpc,
  subnets: redshiftVpc.selectSubnets({
    subnetGroupName: 'YYYYYYYY'
  }),
  createInterfaceVpcEndpoint: true,
  executionTimeout: Duration.minutes(10),
});

 const share = dataShare.createShare('ProducerShare', 'default', 'example_share', 'public', ['public.customers']);

 const grantToConsumer = dataShare.grant('GrantToConsumer', {
   dataShareName: 'example_share',
   databaseName: 'default',
   autoAuthorized: true,
   accountId: "<CONSUMER_ACCOUNT_ID>",
   dataShareArn: '<DATASHARE_ARN>',
 });

dataShare.createDatabaseFromShare('ProducerShare', {
  consumerNamespaceArn: '',
  newDatabaseName: 'db_from_share',
  databaseName: 'default',
  dataShareName: 'example_share',
  dataShareArn: '<DATASHARE_ARN>',
  accountId: "<PRODUCER_ACCOUNT_ID>",
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

new consumption.RedshiftDataSharing(scope: Construct, id: string, props: RedshiftDataSharingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createDatabaseFromShare">createDatabaseFromShare</a></code> | Consume datashare by creating a new database pointing to the share. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createShare">createShare</a></code> | Create a new datashare. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.grant">grant</a></code> | Create a datashare grant to a namespace if it's in the same account, or to another account. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

##### `createDatabaseFromShare` <a name="createDatabaseFromShare" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createDatabaseFromShare"></a>

```typescript
public createDatabaseFromShare(id: string, props: RedshiftDataSharingCreateDbProps): RedshiftDataSharingCreateDbFromShareProps
```

Consume datashare by creating a new database pointing to the share.

If datashare is coming from a different account, setting `autoAssociate` to true
automatically associates the datashare to the cluster before the new database is created.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createDatabaseFromShare.parameter.id"></a>

- *Type:* string

the CDK ID of the resource.

---

###### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createDatabaseFromShare.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps

`RedshiftDataSharingCreateDbProps`.

---

##### `createShare` <a name="createShare" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createShare"></a>

```typescript
public createShare(id: string, databaseName: string, dataShareName: string, schema: string, tables: string[]): RedshiftNewShareProps
```

Create a new datashare.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createShare.parameter.id"></a>

- *Type:* string

the CDK ID of the resource.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createShare.parameter.databaseName"></a>

- *Type:* string

The name of the database to connect to.

---

###### `dataShareName`<sup>Required</sup> <a name="dataShareName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createShare.parameter.dataShareName"></a>

- *Type:* string

The name of the datashare.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createShare.parameter.schema"></a>

- *Type:* string

The schema to add in the datashare.

---

###### `tables`<sup>Required</sup> <a name="tables" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.createShare.parameter.tables"></a>

- *Type:* string[]

The list of tables that would be included in the datashare.

This must follow the format: `<schema>.<tableName>`

---

##### `grant` <a name="grant" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.grant"></a>

```typescript
public grant(id: string, props: RedshiftDataSharingGrantProps): RedshiftDataSharingGrantedProps
```

Create a datashare grant to a namespace if it's in the same account, or to another account.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.grant.parameter.id"></a>

- *Type:* string

the CDK ID of the resource.

---

###### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.grant.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps

`RedshiftDataSharingGrantProps`.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.isConstruct"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

consumption.RedshiftDataSharing.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.customResourceSecurityGroup">customResourceSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The Security Group used by the Custom Resource when deployed in a VPC. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.vpcEndpoint">vpcEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint</code> | The created Redshift Data API interface vpc endpoint when deployed in a VPC. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.vpcEndpointSecurityGroup">vpcEndpointSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The Security Group used by the VPC Endpoint when deployed in a VPC. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.dataAccessTargetProps">dataAccessTargetProps</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps</code> | Contains normalized details of the target Redshift cluster/workgroup for data access. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the Redshift Data API execution. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.statusFunction">statusFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function for the Redshift Data Sharing status checks. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.statusLogGroup">statusLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the Redshift Data Sharing status checks. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.submitFunction">submitFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function for the Redshift Data Sharing submission. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.submitLogGroup">submitLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the Redshift Data Sharing submission. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.cleanUpFunction">cleanUpFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function for the cleaning up lambda. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.cleanUpLogGroup">cleanUpLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the Redshift Data Sharing cleaning up lambda. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.cleanUpRole">cleanUpRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the the cleaning up lambda. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `customResourceSecurityGroup`<sup>Optional</sup> <a name="customResourceSecurityGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.customResourceSecurityGroup"></a>

```typescript
public readonly customResourceSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The Security Group used by the Custom Resource when deployed in a VPC.

---

##### `vpcEndpoint`<sup>Optional</sup> <a name="vpcEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.vpcEndpoint"></a>

```typescript
public readonly vpcEndpoint: IInterfaceVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint

The created Redshift Data API interface vpc endpoint when deployed in a VPC.

---

##### `vpcEndpointSecurityGroup`<sup>Optional</sup> <a name="vpcEndpointSecurityGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.vpcEndpointSecurityGroup"></a>

```typescript
public readonly vpcEndpointSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The Security Group used by the VPC Endpoint when deployed in a VPC.

---

##### `dataAccessTargetProps`<sup>Required</sup> <a name="dataAccessTargetProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.dataAccessTargetProps"></a>

```typescript
public readonly dataAccessTargetProps: RedshiftDataAccessTargetProps;
```

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps

Contains normalized details of the target Redshift cluster/workgroup for data access.

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the Redshift Data API execution.

---

##### `statusFunction`<sup>Required</sup> <a name="statusFunction" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.statusFunction"></a>

```typescript
public readonly statusFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function for the Redshift Data Sharing status checks.

---

##### `statusLogGroup`<sup>Required</sup> <a name="statusLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.statusLogGroup"></a>

```typescript
public readonly statusLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the Redshift Data Sharing status checks.

---

##### `submitFunction`<sup>Required</sup> <a name="submitFunction" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.submitFunction"></a>

```typescript
public readonly submitFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function for the Redshift Data Sharing submission.

---

##### `submitLogGroup`<sup>Required</sup> <a name="submitLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.submitLogGroup"></a>

```typescript
public readonly submitLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the Redshift Data Sharing submission.

---

##### `cleanUpFunction`<sup>Optional</sup> <a name="cleanUpFunction" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.cleanUpFunction"></a>

```typescript
public readonly cleanUpFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function for the cleaning up lambda.

---

##### `cleanUpLogGroup`<sup>Optional</sup> <a name="cleanUpLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.cleanUpLogGroup"></a>

```typescript
public readonly cleanUpLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the Redshift Data Sharing cleaning up lambda.

---

##### `cleanUpRole`<sup>Optional</sup> <a name="cleanUpRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.cleanUpRole"></a>

```typescript
public readonly cleanUpRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the the cleaning up lambda.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharing.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### RedshiftServerlessNamespace <a name="RedshiftServerlessNamespace" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace"></a>

Create a Redshift Serverless Namespace with the admin credentials stored in Secrets Manager.

*Example*

```typescript
const namespace = new dsf.consumption.RedshiftServerlessNamespace(this, 'DefaultServerlessNamespace', {
   dbName: 'defaultdb',
   name: 'default'
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

new consumption.RedshiftServerlessNamespace(scope: Construct, id: string, props: RedshiftServerlessNamespaceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.isConstruct"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

consumption.RedshiftServerlessNamespace.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.adminSecret">adminSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The created Secrets Manager secret containing the admin credentials. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.adminSecretKey">adminSecretKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used to encrypt the admin credentials secret. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.createFunction">createFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function for the Redshift Serverless creation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.createLogGroup">createLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Logs Log Group for the Redshift Serverless creation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.createRole">createRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the Redshift Serverless creation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.customResource">customResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | The custom resource that creates the Namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.dataKey">dataKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | KMS key used by the namespace to encrypt the data. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.dbName">dbName</a></code> | <code>string</code> | The name of the database. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.namespaceArn">namespaceArn</a></code> | <code>string</code> | The ARN of the created namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.namespaceId">namespaceId</a></code> | <code>string</code> | The ID of the created namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.namespaceName">namespaceName</a></code> | <code>string</code> | The name of the created namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.roles">roles</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_iam.IRole}</code> | The roles attached to the namespace in the form of `{RoleArn: IRole}`. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.statusFunction">statusFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function for the creation status check. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.statusLogGroup">statusLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Logs Log Group for the creation status check. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.statusRole">statusRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the creation status check. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `adminSecret`<sup>Required</sup> <a name="adminSecret" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.adminSecret"></a>

```typescript
public readonly adminSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The created Secrets Manager secret containing the admin credentials.

---

##### `adminSecretKey`<sup>Required</sup> <a name="adminSecretKey" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.adminSecretKey"></a>

```typescript
public readonly adminSecretKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS Key used to encrypt the admin credentials secret.

---

##### `createFunction`<sup>Required</sup> <a name="createFunction" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.createFunction"></a>

```typescript
public readonly createFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function for the Redshift Serverless creation.

---

##### `createLogGroup`<sup>Required</sup> <a name="createLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.createLogGroup"></a>

```typescript
public readonly createLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Logs Log Group for the Redshift Serverless creation.

---

##### `createRole`<sup>Required</sup> <a name="createRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.createRole"></a>

```typescript
public readonly createRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the Redshift Serverless creation.

---

##### `customResource`<sup>Required</sup> <a name="customResource" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.customResource"></a>

```typescript
public readonly customResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

The custom resource that creates the Namespace.

---

##### `dataKey`<sup>Required</sup> <a name="dataKey" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.dataKey"></a>

```typescript
public readonly dataKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key

KMS key used by the namespace to encrypt the data.

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

The name of the database.

---

##### `namespaceArn`<sup>Required</sup> <a name="namespaceArn" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.namespaceArn"></a>

```typescript
public readonly namespaceArn: string;
```

- *Type:* string

The ARN of the created namespace.

---

##### `namespaceId`<sup>Required</sup> <a name="namespaceId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string

The ID of the created namespace.

---

##### `namespaceName`<sup>Required</sup> <a name="namespaceName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.namespaceName"></a>

```typescript
public readonly namespaceName: string;
```

- *Type:* string

The name of the created namespace.

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.roles"></a>

```typescript
public readonly roles: {[ key: string ]: IRole};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_iam.IRole}

The roles attached to the namespace in the form of `{RoleArn: IRole}`.

These roles are used to access other AWS services for ingestion, federated query, and data catalog access.

> [https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-authentication-access-control.html](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-authentication-access-control.html)

---

##### `statusFunction`<sup>Required</sup> <a name="statusFunction" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.statusFunction"></a>

```typescript
public readonly statusFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function for the creation status check.

---

##### `statusLogGroup`<sup>Required</sup> <a name="statusLogGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.statusLogGroup"></a>

```typescript
public readonly statusLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Logs Log Group for the creation status check.

---

##### `statusRole`<sup>Required</sup> <a name="statusRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.statusRole"></a>

```typescript
public readonly statusRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the creation status check.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### RedshiftServerlessWorkgroup <a name="RedshiftServerlessWorkgroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup"></a>

- *Implements:* aws-cdk-lib.aws_ec2.IConnectable

Create a Redshift Serverless Workgroup.

A default namespace would be created if none is provided.

*Example*

```typescript
const workgroup = new dsf.consumption.RedshiftServerlessWorkgroup(this, "RedshiftWorkgroup", {
   name: "example-workgroup",
   namespace: new dsf.consumption.RedshiftServerlessNamespace(this, "RedshiftNamespace", {
     name: 'example-namespace',
     dbName: 'defaultdb',
   })
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

new consumption.RedshiftServerlessWorkgroup(scope: Construct, id: string, props: RedshiftServerlessWorkgroupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.accessData">accessData</a></code> | Creates an instance of `RedshiftData` to send custom SQLs to the workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.assignDbRolesToIAMRole">assignDbRolesToIAMRole</a></code> | Assigns Redshift DB roles to IAM role vs the `RedshiftDbRoles` tag. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.catalogTables">catalogTables</a></code> | Creates a new Glue data catalog database with a crawler using JDBC target type to connect to the Redshift Workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDatabaseFromShare">createDatabaseFromShare</a></code> | Consume datashare by creating a new database pointing to the share. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDbRole">createDbRole</a></code> | Creates a new DB role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createShare">createShare</a></code> | Create a new datashare. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantAccessToShare">grantAccessToShare</a></code> | Create a datashare grant to a namespace if it's in the same account, or to another account. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbAllPrivilegesToRole">grantDbAllPrivilegesToRole</a></code> | Grants both read and write permissions on all the tables in the `schema` to the DB role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbSchemaToRole">grantDbSchemaToRole</a></code> | Grants access to the schema to the DB role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantSchemaReadToRole">grantSchemaReadToRole</a></code> | Grants read permission on all the tables in the `schema` to the DB role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.ingestData">ingestData</a></code> | Ingest data from S3 into a Redshift table. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.mergeToTargetTable">mergeToTargetTable</a></code> | Run the `MERGE` query using simplified mode. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.runCustomSQL">runCustomSQL</a></code> | Runs a custom SQL. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### ~~`accessData`~~ <a name="accessData" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.accessData"></a>

```typescript
public accessData(id: string, createVpcEndpoint?: boolean, existingInterfaceVPCEndpoint?: IInterfaceVpcEndpoint): RedshiftData
```

Creates an instance of `RedshiftData` to send custom SQLs to the workgroup.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.accessData.parameter.id"></a>

- *Type:* string

The CDK ID of the resource.

---

###### `createVpcEndpoint`<sup>Optional</sup> <a name="createVpcEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.accessData.parameter.createVpcEndpoint"></a>

- *Type:* boolean

if set to true, create interface VPC endpoint for Redshift Data API.

---

###### `existingInterfaceVPCEndpoint`<sup>Optional</sup> <a name="existingInterfaceVPCEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.accessData.parameter.existingInterfaceVPCEndpoint"></a>

- *Type:* aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint

if `createVpcEndpoint` is false, and if this is populated, then the Lambda function's security group would be added in the existing VPC endpoint's security group.

---

##### `assignDbRolesToIAMRole` <a name="assignDbRolesToIAMRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.assignDbRolesToIAMRole"></a>

```typescript
public assignDbRolesToIAMRole(dbRoles: string[], targetRole: IRole): void
```

Assigns Redshift DB roles to IAM role vs the `RedshiftDbRoles` tag.

###### `dbRoles`<sup>Required</sup> <a name="dbRoles" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.assignDbRolesToIAMRole.parameter.dbRoles"></a>

- *Type:* string[]

List of Redshift DB roles to assign to IAM role.

---

###### `targetRole`<sup>Required</sup> <a name="targetRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.assignDbRolesToIAMRole.parameter.targetRole"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role to assign the Redshift DB roles to.

---

##### `catalogTables` <a name="catalogTables" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.catalogTables"></a>

```typescript
public catalogTables(id: string, catalogDbName: string, pathToCrawl?: string): DataCatalogDatabase
```

Creates a new Glue data catalog database with a crawler using JDBC target type to connect to the Redshift Workgroup.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.catalogTables.parameter.id"></a>

- *Type:* string

The CDK ID of the resource.

---

###### `catalogDbName`<sup>Required</sup> <a name="catalogDbName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.catalogTables.parameter.catalogDbName"></a>

- *Type:* string

The name of the Glue Database to create.

---

###### `pathToCrawl`<sup>Optional</sup> <a name="pathToCrawl" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.catalogTables.parameter.pathToCrawl"></a>

- *Type:* string

The path of Redshift tables to crawl.

---

##### `createDatabaseFromShare` <a name="createDatabaseFromShare" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDatabaseFromShare"></a>

```typescript
public createDatabaseFromShare(id: string, newDatabaseName: string, producerDataShareName: string, producerNamespaceId?: string, producerAccountId?: string): RedshiftDataSharingCreateDbFromShareProps
```

Consume datashare by creating a new database pointing to the share.

If datashare is coming from a different account, setting `autoAssociate` to true
automatically associates the datashare to the cluster before the new database is created.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDatabaseFromShare.parameter.id"></a>

- *Type:* string

The CDK ID of the resource.

---

###### `newDatabaseName`<sup>Required</sup> <a name="newDatabaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDatabaseFromShare.parameter.newDatabaseName"></a>

- *Type:* string

The name of the database that would be created from the data share.

---

###### `producerDataShareName`<sup>Required</sup> <a name="producerDataShareName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDatabaseFromShare.parameter.producerDataShareName"></a>

- *Type:* string

The name of the data share from producer.

---

###### `producerNamespaceId`<sup>Optional</sup> <a name="producerNamespaceId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDatabaseFromShare.parameter.producerNamespaceId"></a>

- *Type:* string

The producer cluster namespace.

---

###### `producerAccountId`<sup>Optional</sup> <a name="producerAccountId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDatabaseFromShare.parameter.producerAccountId"></a>

- *Type:* string

The producer account ID.

Required for cross account shares.

---

##### `createDbRole` <a name="createDbRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDbRole"></a>

```typescript
public createDbRole(id: string, databaseName: string, roleName: string): CustomResource
```

Creates a new DB role.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDbRole.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDbRole.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createDbRole.parameter.roleName"></a>

- *Type:* string

The name of the role to create.

---

##### `createShare` <a name="createShare" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createShare"></a>

```typescript
public createShare(id: string, databaseName: string, dataShareName: string, schema: string, tables: string[]): RedshiftNewShareProps
```

Create a new datashare.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createShare.parameter.id"></a>

- *Type:* string

The CDK ID of the resource.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createShare.parameter.databaseName"></a>

- *Type:* string

The name of the database to connect to.

---

###### `dataShareName`<sup>Required</sup> <a name="dataShareName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createShare.parameter.dataShareName"></a>

- *Type:* string

The name of the datashare.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createShare.parameter.schema"></a>

- *Type:* string

The schema to add in the datashare.

---

###### `tables`<sup>Required</sup> <a name="tables" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.createShare.parameter.tables"></a>

- *Type:* string[]

The list of tables that would be included in the datashare.

This must follow the format: `<schema>.<tableName>`

---

##### `grantAccessToShare` <a name="grantAccessToShare" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantAccessToShare"></a>

```typescript
public grantAccessToShare(id: string, dataShareDetails: RedshiftNewShareProps, consumerNamespaceId?: string, consumerAccountId?: string, autoAuthorized?: boolean): RedshiftDataSharingGrantedProps
```

Create a datashare grant to a namespace if it's in the same account, or to another account.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantAccessToShare.parameter.id"></a>

- *Type:* string

The CDK ID of the resource.

---

###### `dataShareDetails`<sup>Required</sup> <a name="dataShareDetails" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantAccessToShare.parameter.dataShareDetails"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps

The details of the datashare.

---

###### `consumerNamespaceId`<sup>Optional</sup> <a name="consumerNamespaceId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantAccessToShare.parameter.consumerNamespaceId"></a>

- *Type:* string

The namespace of the consumer that you're sharing to.

Either namespace or account Id must be provided.

---

###### `consumerAccountId`<sup>Optional</sup> <a name="consumerAccountId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantAccessToShare.parameter.consumerAccountId"></a>

- *Type:* string

The account ID of the consumer that you're sharing to.

Either namespace or account Id must be provided.

---

###### `autoAuthorized`<sup>Optional</sup> <a name="autoAuthorized" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantAccessToShare.parameter.autoAuthorized"></a>

- *Type:* boolean

---

##### `grantDbAllPrivilegesToRole` <a name="grantDbAllPrivilegesToRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbAllPrivilegesToRole"></a>

```typescript
public grantDbAllPrivilegesToRole(id: string, databaseName: string, schema: string, roleName: string): CustomResource
```

Grants both read and write permissions on all the tables in the `schema` to the DB role.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbAllPrivilegesToRole.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbAllPrivilegesToRole.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbAllPrivilegesToRole.parameter.schema"></a>

- *Type:* string

The schema where the tables are located in.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbAllPrivilegesToRole.parameter.roleName"></a>

- *Type:* string

The DB role to grant the permissions to.

---

##### `grantDbSchemaToRole` <a name="grantDbSchemaToRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbSchemaToRole"></a>

```typescript
public grantDbSchemaToRole(id: string, databaseName: string, schema: string, roleName: string): CustomResource
```

Grants access to the schema to the DB role.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbSchemaToRole.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbSchemaToRole.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbSchemaToRole.parameter.schema"></a>

- *Type:* string

The schema where the tables are located in.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantDbSchemaToRole.parameter.roleName"></a>

- *Type:* string

The DB role to grant the permissions to.

---

##### `grantSchemaReadToRole` <a name="grantSchemaReadToRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantSchemaReadToRole"></a>

```typescript
public grantSchemaReadToRole(id: string, databaseName: string, schema: string, roleName: string): CustomResource
```

Grants read permission on all the tables in the `schema` to the DB role.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantSchemaReadToRole.parameter.id"></a>

- *Type:* string

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantSchemaReadToRole.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `schema`<sup>Required</sup> <a name="schema" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantSchemaReadToRole.parameter.schema"></a>

- *Type:* string

The schema where the tables are located in.

---

###### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.grantSchemaReadToRole.parameter.roleName"></a>

- *Type:* string

The DB role to grant the permissions to.

---

##### `ingestData` <a name="ingestData" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.ingestData"></a>

```typescript
public ingestData(id: string, databaseName: string, targetTable: string, sourceBucket: IBucket, sourcePrefix: string, ingestAdditionalOptions?: string, role?: IRole): CustomResource
```

Ingest data from S3 into a Redshift table.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.ingestData.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.ingestData.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.ingestData.parameter.targetTable"></a>

- *Type:* string

The target table to load the data into.

---

###### `sourceBucket`<sup>Required</sup> <a name="sourceBucket" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.ingestData.parameter.sourceBucket"></a>

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket where the source data would be coming from.

---

###### `sourcePrefix`<sup>Required</sup> <a name="sourcePrefix" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.ingestData.parameter.sourcePrefix"></a>

- *Type:* string

The location inside the bucket where the data would be ingested from.

---

###### `ingestAdditionalOptions`<sup>Optional</sup> <a name="ingestAdditionalOptions" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.ingestData.parameter.ingestAdditionalOptions"></a>

- *Type:* string

Optional.

Additional options to pass to the `COPY` command. For example, `delimiter '|'` or `ignoreheader 1`

---

###### `role`<sup>Optional</sup> <a name="role" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.ingestData.parameter.role"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

Optional.

The IAM Role to use to access the data in S3. If not provided, it would use the default IAM role configured in the Redshift Namespace

---

##### `mergeToTargetTable` <a name="mergeToTargetTable" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.mergeToTargetTable"></a>

```typescript
public mergeToTargetTable(id: string, databaseName: string, sourceTable: string, targetTable: string, sourceColumnId?: string, targetColumnId?: string): CustomResource
```

Run the `MERGE` query using simplified mode.

This command would do an upsert into the target table.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.mergeToTargetTable.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.mergeToTargetTable.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `sourceTable`<sup>Required</sup> <a name="sourceTable" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.mergeToTargetTable.parameter.sourceTable"></a>

- *Type:* string

The source table name.

Schema can also be included using the following format: `schemaName.tableName`

---

###### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.mergeToTargetTable.parameter.targetTable"></a>

- *Type:* string

The target table name.

Schema can also be included using the following format: `schemaName.tableName`

---

###### `sourceColumnId`<sup>Optional</sup> <a name="sourceColumnId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.mergeToTargetTable.parameter.sourceColumnId"></a>

- *Type:* string

The column in the source table that's used to determine whether the rows in the `sourceTable` can be matched with rows in the `targetTable`.

Default is `id`

---

###### `targetColumnId`<sup>Optional</sup> <a name="targetColumnId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.mergeToTargetTable.parameter.targetColumnId"></a>

- *Type:* string

The column in the target table that's used to determine whether the rows in the `sourceTable` can be matched with rows in the `targetTable`.

Default is `id`

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

##### `runCustomSQL` <a name="runCustomSQL" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.runCustomSQL"></a>

```typescript
public runCustomSQL(id: string, databaseName: string, sql: string, deleteSql?: string): CustomResource
```

Runs a custom SQL.

Once the custom resource finishes execution, the attribute `Data` contains an attribute `execId` which contains the Redshift Data API execution ID. You can then use this to retrieve execution results via the `GetStatementResult` API.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.runCustomSQL.parameter.id"></a>

- *Type:* string

The CDK Construct ID.

---

###### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.runCustomSQL.parameter.databaseName"></a>

- *Type:* string

The name of the database to run this command.

---

###### `sql`<sup>Required</sup> <a name="sql" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.runCustomSQL.parameter.sql"></a>

- *Type:* string

The sql to run.

---

###### `deleteSql`<sup>Optional</sup> <a name="deleteSql" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.runCustomSQL.parameter.deleteSql"></a>

- *Type:* string

Optional.

The sql to run when this resource gets deleted

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.isConstruct"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

consumption.RedshiftServerlessWorkgroup.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.cfnResource">cfnResource</a></code> | <code>aws-cdk-lib.aws_redshiftserverless.CfnWorkgroup</code> | The created Redshift Serverless Workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.connections">connections</a></code> | <code>aws-cdk-lib.aws_ec2.Connections</code> | Connections used by Workgroup security group. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.existingShares">existingShares</a></code> | <code>{[ key: string ]: @cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps}</code> | Index of existing shares. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.glueConnection">glueConnection</a></code> | <code>aws-cdk-lib.aws_glue.CfnConnection</code> | The Glue Connection associated with the workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.namespace">namespace</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace</code> | The associated Redshift Serverless Namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.primarySecurityGroup">primarySecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The primary EC2 Security Group associated with the Redshift Serverless Workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.selectedSubnets">selectedSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SelectedSubnets</code> | The subnets where the Redshift Serverless Workgroup is deployed. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the Redshift Serverless Workgroup is deployed. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cfnResource`<sup>Required</sup> <a name="cfnResource" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.cfnResource"></a>

```typescript
public readonly cfnResource: CfnWorkgroup;
```

- *Type:* aws-cdk-lib.aws_redshiftserverless.CfnWorkgroup

The created Redshift Serverless Workgroup.

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.connections"></a>

```typescript
public readonly connections: Connections;
```

- *Type:* aws-cdk-lib.aws_ec2.Connections

Connections used by Workgroup security group.

Used this to enable access from clients connecting to the workgroup

---

##### `existingShares`<sup>Required</sup> <a name="existingShares" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.existingShares"></a>

```typescript
public readonly existingShares: {[ key: string ]: RedshiftNewShareProps};
```

- *Type:* {[ key: string ]: @cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps}

Index of existing shares.

---

##### `glueConnection`<sup>Required</sup> <a name="glueConnection" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.glueConnection"></a>

```typescript
public readonly glueConnection: CfnConnection;
```

- *Type:* aws-cdk-lib.aws_glue.CfnConnection

The Glue Connection associated with the workgroup.

This can be used by Glue ETL Jobs to read/write data from/to Redshift workgroup

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.namespace"></a>

```typescript
public readonly namespace: RedshiftServerlessNamespace;
```

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace

The associated Redshift Serverless Namespace.

---

##### `primarySecurityGroup`<sup>Required</sup> <a name="primarySecurityGroup" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.primarySecurityGroup"></a>

```typescript
public readonly primarySecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The primary EC2 Security Group associated with the Redshift Serverless Workgroup.

---

##### `selectedSubnets`<sup>Required</sup> <a name="selectedSubnets" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.selectedSubnets"></a>

```typescript
public readonly selectedSubnets: SelectedSubnets;
```

- *Type:* aws-cdk-lib.aws_ec2.SelectedSubnets

The subnets where the Redshift Serverless Workgroup is deployed.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC where the Redshift Serverless Workgroup is deployed.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroup.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### S3DataCopy <a name="S3DataCopy" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy"></a>

Copy data from one S3 bucket to another.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Utils/s3-data-copy](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Utils/s3-data-copy)

*Example*

```typescript
import { Bucket } from 'aws-cdk-lib/aws-s3';

const sourceBucket = Bucket.fromBucketName(this, 'SourceBucket', 'nyc-tlc');
const bucketName = `test-${this.region}-${this.account}-${dsf.utils.Utils.generateUniqueHash(this, 'TargetBucket')}`;

const targetBucket = new Bucket(this, 'TargetBucket');

new dsf.utils.S3DataCopy(this, 'S3DataCopy', {
  sourceBucket,
  sourceBucketPrefix: 'trip data/',
  sourceBucketRegion: 'us-east-1',
  targetBucket,
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

new utils.S3DataCopy(scope: Construct, id: string, props: S3DataCopyProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.isConstruct"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.S3DataCopy.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.copyFunction">copyFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda Function for the copy. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.copyLogGroup">copyLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the S3 data copy. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.copyRole">copyRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the copy Lambba Function. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.cleanUpFunction">cleanUpFunction</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | The Lambda function for the S3 data copy cleaning up lambda. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.cleanUpLogGroup">cleanUpLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the S3 data copy cleaning up lambda. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.cleanUpRole">cleanUpRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role for the the S3 data copy cleaning up lambda. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of EC2 Security Groups used by the Lambda Functions. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `copyFunction`<sup>Required</sup> <a name="copyFunction" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.copyFunction"></a>

```typescript
public readonly copyFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda Function for the copy.

---

##### `copyLogGroup`<sup>Required</sup> <a name="copyLogGroup" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.copyLogGroup"></a>

```typescript
public readonly copyLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the S3 data copy.

---

##### `copyRole`<sup>Required</sup> <a name="copyRole" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.copyRole"></a>

```typescript
public readonly copyRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the copy Lambba Function.

---

##### `cleanUpFunction`<sup>Optional</sup> <a name="cleanUpFunction" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.cleanUpFunction"></a>

```typescript
public readonly cleanUpFunction: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The Lambda function for the S3 data copy cleaning up lambda.

---

##### `cleanUpLogGroup`<sup>Optional</sup> <a name="cleanUpLogGroup" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.cleanUpLogGroup"></a>

```typescript
public readonly cleanUpLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the S3 data copy cleaning up lambda.

---

##### `cleanUpRole`<sup>Optional</sup> <a name="cleanUpRole" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.cleanUpRole"></a>

```typescript
public readonly cleanUpRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role for the the S3 data copy cleaning up lambda.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]

The list of EC2 Security Groups used by the Lambda Functions.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopy.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkEmrCICDPipeline <a name="SparkEmrCICDPipeline" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline"></a>

A CICD Pipeline to test and deploy a Spark application on Amazon EMR in cross-account environments using CDK Pipelines.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-cicd-pipeline](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-cicd-pipeline)

*Example*

```typescript
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { CodePipelineSource } from 'aws-cdk-lib/pipelines';

interface MyApplicationStackProps extends cdk.StackProps {
  readonly stage: dsf.utils.CICDStage;
}

class MyApplicationStack extends cdk.Stack {
  constructor(scope: cdk.Stack, props?: MyApplicationStackProps) {
    super(scope, 'MyApplicationStack');
    const bucket = new Bucket(this, 'TestBucket', {
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    new cdk.CfnOutput(this, 'BucketName', { value: bucket.bucketName });
  }
}

class MyStackFactory implements dsf.utils.ApplicationStackFactory {
  createStack(scope: cdk.Stack, stage: dsf.utils.CICDStage): cdk.Stack {
    return new MyApplicationStack(scope, { stage });
  }
}

class MyCICDStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    new dsf.processing.SparkEmrCICDPipeline(this, 'TestConstruct', {
       sparkApplicationName: 'test',
       applicationStackFactory: new MyStackFactory(),
       cdkApplicationPath: 'cdk/',
       sparkApplicationPath: 'spark/',
       sparkImage: dsf.processing.SparkImage.EMR_6_12,
       integTestScript: 'cdk/integ-test.sh',
       integTestEnv: {
         TEST_BUCKET: 'BucketName',
       },
       source: CodePipelineSource.connection('owner/weekly-job', 'mainline', {
             connectionArn: 'arn:aws:codeconnections:eu-west-1:123456789012:connection/aEXAMPLE-8aad-4d5d-8878-dfcab0bc441f'
       }),
  });
}
}
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

new processing.SparkEmrCICDPipeline(scope: Construct, id: string, props: SparkEmrCICDPipelineProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps</code> | the SparkCICDPipelineProps properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps

the SparkCICDPipelineProps properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.isConstruct"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkEmrCICDPipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.artifactAccessLogsBucket">artifactAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 Bucket for storing the access logs on the artifact S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.artifactBucket">artifactBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 Bucket for storing the artifacts. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.pipeline">pipeline</a></code> | <code>aws-cdk-lib.pipelines.CodePipeline</code> | The CodePipeline created as part of the Spark CICD Pipeline. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.pipelineLogGroup">pipelineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for storing the CodePipeline logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.integrationTestStage">integrationTestStage</a></code> | <code>aws-cdk-lib.pipelines.CodeBuildStep</code> | The CodeBuild Step for the staging stage. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `artifactAccessLogsBucket`<sup>Required</sup> <a name="artifactAccessLogsBucket" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.artifactAccessLogsBucket"></a>

```typescript
public readonly artifactAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 Bucket for storing the access logs on the artifact S3 Bucket.

---

##### `artifactBucket`<sup>Required</sup> <a name="artifactBucket" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.artifactBucket"></a>

```typescript
public readonly artifactBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 Bucket for storing the artifacts.

---

##### `pipeline`<sup>Required</sup> <a name="pipeline" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.pipeline"></a>

```typescript
public readonly pipeline: CodePipeline;
```

- *Type:* aws-cdk-lib.pipelines.CodePipeline

The CodePipeline created as part of the Spark CICD Pipeline.

---

##### `pipelineLogGroup`<sup>Required</sup> <a name="pipelineLogGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.pipelineLogGroup"></a>

```typescript
public readonly pipelineLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for storing the CodePipeline logs.

---

##### `integrationTestStage`<sup>Optional</sup> <a name="integrationTestStage" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.integrationTestStage"></a>

```typescript
public readonly integrationTestStage: CodeBuildStep;
```

- *Type:* aws-cdk-lib.pipelines.CodeBuildStep

The CodeBuild Step for the staging stage.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipeline.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkEmrContainersJob <a name="SparkEmrContainersJob" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob"></a>

A construct to run Spark Jobs using EMR Container runtime (EMR on EKS).

It creates a Step Functions State Machine that orchestrates the Spark Job.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-serverless-job](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-serverless-job)

*Example*

```typescript
import { JsonPath } from 'aws-cdk-lib/aws-stepfunctions';

const job = new dsf.processing.SparkEmrContainersJob(this, 'SparkJob', {
  jobConfig:{
    "Name": JsonPath.format('ge_profile-{}', JsonPath.uuid()),
    "VirtualClusterId": "virtualClusterId",
    "ExecutionRoleArn": "ROLE-ARN",
    "JobDriver": {
      "SparkSubmit": {
          "EntryPoint": "s3://S3-BUCKET/pi.py",
          "EntryPointArguments": [],
          "SparkSubmitParameters": "--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4"
      },
    }
  }
} as dsf.processing.SparkEmrContainersJobApiProps);

new cdk.CfnOutput(this, 'SparkJobStateMachine', {
  value: job.stateMachine!.stateMachineArn,
});
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

new processing.SparkEmrContainersJob(scope: Construct, id: string, props: SparkEmrContainersJobProps | SparkEmrContainersJobApiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps \| @cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps | @cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.isConstruct"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkEmrContainersJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | The Step Functions State Machine created to orchestrate the Spark Job. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used by the State Machine. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stateMachine`<sup>Optional</sup> <a name="stateMachine" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

The Step Functions State Machine created to orchestrate the Spark Job.

---

##### `stateMachineLogGroup`<sup>Optional</sup> <a name="stateMachineLogGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used by the State Machine.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJob.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkEmrContainersRuntime <a name="SparkEmrContainersRuntime" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime"></a>

A construct to create an EKS cluster, configure it and enable it with EMR on EKS.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-containers-runtime](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-containers-runtime)

*Example*

```typescript
import { ManagedPolicy, PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { KubectlV30Layer } from '@aws-cdk/lambda-layer-kubectl-v30';

const kubectlLayer = new KubectlV30Layer(this, 'kubectlLayer');

const emrEksCluster = dsf.processing.SparkEmrContainersRuntime.getOrCreate(this, {
  publicAccessCIDRs: ['10.0.0.0/16'],
  kubectlLambdaLayer: kubectlLayer,
});

const virtualCluster = emrEksCluster.addEmrVirtualCluster(this, {
  name: 'example',
  createNamespace: true,
  eksNamespace: 'example',
});

const s3Read = new PolicyDocument({
  statements: [new PolicyStatement({
    actions: [
      's3:GetObject',
    ],
    resources: ['arn:aws:s3:::aws-data-analytics-workshops'],
  })],
});

const s3ReadPolicy = new ManagedPolicy(this, 's3ReadPolicy', {
  document: s3Read,
});

const execRole = emrEksCluster.createExecutionRole(this, 'ExecRole', s3ReadPolicy, 'example', 's3ReadExecRole');
```


#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addEmrVirtualCluster">addEmrVirtualCluster</a></code> | Add a new Amazon EMR Virtual Cluster linked to Amazon EKS Cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addInteractiveEndpoint">addInteractiveEndpoint</a></code> | Creates a new Amazon EMR managed endpoint to be used with Amazon EMR Virtual Cluster . |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addKarpenterNodePoolAndNodeClass">addKarpenterNodePoolAndNodeClass</a></code> | Apply the provided manifest and add the CDK dependency on EKS cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.createExecutionRole">createExecutionRole</a></code> | Create and configure a new Amazon IAM Role usable as an execution role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.uploadPodTemplate">uploadPodTemplate</a></code> | Upload podTemplates to the Amazon S3 location used by the cluster. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addEmrVirtualCluster` <a name="addEmrVirtualCluster" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addEmrVirtualCluster"></a>

```typescript
public addEmrVirtualCluster(scope: Construct, options: EmrVirtualClusterProps): CfnVirtualCluster
```

Add a new Amazon EMR Virtual Cluster linked to Amazon EKS Cluster.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addEmrVirtualCluster.parameter.scope"></a>

- *Type:* constructs.Construct

of the stack where virtual cluster is deployed.

---

###### `options`<sup>Required</sup> <a name="options" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addEmrVirtualCluster.parameter.options"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps

the EmrVirtualClusterProps [properties]{@link EmrVirtualClusterProps}.

---

##### `addInteractiveEndpoint` <a name="addInteractiveEndpoint" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addInteractiveEndpoint"></a>

```typescript
public addInteractiveEndpoint(scope: Construct, id: string, interactiveSessionOptions: SparkEmrContainersRuntimeInteractiveSessionProps): CustomResource
```

Creates a new Amazon EMR managed endpoint to be used with Amazon EMR Virtual Cluster .

CfnOutput can be customized.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addInteractiveEndpoint.parameter.scope"></a>

- *Type:* constructs.Construct

the scope of the stack where managed endpoint is deployed.

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addInteractiveEndpoint.parameter.id"></a>

- *Type:* string

the CDK id for endpoint.

---

###### `interactiveSessionOptions`<sup>Required</sup> <a name="interactiveSessionOptions" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addInteractiveEndpoint.parameter.interactiveSessionOptions"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps

the EmrManagedEndpointOptions to configure the Amazon EMR managed endpoint.

---

##### `addKarpenterNodePoolAndNodeClass` <a name="addKarpenterNodePoolAndNodeClass" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addKarpenterNodePoolAndNodeClass"></a>

```typescript
public addKarpenterNodePoolAndNodeClass(id: string, manifest: any): any
```

Apply the provided manifest and add the CDK dependency on EKS cluster.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addKarpenterNodePoolAndNodeClass.parameter.id"></a>

- *Type:* string

the unique ID of the CDK resource.

---

###### `manifest`<sup>Required</sup> <a name="manifest" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.addKarpenterNodePoolAndNodeClass.parameter.manifest"></a>

- *Type:* any

The manifest to apply.

You can use the Utils class that offers method to read yaml file and load it as a manifest

---

##### `createExecutionRole` <a name="createExecutionRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.createExecutionRole"></a>

```typescript
public createExecutionRole(scope: Construct, id: string, policy: IManagedPolicy, eksNamespace: string, name: string): Role
```

Create and configure a new Amazon IAM Role usable as an execution role.

This method makes the created role assumed by the Amazon EKS cluster Open ID Connect provider.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.createExecutionRole.parameter.scope"></a>

- *Type:* constructs.Construct

of the IAM role.

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.createExecutionRole.parameter.id"></a>

- *Type:* string

of the CDK resource to be created, it should be unique across the stack.

---

###### `policy`<sup>Required</sup> <a name="policy" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.createExecutionRole.parameter.policy"></a>

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy

the execution policy to attach to the role.

---

###### `eksNamespace`<sup>Required</sup> <a name="eksNamespace" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.createExecutionRole.parameter.eksNamespace"></a>

- *Type:* string

The namespace from which the role is going to be used.

MUST be the same as the namespace of the Virtual Cluster from which the job is submitted

---

###### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.createExecutionRole.parameter.name"></a>

- *Type:* string

Name to use for the role, required and is used to scope the iam role.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

##### `uploadPodTemplate` <a name="uploadPodTemplate" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.uploadPodTemplate"></a>

```typescript
public uploadPodTemplate(id: string, filePath: string): void
```

Upload podTemplates to the Amazon S3 location used by the cluster.

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.uploadPodTemplate.parameter.id"></a>

- *Type:* string

the unique ID of the CDK resource.

---

###### `filePath`<sup>Required</sup> <a name="filePath" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.uploadPodTemplate.parameter.filePath"></a>

- *Type:* string

The local path of the yaml podTemplate files to upload.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.getOrCreate">getOrCreate</a></code> | Get an existing EmrEksCluster based on the cluster name property or create a new one only one EKS cluster can exist per stack. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.grantStartJobExecution">grantStartJobExecution</a></code> | A static method granting the right to start and monitor a job to an IAM Role. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.isConstruct"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkEmrContainersRuntime.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `getOrCreate` <a name="getOrCreate" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.getOrCreate"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkEmrContainersRuntime.getOrCreate(scope: Construct, props: SparkEmrContainersRuntimeProps)
```

Get an existing EmrEksCluster based on the cluster name property or create a new one only one EKS cluster can exist per stack.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.getOrCreate.parameter.scope"></a>

- *Type:* constructs.Construct

the CDK scope used to search or create the cluster.

---

###### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.getOrCreate.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps

the EmrEksClusterProps [properties]{@link EmrEksClusterProps } if created.

---

##### `grantStartJobExecution` <a name="grantStartJobExecution" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.grantStartJobExecution"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkEmrContainersRuntime.grantStartJobExecution(startJobRole: IRole, executionRoleArn: string[], virtualClusterArn: string)
```

A static method granting the right to start and monitor a job to an IAM Role.

The method will scope the following actions `DescribeJobRun`, `TagResource` and `ListJobRuns` to the provided virtual cluster.
It will also scope `StartJobRun` as defined in the
[EMR on EKS official documentation](https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-execution-role.html)

###### `startJobRole`<sup>Required</sup> <a name="startJobRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.grantStartJobExecution.parameter.startJobRole"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

the role that will call the start job api and which needs to have the iam:PassRole permission.

---

###### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.grantStartJobExecution.parameter.executionRoleArn"></a>

- *Type:* string[]

the role used by EMR on EKS to access resources during the job execution.

---

###### `virtualClusterArn`<sup>Required</sup> <a name="virtualClusterArn" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.grantStartJobExecution.parameter.virtualClusterArn"></a>

- *Type:* string

the EMR Virtual Cluster ARN to which the job is submitted.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.ec2InstanceNodeGroupRole">ec2InstanceNodeGroupRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role used by the tooling managed nodegroup hosting core Kubernetes controllers like EBS CSI driver, core dns. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.eksCluster">eksCluster</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | The EKS cluster created by the construct if it is not provided. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC used by the EKS cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.assetBucket">assetBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The bucket holding podtemplates referenced in the configuration override for the job. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.assetUploadBucketRole">assetUploadBucketRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role used to upload assets (pod templates) on S3. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.awsNodeRole">awsNodeRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by IRSA for the aws-node daemonset. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.criticalDefaultConfig">criticalDefaultConfig</a></code> | <code>string</code> | The configuration override for the spark application to use with the default nodes for criticale jobs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.csiDriverIrsaRole">csiDriverIrsaRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role created for the EBS CSI controller. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.eksSecretKmsKey">eksSecretKmsKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS key used for storing EKS secrets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.emrServiceRole">emrServiceRole</a></code> | <code>aws-cdk-lib.aws_iam.CfnServiceLinkedRole</code> | The Service Linked role created for EMR. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.flowLogGroup">flowLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the VPC flow log when the VPC is created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.flowLogKey">flowLogKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used for the VPC flow logs when the VPC is created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.flowLogRole">flowLogRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used for the VPC flow logs when the VPC is created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.karpenterEventRules">karpenterEventRules</a></code> | <code>aws-cdk-lib.aws_events.IRule[]</code> | The rules used by Karpenter to track node health, rules are defined in the cloudformation below https://raw.githubusercontent.com/aws/karpenter/"${KARPENTER_VERSION}"/website/content/en/preview/getting-started/getting-started-with-karpenter/cloudformation.yaml. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.karpenterIrsaRole">karpenterIrsaRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role created for the Karpenter controller. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.karpenterQueue">karpenterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS queue used by Karpenter to receive critical events from AWS services which may affect your nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.karpenterSecurityGroup">karpenterSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The security group used by the EC2NodeClass of the default nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.notebookDefaultConfig">notebookDefaultConfig</a></code> | <code>string</code> | The configuration override for the spark application to use with the default nodes dedicated for notebooks. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationCriticalDriver">podTemplateS3LocationCriticalDriver</a></code> | <code>string</code> | The S3 location holding the driver pod tempalte for critical nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationCriticalExecutor">podTemplateS3LocationCriticalExecutor</a></code> | <code>string</code> | The S3 location holding the executor pod tempalte for critical nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationDriverShared">podTemplateS3LocationDriverShared</a></code> | <code>string</code> | The S3 location holding the driver pod tempalte for shared nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationExecutorShared">podTemplateS3LocationExecutorShared</a></code> | <code>string</code> | The S3 location holding the executor pod tempalte for shared nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationNotebookDriver">podTemplateS3LocationNotebookDriver</a></code> | <code>string</code> | The S3 location holding the driver pod tempalte for interactive sessions. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationNotebookExecutor">podTemplateS3LocationNotebookExecutor</a></code> | <code>string</code> | The S3 location holding the executor pod tempalte for interactive sessions. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.s3VpcEndpoint">s3VpcEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.IGatewayVpcEndpoint</code> | The S3 VPC endpoint attached to the private subnets of the VPC when VPC is created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.sharedDefaultConfig">sharedDefaultConfig</a></code> | <code>string</code> | The configuration override for the spark application to use with the default nodes for none criticale jobs. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ec2InstanceNodeGroupRole`<sup>Required</sup> <a name="ec2InstanceNodeGroupRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.ec2InstanceNodeGroupRole"></a>

```typescript
public readonly ec2InstanceNodeGroupRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role used by the tooling managed nodegroup hosting core Kubernetes controllers like EBS CSI driver, core dns.

---

##### `eksCluster`<sup>Required</sup> <a name="eksCluster" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.eksCluster"></a>

```typescript
public readonly eksCluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster

The EKS cluster created by the construct if it is not provided.

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC used by the EKS cluster.

---

##### `assetBucket`<sup>Optional</sup> <a name="assetBucket" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.assetBucket"></a>

```typescript
public readonly assetBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The bucket holding podtemplates referenced in the configuration override for the job.

---

##### `assetUploadBucketRole`<sup>Optional</sup> <a name="assetUploadBucketRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.assetUploadBucketRole"></a>

```typescript
public readonly assetUploadBucketRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role used to upload assets (pod templates) on S3.

---

##### `awsNodeRole`<sup>Optional</sup> <a name="awsNodeRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.awsNodeRole"></a>

```typescript
public readonly awsNodeRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by IRSA for the aws-node daemonset.

---

##### `criticalDefaultConfig`<sup>Optional</sup> <a name="criticalDefaultConfig" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.criticalDefaultConfig"></a>

```typescript
public readonly criticalDefaultConfig: string;
```

- *Type:* string

The configuration override for the spark application to use with the default nodes for criticale jobs.

---

##### `csiDriverIrsaRole`<sup>Optional</sup> <a name="csiDriverIrsaRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.csiDriverIrsaRole"></a>

```typescript
public readonly csiDriverIrsaRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role created for the EBS CSI controller.

---

##### `eksSecretKmsKey`<sup>Optional</sup> <a name="eksSecretKmsKey" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.eksSecretKmsKey"></a>

```typescript
public readonly eksSecretKmsKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS key used for storing EKS secrets.

---

##### `emrServiceRole`<sup>Optional</sup> <a name="emrServiceRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.emrServiceRole"></a>

```typescript
public readonly emrServiceRole: CfnServiceLinkedRole;
```

- *Type:* aws-cdk-lib.aws_iam.CfnServiceLinkedRole

The Service Linked role created for EMR.

---

##### `flowLogGroup`<sup>Optional</sup> <a name="flowLogGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.flowLogGroup"></a>

```typescript
public readonly flowLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the VPC flow log when the VPC is created.

---

##### `flowLogKey`<sup>Optional</sup> <a name="flowLogKey" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.flowLogKey"></a>

```typescript
public readonly flowLogKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS Key used for the VPC flow logs when the VPC is created.

---

##### `flowLogRole`<sup>Optional</sup> <a name="flowLogRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.flowLogRole"></a>

```typescript
public readonly flowLogRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used for the VPC flow logs when the VPC is created.

---

##### `karpenterEventRules`<sup>Optional</sup> <a name="karpenterEventRules" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.karpenterEventRules"></a>

```typescript
public readonly karpenterEventRules: IRule[];
```

- *Type:* aws-cdk-lib.aws_events.IRule[]

The rules used by Karpenter to track node health, rules are defined in the cloudformation below https://raw.githubusercontent.com/aws/karpenter/"${KARPENTER_VERSION}"/website/content/en/preview/getting-started/getting-started-with-karpenter/cloudformation.yaml.

---

##### `karpenterIrsaRole`<sup>Optional</sup> <a name="karpenterIrsaRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.karpenterIrsaRole"></a>

```typescript
public readonly karpenterIrsaRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role created for the Karpenter controller.

---

##### `karpenterQueue`<sup>Optional</sup> <a name="karpenterQueue" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.karpenterQueue"></a>

```typescript
public readonly karpenterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The SQS queue used by Karpenter to receive critical events from AWS services which may affect your nodes.

---

##### `karpenterSecurityGroup`<sup>Optional</sup> <a name="karpenterSecurityGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.karpenterSecurityGroup"></a>

```typescript
public readonly karpenterSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The security group used by the EC2NodeClass of the default nodes.

---

##### `notebookDefaultConfig`<sup>Optional</sup> <a name="notebookDefaultConfig" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.notebookDefaultConfig"></a>

```typescript
public readonly notebookDefaultConfig: string;
```

- *Type:* string

The configuration override for the spark application to use with the default nodes dedicated for notebooks.

---

##### `podTemplateS3LocationCriticalDriver`<sup>Optional</sup> <a name="podTemplateS3LocationCriticalDriver" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationCriticalDriver"></a>

```typescript
public readonly podTemplateS3LocationCriticalDriver: string;
```

- *Type:* string

The S3 location holding the driver pod tempalte for critical nodes.

---

##### `podTemplateS3LocationCriticalExecutor`<sup>Optional</sup> <a name="podTemplateS3LocationCriticalExecutor" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationCriticalExecutor"></a>

```typescript
public readonly podTemplateS3LocationCriticalExecutor: string;
```

- *Type:* string

The S3 location holding the executor pod tempalte for critical nodes.

---

##### `podTemplateS3LocationDriverShared`<sup>Optional</sup> <a name="podTemplateS3LocationDriverShared" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationDriverShared"></a>

```typescript
public readonly podTemplateS3LocationDriverShared: string;
```

- *Type:* string

The S3 location holding the driver pod tempalte for shared nodes.

---

##### `podTemplateS3LocationExecutorShared`<sup>Optional</sup> <a name="podTemplateS3LocationExecutorShared" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationExecutorShared"></a>

```typescript
public readonly podTemplateS3LocationExecutorShared: string;
```

- *Type:* string

The S3 location holding the executor pod tempalte for shared nodes.

---

##### `podTemplateS3LocationNotebookDriver`<sup>Optional</sup> <a name="podTemplateS3LocationNotebookDriver" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationNotebookDriver"></a>

```typescript
public readonly podTemplateS3LocationNotebookDriver: string;
```

- *Type:* string

The S3 location holding the driver pod tempalte for interactive sessions.

---

##### `podTemplateS3LocationNotebookExecutor`<sup>Optional</sup> <a name="podTemplateS3LocationNotebookExecutor" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.podTemplateS3LocationNotebookExecutor"></a>

```typescript
public readonly podTemplateS3LocationNotebookExecutor: string;
```

- *Type:* string

The S3 location holding the executor pod tempalte for interactive sessions.

---

##### `s3VpcEndpoint`<sup>Optional</sup> <a name="s3VpcEndpoint" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.s3VpcEndpoint"></a>

```typescript
public readonly s3VpcEndpoint: IGatewayVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.IGatewayVpcEndpoint

The S3 VPC endpoint attached to the private subnets of the VPC when VPC is created.

---

##### `sharedDefaultConfig`<sup>Optional</sup> <a name="sharedDefaultConfig" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.sharedDefaultConfig"></a>

```typescript
public readonly sharedDefaultConfig: string;
```

- *Type:* string

The configuration override for the spark application to use with the default nodes for none criticale jobs.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DEFAULT_CLUSTER_NAME">DEFAULT_CLUSTER_NAME</a></code> | <code>string</code> | The default name of the EKS cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DEFAULT_EKS_VERSION">DEFAULT_EKS_VERSION</a></code> | <code>aws-cdk-lib.aws_eks.KubernetesVersion</code> | The default EKS version. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DEFAULT_EMR_EKS_VERSION">DEFAULT_EMR_EKS_VERSION</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion</code> | The default EMR on EKS version. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DEFAULT_VPC_CIDR">DEFAULT_VPC_CIDR</a></code> | <code>string</code> | The default CIDR when the VPC is created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_CLUSTER_NAME`<sup>Required</sup> <a name="DEFAULT_CLUSTER_NAME" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DEFAULT_CLUSTER_NAME"></a>

```typescript
public readonly DEFAULT_CLUSTER_NAME: string;
```

- *Type:* string

The default name of the EKS cluster.

---

##### `DEFAULT_EKS_VERSION`<sup>Required</sup> <a name="DEFAULT_EKS_VERSION" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DEFAULT_EKS_VERSION"></a>

```typescript
public readonly DEFAULT_EKS_VERSION: KubernetesVersion;
```

- *Type:* aws-cdk-lib.aws_eks.KubernetesVersion

The default EKS version.

---

##### `DEFAULT_EMR_EKS_VERSION`<sup>Required</sup> <a name="DEFAULT_EMR_EKS_VERSION" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DEFAULT_EMR_EKS_VERSION"></a>

```typescript
public readonly DEFAULT_EMR_EKS_VERSION: EmrContainersRuntimeVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion

The default EMR on EKS version.

---

##### `DEFAULT_VPC_CIDR`<sup>Required</sup> <a name="DEFAULT_VPC_CIDR" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DEFAULT_VPC_CIDR"></a>

```typescript
public readonly DEFAULT_VPC_CIDR: string;
```

- *Type:* string

The default CIDR when the VPC is created.

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntime.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkEmrServerlessJob <a name="SparkEmrServerlessJob" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob"></a>

A construct to run Spark Jobs using EMR Serverless.

Creates a State Machine that orchestrates the Spark Job.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-serverless-job](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-serverless-job)

*Example*

```typescript
import { PolicyDocument, PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { JsonPath } from 'aws-cdk-lib/aws-stepfunctions';

const myExecutionRole = dsf.processing.SparkEmrServerlessRuntime.createExecutionRole(this, 'execRole1');
const job = new dsf.processing.SparkEmrServerlessJob(this, 'SparkJob', {
  jobConfig:{
    "Name": JsonPath.format('ge_profile-{}', JsonPath.uuid()),
    "ApplicationId": "APPLICATION_ID",
    "ExecutionRoleArn": myExecutionRole.roleArn,
    "JobDriver": {
      "SparkSubmit": {
          "EntryPoint": "s3://S3-BUCKET/pi.py",
          "EntryPointArguments": [],
          "SparkSubmitParameters": "--conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=4"
      },
    }
  }
} as dsf.processing.SparkEmrServerlessJobApiProps);
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

new processing.SparkEmrServerlessJob(scope: Construct, id: string, props: SparkEmrServerlessJobProps | SparkEmrServerlessJobApiProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps \| @cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps | @cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.isConstruct"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkEmrServerlessJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | The Step Functions State Machine created to orchestrate the Spark Job. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used by the State Machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.sparkJobExecutionRole">sparkJobExecutionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The Spark job execution role. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stateMachine`<sup>Optional</sup> <a name="stateMachine" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

The Step Functions State Machine created to orchestrate the Spark Job.

---

##### `stateMachineLogGroup`<sup>Optional</sup> <a name="stateMachineLogGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used by the State Machine.

---

##### `sparkJobExecutionRole`<sup>Optional</sup> <a name="sparkJobExecutionRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.sparkJobExecutionRole"></a>

```typescript
public readonly sparkJobExecutionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The Spark job execution role.

Use this property to add additional IAM permissions if necessary.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJob.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkEmrServerlessRuntime <a name="SparkEmrServerlessRuntime" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime"></a>

A construct to create a Spark EMR Serverless Application, along with methods to create IAM roles having the least privilege.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-serverless-runtime](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-serverless-runtime)

*Example*

```typescript
import { Role, AccountRootPrincipal } from 'aws-cdk-lib/aws-iam';

const serverlessRuntime = new dsf.processing.SparkEmrServerlessRuntime(this, 'EmrApp', {
  name: 'SparkRuntimeServerless',
});

const executionRole = dsf.processing.SparkEmrServerlessRuntime.createExecutionRole(this, 'ExecutionRole')

const submitterRole = new Role (this, 'SubmitterRole', {
  assumedBy: new AccountRootPrincipal(),
});

dsf.processing.SparkEmrServerlessRuntime.grantStartJobExecution(submitterRole, [executionRole.roleArn], ['EMR-serverless-app-ID']);
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

new processing.SparkEmrServerlessRuntime(scope: Construct, id: string, props: SparkEmrServerlessRuntimeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps</code> | {@link SparkEmrServerlessRuntimeProps}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps

{@link SparkEmrServerlessRuntimeProps}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.grantStartExecution">grantStartExecution</a></code> | A method which will grant an IAM Role the right to start and monitor a job. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `grantStartExecution` <a name="grantStartExecution" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.grantStartExecution"></a>

```typescript
public grantStartExecution(startJobRole: IRole, executionRoleArn: string): void
```

A method which will grant an IAM Role the right to start and monitor a job.

The method will also attach an iam:PassRole permission to limited to the IAM Job Execution roles passed.
The excution role will be able to submit job to the EMR Serverless application created by the construct.

###### `startJobRole`<sup>Required</sup> <a name="startJobRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.grantStartExecution.parameter.startJobRole"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

the role that will call the start job api and which need to have the iam:PassRole permission.

---

###### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.grantStartExecution.parameter.executionRoleArn"></a>

- *Type:* string

the role use by EMR Serverless to access resources during the job execution.

---

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.createExecutionRole">createExecutionRole</a></code> | A static method creating an execution IAM role that can be assumed by EMR Serverless The method returns the role it creates. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.grantStartJobExecution">grantStartJobExecution</a></code> | A static method granting the right to start and monitor a job to an IAM Role. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.isConstruct"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkEmrServerlessRuntime.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `createExecutionRole` <a name="createExecutionRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.createExecutionRole"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkEmrServerlessRuntime.createExecutionRole(scope: Construct, id: string, executionRolePolicyDocument?: PolicyDocument, iamPolicyName?: string)
```

A static method creating an execution IAM role that can be assumed by EMR Serverless The method returns the role it creates.

If no `executionRolePolicyDocument` or `iamPolicyName`
The method will return a role with only a trust policy to EMR Servereless service principal.
You can use this role then to grant access to any resources you control.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.createExecutionRole.parameter.scope"></a>

- *Type:* constructs.Construct

the scope in which to create the role.

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.createExecutionRole.parameter.id"></a>

- *Type:* string

passed to the IAM Role construct object.

---

###### `executionRolePolicyDocument`<sup>Optional</sup> <a name="executionRolePolicyDocument" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.createExecutionRole.parameter.executionRolePolicyDocument"></a>

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument

the inline policy document to attach to the role.

These are IAM policies needed by the job.
This parameter is mutually execlusive with iamPolicyName.

---

###### `iamPolicyName`<sup>Optional</sup> <a name="iamPolicyName" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.createExecutionRole.parameter.iamPolicyName"></a>

- *Type:* string

the IAM policy name to attach to the role, this is mutually execlusive with executionRolePolicyDocument.

---

##### `grantStartJobExecution` <a name="grantStartJobExecution" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.grantStartJobExecution"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkEmrServerlessRuntime.grantStartJobExecution(startJobRole: IRole, executionRoleArn: string[], applicationArns: string[])
```

A static method granting the right to start and monitor a job to an IAM Role.

The method will also attach an iam:PassRole permission limited to the IAM Job Execution roles passed

###### `startJobRole`<sup>Required</sup> <a name="startJobRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.grantStartJobExecution.parameter.startJobRole"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

the role that will call the start job api and which needs to have the iam:PassRole permission.

---

###### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.grantStartJobExecution.parameter.executionRoleArn"></a>

- *Type:* string[]

the role used by EMR Serverless to access resources during the job execution.

---

###### `applicationArns`<sup>Required</sup> <a name="applicationArns" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.grantStartJobExecution.parameter.applicationArns"></a>

- *Type:* string[]

the EMR Serverless aplication ARN, this is used by the method to limit the EMR Serverless applications the role can submit job to.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.application">application</a></code> | <code>aws-cdk-lib.aws_emrserverless.CfnApplication</code> | The EMR Serverless application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.emrApplicationSecurityGroup">emrApplicationSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | If no VPC is provided, one is created by default along with a security group attached to the EMR Serverless Application This attribute is used to expose the security group, if you provide your own security group through the {@link SparkEmrServerlessRuntimeProps} the attribute will be `undefined`. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.flowLogGroup">flowLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for the VPC flow log when the VPC is created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.flowLogKey">flowLogKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used for the VPC flow log when the VPC is created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.flowLogRole">flowLogRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used for the VPC flow log when the VPC is created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.s3VpcEndpoint">s3VpcEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.IGatewayVpcEndpoint</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC used by the EKS cluster. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `application`<sup>Required</sup> <a name="application" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.application"></a>

```typescript
public readonly application: CfnApplication;
```

- *Type:* aws-cdk-lib.aws_emrserverless.CfnApplication

The EMR Serverless application.

---

##### `emrApplicationSecurityGroup`<sup>Optional</sup> <a name="emrApplicationSecurityGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.emrApplicationSecurityGroup"></a>

```typescript
public readonly emrApplicationSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

If no VPC is provided, one is created by default along with a security group attached to the EMR Serverless Application This attribute is used to expose the security group, if you provide your own security group through the {@link SparkEmrServerlessRuntimeProps} the attribute will be `undefined`.

---

##### `flowLogGroup`<sup>Optional</sup> <a name="flowLogGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.flowLogGroup"></a>

```typescript
public readonly flowLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for the VPC flow log when the VPC is created.

---

##### `flowLogKey`<sup>Optional</sup> <a name="flowLogKey" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.flowLogKey"></a>

```typescript
public readonly flowLogKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS Key used for the VPC flow log when the VPC is created.

---

##### `flowLogRole`<sup>Optional</sup> <a name="flowLogRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.flowLogRole"></a>

```typescript
public readonly flowLogRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used for the VPC flow log when the VPC is created.

---

##### `s3VpcEndpoint`<sup>Optional</sup> <a name="s3VpcEndpoint" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.s3VpcEndpoint"></a>

```typescript
public readonly s3VpcEndpoint: IGatewayVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.IGatewayVpcEndpoint

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

The VPC used by the EKS cluster.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntime.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

### SparkJob <a name="SparkJob" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob"></a>

A base construct to run Spark Jobs.

Creates an AWS Step Functions State Machine that orchestrates the Spark Job.

> [https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-serverless-job

Available implementations:
* {@link SparkEmrServerlessJob } for Emr Serverless implementation
* {@link SparkEmrEksJob } for EMR On EKS implementation](https://awslabs.github.io/data-solutions-framework-on-aws/docs/constructs/library/Processing/spark-emr-serverless-job

Available implementations:
* {@link SparkEmrServerlessJob } for Emr Serverless implementation
* {@link SparkEmrEksJob } for EMR On EKS implementation)

#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

new processing.SparkJob(scope: Construct, id: string, trackingTag: string, props: SparkJobProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | the Scope of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.Initializer.parameter.id">id</a></code> | <code>string</code> | the ID of the CDK Construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.Initializer.parameter.trackingTag">trackingTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.Initializer.parameter.props">props</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.SparkJobProps</code> | the SparkJobProps properties. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

the Scope of the CDK Construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.Initializer.parameter.id"></a>

- *Type:* string

the ID of the CDK Construct.

---

##### `trackingTag`<sup>Required</sup> <a name="trackingTag" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.Initializer.parameter.trackingTag"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.Initializer.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.processing.SparkJobProps

the SparkJobProps properties.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.retrieveVersion">retrieveVersion</a></code> | Retrieve DSF package.json version. |

---

##### `toString` <a name="toString" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `retrieveVersion` <a name="retrieveVersion" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.retrieveVersion"></a>

```typescript
public retrieveVersion(): any
```

Retrieve DSF package.json version.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.isConstruct"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

processing.SparkJob.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | The Step Functions State Machine created to orchestrate the Spark Job. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group used by the State Machine. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `stateMachine`<sup>Optional</sup> <a name="stateMachine" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

The Step Functions State Machine created to orchestrate the Spark Job.

---

##### `stateMachineLogGroup`<sup>Optional</sup> <a name="stateMachineLogGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group used by the State Machine.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.DSF_OWNED_TAG">DSF_OWNED_TAG</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.DSF_TRACKING_CODE">DSF_TRACKING_CODE</a></code> | <code>string</code> | *No description.* |

---

##### `DSF_OWNED_TAG`<sup>Required</sup> <a name="DSF_OWNED_TAG" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.DSF_OWNED_TAG"></a>

```typescript
public readonly DSF_OWNED_TAG: string;
```

- *Type:* string

---

##### `DSF_TRACKING_CODE`<sup>Required</sup> <a name="DSF_TRACKING_CODE" id="@cdklabs/aws-data-solutions-framework.processing.SparkJob.property.DSF_TRACKING_CODE"></a>

```typescript
public readonly DSF_TRACKING_CODE: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Acl <a name="Acl" id="@cdklabs/aws-data-solutions-framework.streaming.Acl"></a>

Kakfa ACL This is similar to the object used by `kafkajs`, for more information see this [link](https://kafka.js.org/docs/admin#create-acl).

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.Acl.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const acl: streaming.Acl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.Acl.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.Acl.property.operation">operation</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.Acl.property.permissionType">permissionType</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.Acl.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.Acl.property.resourceName">resourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.Acl.property.resourcePatternType">resourcePatternType</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.Acl.property.resourceType">resourceType</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes</code> | *No description.* |

---

##### `host`<sup>Required</sup> <a name="host" id="@cdklabs/aws-data-solutions-framework.streaming.Acl.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdklabs/aws-data-solutions-framework.streaming.Acl.property.operation"></a>

```typescript
public readonly operation: AclOperationTypes;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes

---

##### `permissionType`<sup>Required</sup> <a name="permissionType" id="@cdklabs/aws-data-solutions-framework.streaming.Acl.property.permissionType"></a>

```typescript
public readonly permissionType: AclPermissionTypes;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdklabs/aws-data-solutions-framework.streaming.Acl.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `resourceName`<sup>Required</sup> <a name="resourceName" id="@cdklabs/aws-data-solutions-framework.streaming.Acl.property.resourceName"></a>

```typescript
public readonly resourceName: string;
```

- *Type:* string

---

##### `resourcePatternType`<sup>Required</sup> <a name="resourcePatternType" id="@cdklabs/aws-data-solutions-framework.streaming.Acl.property.resourcePatternType"></a>

```typescript
public readonly resourcePatternType: ResourcePatternTypes;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdklabs/aws-data-solutions-framework.streaming.Acl.property.resourceType"></a>

```typescript
public readonly resourceType: AclResourceTypes;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes

---

### AclAdminProps <a name="AclAdminProps" id="@cdklabs/aws-data-solutions-framework.streaming.AclAdminProps"></a>

This Props allow you to define the principals that will be adminstartor as well as the principal that will be used by the CDK Custom resources to.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.AclAdminProps.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const aclAdminProps: streaming.AclAdminProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclAdminProps.property.aclAdminPrincipal">aclAdminPrincipal</a></code> | <code>string</code> | This Principal will be used by the CDK custom resource to set ACLs and Topics. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclAdminProps.property.adminPrincipal">adminPrincipal</a></code> | <code>string</code> | The Principal that will have administrator privilege in MSK The MSK construct does not have access to this principal Keep this principal in a secure storage and should be only used in case you put an ACL that lock MSK access. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclAdminProps.property.secretCertificate">secretCertificate</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | This is the TLS certificate of the Principal that is used by the CDK custom resource which set ACLs and Topics. |

---

##### `aclAdminPrincipal`<sup>Required</sup> <a name="aclAdminPrincipal" id="@cdklabs/aws-data-solutions-framework.streaming.AclAdminProps.property.aclAdminPrincipal"></a>

```typescript
public readonly aclAdminPrincipal: string;
```

- *Type:* string

This Principal will be used by the CDK custom resource to set ACLs and Topics.

---

##### `adminPrincipal`<sup>Required</sup> <a name="adminPrincipal" id="@cdklabs/aws-data-solutions-framework.streaming.AclAdminProps.property.adminPrincipal"></a>

```typescript
public readonly adminPrincipal: string;
```

- *Type:* string

The Principal that will have administrator privilege in MSK The MSK construct does not have access to this principal Keep this principal in a secure storage and should be only used in case you put an ACL that lock MSK access.

---

##### `secretCertificate`<sup>Required</sup> <a name="secretCertificate" id="@cdklabs/aws-data-solutions-framework.streaming.AclAdminProps.property.secretCertificate"></a>

```typescript
public readonly secretCertificate: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

This is the TLS certificate of the Principal that is used by the CDK custom resource which set ACLs and Topics.

The secret in AWS secrets manager must be a JSON in the following format
{
 "key" : "PRIVATE-KEY",
 "cert" : "CERTIFICATE"
}

You can use the following utility to generate the certificates
https://github.com/aws-samples/amazon-msk-client-authentication

---

### AnalyticsBucketProps <a name="AnalyticsBucketProps" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps"></a>

Properties for the `AnalyticsBucket` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.Initializer"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

const analyticsBucketProps: storage.AnalyticsBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | External KMS Key to use for the S3 Bucket encryption. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.accessControl">accessControl</a></code> | <code>aws-cdk-lib.aws_s3.BucketAccessControl</code> | Specifies a canned ACL that grants predefined permissions to the bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.autoDeleteObjects">autoDeleteObjects</a></code> | <code>boolean</code> | Whether all objects should be automatically deleted when the S3 Bucket is removed from the stack or when the stack is deleted. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.blockPublicAccess">blockPublicAccess</a></code> | <code>aws-cdk-lib.aws_s3.BlockPublicAccess</code> | The block public access configuration of this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.bucketKeyEnabled">bucketKeyEnabled</a></code> | <code>boolean</code> | Whether Amazon S3 should use its own intermediary key to generate data keys. Only relevant when using KMS for encryption. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.bucketName">bucketName</a></code> | <code>string</code> | The physical name of this S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.cors">cors</a></code> | <code>aws-cdk-lib.aws_s3.CorsRule[]</code> | The CORS configuration of this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.enforceSSL">enforceSSL</a></code> | <code>boolean</code> | Enforces SSL for requests. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.eventBridgeEnabled">eventBridgeEnabled</a></code> | <code>boolean</code> | Whether this S3 Bucket should send notifications to Amazon EventBridge or not. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.intelligentTieringConfigurations">intelligentTieringConfigurations</a></code> | <code>aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]</code> | Intelligent Tiering Configurations. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.inventories">inventories</a></code> | <code>aws-cdk-lib.aws_s3.Inventory[]</code> | The inventory configuration of the S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.lifecycleRules">lifecycleRules</a></code> | <code>aws-cdk-lib.aws_s3.LifecycleRule[]</code> | Rules that define how Amazon S3 manages objects during their lifetime. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.metrics">metrics</a></code> | <code>aws-cdk-lib.aws_s3.BucketMetrics[]</code> | The metrics configuration of this bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.notificationsHandlerRole">notificationsHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role to be used by the notifications handler. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.objectLockDefaultRetention">objectLockDefaultRetention</a></code> | <code>aws-cdk-lib.aws_s3.ObjectLockRetention</code> | The default retention mode and rules for S3 Object Lock. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.objectLockEnabled">objectLockEnabled</a></code> | <code>boolean</code> | Enable object lock on the S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.objectOwnership">objectOwnership</a></code> | <code>aws-cdk-lib.aws_s3.ObjectOwnership</code> | The objectOwnership of the S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.publicReadAccess">publicReadAccess</a></code> | <code>boolean</code> | Grants public read access to all objects in the S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.serverAccessLogsBucket">serverAccessLogsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | S3 Bucket destination for the server access logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.serverAccessLogsPrefix">serverAccessLogsPrefix</a></code> | <code>string</code> | Optional log file prefix to use for the S3 Bucket's access logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.transferAcceleration">transferAcceleration</a></code> | <code>boolean</code> | Whether this S3 Bucket should have transfer acceleration turned on or not. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.versioned">versioned</a></code> | <code>boolean</code> | Whether this S3 Bucket should have versioning turned on or not. |

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* If `encryption` is set to `KMS` and this property is undefined, a new KMS key will be created and associated with this bucket.

External KMS Key to use for the S3 Bucket encryption.

The `encryption` property must be either not specified or set to `KMS` or `DSSE`.
An error will be emitted if `encryption` is set to `UNENCRYPTED` or `S3_MANAGED`.

---

##### `accessControl`<sup>Optional</sup> <a name="accessControl" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.accessControl"></a>

```typescript
public readonly accessControl: BucketAccessControl;
```

- *Type:* aws-cdk-lib.aws_s3.BucketAccessControl
- *Default:* BucketAccessControl.PRIVATE

Specifies a canned ACL that grants predefined permissions to the bucket.

---

##### `autoDeleteObjects`<sup>Optional</sup> <a name="autoDeleteObjects" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.autoDeleteObjects"></a>

```typescript
public readonly autoDeleteObjects: boolean;
```

- *Type:* boolean
- *Default:* False

Whether all objects should be automatically deleted when the S3 Bucket is removed from the stack or when the stack is deleted.

Requires the `removalPolicy` to be set to `RemovalPolicy.DESTROY`.

---

##### `blockPublicAccess`<sup>Optional</sup> <a name="blockPublicAccess" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.blockPublicAccess"></a>

```typescript
public readonly blockPublicAccess: BlockPublicAccess;
```

- *Type:* aws-cdk-lib.aws_s3.BlockPublicAccess
- *Default:* CloudFormation defaults will apply. New buckets and objects don't allow public access, but users can modify bucket policies or object permissions to allow public access

The block public access configuration of this bucket.

---

##### `bucketKeyEnabled`<sup>Optional</sup> <a name="bucketKeyEnabled" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.bucketKeyEnabled"></a>

```typescript
public readonly bucketKeyEnabled: boolean;
```

- *Type:* boolean
- *Default:* False

Whether Amazon S3 should use its own intermediary key to generate data keys. Only relevant when using KMS for encryption.

If not enabled, every object GET and PUT will cause an API call to KMS (with the
  attendant cost implications of that).
- If enabled, S3 will use its own time-limited key instead.

Only relevant, when Encryption is set to `BucketEncryption.KMS` or `BucketEncryption.KMS_MANAGED`.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string
- *Default:* `analytics-<AWS_ACCOUNT_ID>-<AWS_REGION>-<UNIQUE_ID>`

The physical name of this S3 Bucket.

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.cors"></a>

```typescript
public readonly cors: CorsRule[];
```

- *Type:* aws-cdk-lib.aws_s3.CorsRule[]
- *Default:* No CORS configuration.

The CORS configuration of this bucket.

---

##### `enforceSSL`<sup>Optional</sup> <a name="enforceSSL" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.enforceSSL"></a>

```typescript
public readonly enforceSSL: boolean;
```

- *Type:* boolean
- *Default:* False

Enforces SSL for requests.

S3.5 of the AWS Foundational Security Best Practices Regarding S3.

---

##### `eventBridgeEnabled`<sup>Optional</sup> <a name="eventBridgeEnabled" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.eventBridgeEnabled"></a>

```typescript
public readonly eventBridgeEnabled: boolean;
```

- *Type:* boolean
- *Default:* False

Whether this S3 Bucket should send notifications to Amazon EventBridge or not.

---

##### `intelligentTieringConfigurations`<sup>Optional</sup> <a name="intelligentTieringConfigurations" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.intelligentTieringConfigurations"></a>

```typescript
public readonly intelligentTieringConfigurations: IntelligentTieringConfiguration[];
```

- *Type:* aws-cdk-lib.aws_s3.IntelligentTieringConfiguration[]
- *Default:* No Intelligent Tiiering Configurations.

Intelligent Tiering Configurations.

---

##### `inventories`<sup>Optional</sup> <a name="inventories" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.inventories"></a>

```typescript
public readonly inventories: Inventory[];
```

- *Type:* aws-cdk-lib.aws_s3.Inventory[]
- *Default:* No inventory configuration

The inventory configuration of the S3 Bucket.

---

##### `lifecycleRules`<sup>Optional</sup> <a name="lifecycleRules" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.lifecycleRules"></a>

```typescript
public readonly lifecycleRules: LifecycleRule[];
```

- *Type:* aws-cdk-lib.aws_s3.LifecycleRule[]
- *Default:* No lifecycle rules.

Rules that define how Amazon S3 manages objects during their lifetime.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.metrics"></a>

```typescript
public readonly metrics: BucketMetrics[];
```

- *Type:* aws-cdk-lib.aws_s3.BucketMetrics[]
- *Default:* No metrics configuration.

The metrics configuration of this bucket.

---

##### `notificationsHandlerRole`<sup>Optional</sup> <a name="notificationsHandlerRole" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.notificationsHandlerRole"></a>

```typescript
public readonly notificationsHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new IAM Role will be created.

The IAM Role to be used by the notifications handler.

---

##### `objectLockDefaultRetention`<sup>Optional</sup> <a name="objectLockDefaultRetention" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.objectLockDefaultRetention"></a>

```typescript
public readonly objectLockDefaultRetention: ObjectLockRetention;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectLockRetention
- *Default:* No default retention period

The default retention mode and rules for S3 Object Lock.

Default retention can be configured after a bucket is created if the bucket already
has object lock enabled. Enabling object lock for existing buckets is not supported.

---

##### `objectLockEnabled`<sup>Optional</sup> <a name="objectLockEnabled" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.objectLockEnabled"></a>

```typescript
public readonly objectLockEnabled: boolean;
```

- *Type:* boolean
- *Default:* False, unless objectLockDefaultRetention is set (then, true)

Enable object lock on the S3 Bucket.

Enabling object lock for existing buckets is not supported. Object lock must be enabled when the bucket is created.

---

##### `objectOwnership`<sup>Optional</sup> <a name="objectOwnership" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.objectOwnership"></a>

```typescript
public readonly objectOwnership: ObjectOwnership;
```

- *Type:* aws-cdk-lib.aws_s3.ObjectOwnership
- *Default:* No ObjectOwnership configuration, uploading account will own the object.

The objectOwnership of the S3 Bucket.

---

##### `publicReadAccess`<sup>Optional</sup> <a name="publicReadAccess" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.publicReadAccess"></a>

```typescript
public readonly publicReadAccess: boolean;
```

- *Type:* boolean
- *Default:* False

Grants public read access to all objects in the S3 Bucket.

Similar to calling `bucket.grantPublicAccess()`

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `serverAccessLogsBucket`<sup>Optional</sup> <a name="serverAccessLogsBucket" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.serverAccessLogsBucket"></a>

```typescript
public readonly serverAccessLogsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* If "serverAccessLogsPrefix" undefined - access logs disabled, otherwise - log to current bucket.

S3 Bucket destination for the server access logs.

---

##### `serverAccessLogsPrefix`<sup>Optional</sup> <a name="serverAccessLogsPrefix" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.serverAccessLogsPrefix"></a>

```typescript
public readonly serverAccessLogsPrefix: string;
```

- *Type:* string
- *Default:* No log file prefix

Optional log file prefix to use for the S3 Bucket's access logs.

If defined without "serverAccessLogsBucket", enables access logs to current S3 Bucket with this prefix.

---

##### `transferAcceleration`<sup>Optional</sup> <a name="transferAcceleration" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.transferAcceleration"></a>

```typescript
public readonly transferAcceleration: boolean;
```

- *Type:* boolean
- *Default:* False

Whether this S3 Bucket should have transfer acceleration turned on or not.

---

##### `versioned`<sup>Optional</sup> <a name="versioned" id="@cdklabs/aws-data-solutions-framework.storage.AnalyticsBucketProps.property.versioned"></a>

```typescript
public readonly versioned: boolean;
```

- *Type:* boolean
- *Default:* False (unless object lock is enabled, then true)

Whether this S3 Bucket should have versioning turned on or not.

---

### ApplicationStageProps <a name="ApplicationStageProps" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps"></a>

Properties for the `ApplicationStage` class.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

const applicationStageProps: utils.ApplicationStageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | Default AWS environment (account/region) for `Stack`s in this `Stage`. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which to emit synthesized artifacts. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.policyValidationBeta1">policyValidationBeta1</a></code> | <code>aws-cdk-lib.IPolicyValidationPluginBeta1[]</code> | Validation plugins to run during synthesis. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.stageName">stageName</a></code> | <code>string</code> | Name of this stage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.applicationStackFactory">applicationStackFactory</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory</code> | The application CDK Stack Factory used to create application Stacks. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.stage">stage</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.CICDStage</code> | The Stage to deploy the application CDK Stack in. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.outputsEnv">outputsEnv</a></code> | <code>{[ key: string ]: string}</code> | The list of values to create CfnOutputs. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environments should be configured on the `Stack`s.

Default AWS environment (account/region) for `Stack`s in this `Stage`.

Stacks defined inside this `Stage` with either `region` or `account` missing
from its env will use the corresponding field given here.

If either `region` or `account`is is not configured for `Stack` (either on
the `Stack` itself or on the containing `Stage`), the Stack will be
*environment-agnostic*.

Environment-agnostic stacks can be deployed to any environment, may not be
able to take advantage of all features of the CDK. For example, they will
not be able to use environmental context lookups, will not automatically
translate Service Principals to the right format based on the environment's
AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this Stage to
new Stage(app, 'Stage1', {
  env: { account: '123456789012', region: 'us-east-1' },
});

// Use the CLI's current credentials to determine the target environment
new Stage(app, 'Stage2', {
  env: { account: process.env.CDK_DEFAULT_ACCOUNT, region: process.env.CDK_DEFAULT_REGION },
});
```


##### `outdir`<sup>Optional</sup> <a name="outdir" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* for nested stages, outdir will be determined as a relative directory to the outdir of the app. For apps, if outdir is not specified, a temporary directory will be created.

The output directory into which to emit synthesized artifacts.

Can only be specified if this stage is the root stage (the app). If this is
specified and this stage is nested within another stage, an error will be
thrown.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `policyValidationBeta1`<sup>Optional</sup> <a name="policyValidationBeta1" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.policyValidationBeta1"></a>

```typescript
public readonly policyValidationBeta1: IPolicyValidationPluginBeta1[];
```

- *Type:* aws-cdk-lib.IPolicyValidationPluginBeta1[]
- *Default:* no validation plugins are used

Validation plugins to run during synthesis.

If any plugin reports any violation,
synthesis will be interrupted and the report displayed to the user.

---

##### `stageName`<sup>Optional</sup> <a name="stageName" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string
- *Default:* Derived from the id.

Name of this stage.

---

##### `applicationStackFactory`<sup>Required</sup> <a name="applicationStackFactory" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.applicationStackFactory"></a>

```typescript
public readonly applicationStackFactory: ApplicationStackFactory;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory

The application CDK Stack Factory used to create application Stacks.

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.stage"></a>

```typescript
public readonly stage: CICDStage;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.CICDStage
- *Default:* No stage is passed to the application stack

The Stage to deploy the application CDK Stack in.

---

##### `outputsEnv`<sup>Optional</sup> <a name="outputsEnv" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStageProps.property.outputsEnv"></a>

```typescript
public readonly outputsEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No CfnOutputs are created

The list of values to create CfnOutputs.

---

### AthenaWorkgroupProps <a name="AthenaWorkgroupProps" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps"></a>

Properties for the AthenaWorkgroup Construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const athenaWorkgroupProps: consumption.AthenaWorkgroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.name">name</a></code> | <code>string</code> | Name of the Workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultLocationPrefix">resultLocationPrefix</a></code> | <code>string</code> | Specifies the location in Amazon S3 where query results are stored. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.bytesScannedCutoffPerQuery">bytesScannedCutoffPerQuery</a></code> | <code>number</code> | Indicates the number of days after creation when objects are deleted from the Result bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.enforceWorkGroupConfiguration">enforceWorkGroupConfiguration</a></code> | <code>boolean</code> | If set to "true", the settings for the workgroup override client-side settings. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.engineVersion">engineVersion</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.EngineVersion</code> | The engine version on which the query runs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Role used to access user resources in an Athena for Apache Spark session. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.publishCloudWatchMetricsEnabled">publishCloudWatchMetricsEnabled</a></code> | <code>boolean</code> | Indicates that the Amazon CloudWatch metrics are enabled for the workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.recursiveDeleteOption">recursiveDeleteOption</a></code> | <code>boolean</code> | The option to delete a workgroup and its contents even if the workgroup contains any named queries. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.requesterPaysEnabled">requesterPaysEnabled</a></code> | <code>boolean</code> | Allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultBucket">resultBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | Amazon S3 Bucket where query results are stored. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultBucketName">resultBucketName</a></code> | <code>string</code> | Name for the S3 Bucket in case it should be created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultsEncryptionKey">resultsEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | Encryption key used to encrypt query results. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultsRetentionPeriod">resultsRetentionPeriod</a></code> | <code>aws-cdk-lib.Duration</code> | Indicates the number of days after creation when objects are deleted from the Result bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.state">state</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.State</code> | The state of the Workgroup. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the Workgroup.

---

##### `resultLocationPrefix`<sup>Required</sup> <a name="resultLocationPrefix" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultLocationPrefix"></a>

```typescript
public readonly resultLocationPrefix: string;
```

- *Type:* string

Specifies the location in Amazon S3 where query results are stored.

---

##### `bytesScannedCutoffPerQuery`<sup>Optional</sup> <a name="bytesScannedCutoffPerQuery" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.bytesScannedCutoffPerQuery"></a>

```typescript
public readonly bytesScannedCutoffPerQuery: number;
```

- *Type:* number

Indicates the number of days after creation when objects are deleted from the Result bucket.

---

##### `enforceWorkGroupConfiguration`<sup>Optional</sup> <a name="enforceWorkGroupConfiguration" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.enforceWorkGroupConfiguration"></a>

```typescript
public readonly enforceWorkGroupConfiguration: boolean;
```

- *Type:* boolean
- *Default:* True.

If set to "true", the settings for the workgroup override client-side settings.

---

##### `engineVersion`<sup>Optional</sup> <a name="engineVersion" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.engineVersion"></a>

```typescript
public readonly engineVersion: EngineVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.EngineVersion
- *Default:* AUTO.

The engine version on which the query runs.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* The role is created if PySpark engine version is selected and no role is provided.

Role used to access user resources in an Athena for Apache Spark session.

---

##### `publishCloudWatchMetricsEnabled`<sup>Optional</sup> <a name="publishCloudWatchMetricsEnabled" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.publishCloudWatchMetricsEnabled"></a>

```typescript
public readonly publishCloudWatchMetricsEnabled: boolean;
```

- *Type:* boolean
- *Default:* True.

Indicates that the Amazon CloudWatch metrics are enabled for the workgroup.

---

##### `recursiveDeleteOption`<sup>Optional</sup> <a name="recursiveDeleteOption" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.recursiveDeleteOption"></a>

```typescript
public readonly recursiveDeleteOption: boolean;
```

- *Type:* boolean
- *Default:* Workgroup is retained.

The option to delete a workgroup and its contents even if the workgroup contains any named queries.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `requesterPaysEnabled`<sup>Optional</sup> <a name="requesterPaysEnabled" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.requesterPaysEnabled"></a>

```typescript
public readonly requesterPaysEnabled: boolean;
```

- *Type:* boolean
- *Default:* False.

Allows members assigned to a workgroup to reference Amazon S3 Requester Pays buckets in queries.

---

##### `resultBucket`<sup>Optional</sup> <a name="resultBucket" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultBucket"></a>

```typescript
public readonly resultBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* Create a new bucket with SSE encryption using AnalyticsBucket if not provided.

Amazon S3 Bucket where query results are stored.

---

##### `resultBucketName`<sup>Optional</sup> <a name="resultBucketName" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultBucketName"></a>

```typescript
public readonly resultBucketName: string;
```

- *Type:* string
- *Default:* Name will be provided.

Name for the S3 Bucket in case it should be created.

---

##### `resultsEncryptionKey`<sup>Optional</sup> <a name="resultsEncryptionKey" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultsEncryptionKey"></a>

```typescript
public readonly resultsEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* The key is created if Result Bucket is not provided.

Encryption key used to encrypt query results.

Has to be provided if Result bucket is provided.
User needs to grant access to it for AthenaWorkGroup's executionRole (if Spark engine) or for
principals that were granted to run queries using AthenaWorkGroup's grantRunQueries.

---

##### `resultsRetentionPeriod`<sup>Optional</sup> <a name="resultsRetentionPeriod" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.resultsRetentionPeriod"></a>

```typescript
public readonly resultsRetentionPeriod: Duration;
```

- *Type:* aws-cdk-lib.Duration

Indicates the number of days after creation when objects are deleted from the Result bucket.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdklabs/aws-data-solutions-framework.consumption.AthenaWorkgroupProps.property.state"></a>

```typescript
public readonly state: State;
```

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.State
- *Default:* ENABLED.

The state of the Workgroup.

---

### AuthorizerCentralWorflow <a name="AuthorizerCentralWorflow" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow"></a>

Interface for the authorizer central workflow.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const authorizerCentralWorflow: governance.AuthorizerCentralWorflow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.authorizerEventRole">authorizerEventRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The authorizer event role for allowing events to invoke the workflow. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.authorizerEventRule">authorizerEventRule</a></code> | <code>aws-cdk-lib.aws_events.IRule</code> | The authorizer event rule for triggering the workflow. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.callbackRole">callbackRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used by the State Machine Call Back. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.deadLetterKey">deadLetterKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used for encryption of the Dead Letter Queue. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.deadLetterQueue">deadLetterQueue</a></code> | <code>aws-cdk-lib.aws_sqs.IQueue</code> | The SQS Dead Letter Queue receiving events failure. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.StateMachine</code> | The authorizer Step Functions state machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group for logging the state machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.stateMachineRole">stateMachineRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used by the State Machine. |

---

##### `authorizerEventRole`<sup>Required</sup> <a name="authorizerEventRole" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.authorizerEventRole"></a>

```typescript
public readonly authorizerEventRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The authorizer event role for allowing events to invoke the workflow.

---

##### `authorizerEventRule`<sup>Required</sup> <a name="authorizerEventRule" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.authorizerEventRule"></a>

```typescript
public readonly authorizerEventRule: IRule;
```

- *Type:* aws-cdk-lib.aws_events.IRule

The authorizer event rule for triggering the workflow.

---

##### `callbackRole`<sup>Required</sup> <a name="callbackRole" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.callbackRole"></a>

```typescript
public readonly callbackRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The IAM Role used by the State Machine Call Back.

---

##### `deadLetterKey`<sup>Required</sup> <a name="deadLetterKey" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.deadLetterKey"></a>

```typescript
public readonly deadLetterKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS Key used for encryption of the Dead Letter Queue.

---

##### `deadLetterQueue`<sup>Required</sup> <a name="deadLetterQueue" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.deadLetterQueue"></a>

```typescript
public readonly deadLetterQueue: IQueue;
```

- *Type:* aws-cdk-lib.aws_sqs.IQueue

The SQS Dead Letter Queue receiving events failure.

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.stateMachine"></a>

```typescript
public readonly stateMachine: StateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.StateMachine

The authorizer Step Functions state machine.

---

##### `stateMachineLogGroup`<sup>Required</sup> <a name="stateMachineLogGroup" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The CloudWatch Log Group for logging the state machine.

---

##### `stateMachineRole`<sup>Required</sup> <a name="stateMachineRole" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerCentralWorflow.property.stateMachineRole"></a>

```typescript
public readonly stateMachineRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role

The IAM Role used by the State Machine.

---

### AuthorizerEnvironmentWorflow <a name="AuthorizerEnvironmentWorflow" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerEnvironmentWorflow"></a>

The interface representing the environment custom authorizer workflow.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerEnvironmentWorflow.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const authorizerEnvironmentWorflow: governance.AuthorizerEnvironmentWorflow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerEnvironmentWorflow.property.stateMachine">stateMachine</a></code> | <code>aws-cdk-lib.aws_stepfunctions.IStateMachine</code> | The state machine that orchestrates the workflow. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerEnvironmentWorflow.property.stateMachineLogGroup">stateMachineLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The log group where the state machine logs are stored. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.AuthorizerEnvironmentWorflow.property.stateMachineRole">stateMachineRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the State Machine. |

---

##### `stateMachine`<sup>Required</sup> <a name="stateMachine" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerEnvironmentWorflow.property.stateMachine"></a>

```typescript
public readonly stateMachine: IStateMachine;
```

- *Type:* aws-cdk-lib.aws_stepfunctions.IStateMachine

The state machine that orchestrates the workflow.

---

##### `stateMachineLogGroup`<sup>Required</sup> <a name="stateMachineLogGroup" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerEnvironmentWorflow.property.stateMachineLogGroup"></a>

```typescript
public readonly stateMachineLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup

The log group where the state machine logs are stored.

---

##### `stateMachineRole`<sup>Required</sup> <a name="stateMachineRole" id="@cdklabs/aws-data-solutions-framework.governance.AuthorizerEnvironmentWorflow.property.stateMachineRole"></a>

```typescript
public readonly stateMachineRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM Role used by the State Machine.

---

### BaseRedshiftDataSharingAccessProps <a name="BaseRedshiftDataSharingAccessProps" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps"></a>

The base interface for the different data sharing lifecycle properties.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const baseRedshiftDataSharingAccessProps: consumption.BaseRedshiftDataSharingAccessProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the Redshift database used in the data sharing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.dataShareName">dataShareName</a></code> | <code>string</code> | The name of the data share. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.accountId">accountId</a></code> | <code>string</code> | For cross-account grants, this is the consumer account ID. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.dataShareArn">dataShareArn</a></code> | <code>string</code> | The ARN of the datashare. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.namespaceId">namespaceId</a></code> | <code>string</code> | For single account grants, this is the consumer namespace ID. For cross-account grants, `namespaceId` is ignored. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the Redshift database used in the data sharing.

---

##### `dataShareName`<sup>Required</sup> <a name="dataShareName" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.dataShareName"></a>

```typescript
public readonly dataShareName: string;
```

- *Type:* string

The name of the data share.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string
- *Default:* No account ID is used.

For cross-account grants, this is the consumer account ID.

For cross-account consumers, this is the producer account ID.

---

##### `dataShareArn`<sup>Optional</sup> <a name="dataShareArn" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.dataShareArn"></a>

```typescript
public readonly dataShareArn: string;
```

- *Type:* string
- *Default:* No data share ARN is used.

The ARN of the datashare.

This is required for any action that is cross account.

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdklabs/aws-data-solutions-framework.consumption.BaseRedshiftDataSharingAccessProps.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string
- *Default:* No namespace ID is used.

For single account grants, this is the consumer namespace ID. For cross-account grants, `namespaceId` is ignored.

For consumers, this is the producer namespace ID. It is required for both single and cross account data sharing.

---

### BrokerLogging <a name="BrokerLogging" id="@cdklabs/aws-data-solutions-framework.streaming.BrokerLogging"></a>

Configuration details related to broker logs.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.BrokerLogging.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const brokerLogging: streaming.BrokerLogging = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.BrokerLogging.property.cloudwatchLogGroup">cloudwatchLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Logs group that is the destination for broker logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.BrokerLogging.property.firehoseDeliveryStreamName">firehoseDeliveryStreamName</a></code> | <code>string</code> | The Kinesis Data Firehose delivery stream that is the destination for broker logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.BrokerLogging.property.s3">s3</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.S3LoggingConfiguration</code> | Details of the Amazon S3 destination for broker logs. |

---

##### `cloudwatchLogGroup`<sup>Optional</sup> <a name="cloudwatchLogGroup" id="@cdklabs/aws-data-solutions-framework.streaming.BrokerLogging.property.cloudwatchLogGroup"></a>

```typescript
public readonly cloudwatchLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* disabled

The CloudWatch Logs group that is the destination for broker logs.

---

##### `firehoseDeliveryStreamName`<sup>Optional</sup> <a name="firehoseDeliveryStreamName" id="@cdklabs/aws-data-solutions-framework.streaming.BrokerLogging.property.firehoseDeliveryStreamName"></a>

```typescript
public readonly firehoseDeliveryStreamName: string;
```

- *Type:* string
- *Default:* disabled

The Kinesis Data Firehose delivery stream that is the destination for broker logs.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdklabs/aws-data-solutions-framework.streaming.BrokerLogging.property.s3"></a>

```typescript
public readonly s3: S3LoggingConfiguration;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.S3LoggingConfiguration
- *Default:* disabled

Details of the Amazon S3 destination for broker logs.

---

### ClusterConfigurationInfo <a name="ClusterConfigurationInfo" id="@cdklabs/aws-data-solutions-framework.streaming.ClusterConfigurationInfo"></a>

The Amazon MSK configuration to use for the cluster.

Note: There is currently no Cloudformation Resource to create a Configuration

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.ClusterConfigurationInfo.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const clusterConfigurationInfo: streaming.ClusterConfigurationInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClusterConfigurationInfo.property.arn">arn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the MSK configuration to use. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClusterConfigurationInfo.property.revision">revision</a></code> | <code>number</code> | The revision of the Amazon MSK configuration to use. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdklabs/aws-data-solutions-framework.streaming.ClusterConfigurationInfo.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the MSK configuration to use.

For example, arn:aws:kafka:us-east-1:123456789012:configuration/example-configuration-name/abcdabcd-1234-abcd-1234-abcd123e8e8e-1.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdklabs/aws-data-solutions-framework.streaming.ClusterConfigurationInfo.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

The revision of the Amazon MSK configuration to use.

---

### CreateServiceLinkedRoleProps <a name="CreateServiceLinkedRoleProps" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRoleProps"></a>

The properties of the `CreateServiceLinkedRole` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRoleProps.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

const createServiceLinkedRoleProps: utils.CreateServiceLinkedRoleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRoleProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRoleProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise, the removalPolicy is reverted to RETAIN.

---

### CustomAssetType <a name="CustomAssetType" id="@cdklabs/aws-data-solutions-framework.governance.CustomAssetType"></a>

Interface representing a DataZone custom asset type.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.CustomAssetType.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const customAssetType: governance.CustomAssetType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.CustomAssetType.property.domainId">domainId</a></code> | <code>string</code> | The domain identifier of the custom asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.CustomAssetType.property.name">name</a></code> | <code>string</code> | The name of the custom asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.CustomAssetType.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | The project identifier owner of the custom asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.CustomAssetType.property.revision">revision</a></code> | <code>string</code> | The revision of the custom asset type. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdklabs/aws-data-solutions-framework.governance.CustomAssetType.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The domain identifier of the custom asset type.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.governance.CustomAssetType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the custom asset type.

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdklabs/aws-data-solutions-framework.governance.CustomAssetType.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

The project identifier owner of the custom asset type.

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdklabs/aws-data-solutions-framework.governance.CustomAssetType.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

The revision of the custom asset type.

---

### DataCatalogDatabaseProps <a name="DataCatalogDatabaseProps" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps"></a>

Properties for the `DataCatalogDatabase` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataCatalogDatabaseProps: governance.DataCatalogDatabaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.name">name</a></code> | <code>string</code> | Database name. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.autoCrawl">autoCrawl</a></code> | <code>boolean</code> | When enabled, this automatically creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.autoCrawlSchedule">autoCrawlSchedule</a></code> | <code>aws-cdk-lib.aws_glue.CfnCrawler.ScheduleProperty</code> | The schedule to run the Glue Crawler. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.crawlerLogEncryptionKey">crawlerLogEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | KMS encryption Key used for the Glue Crawler logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.crawlerRole">crawlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the Glue Crawler when `autoCrawl` is set to `True`. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.crawlerTableLevelDepth">crawlerTableLevelDepth</a></code> | <code>number</code> | Directory depth where the table folders are located. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.glueConnectionName">glueConnectionName</a></code> | <code>string</code> | The connection that would be used by the crawler. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.jdbcPath">jdbcPath</a></code> | <code>string</code> | The JDBC path that would be included by the crawler. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.jdbcSecret">jdbcSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The secret associated with the JDBC connection. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.jdbcSecretKMSKey">jdbcSecretKMSKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS key used by the JDBC secret. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.lakeFormationConfigurationRole">lakeFormationConfigurationRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role assumed by the construct resources to perform Lake Formation configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.lakeFormationDataAccessRole">lakeFormationDataAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by Lake Formation for [data access](https://docs.aws.amazon.com/lake-formation/latest/dg/registration-role.html). The role is assumed by Lake Formation to provide temporary credentials to query engines. Only needed when permissionModel is set to Lake Formation or Hybrid. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.locationBucket">locationBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | S3 bucket where data is stored. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.locationPrefix">locationPrefix</a></code> | <code>string</code> | Top level location where table data is stored. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.permissionModel">permissionModel</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.PermissionModel</code> | The permission model to apply to the Glue Database. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Database name.

Construct would add a randomize suffix as part of the name to prevent name collisions.

---

##### `autoCrawl`<sup>Optional</sup> <a name="autoCrawl" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.autoCrawl"></a>

```typescript
public readonly autoCrawl: boolean;
```

- *Type:* boolean
- *Default:* True

When enabled, this automatically creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter.

---

##### `autoCrawlSchedule`<sup>Optional</sup> <a name="autoCrawlSchedule" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.autoCrawlSchedule"></a>

```typescript
public readonly autoCrawlSchedule: ScheduleProperty;
```

- *Type:* aws-cdk-lib.aws_glue.CfnCrawler.ScheduleProperty
- *Default:* `cron(1 0 * * ? *)`

The schedule to run the Glue Crawler.

Default is once a day at 00:01h.

---

##### `crawlerLogEncryptionKey`<sup>Optional</sup> <a name="crawlerLogEncryptionKey" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.crawlerLogEncryptionKey"></a>

```typescript
public readonly crawlerLogEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* Create a new key if none is provided

KMS encryption Key used for the Glue Crawler logs.

---

##### `crawlerRole`<sup>Optional</sup> <a name="crawlerRole" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.crawlerRole"></a>

```typescript
public readonly crawlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* When `autoCrawl` is enabled, a new role is created with least privilege permissions to run the crawler

The IAM Role used by the Glue Crawler when `autoCrawl` is set to `True`.

Additional permissions are granted to this role such as S3 Bucket read only permissions and KMS encrypt/decrypt on the key used by the Glue Crawler logging to CloudWatch Logs.

---

##### `crawlerTableLevelDepth`<sup>Optional</sup> <a name="crawlerTableLevelDepth" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.crawlerTableLevelDepth"></a>

```typescript
public readonly crawlerTableLevelDepth: number;
```

- *Type:* number
- *Default:* calculated based on `locationPrefix`

Directory depth where the table folders are located.

This helps the Glue Crawler understand the layout of the folders in S3.

---

##### `glueConnectionName`<sup>Optional</sup> <a name="glueConnectionName" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.glueConnectionName"></a>

```typescript
public readonly glueConnectionName: string;
```

- *Type:* string

The connection that would be used by the crawler.

---

##### `jdbcPath`<sup>Optional</sup> <a name="jdbcPath" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.jdbcPath"></a>

```typescript
public readonly jdbcPath: string;
```

- *Type:* string

The JDBC path that would be included by the crawler.

---

##### `jdbcSecret`<sup>Optional</sup> <a name="jdbcSecret" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.jdbcSecret"></a>

```typescript
public readonly jdbcSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The secret associated with the JDBC connection.

---

##### `jdbcSecretKMSKey`<sup>Optional</sup> <a name="jdbcSecretKMSKey" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.jdbcSecretKMSKey"></a>

```typescript
public readonly jdbcSecretKMSKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The KMS key used by the JDBC secret.

---

##### `lakeFormationConfigurationRole`<sup>Optional</sup> <a name="lakeFormationConfigurationRole" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.lakeFormationConfigurationRole"></a>

```typescript
public readonly lakeFormationConfigurationRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created

The IAM Role assumed by the construct resources to perform Lake Formation configuration.

The role is assumed by Lambda functions to perform Lake Formation related operations.
Only needed when permissionModel is set to Lake Formation or Hybrid

---

##### `lakeFormationDataAccessRole`<sup>Optional</sup> <a name="lakeFormationDataAccessRole" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.lakeFormationDataAccessRole"></a>

```typescript
public readonly lakeFormationDataAccessRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created

The IAM Role used by Lake Formation for [data access](https://docs.aws.amazon.com/lake-formation/latest/dg/registration-role.html). The role is assumed by Lake Formation to provide temporary credentials to query engines. Only needed when permissionModel is set to Lake Formation or Hybrid.

---

##### `locationBucket`<sup>Optional</sup> <a name="locationBucket" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.locationBucket"></a>

```typescript
public readonly locationBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

S3 bucket where data is stored.

---

##### `locationPrefix`<sup>Optional</sup> <a name="locationPrefix" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.locationPrefix"></a>

```typescript
public readonly locationPrefix: string;
```

- *Type:* string
- *Default:* the root of the bucket is used as the location prefix.

Top level location where table data is stored.

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.permissionModel"></a>

```typescript
public readonly permissionModel: PermissionModel;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.PermissionModel
- *Default:* IAM permission model is used

The permission model to apply to the Glue Database.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.governance.DataCatalogDatabaseProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

### DataLakeCatalogProps <a name="DataLakeCatalogProps" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps"></a>

Properties for the `DataLakeCatalog` Construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataLakeCatalogProps: governance.DataLakeCatalogProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.dataLakeStorage">dataLakeStorage</a></code> | <code>@cdklabs/aws-data-solutions-framework.storage.DataLakeStorage</code> | The DataLakeStorage object to create the data catalog on. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.autoCrawl">autoCrawl</a></code> | <code>boolean</code> | When enabled, creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.autoCrawlSchedule">autoCrawlSchedule</a></code> | <code>aws-cdk-lib.aws_glue.CfnCrawler.ScheduleProperty</code> | The schedule when the Glue Crawler runs, if enabled. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.crawlerLogEncryptionKey">crawlerLogEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS encryption Key used for the Glue Crawler logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.crawlerTableLevelDepth">crawlerTableLevelDepth</a></code> | <code>number</code> | Directory depth where the table folders are located. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.databaseName">databaseName</a></code> | <code>string</code> | The suffix of the Glue Data Catalog Database. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.lakeFormationConfigurationRole">lakeFormationConfigurationRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role assumed by the construct resources to perform Lake Formation configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.lakeFormationDataAccessRole">lakeFormationDataAccessRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by Lake Formation for [data access](https://docs.aws.amazon.com/lake-formation/latest/dg/access-control-underlying-data.html). The role will be used for accessing all the layers of the data lake (bronze, silver, gold). Only needed when permissionModel is set to Lake Formation or Hybrid. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.permissionModel">permissionModel</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.PermissionModel</code> | The permission model to apply to the Glue Database. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |

---

##### `dataLakeStorage`<sup>Required</sup> <a name="dataLakeStorage" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.dataLakeStorage"></a>

```typescript
public readonly dataLakeStorage: DataLakeStorage;
```

- *Type:* @cdklabs/aws-data-solutions-framework.storage.DataLakeStorage

The DataLakeStorage object to create the data catalog on.

---

##### `autoCrawl`<sup>Optional</sup> <a name="autoCrawl" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.autoCrawl"></a>

```typescript
public readonly autoCrawl: boolean;
```

- *Type:* boolean
- *Default:* True

When enabled, creates a top level Glue Crawler that would run based on the defined schedule in the `autoCrawlSchedule` parameter.

---

##### `autoCrawlSchedule`<sup>Optional</sup> <a name="autoCrawlSchedule" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.autoCrawlSchedule"></a>

```typescript
public readonly autoCrawlSchedule: ScheduleProperty;
```

- *Type:* aws-cdk-lib.aws_glue.CfnCrawler.ScheduleProperty
- *Default:* `cron(1 0 * * ? *)`

The schedule when the Glue Crawler runs, if enabled.

Default is once a day at 00:01h.

---

##### `crawlerLogEncryptionKey`<sup>Optional</sup> <a name="crawlerLogEncryptionKey" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.crawlerLogEncryptionKey"></a>

```typescript
public readonly crawlerLogEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* Create a new KMS Key if none is provided

The KMS encryption Key used for the Glue Crawler logs.

---

##### `crawlerTableLevelDepth`<sup>Optional</sup> <a name="crawlerTableLevelDepth" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.crawlerTableLevelDepth"></a>

```typescript
public readonly crawlerTableLevelDepth: number;
```

- *Type:* number
- *Default:* calculated based on `locationPrefix`

Directory depth where the table folders are located.

This helps the Glue Crawler understand the layout of the folders in S3.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string
- *Default:* Use the bucket name as the database name and as the S3 location

The suffix of the Glue Data Catalog Database.

The name of the Glue Database is composed of the S3 Bucket name and this suffix.
The suffix is also added to the S3 location inside the data lake S3 Buckets.

---

##### `lakeFormationConfigurationRole`<sup>Optional</sup> <a name="lakeFormationConfigurationRole" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.lakeFormationConfigurationRole"></a>

```typescript
public readonly lakeFormationConfigurationRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created for the entire Data Lake

The IAM Role assumed by the construct resources to perform Lake Formation configuration.

Only needed when permissionModel is set to Lake Formation or Hybrid

---

##### `lakeFormationDataAccessRole`<sup>Optional</sup> <a name="lakeFormationDataAccessRole" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.lakeFormationDataAccessRole"></a>

```typescript
public readonly lakeFormationDataAccessRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created for the entire Data Lake

The IAM Role used by Lake Formation for [data access](https://docs.aws.amazon.com/lake-formation/latest/dg/access-control-underlying-data.html). The role will be used for accessing all the layers of the data lake (bronze, silver, gold). Only needed when permissionModel is set to Lake Formation or Hybrid.

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.permissionModel"></a>

```typescript
public readonly permissionModel: PermissionModel;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.PermissionModel
- *Default:* IAM permission model is used

The permission model to apply to the Glue Database.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.governance.DataLakeCatalogProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

### DataLakeStorageProps <a name="DataLakeStorageProps" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps"></a>

Properties for the DataLakeStorage Construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.Initializer"></a>

```typescript
import { storage } from '@cdklabs/aws-data-solutions-framework'

const dataLakeStorageProps: storage.DataLakeStorageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.bronzeBucketArchiveDelay">bronzeBucketArchiveDelay</a></code> | <code>number</code> | Delay (in days) before archiving BRONZE data to frozen storage (Glacier storage class). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.bronzeBucketInfrequentAccessDelay">bronzeBucketInfrequentAccessDelay</a></code> | <code>number</code> | Delay (in days) before moving BRONZE data to cold storage (Infrequent Access storage class). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.bronzeBucketName">bronzeBucketName</a></code> | <code>string</code> | Name of the Bronze bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.dataLakeKey">dataLakeKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used to encrypt all DataLakeStorage S3 buckets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.goldBucketArchiveDelay">goldBucketArchiveDelay</a></code> | <code>number</code> | Delay (in days) before archiving GOLD data to frozen storage (Glacier storage class). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.goldBucketInfrequentAccessDelay">goldBucketInfrequentAccessDelay</a></code> | <code>number</code> | Delay (in days) before moving GOLD data to cold storage (Infrequent Access storage class). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.goldBucketName">goldBucketName</a></code> | <code>string</code> | Name of the Gold bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.silverBucketArchiveDelay">silverBucketArchiveDelay</a></code> | <code>number</code> | Delay (in days) before archiving SILVER data to frozen storage (Glacier storage class). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.silverBucketInfrequentAccessDelay">silverBucketInfrequentAccessDelay</a></code> | <code>number</code> | Delay (in days) before moving SILVER data to cold storage (Infrequent Access storage class). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.silverBucketName">silverBucketName</a></code> | <code>string</code> | Name of the Silver bucket. |

---

##### `bronzeBucketArchiveDelay`<sup>Optional</sup> <a name="bronzeBucketArchiveDelay" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.bronzeBucketArchiveDelay"></a>

```typescript
public readonly bronzeBucketArchiveDelay: number;
```

- *Type:* number
- *Default:* Move objects to Glacier after 90 days.

Delay (in days) before archiving BRONZE data to frozen storage (Glacier storage class).

---

##### `bronzeBucketInfrequentAccessDelay`<sup>Optional</sup> <a name="bronzeBucketInfrequentAccessDelay" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.bronzeBucketInfrequentAccessDelay"></a>

```typescript
public readonly bronzeBucketInfrequentAccessDelay: number;
```

- *Type:* number
- *Default:* Move objects to Infrequent Access after 30 days.

Delay (in days) before moving BRONZE data to cold storage (Infrequent Access storage class).

---

##### `bronzeBucketName`<sup>Optional</sup> <a name="bronzeBucketName" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.bronzeBucketName"></a>

```typescript
public readonly bronzeBucketName: string;
```

- *Type:* string
- *Default:* `bronze-<ACCOUNT_ID>-<REGION>-<UNIQUE_ID>` will be used.

Name of the Bronze bucket.

Use `BucketUtils.generateUniqueBucketName()` to generate a unique name (recommended).

---

##### `dataLakeKey`<sup>Optional</sup> <a name="dataLakeKey" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.dataLakeKey"></a>

```typescript
public readonly dataLakeKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* A single KMS customer key is created.

The KMS Key used to encrypt all DataLakeStorage S3 buckets.

---

##### `goldBucketArchiveDelay`<sup>Optional</sup> <a name="goldBucketArchiveDelay" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.goldBucketArchiveDelay"></a>

```typescript
public readonly goldBucketArchiveDelay: number;
```

- *Type:* number
- *Default:* Objects are not archived to Glacier.

Delay (in days) before archiving GOLD data to frozen storage (Glacier storage class).

---

##### `goldBucketInfrequentAccessDelay`<sup>Optional</sup> <a name="goldBucketInfrequentAccessDelay" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.goldBucketInfrequentAccessDelay"></a>

```typescript
public readonly goldBucketInfrequentAccessDelay: number;
```

- *Type:* number
- *Default:* Move objects to Infrequent Access after 90 days.

Delay (in days) before moving GOLD data to cold storage (Infrequent Access storage class).

---

##### `goldBucketName`<sup>Optional</sup> <a name="goldBucketName" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.goldBucketName"></a>

```typescript
public readonly goldBucketName: string;
```

- *Type:* string
- *Default:* `gold-<ACCOUNT_ID>-<REGION>-<UNIQUE_ID>` will be used.

Name of the Gold bucket.

Use `BucketUtils.generateUniqueBucketName()` to generate a unique name (recommended).

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise, the removalPolicy is reverted to RETAIN.

---

##### `silverBucketArchiveDelay`<sup>Optional</sup> <a name="silverBucketArchiveDelay" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.silverBucketArchiveDelay"></a>

```typescript
public readonly silverBucketArchiveDelay: number;
```

- *Type:* number
- *Default:* Objects are not archived to Glacier.

Delay (in days) before archiving SILVER data to frozen storage (Glacier storage class).

---

##### `silverBucketInfrequentAccessDelay`<sup>Optional</sup> <a name="silverBucketInfrequentAccessDelay" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.silverBucketInfrequentAccessDelay"></a>

```typescript
public readonly silverBucketInfrequentAccessDelay: number;
```

- *Type:* number
- *Default:* Move objects to Infrequent Access after 90 days.

Delay (in days) before moving SILVER data to cold storage (Infrequent Access storage class).

---

##### `silverBucketName`<sup>Optional</sup> <a name="silverBucketName" id="@cdklabs/aws-data-solutions-framework.storage.DataLakeStorageProps.property.silverBucketName"></a>

```typescript
public readonly silverBucketName: string;
```

- *Type:* string
- *Default:* `silver-<ACCOUNT_ID>-<REGION>-<UNIQUE_ID>` will be used.

Name of the Silver bucket.

Use `BucketUtils.generateUniqueBucketName()` to generate a unique name (recommended).

---

### DataVpcClientVpnEndpointProps <a name="DataVpcClientVpnEndpointProps" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps"></a>

The properties for the ClientVPnEndpoint in DataVpc construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

const dataVpcClientVpnEndpointProps: utils.DataVpcClientVpnEndpointProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.samlMetadataDocument">samlMetadataDocument</a></code> | <code>string</code> | An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your organization's IdP. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.serverCertificateArn">serverCertificateArn</a></code> | <code>string</code> | The ARN of the server certificate. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.authorizeAllUsersToVpcCidr">authorizeAllUsersToVpcCidr</a></code> | <code>boolean</code> | Whether to authorize all users to the VPC CIDR. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.dnsServers">dnsServers</a></code> | <code>string[]</code> | Information about the DNS servers to be used for DNS resolution. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.logging">logging</a></code> | <code>boolean</code> | A CloudWatch Logs log group for connection logging. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.logGroup">logGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | A CloudWatch Logs log group for connection logging. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.port">port</a></code> | <code>aws-cdk-lib.aws_ec2.VpnPort</code> | The port number to assign to the Client VPN endpoint for TCP and UDP traffic. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The security groups to apply to the target network. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.selfServicePortal">selfServicePortal</a></code> | <code>boolean</code> | Specify whether to enable the self-service portal for the Client VPN endpoint. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.sessionTimeout">sessionTimeout</a></code> | <code>aws-cdk-lib.aws_ec2.ClientVpnSessionTimeout</code> | The maximum VPN session duration time. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.splitTunnel">splitTunnel</a></code> | <code>boolean</code> | Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.transportProtocol">transportProtocol</a></code> | <code>aws-cdk-lib.aws_ec2.TransportProtocol</code> | The transport protocol to be used by the VPN session. |

---

##### `samlMetadataDocument`<sup>Required</sup> <a name="samlMetadataDocument" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.samlMetadataDocument"></a>

```typescript
public readonly samlMetadataDocument: string;
```

- *Type:* string

An XML document generated by an identity provider (IdP) that supports SAML 2.0. The document includes the issuer's name, expiration information, and keys that can be used to validate the SAML authentication response (assertions) that are received from the IdP. You must generate the metadata document using the identity management software that is used as your organization's IdP.

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.serverCertificateArn"></a>

```typescript
public readonly serverCertificateArn: string;
```

- *Type:* string

The ARN of the server certificate.

---

##### `authorizeAllUsersToVpcCidr`<sup>Optional</sup> <a name="authorizeAllUsersToVpcCidr" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.authorizeAllUsersToVpcCidr"></a>

```typescript
public readonly authorizeAllUsersToVpcCidr: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to authorize all users to the VPC CIDR.

---

##### `dnsServers`<sup>Optional</sup> <a name="dnsServers" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.dnsServers"></a>

```typescript
public readonly dnsServers: string[];
```

- *Type:* string[]
- *Default:* DNS server in VPC, e.g. 10.0.0.2

Information about the DNS servers to be used for DNS resolution.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.logging"></a>

```typescript
public readonly logging: boolean;
```

- *Type:* boolean
- *Default:* true

A CloudWatch Logs log group for connection logging.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.logGroup"></a>

```typescript
public readonly logGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* new LogGroup is created

A CloudWatch Logs log group for connection logging.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.port"></a>

```typescript
public readonly port: VpnPort;
```

- *Type:* aws-cdk-lib.aws_ec2.VpnPort
- *Default:* true

The port number to assign to the Client VPN endpoint for TCP and UDP traffic.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* new Securoty Group is created, allowing the incoming connections on port 443

The security groups to apply to the target network.

---

##### `selfServicePortal`<sup>Optional</sup> <a name="selfServicePortal" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.selfServicePortal"></a>

```typescript
public readonly selfServicePortal: boolean;
```

- *Type:* boolean
- *Default:* true

Specify whether to enable the self-service portal for the Client VPN endpoint.

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: ClientVpnSessionTimeout;
```

- *Type:* aws-cdk-lib.aws_ec2.ClientVpnSessionTimeout
- *Default:* 480 minutes

The maximum VPN session duration time.

---

##### `splitTunnel`<sup>Optional</sup> <a name="splitTunnel" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.splitTunnel"></a>

```typescript
public readonly splitTunnel: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether split-tunnel is enabled on the AWS Client VPN endpoint.

---

##### `transportProtocol`<sup>Optional</sup> <a name="transportProtocol" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps.property.transportProtocol"></a>

```typescript
public readonly transportProtocol: TransportProtocol;
```

- *Type:* aws-cdk-lib.aws_ec2.TransportProtocol
- *Default:* TCP

The transport protocol to be used by the VPN session.

---

### DataVpcProps <a name="DataVpcProps" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcProps"></a>

The properties for the `DataVpc` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

const dataVpcProps: utils.DataVpcProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.vpcCidr">vpcCidr</a></code> | <code>string</code> | The CIDR to use to create the subnets in the VPC. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.clientVpnEndpointProps">clientVpnEndpointProps</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps</code> | ClientVpnEndpoint propertioes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.flowLogKey">flowLogKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS key used to encrypt the VPC Flow Logs in the CloudWatch Log Group. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.flowLogRetention">flowLogRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | The retention period to apply to VPC Flow Logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.flowLogRole">flowLogRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used to send the VPC Flow Logs in CloudWatch. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.natGateways">natGateways</a></code> | <code>number</code> | Number of NAT Gateways. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |

---

##### `vpcCidr`<sup>Required</sup> <a name="vpcCidr" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.vpcCidr"></a>

```typescript
public readonly vpcCidr: string;
```

- *Type:* string

The CIDR to use to create the subnets in the VPC.

---

##### `clientVpnEndpointProps`<sup>Optional</sup> <a name="clientVpnEndpointProps" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.clientVpnEndpointProps"></a>

```typescript
public readonly clientVpnEndpointProps: DataVpcClientVpnEndpointProps;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.DataVpcClientVpnEndpointProps
- *Default:* None

ClientVpnEndpoint propertioes.

Required if client vpn endpoint is needed

---

##### `flowLogKey`<sup>Optional</sup> <a name="flowLogKey" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.flowLogKey"></a>

```typescript
public readonly flowLogKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* A new KMS key is created

The KMS key used to encrypt the VPC Flow Logs in the CloudWatch Log Group.

The resource policy of the key must be configured according to the AWS documentation.

> [https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html)

---

##### `flowLogRetention`<sup>Optional</sup> <a name="flowLogRetention" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.flowLogRetention"></a>

```typescript
public readonly flowLogRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* One week retention

The retention period to apply to VPC Flow Logs.

---

##### `flowLogRole`<sup>Optional</sup> <a name="flowLogRole" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.flowLogRole"></a>

```typescript
public readonly flowLogRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new IAM role is created

The IAM Role used to send the VPC Flow Logs in CloudWatch.

The role must be configured as described in the AWS VPC Flow Log documentation.

> [https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-cwl.html#flow-logs-iam-role](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-cwl.html#flow-logs-iam-role)

---

##### `natGateways`<sup>Optional</sup> <a name="natGateways" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.natGateways"></a>

```typescript
public readonly natGateways: number;
```

- *Type:* number
- *Default:* 3 or the AZs defined in the context

Number of NAT Gateways.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.utils.DataVpcProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise, the removalPolicy is reverted to RETAIN.

---

### DataZoneCustomAssetTypeFactoryProps <a name="DataZoneCustomAssetTypeFactoryProps" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps"></a>

Properties for the DataZoneCustomAssetTypeFactory construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataZoneCustomAssetTypeFactoryProps: governance.DataZoneCustomAssetTypeFactoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps.property.domainId">domainId</a></code> | <code>string</code> | The DataZone domain identifier. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps.property.lambdaRole">lambdaRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The Lambda role used by the custom resource provider. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy for the custom resource. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DataZone domain identifier.

---

##### `lambdaRole`<sup>Optional</sup> <a name="lambdaRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps.property.lambdaRole"></a>

```typescript
public readonly lambdaRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created

The Lambda role used by the custom resource provider.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactoryProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy for the custom resource.

---

### DataZoneCustomAssetTypeProps <a name="DataZoneCustomAssetTypeProps" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps"></a>

Properties for the DataZoneCustomAssetType construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataZoneCustomAssetTypeProps: governance.DataZoneCustomAssetTypeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.assetTypeName">assetTypeName</a></code> | <code>string</code> | The name of the custom asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.formTypes">formTypes</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataZoneFormType[]</code> | The form types of the custom asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.projectId">projectId</a></code> | <code>string</code> | The project identifier owner of the custom asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.assetTypeDescription">assetTypeDescription</a></code> | <code>string</code> | The description of the custom asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy of the custom asset type. |

---

##### `assetTypeName`<sup>Required</sup> <a name="assetTypeName" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.assetTypeName"></a>

```typescript
public readonly assetTypeName: string;
```

- *Type:* string

The name of the custom asset type.

---

##### `formTypes`<sup>Required</sup> <a name="formTypes" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.formTypes"></a>

```typescript
public readonly formTypes: DataZoneFormType[];
```

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneFormType[]

The form types of the custom asset type.

---

*Example*

```typescript
[{ name: 'userForm', model: [{ name: 'firstName', type: 'String', required: true }] }]
```


##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The project identifier owner of the custom asset type.

---

##### `assetTypeDescription`<sup>Optional</sup> <a name="assetTypeDescription" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.assetTypeDescription"></a>

```typescript
public readonly assetTypeDescription: string;
```

- *Type:* string
- *Default:* No description provided

The description of the custom asset type.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RETAIN

The removal policy of the custom asset type.

---

### DataZoneFormType <a name="DataZoneFormType" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormType"></a>

Interface representing a DataZoneFormType.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormType.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataZoneFormType: governance.DataZoneFormType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneFormType.property.name">name</a></code> | <code>string</code> | The name of the form. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneFormType.property.model">model</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField[]</code> | The fields of the form. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneFormType.property.required">required</a></code> | <code>boolean</code> | Whether the form is required. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the form.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormType.property.model"></a>

```typescript
public readonly model: DataZoneFormTypeField[];
```

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField[]
- *Default:* No model is required. The form is already configured in DataZone.

The fields of the form.

---

*Example*

```typescript
[{ name: 'firstName', type: 'String', required: true }]
```


##### `required`<sup>Optional</sup> <a name="required" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormType.property.required"></a>

```typescript
public readonly required: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the form is required.

---

### DataZoneFormTypeField <a name="DataZoneFormTypeField" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField"></a>

Interface representing a DataZoneFormTypeField.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataZoneFormTypeField: governance.DataZoneFormTypeField = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField.property.name">name</a></code> | <code>string</code> | The name of the field. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField.property.type">type</a></code> | <code>string</code> | The type of the field. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField.property.required">required</a></code> | <code>boolean</code> | Whether the field is required. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the field.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of the field.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneFormTypeField.property.required"></a>

```typescript
public readonly required: boolean;
```

- *Type:* boolean
- *Default:* false

Whether the field is required.

---

### DataZoneGsrMskDataSourceProps <a name="DataZoneGsrMskDataSourceProps" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps"></a>

Properties for configuring a DataZone GSR MSK datasource.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataZoneGsrMskDataSourceProps: governance.DataZoneGsrMskDataSourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the MSK (Managed Streaming for Apache Kafka) cluster to use. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.domainId">domainId</a></code> | <code>string</code> | The unique identifier for the DataZone domain where the datasource resides. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.projectId">projectId</a></code> | <code>string</code> | The unique identifier for the project associated with this datasource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.registryName">registryName</a></code> | <code>string</code> | The name of the registry for schema management. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.enableSchemaRegistryEvent">enableSchemaRegistryEvent</a></code> | <code>boolean</code> | A flag to trigger the data source based on the Glue Schema Registry events. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | The KMS encryption key used to encrypt lambda environment, lambda logs and SSM parameters. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.lambdaRole">lambdaRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The Role used by the Lambda responsible to manage DataZone MskTopicAssets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the data source. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.runSchedule">runSchedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The cron schedule to run the data source and synchronize DataZone assets with the Glue Schema Registry. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.ssmParameterKey">ssmParameterKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | The KMS Key used to encrypt the SSM parameter for storing asset information. |

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

The name of the MSK (Managed Streaming for Apache Kafka) cluster to use.

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The unique identifier for the DataZone domain where the datasource resides.

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

The unique identifier for the project associated with this datasource.

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

The name of the registry for schema management.

---

##### `enableSchemaRegistryEvent`<sup>Optional</sup> <a name="enableSchemaRegistryEvent" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.enableSchemaRegistryEvent"></a>

```typescript
public readonly enableSchemaRegistryEvent: boolean;
```

- *Type:* boolean
- *Default:* false, meaning the EventBridge listener for schema changes is disabled.

A flag to trigger the data source based on the Glue Schema Registry events.

The data source can be triggered by events independently of the schedule configured with `runSchedule`.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key
- *Default:* AWS managed customer master key (CMK) is used

The KMS encryption key used to encrypt lambda environment, lambda logs and SSM parameters.

---

##### `lambdaRole`<sup>Optional</sup> <a name="lambdaRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.lambdaRole"></a>

```typescript
public readonly lambdaRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role
- *Default:* A new role is created

The Role used by the Lambda responsible to manage DataZone MskTopicAssets.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply to the data source.

---

##### `runSchedule`<sup>Optional</sup> <a name="runSchedule" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.runSchedule"></a>

```typescript
public readonly runSchedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* `cron(1 0 * * ? *)` if `enableSchemaRegistryEvent` is false or undefined, otherwise no schedule.

The cron schedule to run the data source and synchronize DataZone assets with the Glue Schema Registry.

The data source can be scheduled independently of the event based trigger configured with `enableSchemaRegistryEvent`.

---

##### `ssmParameterKey`<sup>Optional</sup> <a name="ssmParameterKey" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneGsrMskDataSourceProps.property.ssmParameterKey"></a>

```typescript
public readonly ssmParameterKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key
- *Default:* A new key is created

The KMS Key used to encrypt the SSM parameter for storing asset information.

---

### DataZoneMskAssetTypeProps <a name="DataZoneMskAssetTypeProps" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps"></a>

The properties for the DataZoneMskAssetType construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataZoneMskAssetTypeProps: governance.DataZoneMskAssetTypeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps.property.domainId">domainId</a></code> | <code>string</code> | The DataZone domain identifier. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps.property.dzCustomAssetTypeFactory">dzCustomAssetTypeFactory</a></code> | <code>@cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory</code> | The factory to create the custom asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps.property.projectId">projectId</a></code> | <code>string</code> | The project identifier owner of the custom asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the asset type. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DataZone domain identifier.

---

##### `dzCustomAssetTypeFactory`<sup>Optional</sup> <a name="dzCustomAssetTypeFactory" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps.property.dzCustomAssetTypeFactory"></a>

```typescript
public readonly dzCustomAssetTypeFactory: DataZoneCustomAssetTypeFactory;
```

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneCustomAssetTypeFactory
- *Default:* A new factory is created

The factory to create the custom asset type.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string
- *Default:* A new project called MskGovernance is created

The project identifier owner of the custom asset type.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskAssetTypeProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply to the asset type.

---

### DataZoneMskCentralAuthorizerProps <a name="DataZoneMskCentralAuthorizerProps" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps"></a>

The properties for the DataZoneMskCentralAuthorizer construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataZoneMskCentralAuthorizerProps: governance.DataZoneMskCentralAuthorizerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.domainId">domainId</a></code> | <code>string</code> | The DataZone Domain ID. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.callbackRole">callbackRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used to callback DataZone and acknowledge the subscription grant. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.datazoneEventRole">datazoneEventRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used by the Event Bridge event to trigger the authorizer. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.deadLetterQueueKey">deadLetterQueueKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | The KMS Key used to encrypt the SQS Dead Letter Queue receiving failed events from DataZone. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Cloudwatch Logs retention. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.metadataCollectorRole">metadataCollectorRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used to collect metadata on DataZone assets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.stateMachineRole">stateMachineRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used by the Step Function state machine. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DataZone Domain ID.

---

##### `callbackRole`<sup>Optional</sup> <a name="callbackRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.callbackRole"></a>

```typescript
public readonly callbackRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role
- *Default:* A new role will be created

The IAM Role used to callback DataZone and acknowledge the subscription grant.

---

##### `datazoneEventRole`<sup>Optional</sup> <a name="datazoneEventRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.datazoneEventRole"></a>

```typescript
public readonly datazoneEventRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role
- *Default:* A new role will be created

The IAM Role used by the Event Bridge event to trigger the authorizer.

---

##### `deadLetterQueueKey`<sup>Optional</sup> <a name="deadLetterQueueKey" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.deadLetterQueueKey"></a>

```typescript
public readonly deadLetterQueueKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key
- *Default:* A new Key is created

The KMS Key used to encrypt the SQS Dead Letter Queue receiving failed events from DataZone.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* 7 days

Cloudwatch Logs retention.

---

##### `metadataCollectorRole`<sup>Optional</sup> <a name="metadataCollectorRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.metadataCollectorRole"></a>

```typescript
public readonly metadataCollectorRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role
- *Default:* A new role will be created

The IAM Role used to collect metadata on DataZone assets.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply to the asset type.

---

##### `stateMachineRole`<sup>Optional</sup> <a name="stateMachineRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskCentralAuthorizerProps.property.stateMachineRole"></a>

```typescript
public readonly stateMachineRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role
- *Default:* A new role will be created

The IAM Role used by the Step Function state machine.

---

### DataZoneMskEnvironmentAuthorizerProps <a name="DataZoneMskEnvironmentAuthorizerProps" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

const dataZoneMskEnvironmentAuthorizerProps: governance.DataZoneMskEnvironmentAuthorizerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.domainId">domainId</a></code> | <code>string</code> | The DataZone Domain ID. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.centralAccountId">centralAccountId</a></code> | <code>string</code> | The central account Id. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.grantMskManagedVpc">grantMskManagedVpc</a></code> | <code>boolean</code> | If the authorizer is granting MSK managed VPC permissions. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.grantRole">grantRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used to grant MSK topics. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.logRetention">logRetention</a></code> | <code>aws-cdk-lib.aws_logs.RetentionDays</code> | Cloudwatch Logs retention. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy to apply to the asset type. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.stateMachineRole">stateMachineRole</a></code> | <code>aws-cdk-lib.aws_iam.Role</code> | The IAM Role used by the Step Function state machine. |

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

The DataZone Domain ID.

---

##### `centralAccountId`<sup>Optional</sup> <a name="centralAccountId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.centralAccountId"></a>

```typescript
public readonly centralAccountId: string;
```

- *Type:* string

The central account Id.

---

##### `grantMskManagedVpc`<sup>Optional</sup> <a name="grantMskManagedVpc" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.grantMskManagedVpc"></a>

```typescript
public readonly grantMskManagedVpc: boolean;
```

- *Type:* boolean
- *Default:* false

If the authorizer is granting MSK managed VPC permissions.

---

##### `grantRole`<sup>Optional</sup> <a name="grantRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.grantRole"></a>

```typescript
public readonly grantRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role
- *Default:* A new role will be created

The IAM Role used to grant MSK topics.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.logRetention"></a>

```typescript
public readonly logRetention: RetentionDays;
```

- *Type:* aws-cdk-lib.aws_logs.RetentionDays
- *Default:* 7 days

Cloudwatch Logs retention.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

The removal policy to apply to the asset type.

---

##### `stateMachineRole`<sup>Optional</sup> <a name="stateMachineRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneMskEnvironmentAuthorizerProps.property.stateMachineRole"></a>

```typescript
public readonly stateMachineRole: Role;
```

- *Type:* aws-cdk-lib.aws_iam.Role
- *Default:* A new role will be created

The IAM Role used by the Step Function state machine.

---

### EbsStorageInfo <a name="EbsStorageInfo" id="@cdklabs/aws-data-solutions-framework.streaming.EbsStorageInfo"></a>

EBS volume information.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.EbsStorageInfo.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const ebsStorageInfo: streaming.EbsStorageInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.EbsStorageInfo.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key for encrypting data at rest. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.EbsStorageInfo.property.volumeSize">volumeSize</a></code> | <code>number</code> | The size in GiB of the EBS volume for the data drive on each broker node. |

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdklabs/aws-data-solutions-framework.streaming.EbsStorageInfo.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* Uses AWS managed CMK (aws/kafka)

The AWS KMS key for encrypting data at rest.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdklabs/aws-data-solutions-framework.streaming.EbsStorageInfo.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number
- *Default:* 1000

The size in GiB of the EBS volume for the data drive on each broker node.

---

### EmrVirtualClusterProps <a name="EmrVirtualClusterProps" id="@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps"></a>

The properties for the `EmrVirtualCluster` Construct class.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const emrVirtualClusterProps: processing.EmrVirtualClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.name">name</a></code> | <code>string</code> | The name of the Amazon EMR Virtual Cluster to be created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.createNamespace">createNamespace</a></code> | <code>boolean</code> | The flag to create EKS namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.eksNamespace">eksNamespace</a></code> | <code>string</code> | The name of the EKS namespace to be linked to the EMR virtual cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.setNamespaceResourceQuota">setNamespaceResourceQuota</a></code> | <code>boolean</code> | The namespace will be create with ResourceQuota and LimitRange As defined here https://github.com/awslabs/data-solutions-framework-on-aws/blob/main/framework/src/processing/lib/spark-runtime/emr-containers/resources/k8s/resource-management.yaml. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags assigned to the Virtual Cluster. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Amazon EMR Virtual Cluster to be created.

---

##### `createNamespace`<sup>Optional</sup> <a name="createNamespace" id="@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.createNamespace"></a>

```typescript
public readonly createNamespace: boolean;
```

- *Type:* boolean
- *Default:* Do not create the namespace

The flag to create EKS namespace.

---

##### `eksNamespace`<sup>Optional</sup> <a name="eksNamespace" id="@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.eksNamespace"></a>

```typescript
public readonly eksNamespace: string;
```

- *Type:* string
- *Default:* Use the default namespace

The name of the EKS namespace to be linked to the EMR virtual cluster.

---

##### `setNamespaceResourceQuota`<sup>Optional</sup> <a name="setNamespaceResourceQuota" id="@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.setNamespaceResourceQuota"></a>

```typescript
public readonly setNamespaceResourceQuota: boolean;
```

- *Type:* boolean
- *Default:* true

The namespace will be create with ResourceQuota and LimitRange As defined here https://github.com/awslabs/data-solutions-framework-on-aws/blob/main/framework/src/processing/lib/spark-runtime/emr-containers/resources/k8s/resource-management.yaml.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdklabs/aws-data-solutions-framework.processing.EmrVirtualClusterProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* none

The tags assigned to the Virtual Cluster.

---

### KafkaApiProps <a name="KafkaApiProps" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps"></a>

Properties for the `KafkaApi` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const kafkaApiProps: streaming.KafkaApiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.brokerSecurityGroup">brokerSecurityGroup</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup</code> | The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.clientAuthentication">clientAuthentication</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication</code> | Configuration properties for client authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.clusterArn">clusterArn</a></code> | <code>string</code> | The ARN of the cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.clusterType">clusterType</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskClusterType</code> | The type of MSK cluster(provisioned or serverless). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | Defines the virtual networking environment for this cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.certficateSecret">certficateSecret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | This is the TLS certificate of the Principal that is used by the CDK custom resource which set ACLs and Topics. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key to use to encrypt  enviornment variable of lambda supporting the MSK Custom Resources creation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.iamHandlerRole">iamHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role to pass to IAM authentication lambda handler This role must be able to be assumed with `lambda.amazonaws.com` service principal. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.kafkaClientLogLevel">kafkaClientLogLevel</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel</code> | The log level for the lambda that support the Custom Resource for both Managing ACLs and Topics. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.mtlsHandlerRole">mtlsHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role to pass to mTLS lambda handler This role must be able to be assumed with `lambda.amazonaws.com` service principal. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.serviceToken">serviceToken</a></code> | <code>string</code> | If there is an already existing service token deployed for the custom resource you can reuse it to reduce the number of resource created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets where the Custom Resource Lambda Function would be created in. |

---

##### `brokerSecurityGroup`<sup>Required</sup> <a name="brokerSecurityGroup" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.brokerSecurityGroup"></a>

```typescript
public readonly brokerSecurityGroup: ISecurityGroup;
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup

The AWS security groups to associate with the elastic network interfaces in order to specify who can connect to and communicate with the Amazon MSK cluster.

---

##### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: ClientAuthentication;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication

Configuration properties for client authentication.

MSK supports using private TLS certificates or SASL/SCRAM to authenticate the identity of clients.

---

##### `clusterArn`<sup>Required</sup> <a name="clusterArn" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.clusterArn"></a>

```typescript
public readonly clusterArn: string;
```

- *Type:* string

The ARN of the cluster.

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.clusterType"></a>

```typescript
public readonly clusterType: MskClusterType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskClusterType

The type of MSK cluster(provisioned or serverless).

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

Defines the virtual networking environment for this cluster.

Must have at least 2 subnets in two different AZs.

---

##### `certficateSecret`<sup>Optional</sup> <a name="certficateSecret" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.certficateSecret"></a>

```typescript
public readonly certficateSecret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

This is the TLS certificate of the Principal that is used by the CDK custom resource which set ACLs and Topics.

It must be provided if the cluster is using mTLS authentication.
The secret in AWS secrets manager must be a JSON in the following format
{
 "key" : "PRIVATE-KEY",
 "cert" : "CERTIFICATE"
}

You can use the following utility to generate the certificates
https://github.com/aws-samples/amazon-msk-client-authentication

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The AWS KMS key to use to encrypt  enviornment variable of lambda supporting the MSK Custom Resources creation.

---

##### `iamHandlerRole`<sup>Optional</sup> <a name="iamHandlerRole" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.iamHandlerRole"></a>

```typescript
public readonly iamHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role to pass to IAM authentication lambda handler This role must be able to be assumed with `lambda.amazonaws.com` service principal.

---

##### `kafkaClientLogLevel`<sup>Optional</sup> <a name="kafkaClientLogLevel" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.kafkaClientLogLevel"></a>

```typescript
public readonly kafkaClientLogLevel: KafkaClientLogLevel;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel
- *Default:* WARN

The log level for the lambda that support the Custom Resource for both Managing ACLs and Topics.

---

##### `mtlsHandlerRole`<sup>Optional</sup> <a name="mtlsHandlerRole" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.mtlsHandlerRole"></a>

```typescript
public readonly mtlsHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role to pass to mTLS lambda handler This role must be able to be assumed with `lambda.amazonaws.com` service principal.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `serviceToken`<sup>Optional</sup> <a name="serviceToken" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.serviceToken"></a>

```typescript
public readonly serviceToken: string;
```

- *Type:* string

If there is an already existing service token deployed for the custom resource you can reuse it to reduce the number of resource created.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaApiProps.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* One private subnet with egress is used per AZ.

The subnets where the Custom Resource Lambda Function would be created in.

---

### MonitoringConfiguration <a name="MonitoringConfiguration" id="@cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration"></a>

Monitoring Configuration.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const monitoringConfiguration: streaming.MonitoringConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration.property.clusterMonitoringLevel">clusterMonitoringLevel</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel</code> | Specifies the level of monitoring for the MSK cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration.property.enablePrometheusJmxExporter">enablePrometheusJmxExporter</a></code> | <code>boolean</code> | Indicates whether you want to enable or disable the JMX Exporter. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration.property.enablePrometheusNodeExporter">enablePrometheusNodeExporter</a></code> | <code>boolean</code> | Indicates whether you want to enable or disable the Prometheus Node Exporter. |

---

##### `clusterMonitoringLevel`<sup>Optional</sup> <a name="clusterMonitoringLevel" id="@cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration.property.clusterMonitoringLevel"></a>

```typescript
public readonly clusterMonitoringLevel: ClusterMonitoringLevel;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel
- *Default:* DEFAULT

Specifies the level of monitoring for the MSK cluster.

---

##### `enablePrometheusJmxExporter`<sup>Optional</sup> <a name="enablePrometheusJmxExporter" id="@cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration.property.enablePrometheusJmxExporter"></a>

```typescript
public readonly enablePrometheusJmxExporter: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether you want to enable or disable the JMX Exporter.

---

##### `enablePrometheusNodeExporter`<sup>Optional</sup> <a name="enablePrometheusNodeExporter" id="@cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration.property.enablePrometheusNodeExporter"></a>

```typescript
public readonly enablePrometheusNodeExporter: boolean;
```

- *Type:* boolean
- *Default:* false

Indicates whether you want to enable or disable the Prometheus Node Exporter.

You can use the Prometheus Node Exporter to get CPU and disk metrics for the broker nodes.

---

### MskProvisionedProps <a name="MskProvisionedProps" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const mskProvisionedProps: streaming.MskProvisionedProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.allowEveryoneIfNoAclFound">allowEveryoneIfNoAclFound</a></code> | <code>boolean</code> | if set the to true the following Kafka configuration `allow.everyone.if.no.acl.found` is set to true. When no Cluster Configuration is passed The construct create a cluster configuration and set the following configuration to false and apply it to the cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.brokerInstanceType">brokerInstanceType</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | The EC2 instance type that you want Amazon MSK to use when it creates your brokers. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.brokerNumber">brokerNumber</a></code> | <code>number</code> | The number of Apache Kafka brokers deployed. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.certificateDefinition">certificateDefinition</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.AclAdminProps</code> | This Props allow you to define the principals that will be adminstartor as well as the principal that will be used by the CDK Custom resources to. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.clientAuthentication">clientAuthentication</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication</code> | Configuration properties for client authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the MSK provisioned cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.configuration">configuration</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.ClusterConfigurationInfo</code> | The Amazon MSK configuration to use for the cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.currentVersion">currentVersion</a></code> | <code>string</code> | This parameter is required after executing the first `cdk deploy` It is the version of the MSK cluster that was deployed in the previous `cdk deploy` The cluster might fail in the subsequent updates if it is not set This parameter is obtained by running the following command `aws kafka describe-cluster --cluster-arn YOUR_CLUSTER_ARN`. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.ebsStorage">ebsStorage</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.EbsStorageInfo</code> | Information about storage volumes attached to MSK broker nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.environmentEncryption">environmentEncryption</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key to use to encrypt the function environment variables. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.kafkaClientLogLevel">kafkaClientLogLevel</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel</code> | The log level for the lambda that support the Custom Resource for both Managing ACLs and Topics. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.kafkaVersion">kafkaVersion</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | The version of Apache Kafka. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.logging">logging</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.BrokerLogging</code> | Configure your MSK cluster to send broker logs to different destination types. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.monitoring">monitoring</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration</code> | Cluster monitoring configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.placeClusterHandlerInVpc">placeClusterHandlerInVpc</a></code> | <code>boolean</code> | If set to true, the cluster handler functions will be placed in the private subnets of the cluster vpc. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | What to do when this resource is deleted from a stack. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The AWS security groups to associate with the elastic network interfaces of the Amazon MSK cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.storageMode">storageMode</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.StorageMode</code> | This controls storage mode for supported storage tiers. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets where to deploy the MSK Provisioned cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where to deploy the MSK Serverless cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.vpcConnectivity">vpcConnectivity</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication</code> | VPC connection control settings for brokers Defines all client authentication information for VpcConnectivity. |

---

##### `allowEveryoneIfNoAclFound`<sup>Optional</sup> <a name="allowEveryoneIfNoAclFound" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.allowEveryoneIfNoAclFound"></a>

```typescript
public readonly allowEveryoneIfNoAclFound: boolean;
```

- *Type:* boolean
- *Default:* false

if set the to true the following Kafka configuration `allow.everyone.if.no.acl.found` is set to true. When no Cluster Configuration is passed The construct create a cluster configuration and set the following configuration to false and apply it to the cluster.

---

##### `brokerInstanceType`<sup>Optional</sup> <a name="brokerInstanceType" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.brokerInstanceType"></a>

```typescript
public readonly brokerInstanceType: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType
- *Default:* kafka.m5.large

The EC2 instance type that you want Amazon MSK to use when it creates your brokers.

> [https://docs.aws.amazon.com/msk/latest/developerguide/msk-create-cluster.html#broker-instance-types](https://docs.aws.amazon.com/msk/latest/developerguide/msk-create-cluster.html#broker-instance-types)

---

##### `brokerNumber`<sup>Optional</sup> <a name="brokerNumber" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.brokerNumber"></a>

```typescript
public readonly brokerNumber: number;
```

- *Type:* number
- *Default:* 1 per availability zone.

The number of Apache Kafka brokers deployed.

It must be a multiple of the number of availability zones.

---

##### `certificateDefinition`<sup>Optional</sup> <a name="certificateDefinition" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.certificateDefinition"></a>

```typescript
public readonly certificateDefinition: AclAdminProps;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.AclAdminProps

This Props allow you to define the principals that will be adminstartor as well as the principal that will be used by the CDK Custom resources to.

---

##### `clientAuthentication`<sup>Optional</sup> <a name="clientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: ClientAuthentication;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication
- *Default:* IAM is used

Configuration properties for client authentication.

MSK supports using private TLS certificates or SASL/SCRAM to authenticate the identity of clients.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string
- *Default:* default-msk-provisioned

The name of the MSK provisioned cluster.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.configuration"></a>

```typescript
public readonly configuration: ClusterConfigurationInfo;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.ClusterConfigurationInfo
- *Default:* none

The Amazon MSK configuration to use for the cluster.

---

##### `currentVersion`<sup>Optional</sup> <a name="currentVersion" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.currentVersion"></a>

```typescript
public readonly currentVersion: string;
```

- *Type:* string

This parameter is required after executing the first `cdk deploy` It is the version of the MSK cluster that was deployed in the previous `cdk deploy` The cluster might fail in the subsequent updates if it is not set This parameter is obtained by running the following command `aws kafka describe-cluster --cluster-arn YOUR_CLUSTER_ARN`.

---

##### `ebsStorage`<sup>Optional</sup> <a name="ebsStorage" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.ebsStorage"></a>

```typescript
public readonly ebsStorage: EbsStorageInfo;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.EbsStorageInfo
- *Default:* 100 GiB EBS volume

Information about storage volumes attached to MSK broker nodes.

---

##### `environmentEncryption`<sup>Optional</sup> <a name="environmentEncryption" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.environmentEncryption"></a>

```typescript
public readonly environmentEncryption: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The AWS KMS key to use to encrypt the function environment variables.

---

##### `kafkaClientLogLevel`<sup>Optional</sup> <a name="kafkaClientLogLevel" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.kafkaClientLogLevel"></a>

```typescript
public readonly kafkaClientLogLevel: KafkaClientLogLevel;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel
- *Default:* INFO

The log level for the lambda that support the Custom Resource for both Managing ACLs and Topics.

---

##### `kafkaVersion`<sup>Optional</sup> <a name="kafkaVersion" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.kafkaVersion"></a>

```typescript
public readonly kafkaVersion: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion
- *Default:* KafkaVersion.V3_5_1

The version of Apache Kafka.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.logging"></a>

```typescript
public readonly logging: BrokerLogging;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.BrokerLogging
- *Default:* A Cloudwatch log is created

Configure your MSK cluster to send broker logs to different destination types.

---

##### `monitoring`<sup>Optional</sup> <a name="monitoring" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.monitoring"></a>

```typescript
public readonly monitoring: MonitoringConfiguration;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MonitoringConfiguration
- *Default:* DEFAULT monitoring level

Cluster monitoring configuration.

---

##### `placeClusterHandlerInVpc`<sup>Optional</sup> <a name="placeClusterHandlerInVpc" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.placeClusterHandlerInVpc"></a>

```typescript
public readonly placeClusterHandlerInVpc: boolean;
```

- *Type:* boolean

If set to true, the cluster handler functions will be placed in the private subnets of the cluster vpc.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* RemovalPolicy.RETAIN

What to do when this resource is deleted from a stack.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* create a new security group

The AWS security groups to associate with the elastic network interfaces of the Amazon MSK cluster.

---

##### `storageMode`<sup>Optional</sup> <a name="storageMode" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.storageMode"></a>

```typescript
public readonly storageMode: StorageMode;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.StorageMode
- *Default:* StorageMode.LOCAL

This controls storage mode for supported storage tiers.

> [https://docs.aws.amazon.com/msk/latest/developerguide/msk-tiered-storage.html](https://docs.aws.amazon.com/msk/latest/developerguide/msk-tiered-storage.html)

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the private subnets with egress.

The subnets where to deploy the MSK Provisioned cluster.

Amazon MSK distributes the broker nodes evenly across these subnets.
The subnets must be in distinct Availability Zones.
Client subnets can't be in Availability Zone us-east-1e.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* A new VPC is created.

The VPC where to deploy the MSK Serverless cluster.

Must have at least 2 subnets in two different AZs.

---

##### `vpcConnectivity`<sup>Optional</sup> <a name="vpcConnectivity" id="@cdklabs/aws-data-solutions-framework.streaming.MskProvisionedProps.property.vpcConnectivity"></a>

```typescript
public readonly vpcConnectivity: VpcClientAuthentication;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication

VPC connection control settings for brokers Defines all client authentication information for VpcConnectivity.

When vpcConnectivity and you provide your own Msk Congifuration
You must set `allow.everyone.if.no.acl.found` to `false`

---

### MskServerlessProps <a name="MskServerlessProps" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps"></a>

Properties for the `MskServerlessCluster` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const mskServerlessProps: streaming.MskServerlessProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.clusterName">clusterName</a></code> | <code>string</code> | The name of the MSK Serverless cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.kafkaClientLogLevel">kafkaClientLogLevel</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel</code> | The log level for the lambda that support the Custom Resource for both Managing ACLs and Topics. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.lambdaEnvironmentEncryptionKey">lambdaEnvironmentEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The AWS KMS key to use to encrypt  enviornment variable of lambda supporting the MSK Custom Resources creation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The AWS security groups to associate with the elastic network interfaces of the Amazon MSK cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets where to deploy the MSK Serverless cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where to deploy the MSK Serverless cluster. |

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string
- *Default:* default-msk-serverless

The name of the MSK Serverless cluster.

---

##### `kafkaClientLogLevel`<sup>Optional</sup> <a name="kafkaClientLogLevel" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.kafkaClientLogLevel"></a>

```typescript
public readonly kafkaClientLogLevel: KafkaClientLogLevel;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel
- *Default:* WARN

The log level for the lambda that support the Custom Resource for both Managing ACLs and Topics.

---

##### `lambdaEnvironmentEncryptionKey`<sup>Optional</sup> <a name="lambdaEnvironmentEncryptionKey" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.lambdaEnvironmentEncryptionKey"></a>

```typescript
public readonly lambdaEnvironmentEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey

The AWS KMS key to use to encrypt  enviornment variable of lambda supporting the MSK Custom Resources creation.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* create a new security group

The AWS security groups to associate with the elastic network interfaces of the Amazon MSK cluster.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* the Vpc default strategy if not specified.

The subnets where to deploy the MSK Serverless cluster.

The subnets must be in distinct Availability Zones.
Client subnets can't be in Availability Zone us-east-1e.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.streaming.MskServerlessProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* A new Vpc is created

The VPC where to deploy the MSK Serverless cluster.

The VPC must have at least 2 subnets in two different AZs.

---

### MskTopic <a name="MskTopic" id="@cdklabs/aws-data-solutions-framework.streaming.MskTopic"></a>

Properties for the `MskTopic` As defined in `ITopicConfig` in [KafkaJS](https://kafka.js.org/docs/admin) SDK.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.MskTopic.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const mskTopic: streaming.MskTopic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskTopic.property.numPartitions">numPartitions</a></code> | <code>number</code> | The number of partitions in the topic. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskTopic.property.topic">topic</a></code> | <code>string</code> | The name of the topic. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskTopic.property.configEntries">configEntries</a></code> | <code>{[ key: string ]: string}[]</code> | The topic level configurations. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskTopic.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | The replication factor of the partitions. |

---

##### `numPartitions`<sup>Required</sup> <a name="numPartitions" id="@cdklabs/aws-data-solutions-framework.streaming.MskTopic.property.numPartitions"></a>

```typescript
public readonly numPartitions: number;
```

- *Type:* number

The number of partitions in the topic.

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdklabs/aws-data-solutions-framework.streaming.MskTopic.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The name of the topic.

---

##### `configEntries`<sup>Optional</sup> <a name="configEntries" id="@cdklabs/aws-data-solutions-framework.streaming.MskTopic.property.configEntries"></a>

```typescript
public readonly configEntries: {[ key: string ]: string}[];
```

- *Type:* {[ key: string ]: string}[]
- *Default:* no configuration is used

The topic level configurations.

This parameter cannot be updated after the creation of the topic.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdklabs/aws-data-solutions-framework.streaming.MskTopic.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number
- *Default:* For MSK Serverless, the number of AZ. For MSK Provisioned, the cluster default configuration.

The replication factor of the partitions.

This parameter cannot be updated after the creation of the topic.
This parameter should not be provided for MSK Serverless.

---

### OpenSearchApiProps <a name="OpenSearchApiProps" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps"></a>

Configuration for the OpenSearch API.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const openSearchApiProps: consumption.OpenSearchApiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.iamHandlerRole">iamHandlerRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM role to pass to IAM authentication lambda handler This role must be able to be assumed with `lambda.amazonaws.com` service principal and have the necessary permissions to call OpenSearch API. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.openSearchClusterType">openSearchClusterType</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterType</code> | Type of OpenSearch cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.openSearchEndpoint">openSearchEndpoint</a></code> | <code>string</code> | The OpenSearch Cluster or Serverless collection endpoint to connect to. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.openSearchEndpointRegion">openSearchEndpointRegion</a></code> | <code>string</code> | AWS Region openSearchEndpoint is provisioned in. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.queryInterval">queryInterval</a></code> | <code>aws-cdk-lib.Duration</code> | Time between calls to the `isComplete` handler which determines if the resource has been stabilized. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.queryTimeout">queryTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | Total timeout for the entire custom resource operation. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to attach to the lambda functions. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets where the Custom Resource Lambda Function would be created in. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | Defines the virtual networking environment for this construct. |

---

##### `iamHandlerRole`<sup>Required</sup> <a name="iamHandlerRole" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.iamHandlerRole"></a>

```typescript
public readonly iamHandlerRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role to pass to IAM authentication lambda handler This role must be able to be assumed with `lambda.amazonaws.com` service principal and have the necessary permissions to call OpenSearch API.

---

##### `openSearchClusterType`<sup>Required</sup> <a name="openSearchClusterType" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.openSearchClusterType"></a>

```typescript
public readonly openSearchClusterType: OpenSearchClusterType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterType

Type of OpenSearch cluster.

---

##### `openSearchEndpoint`<sup>Required</sup> <a name="openSearchEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.openSearchEndpoint"></a>

```typescript
public readonly openSearchEndpoint: string;
```

- *Type:* string

The OpenSearch Cluster or Serverless collection endpoint to connect to.

if you provisoned your cluster using CDK
use domainEndpoint property of OpenSearch provisioned cluster or
attrCollectionEndpoint property of OpenSearch Serverless collection.

---

##### `openSearchEndpointRegion`<sup>Optional</sup> <a name="openSearchEndpointRegion" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.openSearchEndpointRegion"></a>

```typescript
public readonly openSearchEndpointRegion: string;
```

- *Type:* string
- *Default:* same region as stack.

AWS Region openSearchEndpoint is provisioned in.

---

##### `queryInterval`<sup>Optional</sup> <a name="queryInterval" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.queryInterval"></a>

```typescript
public readonly queryInterval: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.seconds(5)

Time between calls to the `isComplete` handler which determines if the resource has been stabilized.

> [dsf.utils.DsfProviderProps *](dsf.utils.DsfProviderProps *)

---

##### `queryTimeout`<sup>Optional</sup> <a name="queryTimeout" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.queryTimeout"></a>

```typescript
public readonly queryTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* Duration.minutes(30)

Total timeout for the entire custom resource operation.

The maximum timeout is 1 hour.

> [dsf.utils.DsfProviderProps *](dsf.utils.DsfProviderProps *)

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If `vpc` is not supplied, no security groups are attached. Otherwise, a dedicated security group is created for each function.

The list of security groups to attach to the lambda functions.

The security groups MUST be exclusively used by the custom resource.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* One private subnet with egress is used per AZ.

The subnets where the Custom Resource Lambda Function would be created in.

Required if vpc parameter is provided.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchApiProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* no VPC is used.

Defines the virtual networking environment for this construct.

Typically should use same VPC as OpenSearch cluster or serverless collection.
Must have at least 2 subnets in two different AZs.

---

### OpenSearchClusterProps <a name="OpenSearchClusterProps" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps"></a>

Simplified configuration for the OpenSearch Cluster.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const openSearchClusterProps: consumption.OpenSearchClusterProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.deployInVpc">deployInVpc</a></code> | <code>boolean</code> | If the OpenSearch Domain is created in a default VPC when there is no VPC configured. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.domainName">domainName</a></code> | <code>string</code> | The OpenSearch Domain name. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlEntityId">samlEntityId</a></code> | <code>string</code> | The SAML entity ID used for SAML based authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlMasterBackendRole">samlMasterBackendRole</a></code> | <code>string</code> | The SAML Idp Admin GroupId as returned by {user:groups} in Idp. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlMetadataContent">samlMetadataContent</a></code> | <code>string</code> | The SAML Idp XML Metadata Content, needs to be downloaded from IAM Identity Center. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.availabilityZoneCount">availabilityZoneCount</a></code> | <code>number</code> | The number of availability zones to use. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.dataNodeInstanceCount">dataNodeInstanceCount</a></code> | <code>number</code> | The number of OpenSearch data nodes to provision. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.dataNodeInstanceType">dataNodeInstanceType</a></code> | <code>string</code> | The EC2 Instance Type used for OpenSearch data nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.ebsSize">ebsSize</a></code> | <code>number</code> | The size of EBS Volumes to use. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.ebsVolumeType">ebsVolumeType</a></code> | <code>aws-cdk-lib.aws_ec2.EbsDeviceVolumeType</code> | The type of EBS Volumes to use. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.enableAutoSoftwareUpdate">enableAutoSoftwareUpdate</a></code> | <code>boolean</code> | Enable OpenSearch Auto Software Update. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.enableVersionUpgrade">enableVersionUpgrade</a></code> | <code>boolean</code> | Enable OpenSearch Version Upgrade. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.encryptionKey">encryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key for encryption in OpenSearch (data and logs). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.masterNodeInstanceCount">masterNodeInstanceCount</a></code> | <code>number</code> | The number of OpenSearch master nodes to provision. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.masterNodeInstanceType">masterNodeInstanceType</a></code> | <code>string</code> | The EC2 Instance Type for OpenSearch master nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.multiAzWithStandbyEnabled">multiAzWithStandbyEnabled</a></code> | <code>boolean</code> | If multi AZ with standby mode is enabled. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlRolesKey">samlRolesKey</a></code> | <code>string</code> | The SAML Roles Key. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlSessionTimeout">samlSessionTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout of the SAML session. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlSubjectKey">samlSubjectKey</a></code> | <code>string</code> | The SAML Subject Key. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.version">version</a></code> | <code>aws-cdk-lib.aws_opensearchservice.EngineVersion</code> | The OpenSearch version. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to deploy the OpenSearch Domain. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.vpcSubnets">vpcSubnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The VPC private Subnets to deploy the OpenSearch cluster nodes. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.warmInstanceCount">warmInstanceCount</a></code> | <code>number</code> | The number of Ultra Warn nodes to provision. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.warmInstanceType">warmInstanceType</a></code> | <code>number</code> | The type of nodes for Ultra Warn nodes. |

---

##### `deployInVpc`<sup>Required</sup> <a name="deployInVpc" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.deployInVpc"></a>

```typescript
public readonly deployInVpc: boolean;
```

- *Type:* boolean

If the OpenSearch Domain is created in a default VPC when there is no VPC configured.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

The OpenSearch Domain name.

---

##### `samlEntityId`<sup>Required</sup> <a name="samlEntityId" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlEntityId"></a>

```typescript
public readonly samlEntityId: string;
```

- *Type:* string

The SAML entity ID used for SAML based authentication.

---

##### `samlMasterBackendRole`<sup>Required</sup> <a name="samlMasterBackendRole" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlMasterBackendRole"></a>

```typescript
public readonly samlMasterBackendRole: string;
```

- *Type:* string

The SAML Idp Admin GroupId as returned by {user:groups} in Idp.

---

##### `samlMetadataContent`<sup>Required</sup> <a name="samlMetadataContent" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlMetadataContent"></a>

```typescript
public readonly samlMetadataContent: string;
```

- *Type:* string

The SAML Idp XML Metadata Content, needs to be downloaded from IAM Identity Center.

---

##### `availabilityZoneCount`<sup>Optional</sup> <a name="availabilityZoneCount" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.availabilityZoneCount"></a>

```typescript
public readonly availabilityZoneCount: number;
```

- *Type:* number
- *Default:* For private Domains, use the number of configured `vpcSubnets` or the number of AZ in the VPC if not configured. For public Domains, 1 AZ is used.

The number of availability zones to use.

Be sure to configure the number of data nodes to a multiple of the number of AZ.

---

##### `dataNodeInstanceCount`<sup>Optional</sup> <a name="dataNodeInstanceCount" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.dataNodeInstanceCount"></a>

```typescript
public readonly dataNodeInstanceCount: number;
```

- *Type:* number
- *Default:* For public Domains, 1 data node is created. For private Domains, 1 data node per AZ.

The number of OpenSearch data nodes to provision.

Be sure to configure the number of data nodes to a multiple of the number of AZ.

---

##### `dataNodeInstanceType`<sup>Optional</sup> <a name="dataNodeInstanceType" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.dataNodeInstanceType"></a>

```typescript
public readonly dataNodeInstanceType: string;
```

- *Type:* string
- *Default:* 

The EC2 Instance Type used for OpenSearch data nodes.

> [OpenSearchNodes.DATA_NODE_INSTANCE_DEFAULT](OpenSearchNodes.DATA_NODE_INSTANCE_DEFAULT)

---

##### `ebsSize`<sup>Optional</sup> <a name="ebsSize" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.ebsSize"></a>

```typescript
public readonly ebsSize: number;
```

- *Type:* number
- *Default:* 10

The size of EBS Volumes to use.

---

##### `ebsVolumeType`<sup>Optional</sup> <a name="ebsVolumeType" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.ebsVolumeType"></a>

```typescript
public readonly ebsVolumeType: EbsDeviceVolumeType;
```

- *Type:* aws-cdk-lib.aws_ec2.EbsDeviceVolumeType
- *Default:* EbsDeviceVolumeType.GENERAL_PURPOSE_SSD_GP3 is used

The type of EBS Volumes to use.

---

##### `enableAutoSoftwareUpdate`<sup>Optional</sup> <a name="enableAutoSoftwareUpdate" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.enableAutoSoftwareUpdate"></a>

```typescript
public readonly enableAutoSoftwareUpdate: boolean;
```

- *Type:* boolean
- *Default:* false

Enable OpenSearch Auto Software Update.

---

##### `enableVersionUpgrade`<sup>Optional</sup> <a name="enableVersionUpgrade" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.enableVersionUpgrade"></a>

```typescript
public readonly enableVersionUpgrade: boolean;
```

- *Type:* boolean
- *Default:* false

Enable OpenSearch Version Upgrade.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* A new key is created

The KMS Key for encryption in OpenSearch (data and logs).

---

##### `masterNodeInstanceCount`<sup>Optional</sup> <a name="masterNodeInstanceCount" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.masterNodeInstanceCount"></a>

```typescript
public readonly masterNodeInstanceCount: number;
```

- *Type:* number
- *Default:* No master nodes are created

The number of OpenSearch master nodes to provision.

---

##### `masterNodeInstanceType`<sup>Optional</sup> <a name="masterNodeInstanceType" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.masterNodeInstanceType"></a>

```typescript
public readonly masterNodeInstanceType: string;
```

- *Type:* string
- *Default:* 

The EC2 Instance Type for OpenSearch master nodes.

> [OpenSearchNodes.MASTER_NODE_INSTANCE_DEFAULT](OpenSearchNodes.MASTER_NODE_INSTANCE_DEFAULT)

---

##### `multiAzWithStandbyEnabled`<sup>Optional</sup> <a name="multiAzWithStandbyEnabled" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.multiAzWithStandbyEnabled"></a>

```typescript
public readonly multiAzWithStandbyEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

If multi AZ with standby mode is enabled.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `samlRolesKey`<sup>Optional</sup> <a name="samlRolesKey" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlRolesKey"></a>

```typescript
public readonly samlRolesKey: string;
```

- *Type:* string
- *Default:* "Role" is used

The SAML Roles Key.

---

##### `samlSessionTimeout`<sup>Optional</sup> <a name="samlSessionTimeout" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlSessionTimeout"></a>

```typescript
public readonly samlSessionTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 480 minutes

The timeout of the SAML session.

Max allowed value is 24 hours.

---

##### `samlSubjectKey`<sup>Optional</sup> <a name="samlSubjectKey" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.samlSubjectKey"></a>

```typescript
public readonly samlSubjectKey: string;
```

- *Type:* string
- *Default:* No subject key is used

The SAML Subject Key.

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.version"></a>

```typescript
public readonly version: EngineVersion;
```

- *Type:* aws-cdk-lib.aws_opensearchservice.EngineVersion
- *Default:* 

The OpenSearch version.

> [OPENSEARCH_DEFAULT_VERSION](OPENSEARCH_DEFAULT_VERSION)

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* A new VPC is created if `deployInVpc` is `true`,

The VPC to deploy the OpenSearch Domain.

> [DataVpc](DataVpc)

---

##### `vpcSubnets`<sup>Optional</sup> <a name="vpcSubnets" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.vpcSubnets"></a>

```typescript
public readonly vpcSubnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* Single private subnet per each AZ.

The VPC private Subnets to deploy the OpenSearch cluster nodes.

Only used for VPC deployments.
You must configure a VPC if you configure this parameter. Provide only one Subnet per AZ.

> [DataVpc](DataVpc)

---

##### `warmInstanceCount`<sup>Optional</sup> <a name="warmInstanceCount" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.warmInstanceCount"></a>

```typescript
public readonly warmInstanceCount: number;
```

- *Type:* number
- *Default:* No Ultra Warn nodes are created

The number of Ultra Warn nodes to provision.

---

##### `warmInstanceType`<sup>Optional</sup> <a name="warmInstanceType" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterProps.property.warmInstanceType"></a>

```typescript
public readonly warmInstanceType: number;
```

- *Type:* number
- *Default:* 

The type of nodes for Ultra Warn nodes.

> [OpenSearchNodes.WARM_NODE_INSTANCE_DEFAULT](OpenSearchNodes.WARM_NODE_INSTANCE_DEFAULT)

---

### PySparkApplicationPackageProps <a name="PySparkApplicationPackageProps" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps"></a>

Properties for the `PySparkApplicationPackage` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const pySparkApplicationPackageProps: processing.PySparkApplicationPackageProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.applicationName">applicationName</a></code> | <code>string</code> | The name of the PySpark application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.entrypointPath">entrypointPath</a></code> | <code>string</code> | The source path in the code base where the entrypoint is stored. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.artifactsBucket">artifactsBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 bucket where to upload the artifacts of the Spark Job This is where the entry point and archive of the virtual environment will be stored. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.assetUploadMemorySize">assetUploadMemorySize</a></code> | <code>number</code> | The memory size (in MiB) used by the Lambda function to upload and unzip the assets (entrypoint and dependencies). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.assetUploadRole">assetUploadRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used by the Lambda function to upload assets (entrypoint and dependencies). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.assetUploadStorageSize">assetUploadStorageSize</a></code> | <code>aws-cdk-lib.Size</code> | The ephemeral storage size used by the Lambda function to upload and unzip the assets (entrypoint and dependencies). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.dependenciesFolder">dependenciesFolder</a></code> | <code>string</code> | The source directory where `requirements.txt` or `pyproject.toml` file is stored. These files are used to install external AND internal Python packages. If your PySpark application has more than one Python file, you need to [package your Python project](https://packaging.python.org/en/latest/tutorials/packaging-projects/). This location must also contain a `Dockerfile` that can [create a virtual environment and build an archive](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/using-python-libraries.html#building-python-virtual-env). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.venvArchivePath">venvArchivePath</a></code> | <code>string</code> | The path of the Python virtual environment archive generated in the Docker container. |

---

##### `applicationName`<sup>Required</sup> <a name="applicationName" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.applicationName"></a>

```typescript
public readonly applicationName: string;
```

- *Type:* string

The name of the PySpark application.

This name is used as a parent directory in S3 to store the entrypoint and the optional virtual environment archive

---

##### `entrypointPath`<sup>Required</sup> <a name="entrypointPath" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.entrypointPath"></a>

```typescript
public readonly entrypointPath: string;
```

- *Type:* string

The source path in the code base where the entrypoint is stored.

example `~/my-project/src/entrypoint.py`

---

##### `artifactsBucket`<sup>Optional</sup> <a name="artifactsBucket" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.artifactsBucket"></a>

```typescript
public readonly artifactsBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* An S3 Bucket is created

The S3 bucket where to upload the artifacts of the Spark Job This is where the entry point and archive of the virtual environment will be stored.

---

##### `assetUploadMemorySize`<sup>Optional</sup> <a name="assetUploadMemorySize" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.assetUploadMemorySize"></a>

```typescript
public readonly assetUploadMemorySize: number;
```

- *Type:* number
- *Default:* 512 MB

The memory size (in MiB) used by the Lambda function to upload and unzip the assets (entrypoint and dependencies).

If you are deploying large files, you will need to increase this number accordingly.

---

##### `assetUploadRole`<sup>Optional</sup> <a name="assetUploadRole" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.assetUploadRole"></a>

```typescript
public readonly assetUploadRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new Role would be created with least privilege permissions

The IAM Role used by the Lambda function to upload assets (entrypoint and dependencies).

Additional permissions would be granted to this role such as S3 Bucket permissions.

---

##### `assetUploadStorageSize`<sup>Optional</sup> <a name="assetUploadStorageSize" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.assetUploadStorageSize"></a>

```typescript
public readonly assetUploadStorageSize: Size;
```

- *Type:* aws-cdk-lib.Size
- *Default:* 1024 MB

The ephemeral storage size used by the Lambda function to upload and unzip the assets (entrypoint and dependencies).

If you are deploying large files, you will need to increase this number accordingly.

---

##### `dependenciesFolder`<sup>Optional</sup> <a name="dependenciesFolder" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.dependenciesFolder"></a>

```typescript
public readonly dependenciesFolder: string;
```

- *Type:* string
- *Default:* No dependencies (internal or external) are packaged. Only the entrypoint is used in the Spark Job.

The source directory where `requirements.txt` or `pyproject.toml` file is stored. These files are used to install external AND internal Python packages. If your PySpark application has more than one Python file, you need to [package your Python project](https://packaging.python.org/en/latest/tutorials/packaging-projects/). This location must also contain a `Dockerfile` that can [create a virtual environment and build an archive](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/using-python-libraries.html#building-python-virtual-env).

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

Resources like Amazon cloudwatch log or Amazon S3 bucket.
If DESTROY is selected, the context value '@data-solutions-framework-on-aws/removeDataOnDestroy'
in the 'cdk.json' or 'cdk.context.json' must be set to true.

---

##### `venvArchivePath`<sup>Optional</sup> <a name="venvArchivePath" id="@cdklabs/aws-data-solutions-framework.processing.PySparkApplicationPackageProps.property.venvArchivePath"></a>

```typescript
public readonly venvArchivePath: string;
```

- *Type:* string
- *Default:* No virtual environment archive is packaged. Only the entrypoint can be used in the Spark Job. It is required if the `dependenciesFolder` is provided.

The path of the Python virtual environment archive generated in the Docker container.

This is the output path used in the `venv-pack -o` command in your Dockerfile.

---

### RedshiftDataAccessTargetProps <a name="RedshiftDataAccessTargetProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftDataAccessTargetProps: consumption.RedshiftDataAccessTargetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataAccessTargetProps.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

### RedshiftDataProps <a name="RedshiftDataProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps"></a>

The properties for the `RedshiftData` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftDataProps: consumption.RedshiftDataProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The Secrets Manager Secret containing the admin credentials for the Redshift cluster / namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.clusterId">clusterId</a></code> | <code>string</code> | The name of the Redshift provisioned to query. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.createInterfaceVpcEndpoint">createInterfaceVpcEndpoint</a></code> | <code>boolean</code> | If set to true, create the Redshift Data Interface VPC Endpoint in the configured VPC/Subnets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.executionTimeout">executionTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout for the query execution. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.existingInterfaceVPCEndpoint">existingInterfaceVPCEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint</code> | If this parameter is provided, the data access execution security group would be granted inbound to the interface VPC endpoint's security group. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.secretKey">secretKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used to encrypt the admin credentials for the Redshift cluster / namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SelectedSubnets</code> | The subnets where the Custom Resource Lambda Function would be created in. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the Custom Resource Lambda Function would be created in. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.workgroupId">workgroupId</a></code> | <code>string</code> | The `workgroupId` for the Redshift Serverless Workgroup to query. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager Secret containing the admin credentials for the Redshift cluster / namespace.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string
- *Default:* The `workgroupId` is used

The name of the Redshift provisioned to query.

It must be configured if the `workgroupId` is not.

---

##### `createInterfaceVpcEndpoint`<sup>Optional</sup> <a name="createInterfaceVpcEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.createInterfaceVpcEndpoint"></a>

```typescript
public readonly createInterfaceVpcEndpoint: boolean;
```

- *Type:* boolean
- *Default:* false

If set to true, create the Redshift Data Interface VPC Endpoint in the configured VPC/Subnets.

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 5mins

The timeout for the query execution.

---

##### `existingInterfaceVPCEndpoint`<sup>Optional</sup> <a name="existingInterfaceVPCEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.existingInterfaceVPCEndpoint"></a>

```typescript
public readonly existingInterfaceVPCEndpoint: IInterfaceVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint
- *Default:* No security group ingress rule would be created.

If this parameter is provided, the data access execution security group would be granted inbound to the interface VPC endpoint's security group.

This is assuming that the `createInterfaceVpcEndpoint` parameter is `false`.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise, the removalPolicy is reverted to RETAIN.

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.secretKey"></a>

```typescript
public readonly secretKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* no secret key is used

The KMS Key used to encrypt the admin credentials for the Redshift cluster / namespace.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.subnets"></a>

```typescript
public readonly subnets: SelectedSubnets;
```

- *Type:* aws-cdk-lib.aws_ec2.SelectedSubnets
- *Default:* No subnets are used. The Custom Resource runs in the Redshift service team subnets.

The subnets where the Custom Resource Lambda Function would be created in.

A Redshift Data API Interface VPC Endpoint is created in the subnets.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* No VPC is used. The Custom Resource runs in the Redshift service team VPC

The VPC where the Custom Resource Lambda Function would be created in.

A Redshift Data API Interface VPC Endpoint is created in the VPC.

---

##### `workgroupId`<sup>Optional</sup> <a name="workgroupId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataProps.property.workgroupId"></a>

```typescript
public readonly workgroupId: string;
```

- *Type:* string
- *Default:* The `clusterId` is used

The `workgroupId` for the Redshift Serverless Workgroup to query.

It must be configured if the `clusterId` is not.

---

### RedshiftDataSharingCreateDbFromShareProps <a name="RedshiftDataSharingCreateDbFromShareProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbFromShareProps"></a>

Return interface after creating a new database from data share.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbFromShareProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftDataSharingCreateDbFromShareProps: consumption.RedshiftDataSharingCreateDbFromShareProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbFromShareProps.property.resource">resource</a></code> | <code>aws-cdk-lib.CustomResource</code> | The resource associated with the create database command. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbFromShareProps.property.associateDataShareResource">associateDataShareResource</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource</code> | If auto-association is turned on, this is the resource associated with the action. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbFromShareProps.property.resource"></a>

```typescript
public readonly resource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

The resource associated with the create database command.

---

##### `associateDataShareResource`<sup>Optional</sup> <a name="associateDataShareResource" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbFromShareProps.property.associateDataShareResource"></a>

```typescript
public readonly associateDataShareResource: AwsCustomResource;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource

If auto-association is turned on, this is the resource associated with the action.

---

### RedshiftDataSharingCreateDbProps <a name="RedshiftDataSharingCreateDbProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps"></a>

Properties for data sharing consumer.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftDataSharingCreateDbProps: consumption.RedshiftDataSharingCreateDbProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the Redshift database used in the data sharing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.dataShareName">dataShareName</a></code> | <code>string</code> | The name of the data share. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.accountId">accountId</a></code> | <code>string</code> | For cross-account grants, this is the consumer account ID. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.dataShareArn">dataShareArn</a></code> | <code>string</code> | The ARN of the datashare. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.namespaceId">namespaceId</a></code> | <code>string</code> | For single account grants, this is the consumer namespace ID. For cross-account grants, `namespaceId` is ignored. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.newDatabaseName">newDatabaseName</a></code> | <code>string</code> | For consumers, the data share would be located in this database that would be created. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.consumerNamespaceArn">consumerNamespaceArn</a></code> | <code>string</code> | The namespace of the consumer, necessary for cross-account data shares. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the Redshift database used in the data sharing.

---

##### `dataShareName`<sup>Required</sup> <a name="dataShareName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.dataShareName"></a>

```typescript
public readonly dataShareName: string;
```

- *Type:* string

The name of the data share.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string
- *Default:* No account ID is used.

For cross-account grants, this is the consumer account ID.

For cross-account consumers, this is the producer account ID.

---

##### `dataShareArn`<sup>Optional</sup> <a name="dataShareArn" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.dataShareArn"></a>

```typescript
public readonly dataShareArn: string;
```

- *Type:* string
- *Default:* No data share ARN is used.

The ARN of the datashare.

This is required for any action that is cross account.

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string
- *Default:* No namespace ID is used.

For single account grants, this is the consumer namespace ID. For cross-account grants, `namespaceId` is ignored.

For consumers, this is the producer namespace ID. It is required for both single and cross account data sharing.

---

##### `newDatabaseName`<sup>Required</sup> <a name="newDatabaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.newDatabaseName"></a>

```typescript
public readonly newDatabaseName: string;
```

- *Type:* string

For consumers, the data share would be located in this database that would be created.

---

##### `consumerNamespaceArn`<sup>Optional</sup> <a name="consumerNamespaceArn" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingCreateDbProps.property.consumerNamespaceArn"></a>

```typescript
public readonly consumerNamespaceArn: string;
```

- *Type:* string

The namespace of the consumer, necessary for cross-account data shares.

---

### RedshiftDataSharingGrantedProps <a name="RedshiftDataSharingGrantedProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantedProps"></a>

Return interface after granting access to consumer.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantedProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftDataSharingGrantedProps: consumption.RedshiftDataSharingGrantedProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantedProps.property.resource">resource</a></code> | <code>aws-cdk-lib.CustomResource</code> | The resource associated with the grant command. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantedProps.property.shareAuthorizationResource">shareAuthorizationResource</a></code> | <code>aws-cdk-lib.custom_resources.AwsCustomResource</code> | If auto-authorization is turned on, this is the resource associated with the action. |

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantedProps.property.resource"></a>

```typescript
public readonly resource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

The resource associated with the grant command.

---

##### `shareAuthorizationResource`<sup>Optional</sup> <a name="shareAuthorizationResource" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantedProps.property.shareAuthorizationResource"></a>

```typescript
public readonly shareAuthorizationResource: AwsCustomResource;
```

- *Type:* aws-cdk-lib.custom_resources.AwsCustomResource

If auto-authorization is turned on, this is the resource associated with the action.

---

### RedshiftDataSharingGrantProps <a name="RedshiftDataSharingGrantProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps"></a>

Properties for data sharing grants.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftDataSharingGrantProps: consumption.RedshiftDataSharingGrantProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the Redshift database used in the data sharing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.dataShareName">dataShareName</a></code> | <code>string</code> | The name of the data share. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.accountId">accountId</a></code> | <code>string</code> | For cross-account grants, this is the consumer account ID. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.dataShareArn">dataShareArn</a></code> | <code>string</code> | The ARN of the datashare. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.namespaceId">namespaceId</a></code> | <code>string</code> | For single account grants, this is the consumer namespace ID. For cross-account grants, `namespaceId` is ignored. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.autoAuthorized">autoAuthorized</a></code> | <code>boolean</code> | If set to `true`, cross-account grants would automatically be authorized. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the Redshift database used in the data sharing.

---

##### `dataShareName`<sup>Required</sup> <a name="dataShareName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.dataShareName"></a>

```typescript
public readonly dataShareName: string;
```

- *Type:* string

The name of the data share.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string
- *Default:* No account ID is used.

For cross-account grants, this is the consumer account ID.

For cross-account consumers, this is the producer account ID.

---

##### `dataShareArn`<sup>Optional</sup> <a name="dataShareArn" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.dataShareArn"></a>

```typescript
public readonly dataShareArn: string;
```

- *Type:* string
- *Default:* No data share ARN is used.

The ARN of the datashare.

This is required for any action that is cross account.

---

##### `namespaceId`<sup>Optional</sup> <a name="namespaceId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.namespaceId"></a>

```typescript
public readonly namespaceId: string;
```

- *Type:* string
- *Default:* No namespace ID is used.

For single account grants, this is the consumer namespace ID. For cross-account grants, `namespaceId` is ignored.

For consumers, this is the producer namespace ID. It is required for both single and cross account data sharing.

---

##### `autoAuthorized`<sup>Optional</sup> <a name="autoAuthorized" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingGrantProps.property.autoAuthorized"></a>

```typescript
public readonly autoAuthorized: boolean;
```

- *Type:* boolean
- *Default:* cross-account grants should be authorized manually

If set to `true`, cross-account grants would automatically be authorized.

See https://docs.aws.amazon.com/redshift/latest/dg/consumer-account-admin.html

---

### RedshiftDataSharingProps <a name="RedshiftDataSharingProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps"></a>

Properties for the `RedshiftDataSharing` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftDataSharingProps: consumption.RedshiftDataSharingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.secret">secret</a></code> | <code>aws-cdk-lib.aws_secretsmanager.ISecret</code> | The Secrets Manager Secret containing the admin credentials for the Redshift cluster / namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.clusterId">clusterId</a></code> | <code>string</code> | The name of the Redshift provisioned to query. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.createInterfaceVpcEndpoint">createInterfaceVpcEndpoint</a></code> | <code>boolean</code> | If set to true, create the Redshift Data Interface VPC Endpoint in the configured VPC/Subnets. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.executionTimeout">executionTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The timeout for the query execution. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.existingInterfaceVPCEndpoint">existingInterfaceVPCEndpoint</a></code> | <code>aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint</code> | If this parameter is provided, the data access execution security group would be granted inbound to the interface VPC endpoint's security group. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.secretKey">secretKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key used to encrypt the admin credentials for the Redshift cluster / namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SelectedSubnets</code> | The subnets where the Custom Resource Lambda Function would be created in. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC where the Custom Resource Lambda Function would be created in. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.workgroupId">workgroupId</a></code> | <code>string</code> | The `workgroupId` for the Redshift Serverless Workgroup to query. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.redshiftData">redshiftData</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftData</code> | Instance of `RedshiftData` construct. |

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.secret"></a>

```typescript
public readonly secret: ISecret;
```

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

The Secrets Manager Secret containing the admin credentials for the Redshift cluster / namespace.

---

##### `clusterId`<sup>Optional</sup> <a name="clusterId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string
- *Default:* The `workgroupId` is used

The name of the Redshift provisioned to query.

It must be configured if the `workgroupId` is not.

---

##### `createInterfaceVpcEndpoint`<sup>Optional</sup> <a name="createInterfaceVpcEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.createInterfaceVpcEndpoint"></a>

```typescript
public readonly createInterfaceVpcEndpoint: boolean;
```

- *Type:* boolean
- *Default:* false

If set to true, create the Redshift Data Interface VPC Endpoint in the configured VPC/Subnets.

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 5mins

The timeout for the query execution.

---

##### `existingInterfaceVPCEndpoint`<sup>Optional</sup> <a name="existingInterfaceVPCEndpoint" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.existingInterfaceVPCEndpoint"></a>

```typescript
public readonly existingInterfaceVPCEndpoint: IInterfaceVpcEndpoint;
```

- *Type:* aws-cdk-lib.aws_ec2.IInterfaceVpcEndpoint
- *Default:* No security group ingress rule would be created.

If this parameter is provided, the data access execution security group would be granted inbound to the interface VPC endpoint's security group.

This is assuming that the `createInterfaceVpcEndpoint` parameter is `false`.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise, the removalPolicy is reverted to RETAIN.

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.secretKey"></a>

```typescript
public readonly secretKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* no secret key is used

The KMS Key used to encrypt the admin credentials for the Redshift cluster / namespace.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.subnets"></a>

```typescript
public readonly subnets: SelectedSubnets;
```

- *Type:* aws-cdk-lib.aws_ec2.SelectedSubnets
- *Default:* No subnets are used. The Custom Resource runs in the Redshift service team subnets.

The subnets where the Custom Resource Lambda Function would be created in.

A Redshift Data API Interface VPC Endpoint is created in the subnets.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* No VPC is used. The Custom Resource runs in the Redshift service team VPC

The VPC where the Custom Resource Lambda Function would be created in.

A Redshift Data API Interface VPC Endpoint is created in the VPC.

---

##### `workgroupId`<sup>Optional</sup> <a name="workgroupId" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.workgroupId"></a>

```typescript
public readonly workgroupId: string;
```

- *Type:* string
- *Default:* The `clusterId` is used

The `workgroupId` for the Redshift Serverless Workgroup to query.

It must be configured if the `clusterId` is not.

---

##### `redshiftData`<sup>Required</sup> <a name="redshiftData" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftDataSharingProps.property.redshiftData"></a>

```typescript
public readonly redshiftData: RedshiftData;
```

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftData

Instance of `RedshiftData` construct.

---

### RedshiftNewShareProps <a name="RedshiftNewShareProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps"></a>

Redshift new data share details.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftNewShareProps: consumption.RedshiftNewShareProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.databaseName">databaseName</a></code> | <code>string</code> | The database name where the share belongs to. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.dataShareArn">dataShareArn</a></code> | <code>string</code> | The ARN of the data share. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.dataShareName">dataShareName</a></code> | <code>string</code> | The name of the data share. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.newShareCustomResource">newShareCustomResource</a></code> | <code>aws-cdk-lib.CustomResource</code> | The custom resource related to the management of the data share. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.producerArn">producerArn</a></code> | <code>string</code> | The ARN of the producer. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.producerNamespace">producerNamespace</a></code> | <code>string</code> | The namespace ID of the producer. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The database name where the share belongs to.

---

##### `dataShareArn`<sup>Required</sup> <a name="dataShareArn" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.dataShareArn"></a>

```typescript
public readonly dataShareArn: string;
```

- *Type:* string

The ARN of the data share.

---

##### `dataShareName`<sup>Required</sup> <a name="dataShareName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.dataShareName"></a>

```typescript
public readonly dataShareName: string;
```

- *Type:* string

The name of the data share.

---

##### `newShareCustomResource`<sup>Required</sup> <a name="newShareCustomResource" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.newShareCustomResource"></a>

```typescript
public readonly newShareCustomResource: CustomResource;
```

- *Type:* aws-cdk-lib.CustomResource

The custom resource related to the management of the data share.

---

##### `producerArn`<sup>Required</sup> <a name="producerArn" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.producerArn"></a>

```typescript
public readonly producerArn: string;
```

- *Type:* string

The ARN of the producer.

---

##### `producerNamespace`<sup>Required</sup> <a name="producerNamespace" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftNewShareProps.property.producerNamespace"></a>

```typescript
public readonly producerNamespace: string;
```

- *Type:* string

The namespace ID of the producer.

---

### RedshiftServerlessNamespaceProps <a name="RedshiftServerlessNamespaceProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps"></a>

RedshiftServerlessNamespace properties.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftServerlessNamespaceProps: consumption.RedshiftServerlessNamespaceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.dbName">dbName</a></code> | <code>string</code> | The name of the primary database that would be created in the Redshift Serverless Namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.name">name</a></code> | <code>string</code> | The name of the Redshift Serverless Namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.adminSecretKey">adminSecretKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | The KMS Key used by the managed Secrets Manager Secret storing admin credentials. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.adminUsername">adminUsername</a></code> | <code>string</code> | The admin username to be used. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.dataKey">dataKey</a></code> | <code>aws-cdk-lib.aws_kms.Key</code> | The KMS Key used to encrypt the data. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.defaultIAMRole">defaultIAMRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | Default IAM Role associated to the Redshift Serverless Namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.finalSnapshotName">finalSnapshotName</a></code> | <code>string</code> | If provided, final snapshot would be taken with the name provided. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.finalSnapshotRetentionPeriod">finalSnapshotRetentionPeriod</a></code> | <code>number</code> | The number of days the final snapshot would be retained. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.iamRoles">iamRoles</a></code> | <code>aws-cdk-lib.aws_iam.IRole[]</code> | List of IAM Roles attached to the Redshift Serverless Namespace. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.logExports">logExports</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceLogExport[]</code> | The type of logs to be exported. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.serviceLinkedRoleFactory">serviceLinkedRoleFactory</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole</code> | The Factory for creating Redshift service linked role. |

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

The name of the primary database that would be created in the Redshift Serverless Namespace.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Redshift Serverless Namespace.

---

##### `adminSecretKey`<sup>Optional</sup> <a name="adminSecretKey" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.adminSecretKey"></a>

```typescript
public readonly adminSecretKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key
- *Default:* A new KMS Key is created

The KMS Key used by the managed Secrets Manager Secret storing admin credentials.

---

##### `adminUsername`<sup>Optional</sup> <a name="adminUsername" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.adminUsername"></a>

```typescript
public readonly adminUsername: string;
```

- *Type:* string
- *Default:* The default username is "admin"

The admin username to be used.

---

##### `dataKey`<sup>Optional</sup> <a name="dataKey" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.dataKey"></a>

```typescript
public readonly dataKey: Key;
```

- *Type:* aws-cdk-lib.aws_kms.Key
- *Default:* A new KMS Key is created

The KMS Key used to encrypt the data.

---

##### `defaultIAMRole`<sup>Optional</sup> <a name="defaultIAMRole" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.defaultIAMRole"></a>

```typescript
public readonly defaultIAMRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* No default IAM Role is associated with the Redshift Serverless Namespace

Default IAM Role associated to the Redshift Serverless Namespace.

---

##### `finalSnapshotName`<sup>Optional</sup> <a name="finalSnapshotName" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.finalSnapshotName"></a>

```typescript
public readonly finalSnapshotName: string;
```

- *Type:* string
- *Default:* No final snapshot would be taken

If provided, final snapshot would be taken with the name provided.

---

##### `finalSnapshotRetentionPeriod`<sup>Optional</sup> <a name="finalSnapshotRetentionPeriod" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.finalSnapshotRetentionPeriod"></a>

```typescript
public readonly finalSnapshotRetentionPeriod: number;
```

- *Type:* number
- *Default:* Indefinite final snapshot retention

The number of days the final snapshot would be retained.

Must be between 1-3653 days.

---

##### `iamRoles`<sup>Optional</sup> <a name="iamRoles" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.iamRoles"></a>

```typescript
public readonly iamRoles: IRole[];
```

- *Type:* aws-cdk-lib.aws_iam.IRole[]
- *Default:* No IAM roles are associated with the Redshift Serverless Namespace

List of IAM Roles attached to the Redshift Serverless Namespace.

This list of Roles must also contain the `defaultIamRole`.

---

##### `logExports`<sup>Optional</sup> <a name="logExports" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.logExports"></a>

```typescript
public readonly logExports: RedshiftServerlessNamespaceLogExport[];
```

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceLogExport[]
- *Default:* No logs are exported

The type of logs to be exported.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise, the removalPolicy is reverted to RETAIN.

---

##### `serviceLinkedRoleFactory`<sup>Optional</sup> <a name="serviceLinkedRoleFactory" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceProps.property.serviceLinkedRoleFactory"></a>

```typescript
public readonly serviceLinkedRoleFactory: CreateServiceLinkedRole;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.CreateServiceLinkedRole
- *Default:* A factory is created

The Factory for creating Redshift service linked role.

---

### RedshiftServerlessWorkgroupProps <a name="RedshiftServerlessWorkgroupProps" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps"></a>

RedshiftServerlessWorkgroup properties.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.Initializer"></a>

```typescript
import { consumption } from '@cdklabs/aws-data-solutions-framework'

const redshiftServerlessWorkgroupProps: consumption.RedshiftServerlessWorkgroupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.name">name</a></code> | <code>string</code> | The name of the Redshift Serverless Workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.namespace">namespace</a></code> | <code>@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace</code> | The Redshift Serverless Namespace associated with the Workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.baseCapacity">baseCapacity</a></code> | <code>number</code> | The base capacity of the Redshift Serverless Workgroup in RPU. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.configParameters">configParameters</a></code> | <code>aws-cdk-lib.aws_redshiftserverless.CfnWorkgroup.ConfigParameterProperty[]</code> | Additional parameters to set for advanced control over the Redshift Workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.extraSecurityGroups">extraSecurityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.SecurityGroup[]</code> | The extra EC2 Security Groups to associate with the Redshift Serverless Workgroup (in addition to the primary Security Group). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.port">port</a></code> | <code>number</code> | The custom port to use when connecting to workgroup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets where the Redshift Serverless Workgroup is deployed. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.Vpc</code> | The VPC where the Redshift Serverless Workgroup is deployed. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the Redshift Serverless Workgroup.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.namespace"></a>

```typescript
public readonly namespace: RedshiftServerlessNamespace;
```

- *Type:* @cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespace

The Redshift Serverless Namespace associated with the Workgroup.

---

##### `baseCapacity`<sup>Optional</sup> <a name="baseCapacity" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.baseCapacity"></a>

```typescript
public readonly baseCapacity: number;
```

- *Type:* number
- *Default:* 128 RPU

The base capacity of the Redshift Serverless Workgroup in RPU.

---

##### `configParameters`<sup>Optional</sup> <a name="configParameters" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.configParameters"></a>

```typescript
public readonly configParameters: ConfigParameterProperty[];
```

- *Type:* aws-cdk-lib.aws_redshiftserverless.CfnWorkgroup.ConfigParameterProperty[]
- *Default:* `require_ssl` parameter is set to true.

Additional parameters to set for advanced control over the Redshift Workgroup.

See {@link https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateWorkgroup.html#redshiftserverless-CreateWorkgroup-request-configParameters}
for more information on what parameters can be set.

---

##### `extraSecurityGroups`<sup>Optional</sup> <a name="extraSecurityGroups" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.extraSecurityGroups"></a>

```typescript
public readonly extraSecurityGroups: SecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.SecurityGroup[]
- *Default:* No extra security groups are used

The extra EC2 Security Groups to associate with the Redshift Serverless Workgroup (in addition to the primary Security Group).

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number
- *Default:* 5439

The custom port to use when connecting to workgroup.

Valid port ranges are 5431-5455 and 8191-8215.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise, the removalPolicy is reverted to RETAIN.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* Use the private subnets of the VPC

The subnets where the Redshift Serverless Workgroup is deployed.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupProps.property.vpc"></a>

```typescript
public readonly vpc: Vpc;
```

- *Type:* aws-cdk-lib.aws_ec2.Vpc
- *Default:* A default VPC is created

The VPC where the Redshift Serverless Workgroup is deployed.

---

### S3DataCopyProps <a name="S3DataCopyProps" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps"></a>

Properties for S3DataCopy construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

const s3DataCopyProps: utils.S3DataCopyProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.sourceBucket">sourceBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The source S3 Bucket containing the data to copy. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.sourceBucketRegion">sourceBucketRegion</a></code> | <code>string</code> | The source S3 Bucket region. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.targetBucket">targetBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The target S3 Bucket. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role to use in the custom resource for copying data. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.securityGroups">securityGroups</a></code> | <code>aws-cdk-lib.aws_ec2.ISecurityGroup[]</code> | The list of security groups to attach to the custom resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.sourceBucketPrefix">sourceBucketPrefix</a></code> | <code>string</code> | The source bucket prefix with a slash at the end. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.subnets">subnets</a></code> | <code>aws-cdk-lib.aws_ec2.SubnetSelection</code> | The subnets to deploy the custom resource in. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.targetBucketPrefix">targetBucketPrefix</a></code> | <code>string</code> | The target S3 Bucket prefix with a slash at the end. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to deploy the custom resource in. |

---

##### `sourceBucket`<sup>Required</sup> <a name="sourceBucket" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.sourceBucket"></a>

```typescript
public readonly sourceBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The source S3 Bucket containing the data to copy.

---

##### `sourceBucketRegion`<sup>Required</sup> <a name="sourceBucketRegion" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.sourceBucketRegion"></a>

```typescript
public readonly sourceBucketRegion: string;
```

- *Type:* string

The source S3 Bucket region.

---

##### `targetBucket`<sup>Required</sup> <a name="targetBucket" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.targetBucket"></a>

```typescript
public readonly targetBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The target S3 Bucket.

---

##### `executionRole`<sup>Optional</sup> <a name="executionRole" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A new role is created

The IAM Role to use in the custom resource for copying data.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise, the removalPolicy is reverted to RETAIN.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.securityGroups"></a>

```typescript
public readonly securityGroups: ISecurityGroup[];
```

- *Type:* aws-cdk-lib.aws_ec2.ISecurityGroup[]
- *Default:* If `vpc` is not supplied, no security groups are attached. Otherwise, a dedicated security group is created for each function.

The list of security groups to attach to the custom resource.

---

##### `sourceBucketPrefix`<sup>Optional</sup> <a name="sourceBucketPrefix" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.sourceBucketPrefix"></a>

```typescript
public readonly sourceBucketPrefix: string;
```

- *Type:* string
- *Default:* No prefix is used

The source bucket prefix with a slash at the end.

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.subnets"></a>

```typescript
public readonly subnets: SubnetSelection;
```

- *Type:* aws-cdk-lib.aws_ec2.SubnetSelection
- *Default:* The Custom Resource is executed in VPCs owned by AWS Lambda service.

The subnets to deploy the custom resource in.

---

##### `targetBucketPrefix`<sup>Optional</sup> <a name="targetBucketPrefix" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.targetBucketPrefix"></a>

```typescript
public readonly targetBucketPrefix: string;
```

- *Type:* string
- *Default:* No prefix is used

The target S3 Bucket prefix with a slash at the end.

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdklabs/aws-data-solutions-framework.utils.S3DataCopyProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* The Custom Resource is executed in VPCs owned by AWS Lambda service.

The VPC to deploy the custom resource in.

---

### S3LoggingConfiguration <a name="S3LoggingConfiguration" id="@cdklabs/aws-data-solutions-framework.streaming.S3LoggingConfiguration"></a>

Details of the Amazon S3 destination for broker logs.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.S3LoggingConfiguration.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const s3LoggingConfiguration: streaming.S3LoggingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.S3LoggingConfiguration.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 bucket that is the destination for broker logs. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.S3LoggingConfiguration.property.prefix">prefix</a></code> | <code>string</code> | The S3 prefix that is the destination for broker logs. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdklabs/aws-data-solutions-framework.streaming.S3LoggingConfiguration.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

The S3 bucket that is the destination for broker logs.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdklabs/aws-data-solutions-framework.streaming.S3LoggingConfiguration.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string
- *Default:* no prefix

The S3 prefix that is the destination for broker logs.

---

### SaslAuthProps <a name="SaslAuthProps" id="@cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps"></a>

SASL authentication properties.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const saslAuthProps: streaming.SaslAuthProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps.property.iam">iam</a></code> | <code>boolean</code> | Enable IAM access control. |

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps.property.iam"></a>

```typescript
public readonly iam: boolean;
```

- *Type:* boolean
- *Default:* false

Enable IAM access control.

---

### SaslTlsAuthProps <a name="SaslTlsAuthProps" id="@cdklabs/aws-data-solutions-framework.streaming.SaslTlsAuthProps"></a>

SASL + TLS authentication properties.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.SaslTlsAuthProps.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const saslTlsAuthProps: streaming.SaslTlsAuthProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.SaslTlsAuthProps.property.iam">iam</a></code> | <code>boolean</code> | Enable IAM access control. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.SaslTlsAuthProps.property.certificateAuthorities">certificateAuthorities</a></code> | <code>aws-cdk-lib.aws_acmpca.ICertificateAuthority[]</code> | List of ACM Certificate Authorities to enable TLS authentication. |

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdklabs/aws-data-solutions-framework.streaming.SaslTlsAuthProps.property.iam"></a>

```typescript
public readonly iam: boolean;
```

- *Type:* boolean
- *Default:* false

Enable IAM access control.

---

##### `certificateAuthorities`<sup>Optional</sup> <a name="certificateAuthorities" id="@cdklabs/aws-data-solutions-framework.streaming.SaslTlsAuthProps.property.certificateAuthorities"></a>

```typescript
public readonly certificateAuthorities: ICertificateAuthority[];
```

- *Type:* aws-cdk-lib.aws_acmpca.ICertificateAuthority[]
- *Default:* none

List of ACM Certificate Authorities to enable TLS authentication.

---

### SaslVpcTlsAuthProps <a name="SaslVpcTlsAuthProps" id="@cdklabs/aws-data-solutions-framework.streaming.SaslVpcTlsAuthProps"></a>

SASL + TLS authentication properties.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.SaslVpcTlsAuthProps.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const saslVpcTlsAuthProps: streaming.SaslVpcTlsAuthProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.SaslVpcTlsAuthProps.property.iam">iam</a></code> | <code>boolean</code> | Enable IAM access control. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.SaslVpcTlsAuthProps.property.tls">tls</a></code> | <code>boolean</code> | enable TLS authentication. |

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdklabs/aws-data-solutions-framework.streaming.SaslVpcTlsAuthProps.property.iam"></a>

```typescript
public readonly iam: boolean;
```

- *Type:* boolean
- *Default:* false

Enable IAM access control.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdklabs/aws-data-solutions-framework.streaming.SaslVpcTlsAuthProps.property.tls"></a>

```typescript
public readonly tls: boolean;
```

- *Type:* boolean
- *Default:* none

enable TLS authentication.

---

### SparkEmrCICDPipelineProps <a name="SparkEmrCICDPipelineProps" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps"></a>

Properties for the `SparkEmrCICDPipeline` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const sparkEmrCICDPipelineProps: processing.SparkEmrCICDPipelineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.applicationStackFactory">applicationStackFactory</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory</code> | The application CDK Stack to deploy in the different CDK Pipelines Stages. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.source">source</a></code> | <code>aws-cdk-lib.pipelines.CodePipelineSource</code> | The connection to allow code pipeline to connect to your code repository You can learn more about connections in this [link](https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html). |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.sparkApplicationName">sparkApplicationName</a></code> | <code>string</code> | The name of the Spark application to be deployed. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.cdkApplicationPath">cdkApplicationPath</a></code> | <code>string</code> | The path to the folder that contains the CDK Application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.integTestEnv">integTestEnv</a></code> | <code>{[ key: string ]: string}</code> | The environment variables to create from the Application CDK Stack outputs and to pass to the integration tests. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.integTestPermissions">integTestPermissions</a></code> | <code>aws-cdk-lib.aws_iam.PolicyStatement[]</code> | The IAM Policy statements to add permissions for running the integration tests. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.integTestScript">integTestScript</a></code> | <code>string</code> | The path to the Shell script that contains integration tests. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.sparkApplicationPath">sparkApplicationPath</a></code> | <code>string</code> | The path to the folder that contains the Spark Application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.sparkImage">sparkImage</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.SparkImage</code> | The EMR Spark image to use to run the unit tests. |

---

##### `applicationStackFactory`<sup>Required</sup> <a name="applicationStackFactory" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.applicationStackFactory"></a>

```typescript
public readonly applicationStackFactory: ApplicationStackFactory;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory

The application CDK Stack to deploy in the different CDK Pipelines Stages.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.source"></a>

```typescript
public readonly source: CodePipelineSource;
```

- *Type:* aws-cdk-lib.pipelines.CodePipelineSource

The connection to allow code pipeline to connect to your code repository You can learn more about connections in this [link](https://docs.aws.amazon.com/dtconsole/latest/userguide/welcome-connections.html).

---

##### `sparkApplicationName`<sup>Required</sup> <a name="sparkApplicationName" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.sparkApplicationName"></a>

```typescript
public readonly sparkApplicationName: string;
```

- *Type:* string

The name of the Spark application to be deployed.

---

##### `cdkApplicationPath`<sup>Optional</sup> <a name="cdkApplicationPath" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.cdkApplicationPath"></a>

```typescript
public readonly cdkApplicationPath: string;
```

- *Type:* string
- *Default:* The root of the repository

The path to the folder that contains the CDK Application.

---

##### `integTestEnv`<sup>Optional</sup> <a name="integTestEnv" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.integTestEnv"></a>

```typescript
public readonly integTestEnv: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* No environment variables

The environment variables to create from the Application CDK Stack outputs and to pass to the integration tests.

This is used to interact with resources created by the Application CDK Stack from within the integration tests script.
Key is the name of the environment variable to create. Value is generally a CfnOutput name from the Application CDK Stack.

---

##### `integTestPermissions`<sup>Optional</sup> <a name="integTestPermissions" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.integTestPermissions"></a>

```typescript
public readonly integTestPermissions: PolicyStatement[];
```

- *Type:* aws-cdk-lib.aws_iam.PolicyStatement[]
- *Default:* No permissions

The IAM Policy statements to add permissions for running the integration tests.

---

##### `integTestScript`<sup>Optional</sup> <a name="integTestScript" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.integTestScript"></a>

```typescript
public readonly integTestScript: string;
```

- *Type:* string
- *Default:* No integration tests are run

The path to the Shell script that contains integration tests.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `sparkApplicationPath`<sup>Optional</sup> <a name="sparkApplicationPath" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.sparkApplicationPath"></a>

```typescript
public readonly sparkApplicationPath: string;
```

- *Type:* string
- *Default:* The root of the repository

The path to the folder that contains the Spark Application.

---

##### `sparkImage`<sup>Optional</sup> <a name="sparkImage" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrCICDPipelineProps.property.sparkImage"></a>

```typescript
public readonly sparkImage: SparkImage;
```

- *Type:* @cdklabs/aws-data-solutions-framework.processing.SparkImage
- *Default:* [DEFAULT_SPARK_IMAGE](https://github.com/awslabs/data-solutions-framework-on-aws/blob/HEAD/framework/src/processing/lib/emr-releases.ts#L51)

The EMR Spark image to use to run the unit tests.

---

### SparkEmrContainersJobApiProps <a name="SparkEmrContainersJobApiProps" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps"></a>

Configuration for the EMR on EKS job.

Use this interface when `SparkEmrContainerJobProps` doesn't give you access to the configuration parameters you need.

> [[https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html]]([https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html])

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const sparkEmrContainersJobApiProps: processing.SparkEmrContainersJobApiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The Schedule to run the Step Functions state machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps.property.jobConfig">jobConfig</a></code> | <code>{[ key: string ]: any}</code> | EMR on EKS StartJobRun API configuration. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps.property.executionTimeout">executionTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | Job execution timeout. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* The Step Functions State Machine is not scheduled.

The Schedule to run the Step Functions state machine.

---

##### `jobConfig`<sup>Required</sup> <a name="jobConfig" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps.property.jobConfig"></a>

```typescript
public readonly jobConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

EMR on EKS StartJobRun API configuration.

> [[https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html]]([https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html])

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobApiProps.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 30 minutes

Job execution timeout.

---

### SparkEmrContainersJobProps <a name="SparkEmrContainersJobProps" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps"></a>

Simplified configuration for the `SparkEmrEksJob` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const sparkEmrContainersJobProps: processing.SparkEmrContainersJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The Schedule to run the Step Functions state machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM execution Role ARN for the EMR on EKS job. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.name">name</a></code> | <code>string</code> | The Spark job name. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.sparkSubmitEntryPoint">sparkSubmitEntryPoint</a></code> | <code>string</code> | The entry point for the Spark submit job run. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | The EMR on EKS virtual cluster ID. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.applicationConfiguration">applicationConfiguration</a></code> | <code>{[ key: string ]: any}</code> | The application configuration override for the Spark submit job run. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.cloudWatchLogGroup">cloudWatchLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group name for log publishing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.cloudWatchLogGroupStreamPrefix">cloudWatchLogGroupStreamPrefix</a></code> | <code>string</code> | The CloudWatch Log Group stream prefix for log publishing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.executionTimeout">executionTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The execution timeout. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.maxRetries">maxRetries</a></code> | <code>number</code> | The maximum number of retries. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.releaseLabel">releaseLabel</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion</code> | The EMR release version associated with the application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.s3LogBucket">s3LogBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 Bucket for log publishing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.s3LogPrefix">s3LogPrefix</a></code> | <code>string</code> | The S3 Bucket prefix for log publishing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.sparkSubmitEntryPointArguments">sparkSubmitEntryPointArguments</a></code> | <code>string[]</code> | The arguments for the Spark submit job run. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.sparkSubmitParameters">sparkSubmitParameters</a></code> | <code>string</code> | The parameters for the Spark submit job run. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.tags">tags</a></code> | <code>{[ key: string ]: any}</code> | Tags to be added to the EMR Serverless job. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* The Step Functions State Machine is not scheduled.

The Schedule to run the Step Functions state machine.

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM execution Role ARN for the EMR on EKS job.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Spark job name.

---

##### `sparkSubmitEntryPoint`<sup>Required</sup> <a name="sparkSubmitEntryPoint" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.sparkSubmitEntryPoint"></a>

```typescript
public readonly sparkSubmitEntryPoint: string;
```

- *Type:* string

The entry point for the Spark submit job run.

> [https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html](https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html)

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

The EMR on EKS virtual cluster ID.

---

##### `applicationConfiguration`<sup>Optional</sup> <a name="applicationConfiguration" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.applicationConfiguration"></a>

```typescript
public readonly applicationConfiguration: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* No configuration is passed to the job.

The application configuration override for the Spark submit job run.

> [https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html](https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html)

---

##### `cloudWatchLogGroup`<sup>Optional</sup> <a name="cloudWatchLogGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.cloudWatchLogGroup"></a>

```typescript
public readonly cloudWatchLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* CloudWatch is not used for logging

The CloudWatch Log Group name for log publishing.

---

##### `cloudWatchLogGroupStreamPrefix`<sup>Optional</sup> <a name="cloudWatchLogGroupStreamPrefix" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.cloudWatchLogGroupStreamPrefix"></a>

```typescript
public readonly cloudWatchLogGroupStreamPrefix: string;
```

- *Type:* string
- *Default:* The application name is used as the prefix

The CloudWatch Log Group stream prefix for log publishing.

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 30 minutes

The execution timeout.

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number
- *Default:* No retry

The maximum number of retries.

---

##### `releaseLabel`<sup>Optional</sup> <a name="releaseLabel" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: EmrRuntimeVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion
- *Default:* [EMR_DEFAULT_VERSION](https://github.com/awslabs/data-solutions-framework-on-aws/blob/HEAD/framework/src/processing/lib/emr-releases.ts#L46)

The EMR release version associated with the application.

The EMR release can be found in this [documentation](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html)

---

##### `s3LogBucket`<sup>Optional</sup> <a name="s3LogBucket" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.s3LogBucket"></a>

```typescript
public readonly s3LogBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* No logging to S3

The S3 Bucket for log publishing.

---

##### `s3LogPrefix`<sup>Optional</sup> <a name="s3LogPrefix" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.s3LogPrefix"></a>

```typescript
public readonly s3LogPrefix: string;
```

- *Type:* string
- *Default:* No logging to S3

The S3 Bucket prefix for log publishing.

---

##### `sparkSubmitEntryPointArguments`<sup>Optional</sup> <a name="sparkSubmitEntryPointArguments" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.sparkSubmitEntryPointArguments"></a>

```typescript
public readonly sparkSubmitEntryPointArguments: string[];
```

- *Type:* string[]
- *Default:* No arguments are passed to the job.

The arguments for the Spark submit job run.

> [https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html](https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html)

---

##### `sparkSubmitParameters`<sup>Optional</sup> <a name="sparkSubmitParameters" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.sparkSubmitParameters"></a>

```typescript
public readonly sparkSubmitParameters: string;
```

- *Type:* string
- *Default:* No parameters are passed to the job.

The parameters for the Spark submit job run.

> [https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html](https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersJobProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* No tags are added

Tags to be added to the EMR Serverless job.

---

### SparkEmrContainersRuntimeInteractiveSessionProps <a name="SparkEmrContainersRuntimeInteractiveSessionProps" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps"></a>

The properties for the EMR Managed Endpoint to create.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const sparkEmrContainersRuntimeInteractiveSessionProps: processing.SparkEmrContainersRuntimeInteractiveSessionProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The Amazon IAM role used as the execution role, this role must provide access to all the AWS resource a user will interact with These can be S3, DynamoDB, Glue Catalog. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.managedEndpointName">managedEndpointName</a></code> | <code>string</code> | The name of the EMR managed endpoint. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.virtualClusterId">virtualClusterId</a></code> | <code>string</code> | The Id of the Amazon EMR virtual cluster containing the managed endpoint. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.configurationOverrides">configurationOverrides</a></code> | <code>any</code> | The JSON object to [override the configuration of EMR on EKS managed endpoint]{@link https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/create-managed-endpoint.html}. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.emrOnEksVersion">emrOnEksVersion</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion</code> | The Amazon EMR version to use. |

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The Amazon IAM role used as the execution role, this role must provide access to all the AWS resource a user will interact with These can be S3, DynamoDB, Glue Catalog.

---

##### `managedEndpointName`<sup>Required</sup> <a name="managedEndpointName" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.managedEndpointName"></a>

```typescript
public readonly managedEndpointName: string;
```

- *Type:* string

The name of the EMR managed endpoint.

---

##### `virtualClusterId`<sup>Required</sup> <a name="virtualClusterId" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.virtualClusterId"></a>

```typescript
public readonly virtualClusterId: string;
```

- *Type:* string

The Id of the Amazon EMR virtual cluster containing the managed endpoint.

---

##### `configurationOverrides`<sup>Optional</sup> <a name="configurationOverrides" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.configurationOverrides"></a>

```typescript
public readonly configurationOverrides: any;
```

- *Type:* any
- *Default:* Configuration associated with the [default nodegroup for notebook]{@link EmrEksNodegroup.NOTEBOOK_EXECUTOR }

The JSON object to [override the configuration of EMR on EKS managed endpoint]{@link https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/create-managed-endpoint.html}.

---

##### `emrOnEksVersion`<sup>Optional</sup> <a name="emrOnEksVersion" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeInteractiveSessionProps.property.emrOnEksVersion"></a>

```typescript
public readonly emrOnEksVersion: EmrContainersRuntimeVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion
- *Default:* The [default Amazon EMR version]{@link EmrEksCluster.DEFAULT_EMR_VERSION }

The Amazon EMR version to use.

---

### SparkEmrContainersRuntimeProps <a name="SparkEmrContainersRuntimeProps" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps"></a>

The properties for the `SparkEmrContainerRuntime` Construct class.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const sparkEmrContainersRuntimeProps: processing.SparkEmrContainersRuntimeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.kubectlLambdaLayer">kubectlLambdaLayer</a></code> | <code>aws-cdk-lib.aws_lambda.ILayerVersion</code> | The Lambda Layer with Kubectl to use for EKS Cluster setup. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.publicAccessCIDRs">publicAccessCIDRs</a></code> | <code>string[]</code> | The CIDR blocks that are allowed to access to your cluster’s public Kubernetes API server endpoint. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.createEmrOnEksServiceLinkedRole">createEmrOnEksServiceLinkedRole</a></code> | <code>boolean</code> | Flag to create an IAM Service Linked Role for EMR on EKS. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.defaultNodes">defaultNodes</a></code> | <code>boolean</code> | The flag to create default Karpenter Node Provisioners for:  * Critical jobs which use on-demand instances, high speed disks and workload isolation  * Shared workloads which use EC2 Spot Instances and no isolation to optimize costs  * Notebooks which leverage a cost optimized configuration for running EMR managed endpoints and spark drivers/executors. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.ec2InstanceRole">ec2InstanceRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role used for the cluster nodes instance profile. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.eksAdminRole">eksAdminRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM Role to configure in the EKS master roles. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.eksCluster">eksCluster</a></code> | <code>aws-cdk-lib.aws_eks.Cluster</code> | The EKS Cluster to setup EMR on. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.eksClusterName">eksClusterName</a></code> | <code>string</code> | The name of the EKS cluster to create. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.eksVpc">eksVpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | The VPC to use when creating the EKS cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.karpenterVersion">karpenterVersion</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.KarpenterVersion</code> | The Karpenter version to use for autoscaling nodes in the EKS Cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.kubernetesVersion">kubernetesVersion</a></code> | <code>aws-cdk-lib.aws_eks.KubernetesVersion</code> | The Kubernetes version used to create the EKS Cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | The tags assigned to the EKS cluster. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.vpcCidr">vpcCidr</a></code> | <code>string</code> | The CIDR of the VPC to use when creating the EKS cluster. |

---

##### `kubectlLambdaLayer`<sup>Required</sup> <a name="kubectlLambdaLayer" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.kubectlLambdaLayer"></a>

```typescript
public readonly kubectlLambdaLayer: ILayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.ILayerVersion

The Lambda Layer with Kubectl to use for EKS Cluster setup.

Starting k8s 1.22, CDK no longer bundle the Kubectl layer with the code due to breaking npm package size.
A layer needs to be passed to the Construct.

The CDK [documentation](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_eks.KubernetesVersion.html#static-v1_22)
contains the libraries that you should add for the right Kubernetes version.

---

##### `publicAccessCIDRs`<sup>Required</sup> <a name="publicAccessCIDRs" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.publicAccessCIDRs"></a>

```typescript
public readonly publicAccessCIDRs: string[];
```

- *Type:* string[]

The CIDR blocks that are allowed to access to your cluster’s public Kubernetes API server endpoint.

---

##### `createEmrOnEksServiceLinkedRole`<sup>Optional</sup> <a name="createEmrOnEksServiceLinkedRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.createEmrOnEksServiceLinkedRole"></a>

```typescript
public readonly createEmrOnEksServiceLinkedRole: boolean;
```

- *Type:* boolean
- *Default:* true

Flag to create an IAM Service Linked Role for EMR on EKS.

---

##### `defaultNodes`<sup>Optional</sup> <a name="defaultNodes" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.defaultNodes"></a>

```typescript
public readonly defaultNodes: boolean;
```

- *Type:* boolean
- *Default:* true

The flag to create default Karpenter Node Provisioners for:  * Critical jobs which use on-demand instances, high speed disks and workload isolation  * Shared workloads which use EC2 Spot Instances and no isolation to optimize costs  * Notebooks which leverage a cost optimized configuration for running EMR managed endpoints and spark drivers/executors.

---

##### `ec2InstanceRole`<sup>Optional</sup> <a name="ec2InstanceRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.ec2InstanceRole"></a>

```typescript
public readonly ec2InstanceRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* A role is created with AmazonEKSWorkerNodePolicy, AmazonEC2ContainerRegistryReadOnly, AmazonSSMManagedInstanceCore and AmazonEKS_CNI_Policy AWS managed policies.

The IAM Role used for the cluster nodes instance profile.

---

##### `eksAdminRole`<sup>Optional</sup> <a name="eksAdminRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.eksAdminRole"></a>

```typescript
public readonly eksAdminRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole
- *Default:* An admin role must be passed if `eksCluster` property is not set.

The IAM Role to configure in the EKS master roles.

It will give access to kubernetes cluster from the AWS console.
You will use this role to manage the EKS cluster and grant other access to it.

---

##### `eksCluster`<sup>Optional</sup> <a name="eksCluster" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.eksCluster"></a>

```typescript
public readonly eksCluster: Cluster;
```

- *Type:* aws-cdk-lib.aws_eks.Cluster
- *Default:* An EKS Cluster is created

The EKS Cluster to setup EMR on.

The cluster needs to be created in the same CDK Stack.
If the EKS Cluster is provided, the cluster AddOns and all the controllers (ALB Ingress controller, Karpenter...) need to be configured.
When providing an EKS cluster, the methods for adding nodegroups can still be used. They implement the best practices for running Spark on EKS.

---

##### `eksClusterName`<sup>Optional</sup> <a name="eksClusterName" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.eksClusterName"></a>

```typescript
public readonly eksClusterName: string;
```

- *Type:* string
- *Default:* The [DEFAULT_CLUSTER_NAME](https://github.com/awslabs/data-solutions-framework-on-aws/blob/HEAD/framework/src/processing/lib/spark-runtime/emr-containers/spark-emr-containers-runtime.ts#L65)

The name of the EKS cluster to create.

---

##### `eksVpc`<sup>Optional</sup> <a name="eksVpc" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.eksVpc"></a>

```typescript
public readonly eksVpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc
- *Default:* A new VPC is created.

The VPC to use when creating the EKS cluster.

VPC should have at least two private and public subnets in different Availability Zones.
All private subnets must have the following tags:
 * 'for-use-with-amazon-emr-managed-policies'='true'
 * 'kubernetes.io/role/internal-elb'='1'
All public subnets must have the following tag:
 * 'kubernetes.io/role/elb'='1'
Cannot be combined with `vpcCidr`. If combined, `vpcCidr` takes precedence and a new VPC is created.

---

##### `karpenterVersion`<sup>Optional</sup> <a name="karpenterVersion" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.karpenterVersion"></a>

```typescript
public readonly karpenterVersion: KarpenterVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.processing.KarpenterVersion
- *Default:* [DEFAULT_KARPENTER_VERSION](https://github.com/awslabs/data-solutions-framework-on-aws/blob/HEAD/framework/src/processing/lib/karpenter-releases.ts#L11)

The Karpenter version to use for autoscaling nodes in the EKS Cluster.

---

##### `kubernetesVersion`<sup>Optional</sup> <a name="kubernetesVersion" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.kubernetesVersion"></a>

```typescript
public readonly kubernetesVersion: KubernetesVersion;
```

- *Type:* aws-cdk-lib.aws_eks.KubernetesVersion
- *Default:* [DEFAULT_EKS_VERSION](https://github.com/awslabs/data-solutions-framework-on-aws/blob/HEAD/framework/src/processing/lib/spark-runtime/emr-containers/spark-emr-containers-runtime.ts#L61)

The Kubernetes version used to create the EKS Cluster.

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* none

The tags assigned to the EKS cluster.

---

##### `vpcCidr`<sup>Optional</sup> <a name="vpcCidr" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrContainersRuntimeProps.property.vpcCidr"></a>

```typescript
public readonly vpcCidr: string;
```

- *Type:* string
- *Default:* The CIDR 10.0.0.0/16 is used

The CIDR of the VPC to use when creating the EKS cluster.

If provided, a VPC with three public subnets and three private subnets is created.
The size of the private subnets is four time the one of the public subnet.

---

### SparkEmrServerlessJobApiProps <a name="SparkEmrServerlessJobApiProps" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps"></a>

Configuration for the EMR Serverless Job API.

Use this interface when `SparkEmrServerlessJobProps` doesn't give you access to the configuration parameters you need.

> [[https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html]]([https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html])

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const sparkEmrServerlessJobApiProps: processing.SparkEmrServerlessJobApiProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The Schedule to run the Step Functions state machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps.property.jobConfig">jobConfig</a></code> | <code>{[ key: string ]: any}</code> | EMR Serverless Job Configuration. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* The Step Functions State Machine is not scheduled.

The Schedule to run the Step Functions state machine.

---

##### `jobConfig`<sup>Required</sup> <a name="jobConfig" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobApiProps.property.jobConfig"></a>

```typescript
public readonly jobConfig: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

EMR Serverless Job Configuration.

> [[https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html]]([https://docs.aws.amazon.com/emr-serverless/latest/APIReference/API_StartJobRun.html])

---

### SparkEmrServerlessJobProps <a name="SparkEmrServerlessJobProps" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps"></a>

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const sparkEmrServerlessJobProps: processing.SparkEmrServerlessJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The Schedule to run the Step Functions state machine. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.applicationId">applicationId</a></code> | <code>string</code> | The EMR Serverless Application to execute the Spark Job. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.executionRole">executionRole</a></code> | <code>aws-cdk-lib.aws_iam.IRole</code> | The IAM execution Role for the EMR Serverless job. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.name">name</a></code> | <code>string</code> | The Spark Job name. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.sparkSubmitEntryPoint">sparkSubmitEntryPoint</a></code> | <code>string</code> | The entry point for the Spark submit job run. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.applicationConfiguration">applicationConfiguration</a></code> | <code>{[ key: string ]: any}</code> | The application configuration override for the Spark submit job run. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.cloudWatchEncryptionKey">cloudWatchEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key for encrypting logs on CloudWatch. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.cloudWatchLogGroup">cloudWatchLogGroup</a></code> | <code>aws-cdk-lib.aws_logs.ILogGroup</code> | The CloudWatch Log Group name for log publishing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.cloudWatchLogGroupStreamPrefix">cloudWatchLogGroupStreamPrefix</a></code> | <code>string</code> | The CloudWatch Log Group Stream prefix for log publishing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.cloudWatchLogtypes">cloudWatchLogtypes</a></code> | <code>string</code> | The types of logs to log in CloudWatch Log. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.executionTimeout">executionTimeout</a></code> | <code>aws-cdk-lib.Duration</code> | The execution timeout. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.persistentAppUi">persistentAppUi</a></code> | <code>boolean</code> | Enable Spark persistent UI logs in EMR managed storage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.persistentAppUIKey">persistentAppUIKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key ARN to encrypt Spark persistent UI logs in EMR managed storage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.s3LogBucket">s3LogBucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | The S3 Bucket for log publishing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.s3LogEncryptionKey">s3LogEncryptionKey</a></code> | <code>aws-cdk-lib.aws_kms.IKey</code> | The KMS Key for encrypting logs on S3. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.s3LogPrefix">s3LogPrefix</a></code> | <code>string</code> | The S3 Bucket prefix for log publishing. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.sparkSubmitEntryPointArguments">sparkSubmitEntryPointArguments</a></code> | <code>string[]</code> | The arguments for the Spark submit job run. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.sparkSubmitParameters">sparkSubmitParameters</a></code> | <code>string</code> | The parameters for the Spark submit job run. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.tags">tags</a></code> | <code>{[ key: string ]: any}</code> | Tags to be added to the EMR Serverless job. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* The Step Functions State Machine is not scheduled.

The Schedule to run the Step Functions state machine.

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

The EMR Serverless Application to execute the Spark Job.

---

##### `executionRole`<sup>Required</sup> <a name="executionRole" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.executionRole"></a>

```typescript
public readonly executionRole: IRole;
```

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM execution Role for the EMR Serverless job.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The Spark Job name.

---

##### `sparkSubmitEntryPoint`<sup>Required</sup> <a name="sparkSubmitEntryPoint" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.sparkSubmitEntryPoint"></a>

```typescript
public readonly sparkSubmitEntryPoint: string;
```

- *Type:* string

The entry point for the Spark submit job run.

> [https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html](https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html)

---

##### `applicationConfiguration`<sup>Optional</sup> <a name="applicationConfiguration" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.applicationConfiguration"></a>

```typescript
public readonly applicationConfiguration: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* No configuration is passed to the job.

The application configuration override for the Spark submit job run.

> [https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html](https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html)

---

##### `cloudWatchEncryptionKey`<sup>Optional</sup> <a name="cloudWatchEncryptionKey" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.cloudWatchEncryptionKey"></a>

```typescript
public readonly cloudWatchEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* No encryption

The KMS Key for encrypting logs on CloudWatch.

---

##### `cloudWatchLogGroup`<sup>Optional</sup> <a name="cloudWatchLogGroup" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.cloudWatchLogGroup"></a>

```typescript
public readonly cloudWatchLogGroup: ILogGroup;
```

- *Type:* aws-cdk-lib.aws_logs.ILogGroup
- *Default:* No logging to CloudWatch

The CloudWatch Log Group name for log publishing.

---

##### `cloudWatchLogGroupStreamPrefix`<sup>Optional</sup> <a name="cloudWatchLogGroupStreamPrefix" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.cloudWatchLogGroupStreamPrefix"></a>

```typescript
public readonly cloudWatchLogGroupStreamPrefix: string;
```

- *Type:* string
- *Default:* No prefix is used

The CloudWatch Log Group Stream prefix for log publishing.

---

##### `cloudWatchLogtypes`<sup>Optional</sup> <a name="cloudWatchLogtypes" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.cloudWatchLogtypes"></a>

```typescript
public readonly cloudWatchLogtypes: string;
```

- *Type:* string

The types of logs to log in CloudWatch Log.

---

##### `executionTimeout`<sup>Optional</sup> <a name="executionTimeout" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.executionTimeout"></a>

```typescript
public readonly executionTimeout: Duration;
```

- *Type:* aws-cdk-lib.Duration
- *Default:* 30 minutes

The execution timeout.

---

##### `persistentAppUi`<sup>Optional</sup> <a name="persistentAppUi" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.persistentAppUi"></a>

```typescript
public readonly persistentAppUi: boolean;
```

- *Type:* boolean
- *Default:* true

Enable Spark persistent UI logs in EMR managed storage.

---

##### `persistentAppUIKey`<sup>Optional</sup> <a name="persistentAppUIKey" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.persistentAppUIKey"></a>

```typescript
public readonly persistentAppUIKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* Use EMR managed Key

The KMS Key ARN to encrypt Spark persistent UI logs in EMR managed storage.

---

##### `s3LogBucket`<sup>Optional</sup> <a name="s3LogBucket" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.s3LogBucket"></a>

```typescript
public readonly s3LogBucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket
- *Default:* No logging to S3

The S3 Bucket for log publishing.

---

##### `s3LogEncryptionKey`<sup>Optional</sup> <a name="s3LogEncryptionKey" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.s3LogEncryptionKey"></a>

```typescript
public readonly s3LogEncryptionKey: IKey;
```

- *Type:* aws-cdk-lib.aws_kms.IKey
- *Default:* No encryption

The KMS Key for encrypting logs on S3.

---

##### `s3LogPrefix`<sup>Optional</sup> <a name="s3LogPrefix" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.s3LogPrefix"></a>

```typescript
public readonly s3LogPrefix: string;
```

- *Type:* string
- *Default:* No logging to S3

The S3 Bucket prefix for log publishing.

---

##### `sparkSubmitEntryPointArguments`<sup>Optional</sup> <a name="sparkSubmitEntryPointArguments" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.sparkSubmitEntryPointArguments"></a>

```typescript
public readonly sparkSubmitEntryPointArguments: string[];
```

- *Type:* string[]
- *Default:* No arguments are passed to the job.

The arguments for the Spark submit job run.

> [https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html](https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html)

---

##### `sparkSubmitParameters`<sup>Optional</sup> <a name="sparkSubmitParameters" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.sparkSubmitParameters"></a>

```typescript
public readonly sparkSubmitParameters: string;
```

- *Type:* string
- *Default:* No parameters are passed to the job.

The parameters for the Spark submit job run.

> [https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html](https://docs.aws.amazon.com/emr-on-eks/latest/APIReference/API_StartJobRun.html)

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessJobProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* No tags are added

Tags to be added to the EMR Serverless job.

---

### SparkEmrServerlessRuntimeProps <a name="SparkEmrServerlessRuntimeProps" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps"></a>

Properties for the `SparkEmrServerlessRuntime` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const sparkEmrServerlessRuntimeProps: processing.SparkEmrServerlessRuntimeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.name">name</a></code> | <code>string</code> | The name of the application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.architecture">architecture</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.Architecture</code> | The CPU architecture type of the application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.autoStartConfiguration">autoStartConfiguration</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.AutoStartConfigurationProperty</code> | The configuration for an application to automatically start on job submission. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.autoStopConfiguration">autoStopConfiguration</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.AutoStopConfigurationProperty</code> | The configuration for an application to automatically stop after a certain amount of time being idle. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.imageConfiguration">imageConfiguration</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.ImageConfigurationInputProperty</code> | The unique custom image configuration used for both the Spark Driver and the Spark Executor. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.initialCapacity">initialCapacity</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.InitialCapacityConfigKeyValuePairProperty[]</code> | The pre-initialized capacity of the application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.maximumCapacity">maximumCapacity</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.MaximumAllowedResourcesProperty</code> | The maximum capacity of the application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.networkConfiguration">networkConfiguration</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.NetworkConfigurationProperty</code> | The network configuration for customer VPC connectivity for the application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.releaseLabel">releaseLabel</a></code> | <code>@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion</code> | The EMR release version associated with the application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.runtimeConfiguration">runtimeConfiguration</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.ConfigurationObjectProperty[]</code> | The runtime and monitoring configurations to used as defaults for all of the job runs of this application. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.workerTypeSpecifications">workerTypeSpecifications</a></code> | <code>aws-cdk-lib.IResolvable \| {[ key: string ]: aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_emrserverless.CfnApplication.WorkerTypeSpecificationInputProperty}</code> | The different custom image configurations used for the Spark Driver and the Spark Executor. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the application.

The name must be less than 64 characters.
*Pattern* : `^[A-Za-z0-9._\\/#-]+$`

---

##### `architecture`<sup>Optional</sup> <a name="architecture" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.architecture"></a>

```typescript
public readonly architecture: Architecture;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.Architecture
- *Default:* x86_64

The CPU architecture type of the application.

---

##### `autoStartConfiguration`<sup>Optional</sup> <a name="autoStartConfiguration" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.autoStartConfiguration"></a>

```typescript
public readonly autoStartConfiguration: IResolvable | AutoStartConfigurationProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.AutoStartConfigurationProperty
- *Default:* True

The configuration for an application to automatically start on job submission.

---

##### `autoStopConfiguration`<sup>Optional</sup> <a name="autoStopConfiguration" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.autoStopConfiguration"></a>

```typescript
public readonly autoStopConfiguration: IResolvable | AutoStopConfigurationProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.AutoStopConfigurationProperty
- *Default:* The application is stopped after 15 minutes of idle time

The configuration for an application to automatically stop after a certain amount of time being idle.

---

##### `imageConfiguration`<sup>Optional</sup> <a name="imageConfiguration" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.imageConfiguration"></a>

```typescript
public readonly imageConfiguration: IResolvable | ImageConfigurationInputProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.ImageConfigurationInputProperty
- *Default:* EMR base image is used for both the Spark Driver and the Spark Executor

The unique custom image configuration used for both the Spark Driver and the Spark Executor.

> [https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/application-custom-image.html](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/application-custom-image.html)

---

##### `initialCapacity`<sup>Optional</sup> <a name="initialCapacity" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.initialCapacity"></a>

```typescript
public readonly initialCapacity: IResolvable | IResolvable | InitialCapacityConfigKeyValuePairProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.InitialCapacityConfigKeyValuePairProperty[]
- *Default:* No pre-initialized capacity is used

The pre-initialized capacity of the application.

> [https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/pre-init-capacity.html](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/pre-init-capacity.html)

---

##### `maximumCapacity`<sup>Optional</sup> <a name="maximumCapacity" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.maximumCapacity"></a>

```typescript
public readonly maximumCapacity: IResolvable | MaximumAllowedResourcesProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.MaximumAllowedResourcesProperty
- *Default:* Depending on the EMR version

The maximum capacity of the application.

This is cumulative across all workers at any given point in time during the lifespan of the application is created. No new resources will be created once any one of the defined limits is hit.

---

##### `networkConfiguration`<sup>Optional</sup> <a name="networkConfiguration" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.networkConfiguration"></a>

```typescript
public readonly networkConfiguration: IResolvable | NetworkConfigurationProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.NetworkConfigurationProperty
- *Default:* a VPC and a security group are created, these are accessed as construct attribute.

The network configuration for customer VPC connectivity for the application.

If no configuration is created, the a VPC with 3 public subnets and 3 private subnets is created
The 3 public subnets and 3 private subnets are each created in an Availability Zone (AZ)
The VPC has one NAT Gateway per AZ and an S3 endpoint

---

##### `releaseLabel`<sup>Optional</sup> <a name="releaseLabel" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.releaseLabel"></a>

```typescript
public readonly releaseLabel: EmrRuntimeVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion
- *Default:* [EMR_DEFAULT_VERSION](https://github.com/awslabs/data-solutions-framework-on-aws/blob/HEAD/framework/src/processing/lib/emr-releases.ts#L46)

The EMR release version associated with the application.

The EMR release can be found in this [documentation](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html)

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `runtimeConfiguration`<sup>Optional</sup> <a name="runtimeConfiguration" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.runtimeConfiguration"></a>

```typescript
public readonly runtimeConfiguration: IResolvable | ConfigurationObjectProperty[];
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.ConfigurationObjectProperty[]
- *Default:* No custom configuration is used

The runtime and monitoring configurations to used as defaults for all of the job runs of this application.

> [https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/default-configs.html](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/default-configs.html)

---

##### `workerTypeSpecifications`<sup>Optional</sup> <a name="workerTypeSpecifications" id="@cdklabs/aws-data-solutions-framework.processing.SparkEmrServerlessRuntimeProps.property.workerTypeSpecifications"></a>

```typescript
public readonly workerTypeSpecifications: IResolvable | {[ key: string ]: IResolvable | WorkerTypeSpecificationInputProperty};
```

- *Type:* aws-cdk-lib.IResolvable | {[ key: string ]: aws-cdk-lib.IResolvable | aws-cdk-lib.aws_emrserverless.CfnApplication.WorkerTypeSpecificationInputProperty}
- *Default:* EMR base image is used for both the Spark Driver and the Spark Executor

The different custom image configurations used for the Spark Driver and the Spark Executor.

> [https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/application-custom-image.html](https://docs.aws.amazon.com/emr/latest/EMR-Serverless-UserGuide/application-custom-image.html)

---

### SparkJobProps <a name="SparkJobProps" id="@cdklabs/aws-data-solutions-framework.processing.SparkJobProps"></a>

The properties for the `SparkJob` construct.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.processing.SparkJobProps.Initializer"></a>

```typescript
import { processing } from '@cdklabs/aws-data-solutions-framework'

const sparkJobProps: processing.SparkJobProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJobProps.property.removalPolicy">removalPolicy</a></code> | <code>aws-cdk-lib.RemovalPolicy</code> | The removal policy when deleting the CDK resource. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkJobProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The Schedule to run the Step Functions state machine. |

---

##### `removalPolicy`<sup>Optional</sup> <a name="removalPolicy" id="@cdklabs/aws-data-solutions-framework.processing.SparkJobProps.property.removalPolicy"></a>

```typescript
public readonly removalPolicy: RemovalPolicy;
```

- *Type:* aws-cdk-lib.RemovalPolicy
- *Default:* The resources are not deleted (`RemovalPolicy.RETAIN`).

The removal policy when deleting the CDK resource.

If DESTROY is selected, context value `@data-solutions-framework-on-aws/removeDataOnDestroy` needs to be set to true.
Otherwise the removalPolicy is reverted to RETAIN.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdklabs/aws-data-solutions-framework.processing.SparkJobProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* The Step Functions State Machine is not scheduled.

The Schedule to run the Step Functions state machine.

---

### TlsAuthProps <a name="TlsAuthProps" id="@cdklabs/aws-data-solutions-framework.streaming.TlsAuthProps"></a>

TLS authentication properties.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.TlsAuthProps.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const tlsAuthProps: streaming.TlsAuthProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.TlsAuthProps.property.certificateAuthorities">certificateAuthorities</a></code> | <code>aws-cdk-lib.aws_acmpca.ICertificateAuthority[]</code> | List of ACM Certificate Authorities to enable TLS authentication. |

---

##### `certificateAuthorities`<sup>Optional</sup> <a name="certificateAuthorities" id="@cdklabs/aws-data-solutions-framework.streaming.TlsAuthProps.property.certificateAuthorities"></a>

```typescript
public readonly certificateAuthorities: ICertificateAuthority[];
```

- *Type:* aws-cdk-lib.aws_acmpca.ICertificateAuthority[]
- *Default:* none

List of ACM Certificate Authorities to enable TLS authentication.

---

### VpcTlsAuthProps <a name="VpcTlsAuthProps" id="@cdklabs/aws-data-solutions-framework.streaming.VpcTlsAuthProps"></a>

TLS authentication properties.

#### Initializer <a name="Initializer" id="@cdklabs/aws-data-solutions-framework.streaming.VpcTlsAuthProps.Initializer"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

const vpcTlsAuthProps: streaming.VpcTlsAuthProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.VpcTlsAuthProps.property.tls">tls</a></code> | <code>boolean</code> | enable TLS authentication. |

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdklabs/aws-data-solutions-framework.streaming.VpcTlsAuthProps.property.tls"></a>

```typescript
public readonly tls: boolean;
```

- *Type:* boolean
- *Default:* none

enable TLS authentication.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationStackFactory <a name="ApplicationStackFactory" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory"></a>

Abstract class that needs to be implemented to pass the application Stack to the CICD pipeline.

*Example*

```typescript
interface MyApplicationStackProps extends cdk.StackProps {
  readonly stage: dsf.utils.CICDStage;
}

class MyApplicationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: MyApplicationStackProps) {
    super(scope, id, props);
    // stack logic goes here... and can be customized using props.stage
  }
}

class MyApplicationStackFactory extends dsf.utils.ApplicationStackFactory {
  createStack(scope: Construct, stage: dsf.utils.CICDStage): cdk.Stack {
    return new MyApplicationStack(scope, 'MyApplication', {
      stage: stage
    } as MyApplicationStackProps);
  }
}
```


#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

new utils.ApplicationStackFactory()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory.createStack">createStack</a></code> | Abstract method that needs to be implemented to return the application Stack. |

---

##### `createStack` <a name="createStack" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory.createStack"></a>

```typescript
public createStack(scope: Construct, stage: CICDStage): Stack
```

Abstract method that needs to be implemented to return the application Stack.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory.createStack.parameter.scope"></a>

- *Type:* constructs.Construct

The scope to create the stack in.

---

###### `stage`<sup>Required</sup> <a name="stage" id="@cdklabs/aws-data-solutions-framework.utils.ApplicationStackFactory.createStack.parameter.stage"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.utils.CICDStage

The stage of the pipeline.

---




### BucketUtils <a name="BucketUtils" id="@cdklabs/aws-data-solutions-framework.utils.BucketUtils"></a>

Utils for working with Amazon S3 Buckets.

#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.utils.BucketUtils.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

new utils.BucketUtils()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.BucketUtils.generateUniqueBucketName">generateUniqueBucketName</a></code> | Generate a unique Amazon S3 bucket name based on the provided name, CDK construct ID and CDK construct scope. |

---

##### `generateUniqueBucketName` <a name="generateUniqueBucketName" id="@cdklabs/aws-data-solutions-framework.utils.BucketUtils.generateUniqueBucketName"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.BucketUtils.generateUniqueBucketName(scope: Construct, id: string, name: string)
```

Generate a unique Amazon S3 bucket name based on the provided name, CDK construct ID and CDK construct scope.

The bucket name is suffixed the AWS account ID, the AWS region and a unique 8 characters hash.
The maximum length for name is 26 characters.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.utils.BucketUtils.generateUniqueBucketName.parameter.scope"></a>

- *Type:* constructs.Construct

the current scope where the construct is created (generally `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.utils.BucketUtils.generateUniqueBucketName.parameter.id"></a>

- *Type:* string

the CDK ID of the construct.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.utils.BucketUtils.generateUniqueBucketName.parameter.name"></a>

- *Type:* string

the name of the bucket.

---



### CICDStage <a name="CICDStage" id="@cdklabs/aws-data-solutions-framework.utils.CICDStage"></a>

The list of CICD Stages used in CICD Pipelines.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CICDStage.of">of</a></code> | Custom stage. |

---

##### `of` <a name="of" id="@cdklabs/aws-data-solutions-framework.utils.CICDStage.of"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.CICDStage.of(stage: string)
```

Custom stage.

###### `stage`<sup>Required</sup> <a name="stage" id="@cdklabs/aws-data-solutions-framework.utils.CICDStage.of.parameter.stage"></a>

- *Type:* string

the stage inside the pipeline.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CICDStage.property.stage">stage</a></code> | <code>string</code> | the stage inside the pipeline. |

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdklabs/aws-data-solutions-framework.utils.CICDStage.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

the stage inside the pipeline.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CICDStage.property.PROD">PROD</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.CICDStage</code> | Prod stage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.CICDStage.property.STAGING">STAGING</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.CICDStage</code> | Staging stage. |

---

##### `PROD`<sup>Required</sup> <a name="PROD" id="@cdklabs/aws-data-solutions-framework.utils.CICDStage.property.PROD"></a>

```typescript
public readonly PROD: CICDStage;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.CICDStage

Prod stage.

---

##### `STAGING`<sup>Required</sup> <a name="STAGING" id="@cdklabs/aws-data-solutions-framework.utils.CICDStage.property.STAGING"></a>

```typescript
public readonly STAGING: CICDStage;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.CICDStage

Staging stage.

---

### ClientAuthentication <a name="ClientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication"></a>

Configuration properties for client authentication.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.sasl">sasl</a></code> | SASL authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.saslTls">saslTls</a></code> | SASL + TLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.tls">tls</a></code> | TLS authentication. |

---

##### `sasl` <a name="sasl" id="@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.sasl"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.ClientAuthentication.sasl(props: SaslAuthProps)
```

SASL authentication.

###### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.sasl.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps

---

##### `saslTls` <a name="saslTls" id="@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.saslTls"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.ClientAuthentication.saslTls(saslTlsProps: SaslTlsAuthProps)
```

SASL + TLS authentication.

###### `saslTlsProps`<sup>Required</sup> <a name="saslTlsProps" id="@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.saslTls.parameter.saslTlsProps"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.SaslTlsAuthProps

---

##### `tls` <a name="tls" id="@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.tls"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.ClientAuthentication.tls(props: TlsAuthProps)
```

TLS authentication.

###### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.tls.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.TlsAuthProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.property.saslProps">saslProps</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps</code> | - properties for SASL authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.property.tlsProps">tlsProps</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.TlsAuthProps</code> | - properties for TLS authentication. |

---

##### `saslProps`<sup>Optional</sup> <a name="saslProps" id="@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.property.saslProps"></a>

```typescript
public readonly saslProps: SaslAuthProps;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps

properties for SASL authentication.

---

##### `tlsProps`<sup>Optional</sup> <a name="tlsProps" id="@cdklabs/aws-data-solutions-framework.streaming.ClientAuthentication.property.tlsProps"></a>

```typescript
public readonly tlsProps: TlsAuthProps;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.TlsAuthProps

properties for TLS authentication.

---


### DataZoneHelpers <a name="DataZoneHelpers" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers"></a>

#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.Initializer"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

new governance.DataZoneHelpers()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.buildModelString">buildModelString</a></code> | Build a Smithy model string from model fields. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget">createSubscriptionTarget</a></code> | Creates a DataZone subscription target for a custom asset type. |

---

##### `buildModelString` <a name="buildModelString" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.buildModelString"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

governance.DataZoneHelpers.buildModelString(formType: DataZoneFormType)
```

Build a Smithy model string from model fields.

###### `formType`<sup>Required</sup> <a name="formType" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.buildModelString.parameter.formType"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.DataZoneFormType

The form type containing the model fields.

---

##### `createSubscriptionTarget` <a name="createSubscriptionTarget" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget"></a>

```typescript
import { governance } from '@cdklabs/aws-data-solutions-framework'

governance.DataZoneHelpers.createSubscriptionTarget(scope: Construct, id: string, customAssetType: CustomAssetType, name: string, provider: string, environmentId: string, authorizedPrincipals: IRole[], manageAccessRole: IRole)
```

Creates a DataZone subscription target for a custom asset type.

Subscription targets are used to automatically add asset to environments when a custom asset is subscribed by a project.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget.parameter.scope"></a>

- *Type:* constructs.Construct

The scope of the construct.

---

###### `id`<sup>Required</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget.parameter.id"></a>

- *Type:* string

The id of the construct.

---

###### `customAssetType`<sup>Required</sup> <a name="customAssetType" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget.parameter.customAssetType"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.governance.CustomAssetType

The custom asset type that can be added to the environment.

---

###### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget.parameter.name"></a>

- *Type:* string

The name of the subscription target.

---

###### `provider`<sup>Required</sup> <a name="provider" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget.parameter.provider"></a>

- *Type:* string

The provider of the subscription target.

---

###### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget.parameter.environmentId"></a>

- *Type:* string

The DataZone environment identifier.

---

###### `authorizedPrincipals`<sup>Required</sup> <a name="authorizedPrincipals" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget.parameter.authorizedPrincipals"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole[]

The authorized principals to be granted when assets are subscribed.

---

###### `manageAccessRole`<sup>Required</sup> <a name="manageAccessRole" id="@cdklabs/aws-data-solutions-framework.governance.DataZoneHelpers.createSubscriptionTarget.parameter.manageAccessRole"></a>

- *Type:* aws-cdk-lib.aws_iam.IRole

The IAM role creating the subscription target.

---



### KafkaVersion <a name="KafkaVersion" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion"></a>

Kafka cluster version.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.of">of</a></code> | Custom cluster version. |

---

##### `of` <a name="of" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.of"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.KafkaVersion.of(version: string)
```

Custom cluster version.

###### `version`<sup>Required</sup> <a name="version" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.of.parameter.version"></a>

- *Type:* string

custom version number.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.version">version</a></code> | <code>string</code> | cluster version number. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

cluster version number.

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V1_1_1">V1_1_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | **Deprecated by Amazon MSK. You can't create a Kafka cluster with a deprecated version.**. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_2_1">V2_2_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.2.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_3_1">V2_3_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.3.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_4_1_1">V2_4_1_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.4.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_5_1">V2_5_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.5.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_6_0">V2_6_0</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.6.0. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_6_1">V2_6_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.6.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_6_2">V2_6_2</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.6.2. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_6_3">V2_6_3</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.6.3. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_7_0">V2_7_0</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.7.0. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_7_1">V2_7_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.7.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_7_2">V2_7_2</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.7.2. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_8_0">V2_8_0</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.8.0. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_8_1">V2_8_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 2.8.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_8_2_TIERED">V2_8_2_TIERED</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | AWS MSK Kafka version 2.8.2.tiered. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_1_1">V3_1_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 3.1.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_2_0">V3_2_0</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 3.2.0. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_3_1">V3_3_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 3.3.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_3_2">V3_3_2</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 3.3.2. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_4_0">V3_4_0</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 3.4.0. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_5_1">V3_5_1</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 3.5.1. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_6_0">V3_6_0</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 3.6.0. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_7_X">V3_7_X</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 3.7.x. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_7_X_KRAFT">V3_7_X_KRAFT</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion</code> | Kafka version 3.7.x.kraft. |

---

##### ~~`V1_1_1`~~<sup>Required</sup> <a name="V1_1_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V1_1_1"></a>

- *Deprecated:* use the latest runtime instead

```typescript
public readonly V1_1_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

**Deprecated by Amazon MSK. You can't create a Kafka cluster with a deprecated version.**.

Kafka version 1.1.1

---

##### `V2_2_1`<sup>Required</sup> <a name="V2_2_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_2_1"></a>

```typescript
public readonly V2_2_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.2.1.

---

##### `V2_3_1`<sup>Required</sup> <a name="V2_3_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_3_1"></a>

```typescript
public readonly V2_3_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.3.1.

---

##### `V2_4_1_1`<sup>Required</sup> <a name="V2_4_1_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_4_1_1"></a>

```typescript
public readonly V2_4_1_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.4.1.

---

##### `V2_5_1`<sup>Required</sup> <a name="V2_5_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_5_1"></a>

```typescript
public readonly V2_5_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.5.1.

---

##### `V2_6_0`<sup>Required</sup> <a name="V2_6_0" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_6_0"></a>

```typescript
public readonly V2_6_0: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.6.0.

---

##### `V2_6_1`<sup>Required</sup> <a name="V2_6_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_6_1"></a>

```typescript
public readonly V2_6_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.6.1.

---

##### `V2_6_2`<sup>Required</sup> <a name="V2_6_2" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_6_2"></a>

```typescript
public readonly V2_6_2: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.6.2.

---

##### `V2_6_3`<sup>Required</sup> <a name="V2_6_3" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_6_3"></a>

```typescript
public readonly V2_6_3: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.6.3.

---

##### `V2_7_0`<sup>Required</sup> <a name="V2_7_0" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_7_0"></a>

```typescript
public readonly V2_7_0: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.7.0.

---

##### `V2_7_1`<sup>Required</sup> <a name="V2_7_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_7_1"></a>

```typescript
public readonly V2_7_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.7.1.

---

##### `V2_7_2`<sup>Required</sup> <a name="V2_7_2" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_7_2"></a>

```typescript
public readonly V2_7_2: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.7.2.

---

##### `V2_8_0`<sup>Required</sup> <a name="V2_8_0" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_8_0"></a>

```typescript
public readonly V2_8_0: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.8.0.

---

##### `V2_8_1`<sup>Required</sup> <a name="V2_8_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_8_1"></a>

```typescript
public readonly V2_8_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 2.8.1.

---

##### `V2_8_2_TIERED`<sup>Required</sup> <a name="V2_8_2_TIERED" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V2_8_2_TIERED"></a>

```typescript
public readonly V2_8_2_TIERED: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

AWS MSK Kafka version 2.8.2.tiered.

---

##### `V3_1_1`<sup>Required</sup> <a name="V3_1_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_1_1"></a>

```typescript
public readonly V3_1_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 3.1.1.

---

##### `V3_2_0`<sup>Required</sup> <a name="V3_2_0" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_2_0"></a>

```typescript
public readonly V3_2_0: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 3.2.0.

---

##### `V3_3_1`<sup>Required</sup> <a name="V3_3_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_3_1"></a>

```typescript
public readonly V3_3_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 3.3.1.

---

##### `V3_3_2`<sup>Required</sup> <a name="V3_3_2" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_3_2"></a>

```typescript
public readonly V3_3_2: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 3.3.2.

---

##### `V3_4_0`<sup>Required</sup> <a name="V3_4_0" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_4_0"></a>

```typescript
public readonly V3_4_0: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 3.4.0.

---

##### `V3_5_1`<sup>Required</sup> <a name="V3_5_1" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_5_1"></a>

```typescript
public readonly V3_5_1: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 3.5.1.

---

##### `V3_6_0`<sup>Required</sup> <a name="V3_6_0" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_6_0"></a>

```typescript
public readonly V3_6_0: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 3.6.0.

---

##### `V3_7_X`<sup>Required</sup> <a name="V3_7_X" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_7_X"></a>

```typescript
public readonly V3_7_X: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 3.7.x.

---

##### `V3_7_X_KRAFT`<sup>Required</sup> <a name="V3_7_X_KRAFT" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaVersion.property.V3_7_X_KRAFT"></a>

```typescript
public readonly V3_7_X_KRAFT: KafkaVersion;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.KafkaVersion

Kafka version 3.7.x.kraft.

---

### MskBrokerInstanceType <a name="MskBrokerInstanceType" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType"></a>

Kafka cluster version.



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.instance">instance</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.instance"></a>

```typescript
public readonly instance: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_12XLARGE">KAFKA_M5_12XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m5.12xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_16XLARGE">KAFKA_M5_16XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m5.16xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_24XLARGE">KAFKA_M5_24XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m5.24xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_2XLARGE">KAFKA_M5_2XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m5.2xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_4XLARGE">KAFKA_M5_4XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m5.4xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_8XLARGE">KAFKA_M5_8XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m5.8xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_LARGE">KAFKA_M5_LARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m5.large. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_XLARGE">KAFKA_M5_XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m5.xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_12XLARGE">KAFKA_M7G_12XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m7g.12xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_16XLARGE">KAFKA_M7G_16XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m7g.16xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_24XLARGE">KAFKA_M7G_24XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m7g.24xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_2XLARGE">KAFKA_M7G_2XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m7g.2xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_4XLARGE">KAFKA_M7G_4XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m7g.4xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_8XLARGE">KAFKA_M7G_8XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m7g.8xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_LARGE">KAFKA_M7G_LARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m7g.large. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_XLARGE">KAFKA_M7G_XLARGE</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.m7g.xlarge. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_T3_SMALL">KAFKA_T3_SMALL</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType</code> | Borker instance type kafka.t3.small. |

---

##### `KAFKA_M5_12XLARGE`<sup>Required</sup> <a name="KAFKA_M5_12XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_12XLARGE"></a>

```typescript
public readonly KAFKA_M5_12XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m5.12xlarge.

---

##### `KAFKA_M5_16XLARGE`<sup>Required</sup> <a name="KAFKA_M5_16XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_16XLARGE"></a>

```typescript
public readonly KAFKA_M5_16XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m5.16xlarge.

---

##### `KAFKA_M5_24XLARGE`<sup>Required</sup> <a name="KAFKA_M5_24XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_24XLARGE"></a>

```typescript
public readonly KAFKA_M5_24XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m5.24xlarge.

---

##### `KAFKA_M5_2XLARGE`<sup>Required</sup> <a name="KAFKA_M5_2XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_2XLARGE"></a>

```typescript
public readonly KAFKA_M5_2XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m5.2xlarge.

---

##### `KAFKA_M5_4XLARGE`<sup>Required</sup> <a name="KAFKA_M5_4XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_4XLARGE"></a>

```typescript
public readonly KAFKA_M5_4XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m5.4xlarge.

---

##### `KAFKA_M5_8XLARGE`<sup>Required</sup> <a name="KAFKA_M5_8XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_8XLARGE"></a>

```typescript
public readonly KAFKA_M5_8XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m5.8xlarge.

---

##### `KAFKA_M5_LARGE`<sup>Required</sup> <a name="KAFKA_M5_LARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_LARGE"></a>

```typescript
public readonly KAFKA_M5_LARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m5.large.

---

##### `KAFKA_M5_XLARGE`<sup>Required</sup> <a name="KAFKA_M5_XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M5_XLARGE"></a>

```typescript
public readonly KAFKA_M5_XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m5.xlarge.

---

##### `KAFKA_M7G_12XLARGE`<sup>Required</sup> <a name="KAFKA_M7G_12XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_12XLARGE"></a>

```typescript
public readonly KAFKA_M7G_12XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m7g.12xlarge.

---

##### `KAFKA_M7G_16XLARGE`<sup>Required</sup> <a name="KAFKA_M7G_16XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_16XLARGE"></a>

```typescript
public readonly KAFKA_M7G_16XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m7g.16xlarge.

---

##### `KAFKA_M7G_24XLARGE`<sup>Required</sup> <a name="KAFKA_M7G_24XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_24XLARGE"></a>

```typescript
public readonly KAFKA_M7G_24XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m7g.24xlarge.

---

##### `KAFKA_M7G_2XLARGE`<sup>Required</sup> <a name="KAFKA_M7G_2XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_2XLARGE"></a>

```typescript
public readonly KAFKA_M7G_2XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m7g.2xlarge.

---

##### `KAFKA_M7G_4XLARGE`<sup>Required</sup> <a name="KAFKA_M7G_4XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_4XLARGE"></a>

```typescript
public readonly KAFKA_M7G_4XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m7g.4xlarge.

---

##### `KAFKA_M7G_8XLARGE`<sup>Required</sup> <a name="KAFKA_M7G_8XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_8XLARGE"></a>

```typescript
public readonly KAFKA_M7G_8XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m7g.8xlarge.

---

##### `KAFKA_M7G_LARGE`<sup>Required</sup> <a name="KAFKA_M7G_LARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_LARGE"></a>

```typescript
public readonly KAFKA_M7G_LARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m7g.large.

---

##### `KAFKA_M7G_XLARGE`<sup>Required</sup> <a name="KAFKA_M7G_XLARGE" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_M7G_XLARGE"></a>

```typescript
public readonly KAFKA_M7G_XLARGE: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.m7g.xlarge.

---

##### `KAFKA_T3_SMALL`<sup>Required</sup> <a name="KAFKA_T3_SMALL" id="@cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType.property.KAFKA_T3_SMALL"></a>

```typescript
public readonly KAFKA_T3_SMALL: MskBrokerInstanceType;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.MskBrokerInstanceType

Borker instance type kafka.t3.small.

---

### ServiceLinkedRoleService <a name="ServiceLinkedRoleService" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService"></a>

#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

new utils.ServiceLinkedRoleService(serviceName: string, roleName: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.Initializer.parameter.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.Initializer.parameter.roleName">roleName</a></code> | <code>string</code> | *No description.* |

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.Initializer.parameter.serviceName"></a>

- *Type:* string

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.Initializer.parameter.roleName"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.getCreateServiceLinkedRolePolicy">getCreateServiceLinkedRolePolicy</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.getRoleArn">getRoleArn</a></code> | *No description.* |

---

##### `getCreateServiceLinkedRolePolicy` <a name="getCreateServiceLinkedRolePolicy" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.getCreateServiceLinkedRolePolicy"></a>

```typescript
public getCreateServiceLinkedRolePolicy(account: string): PolicyStatement
```

###### `account`<sup>Required</sup> <a name="account" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.getCreateServiceLinkedRolePolicy.parameter.account"></a>

- *Type:* string

---

##### `getRoleArn` <a name="getRoleArn" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.getRoleArn"></a>

```typescript
public getRoleArn(account: string): string
```

###### `account`<sup>Required</sup> <a name="account" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.getRoleArn.parameter.account"></a>

- *Type:* string

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.roleName">roleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |

---

##### `roleName`<sup>Required</sup> <a name="roleName" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.roleName"></a>

```typescript
public readonly roleName: string;
```

- *Type:* string

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.EKS">EKS</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.EMR_CONTAINERS">EMR_CONTAINERS</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.EMR_SERVERLESS">EMR_SERVERLESS</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.KAFKA">KAFKA</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.OPENSEARCH">OPENSEARCH</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService</code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.REDSHIFT">REDSHIFT</a></code> | <code>@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService</code> | *No description.* |

---

##### `EKS`<sup>Required</sup> <a name="EKS" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.EKS"></a>

```typescript
public readonly EKS: ServiceLinkedRoleService;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService

---

##### `EMR_CONTAINERS`<sup>Required</sup> <a name="EMR_CONTAINERS" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.EMR_CONTAINERS"></a>

```typescript
public readonly EMR_CONTAINERS: ServiceLinkedRoleService;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService

---

##### `EMR_SERVERLESS`<sup>Required</sup> <a name="EMR_SERVERLESS" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.EMR_SERVERLESS"></a>

```typescript
public readonly EMR_SERVERLESS: ServiceLinkedRoleService;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService

---

##### `KAFKA`<sup>Required</sup> <a name="KAFKA" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.KAFKA"></a>

```typescript
public readonly KAFKA: ServiceLinkedRoleService;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService

---

##### `OPENSEARCH`<sup>Required</sup> <a name="OPENSEARCH" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.OPENSEARCH"></a>

```typescript
public readonly OPENSEARCH: ServiceLinkedRoleService;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService

---

##### `REDSHIFT`<sup>Required</sup> <a name="REDSHIFT" id="@cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService.property.REDSHIFT"></a>

```typescript
public readonly REDSHIFT: ServiceLinkedRoleService;
```

- *Type:* @cdklabs/aws-data-solutions-framework.utils.ServiceLinkedRoleService

---

### StepFunctionUtils <a name="StepFunctionUtils" id="@cdklabs/aws-data-solutions-framework.utils.StepFunctionUtils"></a>

Utils for working with AWS Step Functions.

#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.utils.StepFunctionUtils.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

new utils.StepFunctionUtils()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.StepFunctionUtils.camelToPascal">camelToPascal</a></code> | Convert camel case properties to pascal case as required by AWS Step Functions API. |

---

##### `camelToPascal` <a name="camelToPascal" id="@cdklabs/aws-data-solutions-framework.utils.StepFunctionUtils.camelToPascal"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.StepFunctionUtils.camelToPascal(config: {[ key: string ]: any})
```

Convert camel case properties to pascal case as required by AWS Step Functions API.

###### `config`<sup>Required</sup> <a name="config" id="@cdklabs/aws-data-solutions-framework.utils.StepFunctionUtils.camelToPascal.parameter.config"></a>

- *Type:* {[ key: string ]: any}

---



### Utils <a name="Utils" id="@cdklabs/aws-data-solutions-framework.utils.Utils"></a>

Utilities class used across the different resources.

#### Initializers <a name="Initializers" id="@cdklabs/aws-data-solutions-framework.utils.Utils.Initializer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

new utils.Utils()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Utils.generateHash">generateHash</a></code> | Generate an 8 character hash from a string based on HMAC algorithm. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Utils.generateUniqueHash">generateUniqueHash</a></code> | Generate a unique hash of 8 characters from the CDK scope using its path and the stack name. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Utils.getCdkDeploymentRole">getCdkDeploymentRole</a></code> | Get CDK deployment role. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Utils.loadYaml">loadYaml</a></code> | Take a document stored as string and load it as YAML. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Utils.randomize">randomize</a></code> | Create a random string to be used as a seed for IAM User password. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Utils.readYamlDocument">readYamlDocument</a></code> | Read a YAML file from the path provided and return it. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Utils.stringSanitizer">stringSanitizer</a></code> | Sanitize a string by removing upper case and replacing special characters except underscore. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Utils.toPascalCase">toPascalCase</a></code> | Convert a string to PascalCase. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Utils.validateAccountId">validateAccountId</a></code> | Validate a provided string is a valid account ID. |

---

##### `generateHash` <a name="generateHash" id="@cdklabs/aws-data-solutions-framework.utils.Utils.generateHash"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.Utils.generateHash(text: string)
```

Generate an 8 character hash from a string based on HMAC algorithm.

###### `text`<sup>Required</sup> <a name="text" id="@cdklabs/aws-data-solutions-framework.utils.Utils.generateHash.parameter.text"></a>

- *Type:* string

the text to hash.

---

##### `generateUniqueHash` <a name="generateUniqueHash" id="@cdklabs/aws-data-solutions-framework.utils.Utils.generateUniqueHash"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.Utils.generateUniqueHash(scope: Construct, id?: string)
```

Generate a unique hash of 8 characters from the CDK scope using its path and the stack name.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.utils.Utils.generateUniqueHash.parameter.scope"></a>

- *Type:* constructs.Construct

the CDK construct scope.

---

###### `id`<sup>Optional</sup> <a name="id" id="@cdklabs/aws-data-solutions-framework.utils.Utils.generateUniqueHash.parameter.id"></a>

- *Type:* string

the CDK ID of the construct.

---

##### `getCdkDeploymentRole` <a name="getCdkDeploymentRole" id="@cdklabs/aws-data-solutions-framework.utils.Utils.getCdkDeploymentRole"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.Utils.getCdkDeploymentRole(scope: Construct)
```

Get CDK deployment role.

###### `scope`<sup>Required</sup> <a name="scope" id="@cdklabs/aws-data-solutions-framework.utils.Utils.getCdkDeploymentRole.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `loadYaml` <a name="loadYaml" id="@cdklabs/aws-data-solutions-framework.utils.Utils.loadYaml"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.Utils.loadYaml(document: string)
```

Take a document stored as string and load it as YAML.

###### `document`<sup>Required</sup> <a name="document" id="@cdklabs/aws-data-solutions-framework.utils.Utils.loadYaml.parameter.document"></a>

- *Type:* string

the document stored as string.

---

##### `randomize` <a name="randomize" id="@cdklabs/aws-data-solutions-framework.utils.Utils.randomize"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.Utils.randomize(name: string)
```

Create a random string to be used as a seed for IAM User password.

###### `name`<sup>Required</sup> <a name="name" id="@cdklabs/aws-data-solutions-framework.utils.Utils.randomize.parameter.name"></a>

- *Type:* string

the string to which to append a random string.

---

##### `readYamlDocument` <a name="readYamlDocument" id="@cdklabs/aws-data-solutions-framework.utils.Utils.readYamlDocument"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.Utils.readYamlDocument(path: string)
```

Read a YAML file from the path provided and return it.

###### `path`<sup>Required</sup> <a name="path" id="@cdklabs/aws-data-solutions-framework.utils.Utils.readYamlDocument.parameter.path"></a>

- *Type:* string

the path to the file.

---

##### `stringSanitizer` <a name="stringSanitizer" id="@cdklabs/aws-data-solutions-framework.utils.Utils.stringSanitizer"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.Utils.stringSanitizer(toSanitize: string)
```

Sanitize a string by removing upper case and replacing special characters except underscore.

###### `toSanitize`<sup>Required</sup> <a name="toSanitize" id="@cdklabs/aws-data-solutions-framework.utils.Utils.stringSanitizer.parameter.toSanitize"></a>

- *Type:* string

the string to sanitize.

---

##### `toPascalCase` <a name="toPascalCase" id="@cdklabs/aws-data-solutions-framework.utils.Utils.toPascalCase"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.Utils.toPascalCase(text: string)
```

Convert a string to PascalCase.

###### `text`<sup>Required</sup> <a name="text" id="@cdklabs/aws-data-solutions-framework.utils.Utils.toPascalCase.parameter.text"></a>

- *Type:* string

the string to convert to PascalCase.

---

##### `validateAccountId` <a name="validateAccountId" id="@cdklabs/aws-data-solutions-framework.utils.Utils.validateAccountId"></a>

```typescript
import { utils } from '@cdklabs/aws-data-solutions-framework'

utils.Utils.validateAccountId(accountId: string)
```

Validate a provided string is a valid account ID.

###### `accountId`<sup>Required</sup> <a name="accountId" id="@cdklabs/aws-data-solutions-framework.utils.Utils.validateAccountId.parameter.accountId"></a>

- *Type:* string

the account ID to validate.

---



### VpcClientAuthentication <a name="VpcClientAuthentication" id="@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication"></a>

Configuration properties for VPC client authentication.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.sasl">sasl</a></code> | SASL authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.saslTls">saslTls</a></code> | SASL + TLS authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.tls">tls</a></code> | TLS authentication. |

---

##### `sasl` <a name="sasl" id="@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.sasl"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.VpcClientAuthentication.sasl(props: SaslAuthProps)
```

SASL authentication.

###### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.sasl.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps

---

##### `saslTls` <a name="saslTls" id="@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.saslTls"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.VpcClientAuthentication.saslTls(saslTlsProps: SaslVpcTlsAuthProps)
```

SASL + TLS authentication.

###### `saslTlsProps`<sup>Required</sup> <a name="saslTlsProps" id="@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.saslTls.parameter.saslTlsProps"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.SaslVpcTlsAuthProps

---

##### `tls` <a name="tls" id="@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.tls"></a>

```typescript
import { streaming } from '@cdklabs/aws-data-solutions-framework'

streaming.VpcClientAuthentication.tls(props: VpcTlsAuthProps)
```

TLS authentication.

###### `props`<sup>Required</sup> <a name="props" id="@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.tls.parameter.props"></a>

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.VpcTlsAuthProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.property.saslProps">saslProps</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps</code> | - properties for SASL authentication. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.property.tlsProps">tlsProps</a></code> | <code>@cdklabs/aws-data-solutions-framework.streaming.VpcTlsAuthProps</code> | - properties for TLS authentication. |

---

##### `saslProps`<sup>Optional</sup> <a name="saslProps" id="@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.property.saslProps"></a>

```typescript
public readonly saslProps: SaslAuthProps;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.SaslAuthProps

properties for SASL authentication.

---

##### `tlsProps`<sup>Optional</sup> <a name="tlsProps" id="@cdklabs/aws-data-solutions-framework.streaming.VpcClientAuthentication.property.tlsProps"></a>

```typescript
public readonly tlsProps: VpcTlsAuthProps;
```

- *Type:* @cdklabs/aws-data-solutions-framework.streaming.VpcTlsAuthProps

properties for TLS authentication.

---



## Enums <a name="Enums" id="Enums"></a>

### AclOperationTypes <a name="AclOperationTypes" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.UNKNOWN">UNKNOWN</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.ANY">ANY</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.ALL">ALL</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.READ">READ</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.WRITE">WRITE</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.CREATE">CREATE</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.DELETE">DELETE</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.ALTER">ALTER</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.DESCRIBE">DESCRIBE</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.CLUSTER_ACTION">CLUSTER_ACTION</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.DESCRIBE_CONFIGS">DESCRIBE_CONFIGS</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.ALTER_CONFIGS">ALTER_CONFIGS</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.IDEMPOTENT_WRITE">IDEMPOTENT_WRITE</a></code> | *No description.* |

---

##### `UNKNOWN` <a name="UNKNOWN" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.UNKNOWN"></a>

---


##### `ANY` <a name="ANY" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.ANY"></a>

---


##### `ALL` <a name="ALL" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.ALL"></a>

---


##### `READ` <a name="READ" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.READ"></a>

---


##### `WRITE` <a name="WRITE" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.WRITE"></a>

---


##### `CREATE` <a name="CREATE" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.CREATE"></a>

---


##### `DELETE` <a name="DELETE" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.DELETE"></a>

---


##### `ALTER` <a name="ALTER" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.ALTER"></a>

---


##### `DESCRIBE` <a name="DESCRIBE" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.DESCRIBE"></a>

---


##### `CLUSTER_ACTION` <a name="CLUSTER_ACTION" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.CLUSTER_ACTION"></a>

---


##### `DESCRIBE_CONFIGS` <a name="DESCRIBE_CONFIGS" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.DESCRIBE_CONFIGS"></a>

---


##### `ALTER_CONFIGS` <a name="ALTER_CONFIGS" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.ALTER_CONFIGS"></a>

---


##### `IDEMPOTENT_WRITE` <a name="IDEMPOTENT_WRITE" id="@cdklabs/aws-data-solutions-framework.streaming.AclOperationTypes.IDEMPOTENT_WRITE"></a>

---


### AclPermissionTypes <a name="AclPermissionTypes" id="@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes.UNKNOWN">UNKNOWN</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes.ANY">ANY</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes.DENY">DENY</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes.ALLOW">ALLOW</a></code> | *No description.* |

---

##### `UNKNOWN` <a name="UNKNOWN" id="@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes.UNKNOWN"></a>

---


##### `ANY` <a name="ANY" id="@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes.ANY"></a>

---


##### `DENY` <a name="DENY" id="@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes.DENY"></a>

---


##### `ALLOW` <a name="ALLOW" id="@cdklabs/aws-data-solutions-framework.streaming.AclPermissionTypes.ALLOW"></a>

---


### AclResourceTypes <a name="AclResourceTypes" id="@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.UNKNOWN">UNKNOWN</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.ANY">ANY</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.TOPIC">TOPIC</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.GROUP">GROUP</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.CLUSTER">CLUSTER</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.TRANSACTIONAL_ID">TRANSACTIONAL_ID</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.DELEGATION_TOKEN">DELEGATION_TOKEN</a></code> | *No description.* |

---

##### `UNKNOWN` <a name="UNKNOWN" id="@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.UNKNOWN"></a>

---


##### `ANY` <a name="ANY" id="@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.ANY"></a>

---


##### `TOPIC` <a name="TOPIC" id="@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.TOPIC"></a>

---


##### `GROUP` <a name="GROUP" id="@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.GROUP"></a>

---


##### `CLUSTER` <a name="CLUSTER" id="@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.CLUSTER"></a>

---


##### `TRANSACTIONAL_ID` <a name="TRANSACTIONAL_ID" id="@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.TRANSACTIONAL_ID"></a>

---


##### `DELEGATION_TOKEN` <a name="DELEGATION_TOKEN" id="@cdklabs/aws-data-solutions-framework.streaming.AclResourceTypes.DELEGATION_TOKEN"></a>

---


### Architecture <a name="Architecture" id="@cdklabs/aws-data-solutions-framework.utils.Architecture"></a>

List of supported CPU architecture, either  X86_64 or ARM64.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Architecture.X86_64">X86_64</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.Architecture.ARM64">ARM64</a></code> | *No description.* |

---

##### `X86_64` <a name="X86_64" id="@cdklabs/aws-data-solutions-framework.utils.Architecture.X86_64"></a>

---


##### `ARM64` <a name="ARM64" id="@cdklabs/aws-data-solutions-framework.utils.Architecture.ARM64"></a>

---


### Authentication <a name="Authentication" id="@cdklabs/aws-data-solutions-framework.streaming.Authentication"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.Authentication.IAM">IAM</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.Authentication.MTLS">MTLS</a></code> | *No description.* |

---

##### `IAM` <a name="IAM" id="@cdklabs/aws-data-solutions-framework.streaming.Authentication.IAM"></a>

---


##### `MTLS` <a name="MTLS" id="@cdklabs/aws-data-solutions-framework.streaming.Authentication.MTLS"></a>

---


### ClusterMonitoringLevel <a name="ClusterMonitoringLevel" id="@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel"></a>

The level of monitoring for the MSK cluster.

> [https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html#metrics-details](https://docs.aws.amazon.com/msk/latest/developerguide/monitoring.html#metrics-details)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel.DEFAULT">DEFAULT</a></code> | Default metrics are the essential metrics to monitor. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel.PER_BROKER">PER_BROKER</a></code> | Per Broker metrics give you metrics at the broker level. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel.PER_TOPIC_PER_BROKER">PER_TOPIC_PER_BROKER</a></code> | Per Topic Per Broker metrics help you understand volume at the topic level. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel.PER_TOPIC_PER_PARTITION">PER_TOPIC_PER_PARTITION</a></code> | Per Topic Per Partition metrics help you understand consumer group lag at the topic partition level. |

---

##### `DEFAULT` <a name="DEFAULT" id="@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel.DEFAULT"></a>

Default metrics are the essential metrics to monitor.

---


##### `PER_BROKER` <a name="PER_BROKER" id="@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel.PER_BROKER"></a>

Per Broker metrics give you metrics at the broker level.

---


##### `PER_TOPIC_PER_BROKER` <a name="PER_TOPIC_PER_BROKER" id="@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel.PER_TOPIC_PER_BROKER"></a>

Per Topic Per Broker metrics help you understand volume at the topic level.

---


##### `PER_TOPIC_PER_PARTITION` <a name="PER_TOPIC_PER_PARTITION" id="@cdklabs/aws-data-solutions-framework.streaming.ClusterMonitoringLevel.PER_TOPIC_PER_PARTITION"></a>

Per Topic Per Partition metrics help you understand consumer group lag at the topic partition level.

---


### EmrContainersRuntimeVersion <a name="EmrContainersRuntimeVersion" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_5">V7_5</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_4">V7_4</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_3">V7_3</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_2">V7_2</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_1">V7_1</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_0">V7_0</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_15">V6_15</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_14">V6_14</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_13">V6_13</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_12">V6_12</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_11_1">V6_11_1</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_11">V6_11</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_10_1">V6_10_1</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_10">V6_10</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_9">V6_9</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_8">V6_8</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_7">V6_7</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_6">V6_6</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_5">V6_5</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_4">V6_4</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_3">V6_3</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_2">V6_2</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V5_33">V5_33</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V5_32">V5_32</a></code> | *No description.* |

---

##### `V7_5` <a name="V7_5" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_5"></a>

---


##### `V7_4` <a name="V7_4" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_4"></a>

---


##### `V7_3` <a name="V7_3" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_3"></a>

---


##### `V7_2` <a name="V7_2" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_2"></a>

---


##### `V7_1` <a name="V7_1" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_1"></a>

---


##### `V7_0` <a name="V7_0" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V7_0"></a>

---


##### `V6_15` <a name="V6_15" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_15"></a>

---


##### `V6_14` <a name="V6_14" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_14"></a>

---


##### `V6_13` <a name="V6_13" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_13"></a>

---


##### `V6_12` <a name="V6_12" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_12"></a>

---


##### `V6_11_1` <a name="V6_11_1" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_11_1"></a>

---


##### `V6_11` <a name="V6_11" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_11"></a>

---


##### `V6_10_1` <a name="V6_10_1" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_10_1"></a>

---


##### `V6_10` <a name="V6_10" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_10"></a>

---


##### `V6_9` <a name="V6_9" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_9"></a>

---


##### `V6_8` <a name="V6_8" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_8"></a>

---


##### `V6_7` <a name="V6_7" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_7"></a>

---


##### `V6_6` <a name="V6_6" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_6"></a>

---


##### `V6_5` <a name="V6_5" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_5"></a>

---


##### `V6_4` <a name="V6_4" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_4"></a>

---


##### `V6_3` <a name="V6_3" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_3"></a>

---


##### `V6_2` <a name="V6_2" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V6_2"></a>

---


##### `V5_33` <a name="V5_33" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V5_33"></a>

---


##### `V5_32` <a name="V5_32" id="@cdklabs/aws-data-solutions-framework.processing.EmrContainersRuntimeVersion.V5_32"></a>

---


### EmrRuntimeVersion <a name="EmrRuntimeVersion" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion"></a>

Enum defining the EMR version as defined in the [Amazon EMR documentation](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html).

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_5">V7_5</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_4">V7_4</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_3">V7_3</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_2">V7_2</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_1">V7_1</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_0">V7_0</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_15">V6_15</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_14">V6_14</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_13">V6_13</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_12">V6_12</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_11_1">V6_11_1</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_11">V6_11</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_10_1">V6_10_1</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_10">V6_10</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_9">V6_9</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_8">V6_8</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_7">V6_7</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_6">V6_6</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_5">V6_5</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_4">V6_4</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_3">V6_3</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_2">V6_2</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V5_33">V5_33</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V5_32">V5_32</a></code> | *No description.* |

---

##### `V7_5` <a name="V7_5" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_5"></a>

---


##### `V7_4` <a name="V7_4" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_4"></a>

---


##### `V7_3` <a name="V7_3" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_3"></a>

---


##### `V7_2` <a name="V7_2" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_2"></a>

---


##### `V7_1` <a name="V7_1" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_1"></a>

---


##### `V7_0` <a name="V7_0" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V7_0"></a>

---


##### `V6_15` <a name="V6_15" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_15"></a>

---


##### `V6_14` <a name="V6_14" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_14"></a>

---


##### `V6_13` <a name="V6_13" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_13"></a>

---


##### `V6_12` <a name="V6_12" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_12"></a>

---


##### `V6_11_1` <a name="V6_11_1" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_11_1"></a>

---


##### `V6_11` <a name="V6_11" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_11"></a>

---


##### `V6_10_1` <a name="V6_10_1" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_10_1"></a>

---


##### `V6_10` <a name="V6_10" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_10"></a>

---


##### `V6_9` <a name="V6_9" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_9"></a>

---


##### `V6_8` <a name="V6_8" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_8"></a>

---


##### `V6_7` <a name="V6_7" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_7"></a>

---


##### `V6_6` <a name="V6_6" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_6"></a>

---


##### `V6_5` <a name="V6_5" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_5"></a>

---


##### `V6_4` <a name="V6_4" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_4"></a>

---


##### `V6_3` <a name="V6_3" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_3"></a>

---


##### `V6_2` <a name="V6_2" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V6_2"></a>

---


##### `V5_33` <a name="V5_33" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V5_33"></a>

---


##### `V5_32` <a name="V5_32" id="@cdklabs/aws-data-solutions-framework.processing.EmrRuntimeVersion.V5_32"></a>

---


### EngineVersion <a name="EngineVersion" id="@cdklabs/aws-data-solutions-framework.consumption.EngineVersion"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.EngineVersion.AUTO">AUTO</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.EngineVersion.ATHENA_V3">ATHENA_V3</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.EngineVersion.PYSPARK_V3">PYSPARK_V3</a></code> | *No description.* |

---

##### `AUTO` <a name="AUTO" id="@cdklabs/aws-data-solutions-framework.consumption.EngineVersion.AUTO"></a>

---


##### `ATHENA_V3` <a name="ATHENA_V3" id="@cdklabs/aws-data-solutions-framework.consumption.EngineVersion.ATHENA_V3"></a>

---


##### `PYSPARK_V3` <a name="PYSPARK_V3" id="@cdklabs/aws-data-solutions-framework.consumption.EngineVersion.PYSPARK_V3"></a>

---


### KafkaClientLogLevel <a name="KafkaClientLogLevel" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel"></a>

The CDK Custom resources uses KafkaJs.

This enum allow you to set the log level

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel.WARN">WARN</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel.DEBUG">DEBUG</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel.INFO">INFO</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel.ERROR">ERROR</a></code> | *No description.* |

---

##### `WARN` <a name="WARN" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel.WARN"></a>

---


##### `DEBUG` <a name="DEBUG" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel.DEBUG"></a>

---


##### `INFO` <a name="INFO" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel.INFO"></a>

---


##### `ERROR` <a name="ERROR" id="@cdklabs/aws-data-solutions-framework.streaming.KafkaClientLogLevel.ERROR"></a>

---


### KarpenterVersion <a name="KarpenterVersion" id="@cdklabs/aws-data-solutions-framework.processing.KarpenterVersion"></a>

The list of supported Karpenter versions as defined [here](https://github.com/aws/karpenter/releases) At this time only v0.37.0 is supported.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.KarpenterVersion.V1_0_1">V1_0_1</a></code> | *No description.* |

---

##### `V1_0_1` <a name="V1_0_1" id="@cdklabs/aws-data-solutions-framework.processing.KarpenterVersion.V1_0_1"></a>

---


### MskClusterType <a name="MskClusterType" id="@cdklabs/aws-data-solutions-framework.streaming.MskClusterType"></a>

Enum for MSK cluster types.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskClusterType.PROVISIONED">PROVISIONED</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.MskClusterType.SERVERLESS">SERVERLESS</a></code> | *No description.* |

---

##### `PROVISIONED` <a name="PROVISIONED" id="@cdklabs/aws-data-solutions-framework.streaming.MskClusterType.PROVISIONED"></a>

---


##### `SERVERLESS` <a name="SERVERLESS" id="@cdklabs/aws-data-solutions-framework.streaming.MskClusterType.SERVERLESS"></a>

---


### OpenSearchClusterType <a name="OpenSearchClusterType" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterType.PROVISIONED">PROVISIONED</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterType.SERVERLESS">SERVERLESS</a></code> | *No description.* |

---

##### `PROVISIONED` <a name="PROVISIONED" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterType.PROVISIONED"></a>

---


##### `SERVERLESS` <a name="SERVERLESS" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchClusterType.SERVERLESS"></a>

---


### OpenSearchNodes <a name="OpenSearchNodes" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchNodes"></a>

Default Node Instances for OpenSearch cluster.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchNodes.DATA_NODE_INSTANCE_DEFAULT">DATA_NODE_INSTANCE_DEFAULT</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchNodes.MASTER_NODE_INSTANCE_DEFAULT">MASTER_NODE_INSTANCE_DEFAULT</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.OpenSearchNodes.WARM_NODE_INSTANCE_DEFAULT">WARM_NODE_INSTANCE_DEFAULT</a></code> | *No description.* |

---

##### `DATA_NODE_INSTANCE_DEFAULT` <a name="DATA_NODE_INSTANCE_DEFAULT" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchNodes.DATA_NODE_INSTANCE_DEFAULT"></a>

---


##### `MASTER_NODE_INSTANCE_DEFAULT` <a name="MASTER_NODE_INSTANCE_DEFAULT" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchNodes.MASTER_NODE_INSTANCE_DEFAULT"></a>

---


##### `WARM_NODE_INSTANCE_DEFAULT` <a name="WARM_NODE_INSTANCE_DEFAULT" id="@cdklabs/aws-data-solutions-framework.consumption.OpenSearchNodes.WARM_NODE_INSTANCE_DEFAULT"></a>

---


### PermissionModel <a name="PermissionModel" id="@cdklabs/aws-data-solutions-framework.utils.PermissionModel"></a>

List of supported permissions model.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.PermissionModel.LAKE_FORMATION">LAKE_FORMATION</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.PermissionModel.HYBRID">HYBRID</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.utils.PermissionModel.IAM">IAM</a></code> | *No description.* |

---

##### `LAKE_FORMATION` <a name="LAKE_FORMATION" id="@cdklabs/aws-data-solutions-framework.utils.PermissionModel.LAKE_FORMATION"></a>

---


##### `HYBRID` <a name="HYBRID" id="@cdklabs/aws-data-solutions-framework.utils.PermissionModel.HYBRID"></a>

---


##### `IAM` <a name="IAM" id="@cdklabs/aws-data-solutions-framework.utils.PermissionModel.IAM"></a>

---


### RedshiftServerlessNamespaceLogExport <a name="RedshiftServerlessNamespaceLogExport" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceLogExport"></a>

Namespace log export types.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceLogExport.USER_LOG">USER_LOG</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceLogExport.CONNECTION_LOG">CONNECTION_LOG</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceLogExport.USER_ACTIVITY_LOG">USER_ACTIVITY_LOG</a></code> | *No description.* |

---

##### `USER_LOG` <a name="USER_LOG" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceLogExport.USER_LOG"></a>

---


##### `CONNECTION_LOG` <a name="CONNECTION_LOG" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceLogExport.CONNECTION_LOG"></a>

---


##### `USER_ACTIVITY_LOG` <a name="USER_ACTIVITY_LOG" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessNamespaceLogExport.USER_ACTIVITY_LOG"></a>

---


### RedshiftServerlessWorkgroupConfigParamKey <a name="RedshiftServerlessWorkgroupConfigParamKey" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.AUTO_MV">AUTO_MV</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.DATESTYLE">DATESTYLE</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.ENABLE_USER_ACTIVITY_LOGGING">ENABLE_USER_ACTIVITY_LOGGING</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.QUERY_GROUP">QUERY_GROUP</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.SEARCH_PATH">SEARCH_PATH</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.MAX_QUERY_EXECUTION_TIME">MAX_QUERY_EXECUTION_TIME</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.REQUIRE_SSL">REQUIRE_SSL</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.USE_FIPS_SSL">USE_FIPS_SSL</a></code> | *No description.* |

---

##### `AUTO_MV` <a name="AUTO_MV" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.AUTO_MV"></a>

---


##### `DATESTYLE` <a name="DATESTYLE" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.DATESTYLE"></a>

---


##### `ENABLE_USER_ACTIVITY_LOGGING` <a name="ENABLE_USER_ACTIVITY_LOGGING" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.ENABLE_USER_ACTIVITY_LOGGING"></a>

---


##### `QUERY_GROUP` <a name="QUERY_GROUP" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.QUERY_GROUP"></a>

---


##### `SEARCH_PATH` <a name="SEARCH_PATH" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.SEARCH_PATH"></a>

---


##### `MAX_QUERY_EXECUTION_TIME` <a name="MAX_QUERY_EXECUTION_TIME" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.MAX_QUERY_EXECUTION_TIME"></a>

---


##### `REQUIRE_SSL` <a name="REQUIRE_SSL" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.REQUIRE_SSL"></a>

---


##### `USE_FIPS_SSL` <a name="USE_FIPS_SSL" id="@cdklabs/aws-data-solutions-framework.consumption.RedshiftServerlessWorkgroupConfigParamKey.USE_FIPS_SSL"></a>

---


### ResourcePatternTypes <a name="ResourcePatternTypes" id="@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.UNKNOWN">UNKNOWN</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.ANY">ANY</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.MATCH">MATCH</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.LITERAL">LITERAL</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.PREFIXED">PREFIXED</a></code> | *No description.* |

---

##### `UNKNOWN` <a name="UNKNOWN" id="@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.UNKNOWN"></a>

---


##### `ANY` <a name="ANY" id="@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.ANY"></a>

---


##### `MATCH` <a name="MATCH" id="@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.MATCH"></a>

---


##### `LITERAL` <a name="LITERAL" id="@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.LITERAL"></a>

---


##### `PREFIXED` <a name="PREFIXED" id="@cdklabs/aws-data-solutions-framework.streaming.ResourcePatternTypes.PREFIXED"></a>

---


### SparkImage <a name="SparkImage" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage"></a>

The list of supported Spark images to use in the SparkCICDPipeline.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_5">EMR_7_5</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_4">EMR_7_4</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_3">EMR_7_3</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_2">EMR_7_2</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_1">EMR_7_1</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_0">EMR_7_0</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_15">EMR_6_15</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_14">EMR_6_14</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_13">EMR_6_13</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_12">EMR_6_12</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_11">EMR_6_11</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_10">EMR_6_10</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_9">EMR_6_9</a></code> | *No description.* |

---

##### `EMR_7_5` <a name="EMR_7_5" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_5"></a>

---


##### `EMR_7_4` <a name="EMR_7_4" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_4"></a>

---


##### `EMR_7_3` <a name="EMR_7_3" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_3"></a>

---


##### `EMR_7_2` <a name="EMR_7_2" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_2"></a>

---


##### `EMR_7_1` <a name="EMR_7_1" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_1"></a>

---


##### `EMR_7_0` <a name="EMR_7_0" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_7_0"></a>

---


##### `EMR_6_15` <a name="EMR_6_15" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_15"></a>

---


##### `EMR_6_14` <a name="EMR_6_14" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_14"></a>

---


##### `EMR_6_13` <a name="EMR_6_13" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_13"></a>

---


##### `EMR_6_12` <a name="EMR_6_12" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_12"></a>

---


##### `EMR_6_11` <a name="EMR_6_11" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_11"></a>

---


##### `EMR_6_10` <a name="EMR_6_10" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_10"></a>

---


##### `EMR_6_9` <a name="EMR_6_9" id="@cdklabs/aws-data-solutions-framework.processing.SparkImage.EMR_6_9"></a>

---


### State <a name="State" id="@cdklabs/aws-data-solutions-framework.consumption.State"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.State.ENABLED">ENABLED</a></code> | *No description.* |
| <code><a href="#@cdklabs/aws-data-solutions-framework.consumption.State.DISABLED">DISABLED</a></code> | *No description.* |

---

##### `ENABLED` <a name="ENABLED" id="@cdklabs/aws-data-solutions-framework.consumption.State.ENABLED"></a>

---


##### `DISABLED` <a name="DISABLED" id="@cdklabs/aws-data-solutions-framework.consumption.State.DISABLED"></a>

---


### StorageMode <a name="StorageMode" id="@cdklabs/aws-data-solutions-framework.streaming.StorageMode"></a>

The storage mode for the cluster brokers.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.StorageMode.LOCAL">LOCAL</a></code> | Local storage mode utilizes network attached EBS storage. |
| <code><a href="#@cdklabs/aws-data-solutions-framework.streaming.StorageMode.TIERED">TIERED</a></code> | Tiered storage mode utilizes EBS storage and Tiered storage. |

---

##### `LOCAL` <a name="LOCAL" id="@cdklabs/aws-data-solutions-framework.streaming.StorageMode.LOCAL"></a>

Local storage mode utilizes network attached EBS storage.

---


##### `TIERED` <a name="TIERED" id="@cdklabs/aws-data-solutions-framework.streaming.StorageMode.TIERED"></a>

Tiered storage mode utilizes EBS storage and Tiered storage.

---


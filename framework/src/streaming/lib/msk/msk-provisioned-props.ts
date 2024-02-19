// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0


// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { RemovalPolicy } from 'aws-cdk-lib';
import { ISecurityGroup, Vpc, SubnetSelection } from 'aws-cdk-lib/aws-ec2';
import { AclOperationTypes, AclPermissionTypes, AclResourceTypes, BrokerLogging, ClientAuthentication, ClusterConfigurationInfo, EbsStorageInfo, KafkaVersion, MonitoringConfiguration, MskBrokerInstanceType, StorageMode } from './msk-provisioned-props-utils';

export interface MskProvisionedProps {
  /**
      * The physical name of the cluster.
      */
  readonly clusterName: string;

  /**
      * The version of Apache Kafka.
      */
  readonly kafkaVersion: KafkaVersion;

  /**
      * Number of Apache Kafka brokers deployed in each Availability Zone.
      *
      * @default 1
      */
  readonly numberOfBrokerNodes?: number;

  /**
      * Defines the virtual networking environment for this cluster.
      * Must have at least 2 subnets in two different AZs.
      */
  readonly vpc?: Vpc;

  /**
      * Where to place the nodes within the VPC.
      * Amazon MSK distributes the broker nodes evenly across the subnets that you specify.
      * The subnets that you specify must be in distinct Availability Zones.
      * Client subnets can't be in Availability Zone us-east-1e.
      *
      * @default - the Vpc default strategy if not specified.
      */
  readonly vpcSubnets?: SubnetSelection;

  /**
      * The EC2 instance type that you want Amazon MSK to use when it creates your brokers.
      *
      * @see https://docs.aws.amazon.com/msk/latest/developerguide/msk-create-cluster.html#broker-instance-types
      * @default kafka.m5.large
      */
  readonly mskBrokerinstanceType?: MskBrokerInstanceType;

  /**
      * The AWS security groups to associate with the elastic network interfaces in order to specify who can
      * connect to and communicate with the Amazon MSK cluster.
      *
      * @default - create new security group
      */
  readonly securityGroups?: ISecurityGroup[];

  /**
      * Information about storage volumes attached to MSK broker nodes.
      *
      * @default - 100 GiB EBS volume
      */
  readonly ebsStorageInfo?: EbsStorageInfo;

  /**
      * This controls storage mode for supported storage tiers.
      *
      * @default - StorageMode.LOCAL
      * @see https://docs.aws.amazon.com/msk/latest/developerguide/msk-tiered-storage.html
      */
  readonly storageMode?: StorageMode;

  /**
      * The Amazon MSK configuration to use for the cluster.
      *
      * @default - none
      */
  readonly configurationInfo?: ClusterConfigurationInfo;

  /**
      * Cluster monitoring configuration.
      *
      * @default - DEFAULT monitoring level
      */
  readonly monitoring?: MonitoringConfiguration;

  /**
      * Configure your MSK cluster to send broker logs to different destination types.
      *
      * @default - disabled
      */
  readonly logging?: BrokerLogging;

  /**
      * Configuration properties for client authentication.
      * MSK supports using private TLS certificates or SASL/SCRAM to authenticate the identity of clients.
      *
      * @default - IAM is used
      */
  readonly clientAuthentication?: ClientAuthentication;

  /**
      * What to do when this resource is deleted from a stack.
      *
      * @default RemovalPolicy.RETAIN
      */
  readonly removalPolicy?: RemovalPolicy;
}


export interface KafkaAclProp {
  readonly resourceType: AclResourceTypes;
  readonly resourceName: string;
  readonly principal?: string;
  readonly host?: string;
  readonly operation: AclOperationTypes;
  readonly permissionType: AclPermissionTypes;
}



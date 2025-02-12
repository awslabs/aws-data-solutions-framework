// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { IRole } from 'aws-cdk-lib/aws-iam';
import { EmrContainersRuntimeVersion } from '../../emr-releases';

/**
* The properties for the EMR Managed Endpoint to create.
*/
export interface SparkEmrContainersRuntimeInteractiveSessionProps {
  /**
   * The name of the EMR managed endpoint
   */
  readonly managedEndpointName: string;
  /**
   * The Id of the Amazon EMR virtual cluster containing the managed endpoint
   */
  readonly virtualClusterId: string;
  /**
   * The Amazon IAM role used as the execution role, this role must provide access to all the AWS resource a user will interact with
   * These can be S3, DynamoDB, Glue Catalog
   */
  readonly executionRole: IRole;
  /**
   * The Amazon EMR version to use
   * @default - The [default Amazon EMR version]{@link EmrEksCluster.DEFAULT_EMR_VERSION}
   */
  readonly emrOnEksVersion?: EmrContainersRuntimeVersion;
  /**
   * The JSON object to [override the configuration of EMR on EKS managed endpoint]{@link https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/create-managed-endpoint.html}.
   * @default - Configuration associated with the [default nodegroup for notebook]{@link EmrEksNodegroup.NOTEBOOK_EXECUTOR}
   */
  readonly configurationOverrides?: any;

}

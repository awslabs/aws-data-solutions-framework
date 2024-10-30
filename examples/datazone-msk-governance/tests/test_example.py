# Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
# SPDX-License-Identifier: Apache-2.0

import pytest
from aws_cdk import App, Aspects
from aws_cdk.assertions import Template, Annotations, Match
from cdk_nag import NagSuppressions, AwsSolutionsChecks
from constructs import Construct, Node
from stacks.main import StreamingGovernanceStack
from tests.nag_suppressions import suppress_nag

@pytest.fixture(scope='module')
def results():
    app = App()
    stack = StreamingGovernanceStack(app, "my-stack-test", domain_id='2222222', datazone_portal_role_name='1111111')
    Aspects.of(stack).add(AwsSolutionsChecks(verbose=True))

    # We suppress NAGs for the DSF construct because they are already tested in the framework
    suppress_nag(stack, 'DataZoneMskAssetType')
    suppress_nag(stack, 'CentralAuthorizer')
    suppress_nag(stack, 'EnvironmentAuthorizer')
    suppress_nag(stack, 'ProducerTopic')
    suppress_nag(stack, 'ProducerGsrDataSource')

    # NagSuppressions.add_resource_suppressions_by_path(stack,
    #     "/my-stack-test/LakeRole/DefaultPolicy/Resource",
    #     [
    #         {'id':'AwsSolutions-IAM5', 'reason':'Permission created by native CDK function "grant_read()"' },
    #     ]
    # )

    # NagSuppressions.add_resource_suppressions_by_path(stack,
    #     "/my-stack-test/LogRetentionaae0aa3c5b4d4f87b02d85b201efdd8a/ServiceRole/DefaultPolicy/Resource",
    #     [
    #         {'id':'AwsSolutions-IAM5', 'reason':'Resource wildcard for Log Retention permission is setup by the CDK custom resource provider framework and can\'t be changed' },
    #     ]
    # )

    template = Template.from_stack(stack)
    results = (stack, template)
    yield results


def test_nag_warnings(results):
    warnings = Annotations.from_stack(results[0]).find_warning('*', Match.string_like_regexp('AwsSolutions-.*'))
    for warning in warnings:
        print(warning)
    assert(len(warnings) == 0)


def test_nag_errors(results):
    errors = Annotations.from_stack(results[0]).find_error('*', Match.string_like_regexp('AwsSolutions-.*'))
    for error in errors:
        print(error)
    assert(len(errors) == 0)
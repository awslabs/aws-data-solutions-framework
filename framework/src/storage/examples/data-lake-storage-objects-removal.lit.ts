import * as cdk from 'aws-cdk-lib';
import { RemovalPolicy } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dsf from '../../index';

class ExampleDataLakeStorageObjectRemovalStack extends cdk.Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    /// !show
    // Set context value for global data removal policy
    this.node.setContext('@aws-data-solutions-framework/removeDataOnDestroy', true);
    /// !hide

    /// You will also need to set removal policy for the `DataLakeStorage` construct:
    /// !show
    new dsf.storage.DataLakeStorage(this, 'DataLakeStorage', {
        removalPolicy: RemovalPolicy.DESTROY
    });
    /// !hide
  }
}

const app = new cdk.App();
new ExampleDataLakeStorageObjectRemovalStack(app, 'ExampleDataLakeStorageObjectRemovalStack');
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as dsf from '../../index';


class ExampleOpenSearchApiStack extends cdk.Stack {

  constructor(scope: Construct, id: string , props:cdk.StackProps) {

    super(scope, id, props);
    /// !show
    const osCluster = new dsf.consumption.OpenSearchCluster(this, 'MyOpenSearchCluster',{
      domainName:"mycluster",
      samlEntityId:'<IdpIdentityId>',
      samlMetadataContent:'<IdpOpenSearchApplicationMetadataXml>',
      samlMasterBackendRole:'<IAMIdentityCenterAdminGroupId>',
      deployInVpc:false,
      dataNodeInstanceType:'t3.small.search',
      dataNodeInstanceCount:1,
      masterNodeInstanceCount:0
    });
    /// !hide
    //osCluster.addRoleMapping('DashboardOsUser', 'dashboards_user',['<IAMIdentityCenterDashboardUsersGroupId>']);
    //osCluster.addRoleMapping('ReadAllOsRole','readall',['<IAMIdentityCenterDashboardUsersGroupId>']);
    osCluster.callOpenSearchApi('CreateIndexTemplate','_index_template/movies',
    {
      "index_patterns": [
        "movies-*"
      ],
      "template": {
        "settings": {
          "index": {
            "number_of_shards": 1,
            "number_of_replicas": 0
          }
        },
        "mappings": {
          "properties": {
            "title": {
              "type": "text"
            },
            "year": {
              "type": "integer"
            }
          }
        }
      }
    });
    osCluster.callOpenSearchApi('AddData1', 'movies-01/_doc',{"title": "Rush", "year": 2013}, 'POST');
    osCluster.callOpenSearchApi('AddData2', 'movies-01/_doc',{"title": "Barbie", "year": 2023}, 'POST');
    osCluster.callOpenSearchApi('AddData3', 'movies-01/_doc',{"title": "Toy Story", "year": 2014}, 'POST');
    osCluster.callOpenSearchApi('AddData4', 'movies-01/_doc',{"title": "The Little Mermaid", "year": 2015}, 'POST');
  }
}

const app = new cdk.App();
new ExampleOpenSearchApiStack(app, 'ExampleOpenSearchApiStack', { env: {region:'us-east-1'} });
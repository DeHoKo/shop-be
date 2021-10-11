import type { AWS } from '@serverless/typescript';

import importProductsFile from '@functions/importProductsFile';
import importFileParser from '@functions/importFileParser';
import catalogBatchProcess from '@functions/catalogBatchProcess';

const serverlessConfiguration: AWS = {
  service: 'import-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'eu-west-1',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    iamRoleStatements: [
      {
        Effect: 'Allow',
        Action: 's3:ListBucket',
        Resource: ['arn:aws:s3:::${self:provider.environment.SAVED_AND_PARSED_CSV_BUCKET_NAME}']
      },
      {
        Effect: 'Allow',
        Action: 's3:*',
        Resource: ['arn:aws:s3:::${self:provider.environment.SAVED_AND_PARSED_CSV_BUCKET_NAME}/*']
      },
      {
        Effect: 'Allow',
        Action: 'sqs:*',
        Resource: [
          {'Fn::GetAtt': ['catalogItemsQueue', 'Arn']},
        ]
      },
      {
        Effect: 'Allow',
        Action: 'sns:*',
        Resource: [
          {'Ref': 'createProductTopic'},
        ]
      }
    ],
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      SAVED_AND_PARSED_CSV_BUCKET_NAME: 'rs-school-task5-dehoko-bucket',
      CATALOG_ITEMS_SQS_NAME: 'catalog-items-queue',
      POST_PRODUCT_URL: 'https://bxz7pu29qg.execute-api.eu-west-1.amazonaws.com/prod/products',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { importProductsFile, importFileParser, catalogBatchProcess },
  resources: {
    Resources: {
      savedAndParsedCSV: {
        Type: 'AWS::S3::Bucket',
        Properties: {
          BucketName: '${self:provider.environment.SAVED_AND_PARSED_CSV_BUCKET_NAME}',
        }
      },
      catalogItemsQueue: {
        Type: 'AWS::SQS::Queue',
        // Properties: {
        //   QueueName: '${self:provider.environment.CATALOG_ITEMS_SQS_NAME}',
        // }
      },
      createProductTopic: {
        Type: 'AWS::SNS::Topic',
      },
      snsSubscription: {
        Type: 'AWS::SNS::Subscription',
        Properties: {
          Endpoint: 'zenkovsk@gmail.com',
          Protocol: 'email',
          TopicArn: {
            Ref: 'createProductTopic'
          }
        }

      }
    }
  }
};

module.exports = serverlessConfiguration;

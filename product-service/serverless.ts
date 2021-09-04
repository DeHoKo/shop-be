import type { AWS } from '@serverless/typescript';
import dotenv from 'dotenv';

import getProductsList from '@functions/get-products-list';
import getProductsById from '@functions/get-products-by-id';

dotenv.config();

const serverlessConfiguration: AWS = {
  service: 'product-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    documentation: {
      api: {
        info: {
          description: 'Products API',
        }
      },
      models: [
        {
          name: 'GetProductByIdResponse',
          contentType: 'application/json',
          schema: {
            type: 'object',
            properties: {
              product: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string'
                  },
                  title: {
                    type: 'string'
                  },
                  imageUrl: {
                    type: 'string'
                  },
                  price: {
                    type: 'number'
                  },
                  count: {
                    type: 'number'
                  },
                  description: {
                    type: 'string'
                  },
                },
              },
            },
          },
        },
        {
          name: 'GetProductByIdNotFoundResponse',
          contentType: 'application/json',
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
              },
            },
          },
        },
        {
          name: 'GetProducts',
          contentType: 'application/json',
          schema: {
            type: 'object',
            properties: {
              products: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string'
                    },
                    title: {
                      type: 'string'
                    },
                    imageUrl: {
                      type: 'string'
                    },
                    price: {
                      type: 'number'
                    },
                    count: {
                      type: 'number'
                    },
                    description: {
                      type: 'string'
                    },
                  }
                },
              },
            },
          },
        },
      ]
    }
  },
  plugins: ['serverless-webpack', 'serverless-aws-documentation'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    region: 'eu-west-1',
    profile: 'dehoko',
    stage: 'prod',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      PG_HOST: process.env.PG_HOST,
      PR_PORT: process.env.PR_PORT,
      PG_DATABASE: process.env.PG_DATABASE,
      PG_USERNAME: process.env.PG_USERNAME,
      PG_PASSWORD: process.env.PG_PASSWORD,
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { getProductsList, getProductsById },
};

module.exports = serverlessConfiguration;

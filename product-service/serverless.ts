import type { AWS } from '@serverless/typescript';

import getProductsList from '@functions/get-products-list';
import getProductsById from '@functions/get-products-by-id';

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
                  brand: {
                    type: 'string'
                  },
                  color: {
                    type: 'string'
                  },
                  material: {
                    type: 'string'
                  },
                  weight: {
                    type: 'number'
                  },
                  handOrientation: {
                    type: 'string'
                  },
                  imageUrl: {
                    type: 'string'
                  },
                  price: {
                    type: 'number'
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
                    brand: {
                      type: 'string'
                    },
                    color: {
                      type: 'string'
                    },
                    material: {
                      type: 'string'
                    },
                    weight: {
                      type: 'number'
                    },
                    handOrientation: {
                      type: 'string'
                    },
                    imageUrl: {
                      type: 'string'
                    },
                    price: {
                      type: 'number'
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
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions: { getProductsList, getProductsById },
};

module.exports = serverlessConfiguration;

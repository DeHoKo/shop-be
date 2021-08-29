import { handlerPath } from 'src/utils/libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: '/products/{productId}',
        request: {
          parameters: {
            paths: {
              productId: true,
            }
          }
        },
        documentation: {
          description: 'Get product by id',
          pathParams: [
            {
              name: 'productId',
              description: 'Id of the product you want to get'
            }
          ],
          methodResponses: [
            {
              statusCode: '200',
              responseModels: {
                'application/json': 'GetProductByIdResponse'
              }
            },
            {
              statusCode: '404',
              responseModels: {
                'application/json': 'GetProductByIdNotFoundResponse'
              },
            },
          ],
        },
      },
    },
  ],
}

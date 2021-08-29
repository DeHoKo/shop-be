import { handlerPath } from 'src/utils/libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: '/products',
        documentation: {
          description: 'Get products',
          methodResponses: [
            {
              statusCode: '200',
              responseModels: {
                'application/json': 'GetProducts'
              }
            },
          ],
        },
      },
    },
  ],
}

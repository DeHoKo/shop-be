import { handlerPath } from '../../utils/libs/handlerResolver';
import schema from './schema';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: '/products',
        cors: true,
        request: {
          schema: {
            'application/json': schema
          },
        },
      },
    },
  ],
};
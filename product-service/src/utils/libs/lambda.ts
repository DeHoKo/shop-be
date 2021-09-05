import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';
import middyHttpErrorHandler from '@middy/http-error-handler';
import middyHttpCors from '@middy/http-cors';
import inputOutputLogger from '@middy/input-output-logger';

export const middyfy = (handler) => {
  return middy(handler)
    .use(middyJsonBodyParser())
    .use(middyHttpErrorHandler())
    .use(middyHttpCors({
      credentials: true,
    }))
    .use(inputOutputLogger());
}

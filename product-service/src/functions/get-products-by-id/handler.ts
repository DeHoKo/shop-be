import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from 'src/utils/libs/apiGateway';
import { formatJSONResponse } from 'src/utils/libs/apiGateway';
import { middyfy } from 'src/utils/libs/lambda';
import Products from '../data-mocks/products';
import { HttpStatusCode } from '@my-types/index';

const hello: ValidatedEventAPIGatewayProxyEvent<undefined> = async (event) => {
  // await is here
  await doYouReallyWantAwait();

  const productId = event?.pathParameters?.productId;
  const product = Products.find(p => p.id === productId);
  if (product) {
    return formatJSONResponse({
      product: product,
    });
  } else {
    return formatJSONResponse({
      message: 'Product was not found',
    },
    HttpStatusCode.NOT_FOUND
    );
  }
  
};

const doYouReallyWantAwait = async () => Promise.resolve();

export const main = middyfy(hello);

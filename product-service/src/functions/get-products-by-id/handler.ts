import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../utils/libs/apiGateway';
import { middyfy } from '../../utils/libs/lambda';
import Products from '../data-mocks/products';
import { HttpStatusCode } from '../../utils/types';

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<undefined> = async (event) => {
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

export const main = middyfy(getProductsById);

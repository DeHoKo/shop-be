import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../utils/libs/apiGateway';
import { middyfy } from '../../utils/libs/lambda';
import Products from '../data-mocks/products';
import { HttpStatusCode } from '../../utils/types';
import httpError from 'http-errors';

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<undefined> = async (event) => {
  const productId = event?.pathParameters?.productId;
  const product = Products.find(p => p.id === productId);
  if (!product) {
    throw httpError(HttpStatusCode.NOT_FOUND, 'Product was not found');
  }
  return formatJSONResponse({
    product: product,
  });
};

export const main = middyfy(getProductsById);

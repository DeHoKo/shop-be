import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../utils/libs/apiGateway';
import { middyfy } from '../../utils/libs/lambda';
import { HttpStatusCode } from '../../utils/types';
import httpError from 'http-errors';
import { Client, dbOptions } from '../../utils/libs/db';
import { createSelectProductByIdQuery } from '../../utils/queries';

export const getProductsById: ValidatedEventAPIGatewayProxyEvent<undefined> = async (event) => {
  const productId = event?.pathParameters?.productId;
  const client = new Client(dbOptions);
  await client.connect();
  try {
    const { rows: products } = await client.query(createSelectProductByIdQuery(productId));
    const product = products[0];
    if (!product) {
      throw httpError(HttpStatusCode.NOT_FOUND, 'Product was not found');
    }
    return formatJSONResponse({
      product: product,
    });
  } catch(e) {
    throw Error(`Something went wrong. Error ${e}`);
  } finally {
    client.end();
  };
};

export const main = middyfy(getProductsById);

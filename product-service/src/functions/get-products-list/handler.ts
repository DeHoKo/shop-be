import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../utils/libs/apiGateway';
import { middyfy } from '../../utils/libs/lambda';
import { Client, dbOptions } from '../../utils/libs/db';
import { createSelectAllProductsQuery } from '../../utils/queries';

export const getProducts: ValidatedEventAPIGatewayProxyEvent<undefined> = async () => {
  const client = new Client(dbOptions);
  await client.connect();
  try {
    const { rows: products } = await client.query(createSelectAllProductsQuery());
    return formatJSONResponse({
      products,
    });
  } catch(e) {
    throw Error(`Something went wrong. Error ${e}`);
  } finally {
    client.end();
  };
}

export const main = middyfy(getProducts);

import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../utils/libs/apiGateway';
import { middyfy } from '../../utils/libs/lambda';
import { Client, dbOptions } from '../../utils/libs/db';
import { createInsertProductQuery, createInsertStockQuery } from '../../utils/queries';
import { Product } from '../../utils/types';

export const getProducts: ValidatedEventAPIGatewayProxyEvent<undefined> = async (event) => {
  const { title, description, image_url, price, count } = event?.body as Product;
  const client = new Client(dbOptions);
  await client.connect();
  try {
    const response = await client.query(createInsertProductQuery({
      title,
      description,
      image_url,
      price
    }));
    const { id } = response.rows[0];
    await client.query(createInsertStockQuery(id, count));
    return formatJSONResponse({
      id,
      title,
      description,
      image_url,
      price,
      count
    });
  } catch(e) {
    throw Error(`Something went wrong. Error ${e}`);
  } finally {
    client.end();
  };
}

export const main = middyfy(getProducts);

import 'source-map-support/register';

import type { ValidatedEventAPIGatewayProxyEvent } from 'src/utils/libs/apiGateway';
import { formatJSONResponse } from 'src/utils/libs/apiGateway';
import { middyfy } from 'src/utils/libs/lambda';
import Products from '../data-mocks/products';

const hello: ValidatedEventAPIGatewayProxyEvent<undefined> = async (event) => {
  await doYouReallyWantAwait();
  return formatJSONResponse({
    products: Products,
  });
}

const doYouReallyWantAwait = async () => Promise.resolve();

export const main = middyfy(hello);

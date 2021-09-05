import 'source-map-support/register';

import { formatJSONResponse, ValidatedEventAPIGatewayProxyEvent } from '../../utils/libs/apiGateway';
import { middyfy } from '../../utils/libs/lambda';
import Products from '../data-mocks/products';

export const getProducts: ValidatedEventAPIGatewayProxyEvent<undefined> = async () => {
  await doYouReallyWantAwait();
  return formatJSONResponse({
    products: Products,
  });
}

const doYouReallyWantAwait = async () => Promise.resolve();

export const main = middyfy(getProducts);

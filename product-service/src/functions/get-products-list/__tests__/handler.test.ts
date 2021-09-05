import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import { getProducts } from '../handler';
import Products from '../../data-mocks/products';

describe('Tests for get products', () => {
  it('should return a list of products', async () => {
    const returnedValue = {
      statusCode: 200,
      body: JSON.stringify({ 
        products: Products 
      }),
    };
    const response = await getProducts({} as APIGatewayProxyEvent, {} as Context, {} as Callback);
    expect(response).toEqual(returnedValue);
  });
});

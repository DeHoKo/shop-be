import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
import { getProductsById } from '../handler';
import Products from '../../data-mocks/products';

describe('Tests for get product by id', () => {
  it('should return a product when the existing id is provided', async () => {
    const eventObject = {
      pathParameters: {
        productId: '66236ec1-c794-4e2e-a195-dd719b47e55b',
      }
    } as unknown as APIGatewayProxyEvent;
    const returnedProduct = Products.find(p => p.id === '66236ec1-c794-4e2e-a195-dd719b47e55b');
    const returnedValue = {
      statusCode: 200,
      body: JSON.stringify({ 
        product: returnedProduct,
      }),
    };
    const response = await getProductsById(eventObject, {} as Context, {} as Callback); 
    expect(response).toEqual(returnedValue);
  });

  it('should return an error when the id doesn\'t exist', async () => {
    const eventObject = {
      pathParameters: {
        productId: '111-111-111-111',
      }
    } as unknown as APIGatewayProxyEvent;
    const returnedValue = {
      statusCode: 404,
      body: JSON.stringify({ 
        message: 'Product was not found',
      }),
    };
    const response = await getProductsById(eventObject, {} as Context, {} as Callback);
    expect(response).toEqual(returnedValue);
  })
});

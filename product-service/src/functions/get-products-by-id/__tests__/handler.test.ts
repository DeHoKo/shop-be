// TODO: with real DB tests are broken. Fix them

// import { APIGatewayProxyEvent, Context, Callback } from 'aws-lambda';
// import { getProductsById } from '../handler';
// import Products from '../../data-mocks/products';
// import { HttpStatusCode } from '../../../utils/types';

// // TODO: DB should be mocked. Implement it in the next task

// describe('Tests for get product by id', () => {
//   it('should return a product when the existing id is provided', async () => {
//     const eventObject = {
//       pathParameters: {
//         productId: '66236ec1-c794-4e2e-a195-dd719b47e55b',
//       }
//     } as unknown as APIGatewayProxyEvent;
//     const returnedProduct = Products.find(p => p.id === '66236ec1-c794-4e2e-a195-dd719b47e55b');
//     const returnedValue = {
//       statusCode: 200,
//       body: JSON.stringify({ 
//         product: returnedProduct,
//       }),
//     };
//     const response = await getProductsById(eventObject, {} as Context, {} as Callback); 
//     expect(response).toEqual(returnedValue);
//   });

//   it('should return an error when the id doesn\'t exist', async () => {
//     const eventObject = {
//       pathParameters: {
//         productId: '111-111-111-111',
//       }
//     } as unknown as APIGatewayProxyEvent;
//     await expect(getProductsById(eventObject, {} as Context, {} as Callback))
//       .rejects
//       .toMatchObject({
//         statusCode: HttpStatusCode.NOT_FOUND,
//         message: 'Product was not found',
//       });
//   })
// });

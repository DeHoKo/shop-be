import type { APIGatewayProxyEvent, APIGatewayProxyResult, Handler } from "aws-lambda";
import type { FromSchema } from "json-schema-to-ts";
import { HttpStatusCode } from '../types';

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> };
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>;

export const formatJSONResponse = (
  response: Record<string, unknown>,
  statusCode: HttpStatusCode = HttpStatusCode.OK
  ) => {
    return {
      statusCode,
      body: JSON.stringify(response)
    }
}

import 'source-map-support/register';

import { middyfy } from '@libs/lambda';

import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

const importProductsFile = async (event) => {
  const { name } = event.queryStringParameters;
  const bucket = process.env.SAVED_AND_PARSED_CSV_BUCKET_NAME;
  const catalogPath = `uploaded/${name}`;

  const params = {
    Bucket: bucket,
    Key: catalogPath,
    ContentType: 'text/csv'
  };

  const client = new S3Client({ region: 'eu-west-1' });
  const command = new PutObjectCommand(params);
  const url = await getSignedUrl(client, command, { expiresIn: 60 })
  
  return {
    statusCode: 200,
    body: url,
  };
}

export const main = middyfy(importProductsFile);

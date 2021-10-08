import 'source-map-support/register';

import { middyfy } from '@libs/lambda';

import {
  S3Client,
  GetObjectCommand,
  CopyObjectCommand,
  DeleteObjectCommand
} from '@aws-sdk/client-s3';
import * as csv from 'csv-parser';
import { S3Event } from 'aws-lambda';

const importFileParser = async (event: S3Event) => {
  const BUCKET = process.env.SAVED_AND_PARSED_CSV_BUCKET_NAME;
  const client = new S3Client({ region: 'eu-west-1' });

  for (const record of event.Records) {
    const response = await getObjectFromS3(client, BUCKET, record.s3.object.key);
  
    response.Body
      .pipe(csv())
      .on('data', (data) => {
        console.log(data);
      })
      .on('end', async () => {
        console.log(`Copy from ${BUCKET}/${record.s3.object.key}`);
      });

    await copyObjectFromS3ToS3(client, BUCKET, record.s3.object.key);
    await deleteObjectFromS3(client, BUCKET, record.s3.object.key);

    console.log(`Moved into ${BUCKET}/${record.s3.object.key.replace('uploaded', 'parsed')}`);
  }

  return {
    statusCode: 200,
  };
}

async function getObjectFromS3(client: S3Client, Bucket, Key) {
  const getParams = {
    Bucket,
    Key,
  };
  const getCommand = new GetObjectCommand(getParams);
  return await client.send(getCommand);
}

async function copyObjectFromS3ToS3(client: S3Client, Bucket, Key) {
  const copyParams = {
    Bucket,
    CopySource: `${Bucket}/${Key}`,
    Key: Key.replace('uploaded', 'parsed')
  };

  const copyCommand = new CopyObjectCommand(copyParams);
  return await client.send(copyCommand);
}

async function deleteObjectFromS3(client: S3Client, Bucket, Key) {
  const deleteParams = {
    Bucket,
    Key
  };

  const deleteCommand = new DeleteObjectCommand(deleteParams);
  await client.send(deleteCommand);
}

export const main = middyfy(importFileParser);

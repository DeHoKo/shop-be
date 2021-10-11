import 'source-map-support/register';

import { middyfy } from '@libs/lambda';
import { SQSEvent } from 'aws-lambda';
import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

import fetch from 'node-fetch';

const catalogBatchProcess = async (event: SQSEvent) => {
  const postProductUrl = process.env.POST_PRODUCT_URL;
  for (const record of event.Records) {
    console.log(`SQS record: ${record.body}`);
    await fetch(postProductUrl, {
      method: 'post',
      body: record.body,
      headers: {'Content-Type': 'application/json'}
    });
  }

  const client = new SNSClient({ region: 'eu-west-1' });
  const command = new PublishCommand({
    TopicArn: 'arn:aws:sns:eu-west-1:605517339102:import-service-dev-createProductTopic-1BC1QBRF2S4F2',
    Subject: 'Products were created',
    Message: `Products were successfully created, timestamp: ${Date.now()}`
  });
  await client.send(command);
}

export const main = middyfy(catalogBatchProcess);

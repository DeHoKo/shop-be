import { Client, ClientConfig } from 'pg';

const {
  PG_HOST,
  PR_PORT,
  PG_DATABASE,
  PG_USERNAME,
  PG_PASSWORD
} = process.env;

const dbOptions: ClientConfig = {
  host: PG_HOST,
  port: +PR_PORT,
  database: PG_DATABASE,
  user: PG_USERNAME,
  password: PG_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
  connectionTimeoutMillis: 5000
};

export {
  Client,
  dbOptions
};
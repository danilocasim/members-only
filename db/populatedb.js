#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  username VARCHAR(255),
  password VARCHAR(255),
  isAdmin BOOLEAN,
  isMember BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS posts (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  userId INTEGER REFERENCES users (id),
  title VARCHAR(255),
  message VARCHAR(255),
  timeStamp TIMESTAMP
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");

`;

const { DB_NAME, DB_HOST, USERNAME, DB_PASSWORD } = process.env;

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE, PGCHANNELBINDING } =
  process.env;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${USERNAME}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();

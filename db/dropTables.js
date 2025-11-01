#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
DROP TABLE posts;

DROP TABLE users;

`;

const { DB_NAME, DB_HOST, USERNAME, DB_PASSWORD } = process.env;

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

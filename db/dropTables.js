#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
DROP TABLE IF EXISTS posts;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS session;

`;

const { NODE_ENV, DB_NAME, DB_HOST, USERNAME, DB_PASSWORD } = process.env;
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, PGSSLMODE, PGCHANNELBINDING } =
  process.env;

if (NODE_ENV == "dev") {
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
}

if (NODE_ENV == "prod") {
  async function main() {
    console.log("seeding...");
    const client = new Client({
      connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:5432/${PGDATABASE}`,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  }
  main();
}

// @ts-check

const { drizzle } = require("drizzle-orm/node-postgres");
const { migrate } = require("drizzle-orm/node-postgres/migrator");
const { Client } = require("pg");
require("dotenv").config();
const path = require("path");

// for query purposes
const config = {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || ""),
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  connectionTimeoutMillis: 10000,
  ssl: true,
};
console.table(config);
const client = new Client(config);

console.log(path.join(process.cwd(), "drizzle"));

async function main() {
  try {
    console.log("running migrations...");
    await migrate(drizzle(client), {
      migrationsFolder: path.join(process.cwd(), "drizzle"),
    });
    console.log("success");
    client.end();
    process.exit(0);
  } catch (error) {
    console.log("error: ", error);
    client.end();
    process.exit(1);
  }
}
await main();

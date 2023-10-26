// @ts-check
require("dotenv").config();

/** @type {import('drizzle-kit').Config} */
const config = {
  schema: "./schema.js",
  driver: "pg",
  out: "./drizzle",
  dbCredentials: {
    host: process.env.DB_HOST || "",
    port: parseInt(process.env.DB_PORT || ""),
    user: process.env.DB_USER,
    database: process.env.DB_NAME || "",
    password: process.env.DB_PASSWORD,
    ssl: true,
  },
};

module.exports = config;

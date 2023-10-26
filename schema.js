// @ts-check
const { pgTable, serial, varchar, timestamp } = require("drizzle-orm/pg-core");

const users = pgTable("users", {
  id: serial("id").primaryKey(),
  login: varchar("login", { length: 256 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
  password: varchar("password", { length: 256 }),
  token: varchar("token", { length: 2048 }),
});

module.exports = {
  users,
};

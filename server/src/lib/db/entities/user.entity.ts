import {
  index,
  integer,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

export const users = sqliteTable(
  "users",
  {
    id: integer("id").primaryKey(),
    name: text("name").unique().notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
  },
  (table) => ({
    emailIndex: index("email_index").on(table.email),
  })
);

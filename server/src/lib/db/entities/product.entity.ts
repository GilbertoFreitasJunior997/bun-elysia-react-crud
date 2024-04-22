import {
  index,
  integer,
  real,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

import { users } from "./user.entity";

export const products = sqliteTable(
  "products",
  {
    id: integer("id").primaryKey(),
    name: text("name").notNull(),
    price: real("price").notNull(),

    userId: integer("user_id")
      .notNull()
      .references(() => users.id),
  },
  (table) => ({
    nameIndex: index("name_index").on(table.name),
  })
);

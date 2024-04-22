import { createInsertSchema, createSelectSchema } from "drizzle-typebox";

import { Omit } from "@sinclair/typebox";
import { Static } from "elysia";
import { users } from "@/lib/db/entities/user.entity";

export const userSchema = createSelectSchema(users);
export type User = Static<typeof userSchema>;

const userBaseCreateSchema = createInsertSchema(users);
export const userCreateSchema = Omit(userBaseCreateSchema, ["id"]);
export type UserCreate = Static<typeof userCreateSchema>;

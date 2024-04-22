import { Intersect, Omit, Pick } from "@sinclair/typebox";
import { Static, t } from "elysia";

import { createSelectSchema } from "drizzle-typebox";
import { userCreateSchema } from "./user.schema";
import { users } from "@/lib/db/entities";

const authBaseSchema = createSelectSchema(users);

export const authUserWithoutPasswordSchema = Omit(authBaseSchema, ["password"]);
export type AuthUserWithoutPassword = Static<
  typeof authUserWithoutPasswordSchema
>;

export const authUserWithTokenSchema = Intersect([
  authUserWithoutPasswordSchema,
  t.Object({
    token: t.String(),
  }),
]);
export type AuthUserWithToken = Static<typeof authUserWithTokenSchema>;

export const authUserLoginSchema = t.Object({
  nameOrEmail: t.String(),
  password: t.String(),
});

export type AuthUserLogin = Static<typeof authUserLoginSchema>;

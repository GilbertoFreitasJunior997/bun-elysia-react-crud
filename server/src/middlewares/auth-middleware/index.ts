import { eq, getTableColumns } from "drizzle-orm";

import Elysia from "elysia";
import { Value } from "@sinclair/typebox/value";
import { authUserWithoutPasswordSchema } from "@/schemas/auth.schema";
import { db } from "@/lib/db";
import { decryptToken } from "@/lib/token";
import { users } from "@/lib/db/entities";

export const authMiddleware = new Elysia().derive(
  { as: "scoped" },
  async ({ headers }) => {
    try {
      const token = headers.Authorization?.split("Bearer ")?.[1];

      if (!token) {
        throw new Error();
      }

      const preJsonUser = decryptToken(token);

      if (!Value.Check(authUserWithoutPasswordSchema, preJsonUser)) {
        throw new Error();
      }

      const userId = Value.Cast(authUserWithoutPasswordSchema, preJsonUser).id;

      const { password: _, ...userColumns } = getTableColumns(users);

      const user = (
        await db
          .select({ ...userColumns })
          .from(users)
          .where(eq(users.id, userId))
      )?.[0];

      if (!user) {
        throw new Error();
      }

      return {
        user,
      };
    } catch (_) {
      throw new Error("!!!");
    }
  }
);

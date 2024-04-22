import { AuthUserLogin, AuthUserWithToken } from "@/schemas/auth.schema";
import { eq, or } from "drizzle-orm";

import { UserCreate } from "@/schemas/user.schema";
import { password as bunPassword } from "bun";
import { createToken } from "@/lib/token";
import { db } from "@/lib/db";
import { users } from "@/lib/db/entities";

export const authService = {
  login: async (dto: AuthUserLogin): Promise<AuthUserWithToken> => {
    const preUser = (
      await db
        .select()
        .from(users)
        .where(
          or(eq(users.email, dto.nameOrEmail), eq(users.name, dto.nameOrEmail))
        )
    )?.[0];

    if (!preUser) {
      throw new Error("!!!");
    }

    const passwordMatch = await bunPassword.verify(
      dto.password,
      preUser.password
    );

    if (!passwordMatch) {
      throw new Error("!!!");
    }

    const { password: _, ...user } = preUser;

    const token = createToken(user);

    return {
      ...user,
      token,
    };
  },
  signUp: async ({
    password: prePassword,
    ...dto
  }: UserCreate): Promise<AuthUserWithToken> => {
    const password = await bunPassword.hash(prePassword);

    const preNewUser = (
      await db
        .insert(users)
        .values({
          ...dto,
          password,
        })
        .returning()
    )?.[0];

    if (!preNewUser) {
      throw new Error("!!!");
    }

    const { password: _, ...newUser } = preNewUser;

    const token = createToken(newUser);

    return {
      ...newUser,
      token,
    };
  },
};

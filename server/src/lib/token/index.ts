import { sign, verify } from "jsonwebtoken";

import { AuthUserWithoutPassword } from "@/schemas/auth.schema";
import { env } from "../env";

export const createToken = (user: AuthUserWithoutPassword) =>
  sign(user, env.TOKEN_KEY);

export const decryptToken = async (token: string) =>
  verify(token, env.TOKEN_KEY);

import { Value } from "@sinclair/typebox/value";
import { t } from "elysia";

const envSchema = t.Object({
  PORT: t.String(),
  TURSO_DATABASE_URL: t.String(),
  TURSO_AUTH_TOKEN: t.String(),
  TOKEN_KEY: t.String(),
});

const envMatch = Value.Check(envSchema, process.env);
if (!envMatch) {
  throw new Error("env vars doesnt match schema!");
}

export const env = Value.Cast(envSchema, Value.Clean(envSchema, process.env));

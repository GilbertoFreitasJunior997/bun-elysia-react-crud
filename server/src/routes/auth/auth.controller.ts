import Elysia from "elysia";
import { authService } from "./auth.service";
import { authUserLoginSchema } from "@/schemas/auth.schema";
import { userCreateSchema } from "@/schemas/user.schema";

export const authController = new Elysia().group("auth", (app) =>
  app
    .post("login", ({ body }) => authService.login(body), {
      body: authUserLoginSchema,
    })
    .post("signup", ({ body }) => authService.signUp(body), {
      body: userCreateSchema,
    })
);

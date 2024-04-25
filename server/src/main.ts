import { Elysia } from "elysia";
import { authController } from "./routes/auth/auth.controller";
import cors from "@elysiajs/cors";
import { env } from "@lib/env";
import { productController } from "./routes/product/product.controller";

const app = new Elysia()
  .use(cors())
  .use(authController)
  .use(productController)
  .listen(env.PORT);

console.log(`Listening on ${app.server?.url}`);

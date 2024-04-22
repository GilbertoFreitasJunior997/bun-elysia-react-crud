import {
  productCreateSchema,
  productUpdateSchema,
} from "@/schemas/product.schema";

import Elysia from "elysia";
import { authMiddleware } from "@/middlewares/auth-middleware";
import { idParamsSchema } from "@/schemas/utils.schema";
import { productService } from "./product.service";

export const productController = new Elysia().group("products/", (app) =>
  app
    .use(authMiddleware)
    .get("", ({ user }) => productService.getAll(user.id))
    .get(":id", ({ params: { id } }) => productService.getById(id), {
      params: idParamsSchema,
    })
    .post("", ({ body }) => productService.create(body), {
      body: productCreateSchema,
    })
    .patch(
      ":id",
      ({ params: { id }, body }) => productService.update(id, body),
      {
        params: idParamsSchema,
        body: productUpdateSchema,
      }
    )
    .delete(":id", ({ params: { id } }) => productService.delete(id), {
      params: idParamsSchema,
    })
);

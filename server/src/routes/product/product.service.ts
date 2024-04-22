import {
  Product,
  ProductCreate,
  ProductUpdate,
} from "@/schemas/product.schema";

import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { products } from "@/lib/db/entities";

export const productService = {
  getAll: async (userId: number): Promise<Product[]> => {
    const allProducts = await db
      .select()
      .from(products)
      .where(eq(products.userId, userId));

    return allProducts;
  },

  getById: async (id: number): Promise<Product | null> => {
    const foundProduct = (
      await db.select().from(products).where(eq(products.id, id))
    )?.[0];

    return foundProduct ?? null;
  },
  create: async (dto: ProductCreate): Promise<Product> => {
    const newProduct = (await db.insert(products).values(dto).returning())?.[0];

    if (!newProduct) {
      throw new Error("!!!");
    }

    return newProduct;
  },

  update: async (id: number, dto: ProductUpdate): Promise<Product> => {
    const updatedProduct = (
      await db.update(products).set(dto).where(eq(products.id, id)).returning()
    )?.[0];

    if (!updatedProduct) {
      throw new Error("!!!");
    }

    return updatedProduct;
  },

  delete: async (id: number): Promise<Product | null> => {
    const removedProduct = (
      await db.delete(products).where(eq(products.id, id)).returning()
    )?.[0];

    return removedProduct ?? null;
  },
};

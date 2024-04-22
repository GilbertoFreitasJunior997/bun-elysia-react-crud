import { createInsertSchema, createSelectSchema } from 'drizzle-typebox';

import { Omit } from '@sinclair/typebox';
import { Static } from 'elysia';
import { products } from '@/lib/db/entities';

export const productSchema = createSelectSchema(products);
export type Product = Static<typeof productSchema>;

const productBaseCreateSchema = createInsertSchema(products);

export const productCreateSchema = Omit(productBaseCreateSchema, ['id']);
export type ProductCreate = Static<typeof productCreateSchema>;

export const productUpdateSchema = productCreateSchema;
export type ProductUpdate = Static<typeof productUpdateSchema>;

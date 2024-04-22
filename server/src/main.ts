import { Elysia } from 'elysia';
import { env } from '@lib/env';
import { productController } from './routes/product/product.controller';

const app = new Elysia().use(productController).listen(env.PORT);

console.log(`Listening on ${app.server?.url}`);

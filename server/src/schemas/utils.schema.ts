import { t } from 'elysia';

export const idParamsSchema = t.Object({
  id: t.Numeric(),
});

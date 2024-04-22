import { env } from '@/lib/env';
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/db/entities/index.ts',
  out: './src/lib/db/migrations',
  driver: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
} satisfies Config;

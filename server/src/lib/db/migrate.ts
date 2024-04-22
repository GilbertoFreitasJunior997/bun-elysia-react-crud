import { db } from './index';
import { migrate } from 'drizzle-orm/libsql/migrator';
import { resolve } from 'node:path';

await migrate(db, {
  migrationsFolder: resolve(__dirname, './migrations'),
});

import { dbClient } from './index';
import { resolve } from 'node:path';
import { rmSync } from 'node:fs';

console.log('deleting migrations...');

rmSync(resolve(__dirname, './migrations'), {
  recursive: true,
});

console.log('deleting tables...');

const queryResult = await dbClient.execute(
  'select * from sqlite_master where type="table"',
);
const tableNames = queryResult.rows
  .map((row) => row.name)
  .filter((name) => !!name);

for (const tableName of tableNames) {
  await dbClient.execute(`drop table ${tableName}`);
}

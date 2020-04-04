import 'reflect-metadata';
import { createConnection } from 'typeorm';
import * as path from 'path';

const pathEntities = path.resolve(__dirname, '..', 'models', '*.{ts,js}');
const pathMigration = path.resolve(
  __dirname,
  '..',
  'database',
  'migration',
  ' *.{ts,js}'
);

export const DbConnection = createConnection({
  type: 'postgres',
  url: String(process.env.TYPEORM_URL),
  host: String(process.env.TYPEORM_HOST),
  port: Number(process.env.TYPEORM_PORT),
  username: String(process.env.TYPEORM_USERNAME),
  password: String(process.env.TYPEORM_PASSWORD),
  database: String(process.env.TYPEORM_DATABASE),
  entities: [pathEntities],
  migrations: [pathMigration],
  synchronize: false,
  logging: true,
  extra: {
    ssl: true,
  },
});

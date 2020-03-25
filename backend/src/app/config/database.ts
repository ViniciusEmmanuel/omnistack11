import 'reflect-metadata';
import { createConnections } from 'typeorm';

const DbConnection = createConnections();

export default DbConnection;

// {
//   type: process.env.TYPEORM_CONNECTION,
//   host: String(process.env.TYPEORM_HOST),
//   port: Number(process.env.TYPEORM_PORT),
//   username: String(process.env.TYPEORM_USERNAME),
//   password: String(process.env.TYPEORM_PASSWORD),
//   database: String(process.env.TYPEORM_DATABASE),
//   entities: [String(process.env.TYPEORM_ENTITIES)],
//   migrations: [String(process.env.TYPEORM_MIGRATIONS)],
//   synchronize: Boolean(process.env.TYPEORM_SYNCHRONIZE),
//   logging: Boolean(process.env.TYPEORM_LOGGING),
// }

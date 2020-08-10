import { createConnection, Connection } from 'typeorm';
import { Client } from '../components/clients';

export const connection: Promise<Connection> = createConnection({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Client],
  migrations: ['src/migration/*.ts'],
  cli: { migrationsDir: 'migration' },
});

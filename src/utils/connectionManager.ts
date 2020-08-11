import { createConnection, getConnectionManager, Connection } from 'typeorm';

export default function createOrGetConnection(): Connection|Promise<Connection> {
  return getConnectionManager().connections.length
    ? getConnectionManager().get('default')
    : createConnection();
}

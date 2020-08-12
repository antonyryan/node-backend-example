import { DeleteResult } from 'typeorm';
import { Client } from './model';
import createConnection from '../../utils/connectionManager';

/**
 * Get one client by ID
 * @param id ID of client
 */
export async function get(id: number): Promise<Client|undefined> {
  const conn = await createConnection();
  const clientRepository = conn.getRepository<Client>(Client);
  return clientRepository.findOne(id);
}
/**
 * Return a list of clients
 */
export async function list(): Promise<Array<Client>> {
  const conn = await createConnection();
  const clientRepository = conn.getRepository<Client>(Client);
  return clientRepository.find();
}
/**
 * Create a new client
 * @param newClient Object with client data to be saved
 */
export async function create(newClient: Client): Promise<Client> {
  const conn = await createConnection();
  const clientRepository = conn.getRepository<Client>(Client);
  return clientRepository.save({
    ...newClient,
  });
}
/**
 * Remove a client by ID
 * @param id ID of client
 */
export async function remove(id: number): Promise<DeleteResult> {
  const conn = await createConnection();
  const clientRepository = conn.getRepository<Client>(Client);
  return clientRepository.delete(id);
}

export const rules = {
  companyName: (value: unknown): boolean => !!value,
  cnpj: (value: unknown): boolean => !!value && (value as string).length === 14,
  creationDate: (value: unknown): boolean => !!value && (!!(value as string).match(/[1-2][0-9]{3}-[0-1][0-9]-[0-3][0-9]/)),
};

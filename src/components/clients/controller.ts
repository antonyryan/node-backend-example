import { DeleteResult } from 'typeorm';
import { connection } from '../../utils/connection';
import { Client } from './model';

/**
 * Get one client by ID
 * @param id ID of client
 */
export async function get(id: number): Promise<Client> {
  const conn = await connection;
  const clientRepository = conn.getRepository<Client>(Client);
  return clientRepository.findOne(id);
}
/**
 * Return a list of clients
 */
export async function list(): Promise<Array<Client>> {
  const conn = await connection;
  const clientRepository = conn.getRepository<Client>(Client);
  return clientRepository.find();
}
/**
 * Create a new client
 * @param newClient Object with client data to be saved
 */
export async function create(newClient: Client): Promise<Client> {
  const conn = await connection;
  const clientRepository = conn.getRepository<Client>(Client);
  return clientRepository.create({
    ...newClient,
  });
}
/**
 * Remove a client by ID
 * @param id ID of client
 */
export async function remove(id: number): Promise<DeleteResult> {
  const conn = await connection;
  const clientRepository = conn.getRepository<Client>(Client);
  return clientRepository.delete(id);
}

import { Router, Response, Request } from 'express';
import { validatePost } from '../../middlewares';
import {
  create,
  list,
  get,
  remove,
  rules,
} from './controller';
import { Client } from './model';

const routes = Router();

/**
 *
 * @api {POST} /client Criar novo cliente
 * @apiName PostClient
 * @apiGroup Client
 * @apiVersion  1.0.0
 *
 *
 * @apiParam {String} companyName Razão social da empresa
 * @apiParam {String} fantasyName Nome fanstasia da empresa. (Opcional)
 * @apiParam {String} cnpj CNPJ da empresa
 * @apiParam {String} creationDate Data de criação da empresa. Formato: YYYY-MM-DD
 *
 * @apiSuccess (200) {Integer} id ID do cliente criado
 * @apiSuccess (200) {String} companyName Razão social da empresa
 * @apiSuccess (200) {String} fantasyName Nome fanstasia da empresa
 * @apiSuccess (200) {String} cnpj CNPJ da empresa
 * @apiSuccess (200) {String} creationDate Data de criação da empresa. Formato: YYYY-MM-DD
 *
 * @apiError (400) ClientInvalidParameters Parametros do cliente enviado estão inválido.
 *
 * @apiParamExample  {JSON} Request-Example:
 * {
 *    "companyName": "Nome Empresa",
 *    "fantasyName": "Empresa",
 *    "cnpj": "12345678901234",
 *    "creationDate": "1999-05-01"
 * }
 *
 * @apiSuccessExample {JSON} Success-Response:
 * {
 *    "id": 10,
 *    "companyName": "Nome Empresa",
 *    "fantasyName": "Empresa",
 *    "cnpj": "12345678901234",
 *    "creationDate": "1999-05-01"
 * }
 *
 */
routes.post('/client', validatePost(rules), async (req: Request, res: Response) => {
  const client: Client = req.body;
  const newClient = await create(client);
  return res.json(newClient);
});

/**
 *
 * @api {GET} /client Listar clientes
 * @apiName ListClient
 * @apiGroup Client
 * @apiVersion  1.0.0
 *
 * @apiSuccess (200) {Object[]} client Lista de clientes cadastrados
 * @apiSuccess (200) {Integer} client.id ID do cliente criado
 * @apiSuccess (200) {String} client.companyName Razão social da empresa
 * @apiSuccess (200) {String} client.fantasyName Nome fanstasia da empresa
 * @apiSuccess (200) {String} client.cnpj CNPJ da empresa
 * @apiSuccess (200) {String} client.creationDate Data de criação da empresa. Formato: YYYY-MM-DD
 *
 * @apiSuccessExample {JSON} Success-Response:
 * [
 *   {
 *      "id": 10,
 *      "companyName": "Nome Empresa",
 *      "fantasyName": "Empresa",
 *      "cnpj": "12345678901234",
 *      "creationDate": "1999-05-01"
 *   },
 * ...
 * ]
 *
 *
 */
routes.get('/client', async (req: Request, res: Response) => {
  const clientList = await list();
  res.json(clientList);
});

/**
 *
 * @api {GET} /client/:id Listar cliente por ID
 * @apiName GetClient
 * @apiGroup Client
 * @apiVersion  1.0.0
 *
 * @apiParam  {Integer} id ID do cliente
 *
 * @apiSuccess (200) {Integer} id ID do cliente criado
 * @apiSuccess (200) {String} companyName Razão social da empresa
 * @apiSuccess (200) {String} fantasyName Nome fanstasia da empresa
 * @apiSuccess (200) {String} cnpj CNPJ da empresa
 * @apiSuccess (200) {String} creationDate Data de criação da empresa. Formato: YYYY-MM-DD
 *
 * @apiError (404) ClientNotFound ID do cliente não encontrado
 *
 * @apiSuccessExample {JSON} Success-Response:
 * {
 *    "id": 10,
 *    "companyName": "Nome Empresa",
 *    "fantasyName": "Empresa",
 *    "cnpj": "12345678901234",
 *    "creationDate": "1999-05-01"
 * }
 *
 *
 */
routes.get('/client/:id', async (req: Request, res: Response) => {
  const client = await get(Number(req.params.id));
  if (!client) {
    res.status(404);
    return res.send('Client not found!');
  }

  return res.json(client);
});

/**
 *
 * @api {DELETE} /client/:id Excluir cliente
 * @apiName DeleteClient
 * @apiGroup Client
 * @apiVersion  1.0.0
 *
 *
 * @apiParam  {Integer} id ID do cliente
 *
 * @apiSuccess (200) {Integer} deleted Número de linhas afetadas
 *
 * @apiSuccessExample  {JSON} Success-Example:
 * {
 *     "deleted": 1
 * }
 *
 */
routes.delete('/client/:id', async (req: Request, res: Response) => {
  const client = await remove(Number(req.params.id));
  if (!client.affected) {
    res.status(404);
    return res.send('Client not found!');
  }

  return res.json({ deleted: client.affected });
});

export default routes;

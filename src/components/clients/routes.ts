import { Router, Response, Request } from 'express';
import { create, list, get, remove } from './controller';
import { Client } from './model';

const routes = Router();

routes.post('/client', async (req: Request, res: Response) => {
  const client: Client = req.body;
  const newClient = await create(client);
  return res.json(newClient);
});

routes.get('/client', async (req: Request, res: Response) => {
  const clientList = await list();
  res.json(clientList);
});

routes.get('/client/:id', async (req: Request, res: Response) => {
  const client = await get(Number(req.params.id));
  if (client) {
    res.status(404);
    return res.send('Client not found!');
  }

  return res.json(client);
});

routes.delete('/client/:id', async (req: Request, res: Response) => {
  const client = await remove(Number(req.params.id));
  if (!client.affected) {
    res.status(404);
    return res.send('Client not found!');
  }

  return res.json({ deleted: client.affected });
});

export default routes;

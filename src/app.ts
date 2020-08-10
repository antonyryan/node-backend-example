import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { clientRoutes } from './components/clients';

const app = express();

app.get('/', (req, res) => res.json({ hello: 'world' }));
app.use(cors());
app.use(bodyParser.json());

app.use(clientRoutes);

export default app;

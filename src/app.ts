import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => res.json({ hello: 'world' }));
app.use(cors());
app.use(bodyParser.json());

export default app;

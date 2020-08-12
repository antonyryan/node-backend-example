import request from 'supertest';
import express, { Express } from 'express';
import '../../utils/env';
import routes from '../../app';
import createConnection from '../../utils/connectionManager';
import { Client } from './model';

const mockedClient: Client = {
  companyName: 'Foo',
  fantasyName: 'Bar',
  cnpj: '12345678901234',
  creationDate: '1999-12-31',
};

describe('Client component', () => {
  let app: Express;
  beforeAll(() => {
    app = express();
    app.use(routes);
  });

  beforeEach(async () => {
    const conn = await createConnection();
    await conn
      .createQueryBuilder()
      .delete()
      .from(Client)
      .where('companyName = :testName', { testName: mockedClient.companyName })
      .execute();
  });

  it('should list all clients when using route [GET] client/ ', async () => {
    await request(app)
      .get('/client')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((data) => expect(data.body).toEqual([]));
  });

  it('should be able to save a client using route [POST] client/', async () => {
    await request(app)
      .post('/client')
      .send({ ...mockedClient })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((data) => expect(data.body.companyName).toEqual(mockedClient.companyName));
  });

  it('should display clients by ID when using route [GET] client/:id', async () => {
    const { body: savedClient } = await request(app)
      .post('/client')
      .send({ ...mockedClient });

    await request(app)
      .get(`/client/${savedClient.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((data) => expect(data.body).toEqual(savedClient));
  });

  it('should delete client by ID when using route [DELETE] client/:id', async () => {
    const { body: savedClient } = await request(app)
      .post('/client')
      .send({ ...mockedClient });

    await request(app)
      .delete(`/client/${savedClient.id}`)
      .expect('Content-Type', /json/)
      .expect(200)
      .then((data) => expect(data.body).toEqual({ deleted: 1 }));
  });

  it('should return code 404 when trying to get a bogus ID on route [GET] client/:id', async () => {
    await request(app)
      .get('/client/0')
      .expect('Content-Type', /text/)
      .expect(404)
      .then((data) => expect(data.text).toBe('Client not found!'));
  });

  it('should return code 404 when trying to delete a bogus ID on route [DELETE] client/:id', async () => {
    await request(app)
      .delete('/client/0')
      .expect('Content-Type', /text/)
      .expect(404)
      .then((data) => expect(data.text).toBe('Client not found!'));
  });

  it('should be return code 400 when trying to save a client with invalid parameters using route [POST] client/', async () => {
    await request(app)
      .post('/client')
      .send({ ...mockedClient, cnpj: 'foobar' })
      .expect('Content-Type', /text/)
      .expect(400)
      .then((data) => expect(data.text).toBe('Invalid parameters for client!'));
  });

  afterAll(async () => {
    const conn = await createConnection();
    await conn
      .createQueryBuilder()
      .delete()
      .from(Client)
      .where('companyName = :testName', { testName: mockedClient.companyName })
      .execute();

    await conn.close();
  });
});

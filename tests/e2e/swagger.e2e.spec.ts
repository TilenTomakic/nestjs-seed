import * as request from 'supertest';
import { appBootstrap } from '../../src/app';

describe('Swagger', () => {
  let app;

  beforeAll(async () => {
    app = await appBootstrap;
  });

  it(`/GET api`, () => {
    return request(app.express)
      .get('/api/')
      .expect(200)
      .expect(/.*\bswagger\b.*/);
  });
});

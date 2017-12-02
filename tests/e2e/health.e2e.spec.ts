import * as express from 'express';
import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { HealthModule } from '../../src/modules/health/health.module';

describe('Health', () => {
  const server = express();
  const catsService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      modules: [HealthModule],
    })
      // .overrideComponent(CatsService).useValue(catsService)
      .compile();

    const app = module.createNestApplication(server);
    await app.init();
  });

  it(`/GET health`, () => {
    return request(server)
      .get('/health')
      .expect(200)
      .expect({
        data: catsService.findAll(),
      });
  });
});

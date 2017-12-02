import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { HealthModule } from './health/health.module';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { LoggerMiddleware } from './logger/logger.middleware';
import { LoggerModule } from './logger/logger.module';
import { ConsulModule } from './consul/consul.module';

@Module({
  controllers: [
    AppController
  ],
  components: [],
  modules: [
    HealthModule,
    LoggerModule,
    ConsulModule
  ],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(LoggerMiddleware)
      .forRoutes( { path: '*', method: RequestMethod.ALL });
  }
}

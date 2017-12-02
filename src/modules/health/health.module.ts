import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
    controllers: [
      HealthController
    ],
    modules: [
      DatabaseModule
    ],
    components: [],
})
export class HealthModule {}

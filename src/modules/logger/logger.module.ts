import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Module({
    components: [
      LoggerService
    ],
    exports: [
      LoggerService
    ],
})
export class LoggerModule {}

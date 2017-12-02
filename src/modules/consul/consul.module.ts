import { Module } from '@nestjs/common';
import { ConsulService } from './consul.service';

@Module({
    components: [
      ConsulService
    ],
    exports: [
      ConsulService
    ],
})
export class ConsulModule {}

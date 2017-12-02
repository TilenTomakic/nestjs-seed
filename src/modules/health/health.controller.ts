import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('seed health')
@Controller('health')
export class HealthController {

  @Get()
  @ApiResponse({ status: 200, description: `Service health is ok.`})
  root() {
    return {
      database: 1,
      api: 'OK'
    };
  }
}

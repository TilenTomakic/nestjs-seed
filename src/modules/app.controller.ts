import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root() {
    return { doc: '/api' };
  }
}

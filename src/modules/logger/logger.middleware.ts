import { Middleware, NestMiddleware, ExpressMiddleware, Req } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { info } from 'winston';

@Middleware()
export class LoggerMiddleware implements NestMiddleware {

  constructor(private readonly loggerService: LoggerService) {

  }

  resolve(): ExpressMiddleware {
    return (req, res, next) => {
      info('HTTP request', {
        originalUrl: req.originalUrl,
        ip: req.ip
      });
      next();
    };
  }
}

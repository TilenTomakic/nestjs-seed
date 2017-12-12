import { Middleware, NestMiddleware, ExpressMiddleware, Req } from '@nestjs/common';

@Middleware()
export class AuthMiddleware implements NestMiddleware {

  // Note we could also use guards
  resolve(): ExpressMiddleware {
    return (req, res, next) => {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ0aWxlbiIsImlhdCI6MTUxMzEwOTkwMywiZXhwIjoxNTc2MTgxOTAzLCJhdWQiOiJhcGkiLCJzdWIiOiJmcmkiLCJyb2xlIjoiYWRtaW4ifQ.8Fu5mfoO5WkQ-op_dtW82MfZabEw2PiErMpajiNDpko';
      if (req.headers['x-access-token'] !== token) {
        res.status(401).json({
          'message' : 'Please set header \'x-access-token\' with JWT token. You can get token from link posted on "oddaja Mejnik 1".'
        });
        return;
      }

      next();
    };
  }
}

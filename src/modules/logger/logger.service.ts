import { Component } from '@nestjs/common';
import * as winston from 'winston';
import { environment } from '../../environment';

@Component()
export class LoggerService {

  constructor() {
    // Requiring `winston-logstash` will expose
    // `winston.transports.Logstash`
    require('winston-logstash');

    if (environment.logstash) {
      winston.add((winston.transports as any).Logstash, environment.logstash);
    }
  }
}







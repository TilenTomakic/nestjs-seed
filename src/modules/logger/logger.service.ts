import { Component } from '@nestjs/common';
import * as winston from 'winston';


@Component()
export class LoggerService {

  constructor() {
    // Requiring `winston-logstash` will expose
    // `winston.transports.Logstash`
    require('winston-logstash');
    winston.add((winston.transports as any).Logstash, {
      port: 5010,
      node_name: 'nest api',
      host: '35.198.92.155'
    });

    // this.client = new LogstashClient({
    //   type: 'tcp',
    //   host: '35.198.92.155',
    //   port: 5010
    // });
  }

  // log(data: any) {
  //   this.client.send({
  //     '@timestamp': new Date(),
  //     'level': 'log',
  //     ...data
  //   }, console.error);
  // }
}







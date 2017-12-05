import { Component } from '@nestjs/common';
import * as Consul from 'consul';
import { info, error } from 'winston';

@Component()
export class ConsulService {

  watchMap = {};
  watchValues = {};

  static consul; // = Consul();

  constructor() {
    // this.initWatch(); TODO
  }

  initWatch() {
    try {
      this.watch('core/enabled');
    } catch (e) {
      error('There was problem with consul', e);
    }
  }

  static get(key): Promise<any> {
    return new Promise((resolve, reject) => {
      ConsulService.consul.kv.get(key, function(err, result) {
        if (err) {
          error(`Get consule data for ${ key } failed.`, err);
          reject(err);
        } else {
          info(`Get consule data for ${ key }: `, result);
          resolve(result);
        }
      });
    });
  }

  watch(key: string, defaultVal?: any) {
    const self = this;
    if (!this.watchMap[key]) {
      this.watchMap[key] = ConsulService.consul.watch({ method: ConsulService.consul.kv.get, options: { key }});
      this.watchMap[key].on('change', (data, res) => {
        info(`Consule data for ${ key }: `, data);
        self.watchValues[key] = data ? data.Value : defaultVal;
      });
    }
  }
}

const envType = (process.env.NODE_ENV || 'dev') as 'dev' | 'prod' | 'stage' | 'test';
const appName = 'apiseed';

export const environment = {
  appName,
  envType,

  consul: envType !== 'dev' ? { host: `consul`} : {},

  logstash: process.env.LOGSTASH_HOST && {
    node_name: appName,
    port: 5010,
    host: process.env.LOGSTASH_HOST
  },

  // unless in local development mode we will use Kubernetes service discovery
  mongo: process.env.MONGO || `mongodb://${ envType === 'dev' ? 'localhost' : 'mongo' }:47017/${ this.appName }`
};

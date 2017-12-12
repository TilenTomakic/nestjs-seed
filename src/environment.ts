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

  // unless in local development mode we will use Kubernetes service discovery and env to inject
  mongo: process.env.MONGO_HOST || `mongodb://${ process.env.MONGO || (envType === 'dev' ? 'localhost:47017' : 'mongo:47017') }/${ this.appName }`
};

console.log(environment);

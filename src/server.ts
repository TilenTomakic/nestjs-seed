import { appBootstrap } from './app';
import { ConsulService } from './modules/consul/consul.service';

async function run() {
	const app = await appBootstrap;

	if ((process.env.NODE_ENV || '').toLowerCase() !== 'qa') {
    // const mongodbUri = await ConsulService.get('mongodb');
    // TODO
  } else {
	  // TODO
	  // we are in test mode
  }

	await app.listen(3000);
}
run();

import { appBootstrap } from './app';
import { ConsulService } from './modules/consul/consul.service';

async function run() {
	const app = await appBootstrap;

  const mongodbUri = await ConsulService.get('mongodb');

	await app.listen(3000);
}
run();

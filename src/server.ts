import { appBootstrap } from './app';

async function run() {
	const app = await appBootstrap;

	await app.listen(3000);
}
run().catch(console.error);

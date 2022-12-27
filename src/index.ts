import { getSecret } from "./aws/secretsManager";
import { getS3Config } from "./aws/s3";
import { default as _ } from 'lodash';
import { IConfig } from "./interfaces/interfaces.config";
import { default as YAML } from 'yamljs';
import fs from 'fs';

export * from './interfaces/interfaces.sources';
export * from './interfaces/interfaces.config';
export * from './interfaces/interfaces.vendors';

let interval;
let storedConfig:IConfig;

export async function read(): Promise<IConfig> {

	// retrieves the stack specific configuration
	// console.info(`Retrieving configuration from S3`);
	const config = await getS3Config() as IConfig;

	// get the secret keys
	// console.info(`Retrieving keys from Secrets Manager`);
	const secrets = await getSecret('secrets');

	// merge the secrets into the config
	// console.info(`Constructing configuration`);
	Object.keys(secrets).forEach(path=>_.set( config, path, secrets[path] ));

	return config;
}

export async function refresh(every=86400): Promise<IConfig> {

	// console.info(`Setting refresh interval to ${every}`);
	interval = setInterval(async () => {
		storedConfig = await read();
	}, every);

	return get();
}

export async function get(remote = false): Promise<IConfig> {

	const path = `${process.cwd()}/../../packages/config/local/config.yml`;

	if( fs.existsSync( path )){

		// read the local config in and parse it
		const file = fs.readFileSync(path, 'utf-8');
		storedConfig = YAML.parse( file );
		// console.info(`Configuration Loaded from local/config.yml`);

	} else {

		// console.info(`Reading configuration`);
		if (remote || !storedConfig) {
			storedConfig = await read();
			// console.info(`Configuration Loaded from AWS`);
		}

	}

	return storedConfig;
}

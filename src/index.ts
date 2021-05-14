import { getSecret } from "./aws/secretsManager";
import { getS3Config } from "./aws/s3";
import { default as _ } from 'lodash';
import { IConfig } from "./interfaces/interfaces.config";
import { default as YAML } from 'yamljs';
import fs from 'fs';

export * from './interfaces/interfaces.sources';
export * from './interfaces/interfaces.policy';
export * from './interfaces/interfaces.config';

let interval;
let storedConfig:IConfig;

import { createLogger } from '@4iiz/logging';
const logger = createLogger("P] Config");

export async function read(): Promise<IConfig> {

	// retrieves the stack specific configuration
	logger.info(`Retrieving configuration from S3`);
	const config = await getS3Config() as IConfig;

	// get the secret keys
	logger.info(`Retrieving keys from Secrets Manager`);
	const secrets = await getSecret('secrets');

	// merge the secrets into the config
	logger.info(`Constructing configuration`);
	Object.keys(secrets).forEach(path=>_.set( config, path, secrets[path] ));

	return config;
}

export async function refresh(every=86400): Promise<IConfig> {
	
	logger.info(`Setting refresh interval to ${every}`);
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
		logger.info(`Configuration Loaded from local/config.yml`);

	} else {

		logger.info(`Reading configuration`);
		if (remote || !storedConfig) {
			storedConfig = await read();
			logger.info(`Configuration Loaded from AWS`);
		}

	}

	return storedConfig;
}

import { ConnectionOptions } from 'snowflake-promise';

export interface ISnowflakeConnection extends ConnectionOptions {
	account: string;
	username: string;
	password: string;
	region: string;
	database: string;
	schema: string;
	warehouse: string;
	defaultTimeout: number;
	role?: string;
	log?: boolean;
	logLevel?: string;
}

export interface ISourcesConfig {
	snowflake: ISnowflakeConnection;
	postgres: {
		username: string;
		password: string;
	}
	mongo: {
		operating: string;
		reporting: string;
		poolSize: number;
		useUnifiedTopology: boolean;
	}
}

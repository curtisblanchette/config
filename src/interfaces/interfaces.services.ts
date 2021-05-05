import { IVendorConfig } from "./interfaces.vendors";

interface IHapiConfig {
	isSecure: boolean;
	ssl: {
		key: string;
		certificate: string;
	};
	log: string[];
	debug: {};
	host: string;
	port: number;
	routes: {
		prefix: string;
		glob: string;
		directory: {
			path: string;
			isPrefix: boolean;
		};
	};
	plugins: string[];
}

interface IExpressConfig {
	isSecure: boolean;
	host: string;
	port: number;
}

interface ISwaggerConfig {
	basePath: string;
	pathPrefixSize: number;
	info: {
		title: string;
		description: string;
		version: string;
	};
	grouping: string;
	swaggerUI: boolean;
	swaggerUIPath: string;
	jsonPath: string;
	documentationPage: boolean;
	documentationPath: string;
}

interface IPapiConfig {
	url: string;
	authUrl: string;
	tagMigrationUrl: string;
	workspaceUrl: string;
}

interface IRedisConfig {
	host: string;
	port: string;
	family: string;
	password?: string;
	db?: string;
}

export interface IServicesConfig {

	hapi: IHapiConfig;

	express: IExpressConfig;

	papi: IPapiConfig;

	automatedIntake?: { port: string };

	scheduledProcesses?: { port: string };

	swagger: ISwaggerConfig;

	vendors: IVendorConfig;

	redis: IRedisConfig;

	internal: {
		orchestrator: {
			url: string
		};
		webhooks: {
			calendars: string;
		};
	};

}

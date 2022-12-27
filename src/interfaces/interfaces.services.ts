interface IPostgresConfig {
	UUID_V5_NAMESPACE: string;
	username: string;
}

interface IExpressConfig {
	isSecure: boolean;
	ssl: {
		key: string;
		certificate: string;
	};
	host: string;
	port: number;
	cors: {
		whitelist: string[]
	}
}

export interface IServicesConfig {
	postgres: IPostgresConfig;
	express: IExpressConfig;
}

import { IVendorConfig } from "./interfaces.vendors";

interface IDominionDbConfig {
	UUID_V5_NAMESPACE: string;
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
	dominionDb: IDominionDbConfig;

	express: IExpressConfig;

	vendors: IVendorConfig;
}

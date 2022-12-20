import { IVendorConfig } from "./interfaces.vendors";

interface IDominionDbConfig {
	UUID_V5_NAMESPACE: string;
}

interface IExpressConfig {
	isSecure: boolean;
	host: string;
	port: number;
	cors: {
		whitelist: string[]
	}
	cognito: {
		poolId: string;
		clientId: string;
	}
}

export interface IServicesConfig {
	dominionDb: IDominionDbConfig;

	express: IExpressConfig;

	vendors: IVendorConfig;
}

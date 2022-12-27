import { IServicesConfig } from "./interfaces.services";
import { ICredentialsConfig } from "./interfaces.credentials";
import { ISettingsConfig } from "./interfaces.settings";
import { IVendorConfig } from './interfaces.vendors';
import { ILocationConfig } from './interfaces.location';

export interface IConfig {
	location: ILocationConfig;
	credentials: ICredentialsConfig;
	settings: ISettingsConfig;
	services: IServicesConfig;
	vendors: IVendorConfig;
}

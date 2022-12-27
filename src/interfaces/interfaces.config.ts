import { IServicesConfig } from "./interfaces.services";
import { ISourcesConfig } from "./interfaces.sources";
import { ICredentialsConfig } from "./interfaces.credentials";
import { ISettingsConfig } from "./interfaces.settings";
import { IVendorConfig } from './interfaces.vendors';

export interface IConfig {
	sources: ISourcesConfig;
	credentials: ICredentialsConfig;
	settings: ISettingsConfig;
	services: IServicesConfig;
	vendors: IVendorConfig;
}

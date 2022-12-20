import { IServicesConfig } from "./interfaces.services";
import { ILocationConfig } from "./interfaces.location";
import { ISourcesConfig } from "./interfaces.sources";
import { ICredentialsConfig } from "./interfaces.credentials";
import { ISettingsConfig } from "./interfaces.settings";

export interface IConfig {
	location: ILocationConfig;
	sources: ISourcesConfig;
	credentials: ICredentialsConfig;
	settings: ISettingsConfig;
	services: IServicesConfig;
}

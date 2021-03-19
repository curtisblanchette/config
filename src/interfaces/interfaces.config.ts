import { IServicesConfig } from "./interfaces.services";
import { ILocationConfig } from "./interfaces.location";
import { ISourcesConfig } from "./interfaces.sources";
import { ICredentialsConfig } from "./interfaces.credentials";
import { ISettingsConfig } from "./interfaces.settings";
import { IModelConfig } from "./interfaces.model";

export interface IConfig {
	location: ILocationConfig;
	sources: ISourcesConfig;
	credentials: ICredentialsConfig;
	settings: ISettingsConfig;
	models: IModelConfig;
	services: IServicesConfig;
}
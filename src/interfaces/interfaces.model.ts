import { IRoleEntitlements } from "./interfaces.policy";

interface IEntityConfig {
	AllowedMultipleRelationshipValuesKeys: string[];
}

interface IPolicyConfig extends IRoleEntitlements {
	
}

interface IMatterConfig {
	AllowedMultipleRelationshipValuesKeys: string[];
}

interface ICacheCombinationsConfig {
	
}

interface ICacheConfig {
	combinations: ICacheCombinationsConfig;
}

export interface IModelConfig {
	entity: IEntityConfig;
	policy: IPolicyConfig;
	matter: IMatterConfig;
	cache: ICacheConfig;
}
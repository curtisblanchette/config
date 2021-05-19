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

interface IRatingConfig {
	1: string;
	2: string;
	3: string;
	4: string;
	5: string;
	6: string;
}

export interface IModelConfig {
	entity: IEntityConfig;
	policy: IPolicyConfig;
	matter: IMatterConfig;
	cache: ICacheConfig;
	rating: IRatingConfig;
}

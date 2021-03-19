// it's VERY important that these stay in this order
export enum RoleHierarchy {
	SYSTEM,
	OWNER,
	ADMIN,
	OPERATOR
}

// it's VERY important that these stay all caps to match the hierarchy above
export enum Role {
	SYSTEM = "SYSTEM",
	OWNER = "OWNER",
	ADMIN = "ADMIN",
	OPERATOR = "OPERATOR"
}

export enum Concern {
	DEFAULT = "default",
	WORKSPACE = "workspace",
	ORGANIZATION = "organization",
	ORGANIZATION_CONTACT = "organizationContact",
	PERSON = "person",
	AGENT = "agent",
	CONSULTANT = "consultant",
	USER = "user"
}

export enum Ability {
	READ = "read",
	WRITE = "write"
}

export enum Restriction {
	NONE = "none",						// no restrictions
	OWN = "own",						// the user must own the record
	ROLE = "role",						// the user must share a role, or have a higher role, than the owner in the same workspace
	IN_SAME_WORKSPACE = "workspace",	// the user must be in a workspace that owns the record
	// RELATED = "related",				// the user must be related to the record
	ALL = "all",						// everything restricted
	DEFAULT = "workspace"
}

export interface IRoleEntitlements {
	system: IEntitlements;
	owner: IEntitlements;
	admin: IEntitlements;
	operator: IEntitlements;
}

export interface IEntitlements {
	default: IEntitlement;
}

export interface IEntitlement {
	read: Restriction;
	write: Restriction;
}

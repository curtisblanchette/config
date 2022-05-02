export interface ICredentialsConfig {

	system: {
		username: string;
		userId: string;
		password: string;
	};

	jwt: {
		defaultExpireLong: string;
		defaultExpireShirt: string;
		audience: string;
		issuer: string;
		secret: string;
		keychain: string[];
	};

	encryption: {
		secret: string;
	};

	dominion: {
		system: {
			id: string;
			email: string;
		}
	}

}

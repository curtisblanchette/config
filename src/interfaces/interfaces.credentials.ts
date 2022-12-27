export interface ICredentialsConfig {

	encryption: {
		secret: string;
	};

	dominion: {
		system: {
			id: string;
			email: string;
			password: string;
		}
	}
}

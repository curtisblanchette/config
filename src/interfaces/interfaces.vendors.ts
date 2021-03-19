export interface IVendorConfig {
	
	aws: {
		region: string;
		accessKeyId: string;
		accessKeySecret: string;
		products: {
			cognito: {
				poolId: string;
				clientId: string;
			};
			ses: {
				senderEmail: string;
				replyToAddresses: string[];
			};
		};
	};

	callTrackingMetrics: {
		url: string;
		access_key: string;
		webhook_username: string;
		webhook_password: string;
	};

	elastic: {
		host: string;
		username: string;
		password: string;
	};

	hubspot: {
		url: string;
		redirect: string;
		appId: string;
		clientId: string;
		clientSecret: string;
	};

	infusionsoft: {
		authUrl: string,
		url: string;
		clientId: string;
		clientSecret: string;
	};

	nextivia: {
		url: string;
	};

	office365: {
		authUrl: string;
		scope: string;
		url: string;
		redirect: string;
		clientId: string;
		clientSecret: string;
	};

	google: {
		url: string;
		redirectUri: string;
		clientId: string;
		clientSecret: string;
	};

	processMaker: {
		uri: string;
		workspace: string;
		username: string;
		password: string;
	};

	rightSignature: {
		url: string;
	};

	practicePanther: {
		url: string;
		redirect: string;
		clientId: string;
		clientSecret: string;
	};

	daylite: {
		authUrl: string;
		tokenUrl: string;
		redirect: string;
		apiUrl: string;
		grantType: string;
		clientId: string;
		clientSecret: string;
	};

	quickbooks: {
		redirect: string;
		clientId: string;
		clientSecret: string;
		environment: string;
	};

	zoho: {
		apiUrl: string;
		database: string;
		watchBody: any;
		coql: any;
	};

	mysql?: {
		host: string;
		username: string;
		password: string;
	};

	amity?: {
		workspaceId: string;
		clientId: string;
		clientSecret: string;
		host: string;
	};

}

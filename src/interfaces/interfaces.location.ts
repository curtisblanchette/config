interface IServiceLocations {
	app: string;
	api: string;
	papi: {
		url: string;
		authUrl: string;
		tagMigrationUrl: string;
		workspaceUrl: string;
		processAPIUrl: string;
	};

	migration?: {
		folder: {
			manifests: string;
		}
	};
}

interface IVendorLocations {
	slack: string;
	callTrackingMetrics: string;
	elastic: string;
	hubspot: { 
		url: string;
		redirect: string;
	};
	infusionSoft: string;
	nextivia: string;
	office365: {
		auth: string;
		redirect: string;
	};
	google: {
		url: string;
		redirect: string;
	};
	processMaker: string;
	rightSignature: string;
	practicePanther: {
		url: string;
		redirect: string;
	};
	zoho: {
		apiUrl: string;
		bulkAPIUrl: string;
	};
}

export interface ILocationConfig {
	services: IServiceLocations;
	vendors: IVendorLocations;
}

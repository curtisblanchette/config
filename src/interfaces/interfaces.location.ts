interface IServiceLocations {
	dominion: {
		client: string;
		api: string;
	}
}

interface IVendorLocations {
	slack: string;
	office365: {
		auth: string;
		redirect: string;
	};
	google: {
		url: string;
		redirect: string;
	};
}

export interface ILocationConfig {
	services: IServiceLocations;
	vendors: IVendorLocations;
}

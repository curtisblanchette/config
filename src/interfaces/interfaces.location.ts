export interface ILocationConfig {
	services: {
		dominion: {
			client: string;
			api: string;
		}
	};
	vendors: {
		slack: string;
		jira: {
			oAuthUrl: string;s
		}
	};
}

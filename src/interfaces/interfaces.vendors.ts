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
			sns: {
				errorParserArn: string;
			};
			rds: {
				aurora: {
					endpoints: {
						write: string;
						read: string;
					}
				}
			}
		};
	};
}

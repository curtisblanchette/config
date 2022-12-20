import YAML from 'yamljs';

export function getS3Config( format='object' ){

	const AWS = require('aws-sdk');
	const region = "us-west-2";

	const Bucket = "dominion-config";
	const Key = `${process.env.NODE_ENV}.yml`;
	const s3 = new AWS.S3({ region });

	return new Promise((resolve, reject) => {
		
		s3.getObject({ Bucket, Key }, (err, yamlBuffer)=>{
		
			if( err ){
				return reject( err );
			}

			const yamlConfig = new Buffer(yamlBuffer.Body).toString('utf8');
			
			switch( format ){

				default:
				case 'yaml':
					return resolve(yamlConfig);
				
				case 'object':
					return resolve(YAML.parse( yamlConfig ));

				case 'json':
					return resolve(JSON.stringify( YAML.parse( yamlConfig )));

			}

		});

	});

}

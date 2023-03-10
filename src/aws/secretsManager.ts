import { GetSecretValueCommand, SecretsManagerClient } from '@aws-sdk/client-secrets-manager';

export async function getSecret( name:string ) {

  // const stack = process.env.STACK || process.env.NODE_ENV || 'dev';
	
	// Use this code snippet in your app.
	// If you need more information about configurations or implementing the sample code, visit the AWS docs:
	// https://aws.amazon.com/developers/getting-started/nodejs/

	// Load the AWS SDK
	const region = "us-west-2";
	const secretName = process.env.NODE_ENV; // `${stack}/${name}`;

	// Create a Secrets Manager client
	const client = new SecretsManagerClient({
		region
	});

	// In this sample we only handle the specific exceptions for the 'GetSecretValue' API.
	// See https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
	// We rethrow the exception by default.
	const getSecretValue = new GetSecretValueCommand({SecretId: secretName})
	return client.send(getSecretValue).then(data=>{
		
		if ('SecretString' in data) {
			return JSON.parse(data.SecretString);
		} else {
			const buff = new Buffer(data.SecretBinary as any, 'base64');
			return buff.toString('ascii');
		}

	})
	.catch(err=>{
		if (err.code === 'DecryptionFailureException'){
			// Secrets Manager can't decrypt the protected secret text using the provided KMS key.
			// Deal with the exception here, and/or rethrow at your discretion.
			throw err;
		}
		else if (err.code === 'InternalServiceErrorException'){
			// An error occurred on the server side.
			// Deal with the exception here, and/or rethrow at your discretion.
			throw err;
		}
		else if (err.code === 'InvalidParameterException'){
			// You provided an invalid value for a parameter.
			// Deal with the exception here, and/or rethrow at your discretion.
			throw err;
		}
		else if (err.code === 'InvalidRequestException'){
			// You provided a parameter value that is not valid for the current state of the resource.
			// Deal with the exception here, and/or rethrow at your discretion.
			throw err;
		}
		else if (err.code === 'ResourceNotFoundException'){
			// We can't find the resource that you asked for.
			// Deal with the exception here, and/or rethrow at your discretion.
			throw err;
		}
		else {
			// do nothing
		}
	});
			

}

# Config Package

<img src="https://img.icons8.com/ios/96/000000/services.png" align="left"/>

The config package provides access to two levels of stored configurations: secret keys 
and settings. Secret keys are stored in AWS Secrets Manager and settings are stored in 
AWS S3. This package extracts the configuration values at runtime and can re-request 
the configuration without restarting the service it is imported into. This package must 
be imported into a lambda function in order to access the AWS services it needs to provide 
the configurations.

## Installation

```
npm install @trichome/config
```

## Environment Variables

Config requires an environment to be set in order to target the correct configuration. 
This is set with the `STACK` environment variable. For backwards compatibility, if `STACK` 
cannot be found, the `NODE_ENV` enironment variable is read, and then the explicit 
string `dev`.

## Usage

```
import { * as Config } from '@trichome/config`;

// read the remote config
let config = Config.read();

// get the most recent read of the remote configuration
// if no read has been completed, do one now and store it to speed up the next call
// @returns Promise<IConfig>
let config = Config.get();

// Retrieve the configuration
// Set the configuration to update itself every day
// @returns Promise<IConfig>
let config = Config.refresh(86400);
```

All of the Config functions are ASYNC functions, and therefore return promises. The 
following are several strategies you can use to read a config effectively:

### Example 1: Update on Service Start
This example will load the configuration when the server is started and never update 
it until the server is restarted.

server.ts
```
import { * as Config } from '@trichome/config`;
Config.read();
```

module.ts
```
import { * as Config } from '@trichome/config`;

export class SomeClass {

	async functionName(){

		const config = await Config.get();

	}

}
```

### Example 2: Update Every Day
This example will load the configuration when the server is started and update it every day.

server.ts
```
import { * as Config } from '@trichome/config`;
Config.read();
Config.refresh(); // defaults to 
```

module.ts
```
import { * as Config } from '@trichome/config`;

export class SomeClass {

	async functionName(){

		const config = await Config.get();

	}

}
```

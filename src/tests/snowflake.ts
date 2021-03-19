/* tslint:disable */
process.env.STACK = 'dossier';

import { expect } from 'chai';
import * as Config from '../';

let config;

describe('Configuration', () => {
	
	before('Preload Config so AWS is called only once: ', ()=>{
		return Config.get().then(value=>{
			config = value;
			return;
		});
	});

	it('Should have all required settings', () => {

		expect(config.sources.snowflake.database).to.exist;
		expect(config.sources.snowflake.username).to.exist;
		expect(config.sources.snowflake.password).to.exist;
		expect(config.sources.snowflake.region).to.exist;
		expect(config.sources.snowflake.database).to.exist;
		expect(config.sources.snowflake.schema).to.exist;
		expect(config.sources.snowflake.warehouse).to.exist;
		expect(config.sources.snowflake.defaultTimeout).to.exist;

	});
	
	it('Should have correct Snowflake account', () => {
		
		expect(config.sources.snowflake.account).to.equal('db97461');

	});

	it('Should be in correct region (us-east-1)', () => {
		
		expect(config.sources.snowflake.region).to.equal('us-east-1');

	});

	it('Should have optimal billing values as defaults', () => {
		
		expect(config.sources.snowflake.warehouse).to.equal('OPERATING_XS');
		expect(config.sources.snowflake.defaultTimeout).to.be.lessThan(300);

	});

});

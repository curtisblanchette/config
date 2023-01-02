import * as Config from './index';

(async () => {

  const config = await Config.get();
  console.log(config);

})()

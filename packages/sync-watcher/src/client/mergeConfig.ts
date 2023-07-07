/* --- merge default & customize args --- */
import path from 'path';
import * as fs from 'fs-extra';
import defaultConfig from '../config/simple-dev-sync.config.default';

const getConfig = () => {
  const config = defaultConfig;
  try {
    // get customize config
    const customConfigUrl = path.join(process.cwd(), 'simple-dev-sync.config.js');

    if (fs.pathExistsSync(customConfigUrl)) {
      // if customize config exist
      const customConfig = require(customConfigUrl);
      Object.assign(config, customConfig);
    }
  } catch (e) {
    console.error('mergeArgs error', e);
  }
  return config;
};


export default getConfig;

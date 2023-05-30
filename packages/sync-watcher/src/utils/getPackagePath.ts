import {homedir} from 'os';

const {join} = require('path');

const userHome = homedir();

const getStoreMainDir = () => {
  // TODO test in windows whether is precise
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    return join(process.env.LOCALAPPDATA, 'Yalc');
  }
  return join(userHome, '.yalc');
};

const getPackagePath = (packageName: string): string => {
  return join(getStoreMainDir(), 'packages', packageName);
};

module.exports = getPackagePath;

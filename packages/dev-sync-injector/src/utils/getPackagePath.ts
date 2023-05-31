import { homedir } from 'os';
import fs from 'fs-extra';
import { join } from 'path';

const userHome = homedir();

const getStoreMainDir = () => {
  // TODO test in windows whether is precise
  if (process.platform === 'win32' && process.env.LOCALAPPDATA) {
    return join(process.env.LOCALAPPDATA, 'Yalc');
  }
  return join(userHome, '.yalc');
};

const getPackageStorePath = (packageName: string, version = ''): string => {
  return join(getStoreMainDir(), 'packages', packageName, version);
};

const getLatestPackageVersion = (packageName: string) => {
  const dir = getPackageStorePath(packageName);
  const versions = fs.readdirSync(dir);
  const latest = versions
    .map((version) => ({
      version,
      created: fs.statSync(join(dir, version)).ctime.getTime(),
    }))
    .sort((a, b) => b.created - a.created)
    .map((x) => x.version)[0];
  return latest || '';
};

const getPackageFullPath = (packageName: string): string => {
  return getPackageStorePath(packageName, getLatestPackageVersion(packageName));
};

const getAllPackageStorePath = () => {
  const rootPackageStorePath = join(getStoreMainDir(), 'packages');
  const packageList = fs.readdirSync(rootPackageStorePath);
  return packageList.reduce((previousValue: { [key: string]: string }, currentValue: string) => {
    previousValue[currentValue] = getPackageFullPath(currentValue);
    return previousValue;
  }, {});
};

export {getPackageFullPath, getAllPackageStorePath};

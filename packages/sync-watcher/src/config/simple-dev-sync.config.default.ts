import path from 'path';

/* ------ default config ------ */
const config = {
  // Directory containing the source code that needs to be monitored for changes.
  watchedDirectory: [path.join(process.cwd(), 'src')],
  // List containing the extension that needs to be monitored for changes.
  // If both watchedDirectory and watchedExtensionList are enabled,
  // this toolkit will monitor files of the specified extension under the directory.
  watchedExtensionList: ['js', 'ts', 'json'],
  // This Script will be executed before yalc push.
  // You can do something there, such as: `yarn run build`
  // Please note that the scripts written here should be executable directly in the command line.
  scriptBeforePush: '',
};

export default config;

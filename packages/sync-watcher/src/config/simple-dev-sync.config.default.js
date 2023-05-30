const path = require('path');

/* ------ default config ------ */
const config = {
  // Directory containing the source code that needs to be monitored for changes.
  watchedDirectory: [path.join(process.cwd(), 'src')],
  // List containing the extension that needs to be monitored for changes.
  // If both watchDir and watchedExtensionList are enabled,
  // this toolkit will monitor files of the specified extension under the directory.
  watchedExtensionList: ['js', 'ts', 'json'],
};

module.exports = config;

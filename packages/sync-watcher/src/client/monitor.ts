import nodemon from 'nodemon';
import getConfig from './mergeConfig';
import path from 'path';

const runNodemon = () => {
  const { watchedDirectory, watchedExtensionList } = getConfig();

  /* --- Start nodemon --- */
  nodemon({
    script: path.join(__dirname, "./restart"),
    watch: watchedDirectory,
    ext: watchedExtensionList.join(','),
  });

  console.log('----nodemon init---');

  nodemon.on('quit', function () {
    console.log('---quit');
    // console.log('\n(To exit, press Ctrl+C again or Ctrl+D or type .exit)');
    // process.exit();
  });
};

export default runNodemon;

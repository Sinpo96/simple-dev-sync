import { Compiler } from 'webpack';
import { getAllPackageStorePath } from '../utils/getPackagePath';

class Plugin {
  private options: object;

  constructor(options: object) {
    this.options = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.environment.tap('dev-sync-injector', () => {
      const webpackConfig = compiler.options;

      if (!webpackConfig.resolve) {
        webpackConfig.resolve = {};
      }

      if (!webpackConfig.resolve.alias) {
        webpackConfig.resolve.alias = {};
      }

      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        ...getAllPackageStorePath()
      };

      console.log('webpackConfig.resolve.alias', webpackConfig.resolve.alias);
    });
  }
}

export default Plugin;

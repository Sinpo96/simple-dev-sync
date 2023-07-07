import { Compiler } from 'webpack';
import colors from 'colors';
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

      console.log(colors.yellow('\ndev-sync-injector injecting packages...'));
      console.log(colors.green('\nwebpackConfig.resolve.alias'), webpackConfig.resolve.alias);
    });
  }
}

export default Plugin;

import { Compiler, Configuration } from 'webpack';
import getPackagePath from '../utils/getPackagePath';

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

      // TODO traverse yalc root package store to add package path into alias
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        // TODO need to add version in the path
        // 'simplify-yalc-dev': `${getPackagePath('simplify-yalc-dev')}/1.0.0/`
        'simplify-yalc-dev': '/Users/sinpo/.yalc/packages/simplify-yalc-dev/1.0.0'
      };

      console.log('webpackConfig.resolve.alias', webpackConfig.resolve.alias);
    });
  }
}

export default Plugin;

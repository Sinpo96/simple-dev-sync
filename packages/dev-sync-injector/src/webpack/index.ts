import { Compiler, Configuration } from 'webpack';
import getPackagePath from '../utils/getPackagePath';

class Plugin {
  private options: object;

  constructor(options: object) {
    this.options = options;
  }

  apply(compiler: Compiler) {
    compiler.hooks.emit.tap('dev-sync-injector', (compilation) => {
      const webpackConfig = compilation.options as Configuration;

      if (!webpackConfig.resolve) {
        webpackConfig.resolve = {};
      }

      if (!webpackConfig.resolve.alias) {
        webpackConfig.resolve.alias = {};
      }

      // TODO traverse yalc root package store to add package path into alias
      webpackConfig.resolve.alias = {
        ...webpackConfig.resolve.alias,
        'simplify-yalc-dev': getPackagePath('simplify-yalc-dev')
      };

      console.log('webpackConfig', webpackConfig.resolve.alias);
    });
  }
}
export default Plugin;
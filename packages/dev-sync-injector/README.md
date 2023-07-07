[中文版](https://github.com/Sinpo96/simple-dev-sync/blob/master/packages/dev-sync-injector/README.cn.md)
# Dev-Sync-Injector


Dev-Sync-Injector is a plugin designed to be used by compilation tools.

It injects synchronization code during development to enable live reloading and hot module replacement.

## Usage
### In the Project
Note that to use the hot-reloading feature, you need to first include the local `package` in your project.

#### Note
- When used in conjunction with the package [sync-Watcher](https://www.npmjs.com/package/sync-watcher?activeTab=readme), after starting `sync-watcher`, it will automatically publish your package to the local `npm store`.


- If you are using the `dev-sync-injector` plugin separately, you need to manually execute `yalc publish` to publish the package you want to debug to the local `npm store`.

#### Import
Using the example of the `testProject` package (already published to the local `npm store`):

First, add `testProject` to your project where you will start Webpack, using `yalc add testProject`, to make `testProject` available in the local `npm store`.

Please note that without this step, your `package` will not be properly monitored for synchronization!

Then, import it into your project code:

```javascript
// First, import the test project
import testProject from 'testProject';
// Then, use the project
testProject();
```

### In Webpack
To use Dev Sync Injector in Webpack, follow these steps:

1. Install the package via npm or yarn:
   ```bash
   npm install dev-sync-injector --save-dev

2. Import the plugin in your Webpack configuration file:
   ```javascript
   const { webpackPlugin: DevSyncInjector } = require('dev-sync-injector');
   
3. Add the plugin to the `plugins` section of your Webpack configuration:
   ```javascript
   plugins: [new DevSyncInjector()]

4. Build your project using Webpack, and the Dev Sync Injector plugin will be applied.

### In Rollup
coming soon...

### In Vite
coming soon...

# Compatibility
Dev-Sync-Injector currently only supports Webpack 4 and below.

Support for Vite and Rollup will be added in the near future.

Please note that Dev-Sync-Injector and [Sync-Watcher](https://www.npmjs.com/package/sync-watcher?activeTab=readme) are not tightly coupled and can work independently. They serve different purposes but can complement each other if needed.

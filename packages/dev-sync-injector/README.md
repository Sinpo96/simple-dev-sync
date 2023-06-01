# Dev-Sync-Injector

Dev-Sync-Injector is a plugin designed to be used by compilation tools.

It injects synchronization code during development to enable live reloading and hot module replacement.

## Usage

### In Webpack
To use Dev Sync Injector in Webpack, follow these steps:

1. Install the package via npm or yarn:
   ```bash
   npm install dev-sync-injector --save-dev

2. Import the plugin in your Webpack configuration file:
   ```javascript
   const DevSyncInjector = require('dev-sync-injector');
   
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

Please note that Dev-Sync-Injector and Sync-Watcher are not tightly coupled and can work independently. They serve different purposes but can complement each other if needed.

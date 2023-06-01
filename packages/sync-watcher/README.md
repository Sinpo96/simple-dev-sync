[中文版](https://github.com/Sinpo96/simple-dev-sync/blob/master/packages/sync-watcher/README.cn.md)
# Sync-Watcher

To start the sync-watcher, follow these instructions:

- If you have installed sync-watcher globally, simply execute the command `sync-watcher`.
- If you have installed sync-watcher within your project scope, execute the command `npx sync-watcher`.

---

The sync-watcher provides an opportunity for custom configuration.

You can create a file named `simplify-yalc-dev.config.js` in the root directory of your npm package source code.

This file accepts two parameters:
- `watchedDirectory`: Specifies the directory to monitor for changes. The default value is `src`.
- `watchedExtensionList`: Specifies the list of file extensions to watch. The default value is `js`, `ts`, and `json`.

Please note that the `simplify-yalc-dev.config.js` file is not mandatory. If not provided, the sync-watcher will use the default values mentioned above.

# Sync-Watcher && Dev-Sync-Injector

The sync-watcher can be used in conjunction with the [dev-sync-injector](https://www.npmjs.com/package/dev-sync-injector), but please note that it is not mandatory.

They are independent and can be enabled separately.


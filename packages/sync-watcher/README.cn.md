[EngLish](https://github.com/Sinpo96/simple-dev-sync/blob/master/packages/sync-watcher/README.md)

# Sync-Watcher

要启动 `sync-watcher`，请按照以下说明操作:

- 如果你已经全局安装了 `sync-watcher`，只需执行命令 `sync-watcher`
- 如果你仅在项目范围内安装了`sync-watcher`，请执行命令 `npx sync-watcher`

---

`Sync-watcher`可以接收用户的自定义配置

你可以在你开发的 `npm` 包源代码的根目录下创建一个名为 `simplify-yalc-dev.config.js` 的文件。

该文件接受两个参数：
- `watchedDirectory`: 指定要监视变化的目录。默认值为 `src`
- `watchedExtensionList`: 指定要监视的文件扩展名列表。默认值为 `js`、`ts` 和 `json`

请注意，`simplify-yalc-dev.config.js` 文件是可选的。

如果不提供，`sync-watcher` 将使用上述默认值。

# Sync-Watcher && Dev-Sync-Injector

sync-watcher 可以与 [dev-sync-injector](https://www.npmjs.com/package/dev-sync-injector) 结合使用，但请注意这并非强制要求。

它们是独立的，可以单独启用。

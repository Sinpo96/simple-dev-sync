[EngLish](https://github.com/Sinpo96/simple-dev-sync/blob/master/packages/dev-sync-injector/README.md)

# Dev-Sync-Injector

`Dev-Sync-Injector `是一个专为编译工具设计的插件.

它在开发过程中注入同步代码，以实现实时重载和热模块替换

## 使用

---
### 在项目中
注意，想要使用热更新功能，得先在项目中引入本地的`package`


#### 注意
- 搭配使用[sync-Watcher](https://www.npmjs.com/package/sync-watcher?activeTab=readme)这个包时，启动`sync-watcher`之后，`sync-watcher`会自动将你的包发布到本地的`npm store`


- 如果单独使用`dev-sync-injector`这个插件，则需要手动执行`yalc publish`将待调试的包发布到本地的`npm store`

#### 导入
以 `testProject` 这个测试用的package为例（已发布到本地的`npm store`的场景下）


需要先在待启动`Webpack`的项目中，`yalc add testProject`，让`testProject`走到本地的`npm store`

请注意，如果没有这一步，你的`package`将无法被正确监听去同步！

然后在项目代码中引用
```javascript
// 首先，导入测试项目
import testProject from 'testProject'
// 然后，使用项目
testProject()
```

---

### 在 Webpack 中
要在 Webpack 中使用 Dev Sync Injector，请按照以下步骤进行操作：

1. 通过 `npm` 或 `yarn` 安装该包:
   ```bash
   npm install dev-sync-injector --save-dev

2. 在 `Webpack` 配置文件中导入:
   ```javascript
   const DevSyncInjector = require('dev-sync-injector');

3. 将插件添加到 Webpack 配置的 `plugins` 部分:
   ```javascript
   plugins: [new DevSyncInjector()]

4. 启动 `Webpack`.

### In Rollup
即将推出...
### In Vite
即将推出...

# 兼容性

`Dev-Sync-Injector` 目前仅支持 `Webpack 4` 及以下版本。

将来将添加对 `Vite` 和 `Rollup` 的支持。

请注意，Dev-Sync-Injector 和 [Sync-Watcher](https://www.npmjs.com/package/sync-watcher?activeTab=readme) 并不是紧密耦合的，它们可以独立工作。它们有不同的用途，但如果需要，它们可以组合使用。

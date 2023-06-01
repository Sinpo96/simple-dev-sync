[EngLish](./README.md)

# simple-dev-sync

## 描述

`simple-dev-sync` 是一个旨在通过自动化重复任务来增强 npm 包开发体验的工具包。

它旨在解放开发者，使他们摆脱繁琐和重复的工作，让他们专注于编写代码。

## 功能

### [Sync-Watcher](./packages/sync-watcher/README.md)
`simple-dev-sync`的同步监视器组件负责监视源代码的变化。 它会检测文件的修改并相应地触发操作。

### [Dev-Sync-Injector](./packages/dev-sync-injector/README.md)
`dev-sync-injector`组件负责触发构建工具（如 `webpack`、`vite` 或 `rollup`）的更新。

它确保你的项目与代码库中的最新更改保持同步。

## 前提

在使用 `simple-dev-sync` 之前，请确保全局安装了 `yalc`。

你可以通过运行以下命令来安装它：`npm install -g yalc`



## Installation

要安装 `simple-dev-sync`，你可以使用 `npm` 或 `yarn`：

`npm install simple-dev-sync --save-dev`

or

`yarn add simple-dev-sync --dev`

# Acknowledgements
- simple-dev-sync 基于 `yalc` 包

# Support
如果你遇到任何问题或有疑问，请在 [Github](https://github.com/Sinpo96/simple-dev-sync/) 上提一个`issue`。





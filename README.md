[中文版](https://github.com/Sinpo96/simple-dev-sync/blob/master/README.cn.md)

# Simple-dev-sync

## Description

simple-dev-sync is a package designed to enhance the development experience of npm packages by automating repetitive tasks. It aims to free developers from tedious and repetitive labor, allowing them to focus on writing code.

## Features

### [Sync-Watcher](./packages/sync-watcher/README.md)
The sync-watcher component of simple-dev-sync is responsible for monitoring changes in your source code.

It detects file modifications and triggers actions accordingly.

### [Dev-Sync-Injector](./packages/dev-sync-injector/README.md)
The dev-sync-injector component is responsible for triggering updates in your build tools such as webpack, vite, or rollup.

It ensures that your project stays in sync with the latest changes in your codebase.

## Prerequisites

Before using simple-dev-sync, make sure you have yalc installed globally. 

You can install it by running the following command: `npm install -g yalc`



## Installation

To install simple-dev-sync, you can use npm or yarn:

`npm install simple-dev-sync --save-dev`

or

`yarn add simple-dev-sync --dev`

# Acknowledgements
- simple-dev-sync is based on the `yalc` package.

# Support
If you encounter any issues or have questions, please open an issue on [Github](https://github.com/Sinpo96/simple-dev-sync/).

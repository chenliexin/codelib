weex
  跨平台，多端共用代码
  目前主要支持 Vue.js 和 Rax 这两个前端框架。
  Rax 兼容 React 接口的前端框架。

项目初始化
weex-toolkit 只支持创建 Vue.js 的项目。创建 Rax 的项目可以使用 rax-cli

```sh
npm install weex-toolkit -g
weex create awesome-app
cd awesome-app
npm install
npm start
```
默认情况下 weex create 命令并不初始化 iOS 和 Android 项目，你可以通过执行 weex platform add 来添加特定平台的项目。

```sh
weex platform add ios
weex platform add android
```


API 内置组件 内置模块

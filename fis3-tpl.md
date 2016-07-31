
> fis3 project template 2016.05.19

这是一套基于fis3的前端自动化构建工作流，对39现用工作流程进行迭代升级

## 实现目标

- html的include功能，实现代码单一管理
- html引用资源路径自动修改
- sass自动编译
- css自动压缩
- css合并压缩
- css加hash，实现非覆盖更新
- js的include功能，实现模块化管理
- js自动压缩
- js合并压缩
- js es6转es5
- js加hash，实现非覆盖更新
- img自动压缩
- img自动拼图合并生成并替换被应用路径
- img加hash，实现非覆盖更新
- 前端包管理

## 技术栈

- `nodejs` 自动化运行环境
- `npm` node模块管理
- `fis3` 完整的自动化构建环境
- `bower` 前端包管理
- `sass` css预处理器

## 文件目录

### 根目录

- `.bowerrc`, `bower.json` bower配置文件
- `.gitignore` git忽略路径配置文件
- `package.json` npm配置文件
- `fis-conf.js` fis3配置文件

### /source

源码目录，包括`images`, `style`, `script`, `view`

### /widget

组件目录，包括`lib`, `tpl`

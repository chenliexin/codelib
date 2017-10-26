

# babel

babel是一个编译器，一般包括三步：解析parsing, 转换transforming, and 生成generation

### .babelrc

可以在package.json中通过babel属性使用
可以通过env属性设置特定环境下的配置，优先度
  process.env.BABEL_ENV
  process.env.NODE_ENV
  "development"

### babel-cli

babel的命令行工具，包含两个命令：babel、babel-node 
虽然全局安装较为方便，但还是建议安装在项目里面
babel-node相当于babel&node。不应该用于生产环境，这是个实时编译，占用内存的方案

### babel-register

其中一种使用babel的方式就是引用钩子（require hook）
使用 require("babel-register"); 所有 .es6, .es, .jsx and .js都被转换
在使用某些未来功能的时候，需要用到polyfill，但是它不会被转换
默认忽略node_modules，可以通过ignore:false开启
babel-node and babel-register会通过json进行编译缓存
  BABEL_CACHE_PATH可以配置缓存路径
  BABEL_DISABLE_CACHE=1可以配置是否缓存

### babel-core

核心

### babel-polyfill

垫片

### plugins

插件影响的是babel的第二步，转换
presets
  babel-preset-env replaces es2015, es2016, es2017, latest




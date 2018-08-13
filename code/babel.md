> 2018.8.13

# babel
- 将es5+转换为es5的js编译器
- 稳定版`6.x`
- 编译过程
  - `解析`，将代码解析成`抽象语法树`
    - babylon，js解析器
  - `转换`，将抽象语法树转换为ES5抽象语法树
  - `生成`，将ES5抽象语法树生成代码

# .babelrc

# babel-cli

# plugin/preset
- babel-preset-env
  - 等于es2015之后的全部版本
  - 每年每个preset只编译当年批准的内容
- babel-preset-react
- babel-preset-flow

# babel-polyfill
- babel只进行语法转换，用babel-polyfill来支持新的全局变量，如Promise等
  - 底层依赖`core-js`，用ES3实现了大部分的ES2017原生标准库，同时严格遵循规范
  - regenerator

# babel-register
- 一个使用 Babel 的方法是通过 require 钩子。 require 钩子会将自己绑定到 node 的 require 上并自动编译文件。



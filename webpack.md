
# webpack

概念
    模块打包器(module bundler)
    递归构建一个依赖关系图(dependency graph)
    打包成少量的 bundle - 通常只有一个
    高度可配置的
    资源(assets)
    生成(emit)
    四个核心概念：入口(entry)、输出(output)、loader、插件(plugins)
    入口
        “可扩展的 webpack 配置”是指，可重用并且可以与其他配置组合使用。这是一种流行的技术，用于将关注点(concern)从环境(environment)、构建目标(build target)、运行时(runtime)中分离。然后使用专门的工具（如 webpack-merge）将它们合并。
        使用 CommonsChunkPlugin 为每个页面间的应用程序共享代码创建 bundle。由于入口起点增多，多页应用能够复用入口起点之间的大量代码/模块，从而可以极大地从这些技术中受益。
    输出
        最低要求是 filename 用于输出文件的文件名。目标输出目录 path 的绝对路径。
        占位符(substitutions)
        使用 CDN 和资源 hash 的复杂示例：publicPath: "http://cdn.example.com/assets/[hash]/"
        编译时不知道 publicPath，你可以先忽略它，并且在入口起点设置 __webpack_public_path__。
    loader
        当遇到(test 属性)的路径时候，先用(use 属性)将其转换
        loader 类似于其他构建工具中“任务(task)”
        使用方式
            配置（推荐）:module.rules 允许你在 webpack 配置中指定多个 loader。
            内联：import Styles from 'style-loader!css-loader?modules!./styles.css';使用 ! 将资源中的 loader 分开
            CLI：webpack --module-bind 'css=style-loader!css-loader'
        特性
            loader 支持链式传递。一组链式的 loader 将按照先后顺序进行编译。
            loader 接收查询参数。用于对 loader 传递配置。loader 也能够使用 options 对象进行配置。
            插件(plugin)可以为 loader 带来更多特性。
    插件
        插件更常用于（但不限于）在打包模块的 “compilation” 和 “chunk” 生命周期执行操作和自定义功能
        插件目的在于解决 loader 无法实现的其他事。
        由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例。
    配置
        最简单配置包含入口和输出
    模块
        在模块化编程中，开发者将程序分解成离散功能块(discrete chunks of functionality)，并称之为模块。
        每个模块具有比完整程序更小的接触面，使得校验、调试、测试轻而易举。
        ES2015 import 语句
        CommonJS require() 语句
        AMD define 和 require 语句
        css/sass/less 文件中的 @import 语句。
        样式(url(...))或 HTML 文件(<img src=...>)中的图片链接(image url)
    模块解析
        webpack 使用 enhanced-resolve 来解析文件路径
        绝对路径
        相对路径
        模块路径
            模块将在 resolve.modules 中指定的所有目录内搜索。 你可以替换初始模块路径，此替换路径通过使用 resolve.alias 配置选项来创建一个别名。
            如果路径指向一个文件：如果路径具有文件扩展名，则被直接将文件打包。否则，将使用 [resolve.extensions] 选项作为文件扩展名来解析
            如果路径指向一个文件夹：如果文件夹中包含 package.json 文件，则按照顺序查找 resolve.mainFields 配置选项中指定的字段。并且 package.json 中的第一个这样的字段确定文件路径。如果 package.json 文件不存在或者 package.json 文件中的 main 字段没有返回一个有效路径，则按照顺序查找 resolve.mainFiles 配置选项中指定的文件名，看是否能在 import/require 目录下匹配到一个存在的文件名。文件扩展名通过 resolve.extensions 选项采用类似的方法进行解析。
    依赖图
        对于 HTTP/1.1 客户端，由 webpack 打包你的应用程序会尤其强大，因为在浏览器发起一个新请求时，它能够减少应用程序必须等待的时间。对于 HTTP/2，你还可以使用代码拆分(Code Splitting)以及通过 webpack 打包来实现最佳优化。
    runtime/manifest
        __webpack_require__
    构建目标
        默认是 'web'，可省略
    模块热替换(HMR - Hot Module Replacement)
        webpack-dev-server 支持 hot 模式
    ***
        hmr
        runtime
        manifest


安装
    npm install --save-dev webpack
    安装对应的loader
    npm install --save-dev css-loader
    npm install --save-dev ts-loader












CommonJS "同步加载"（synchronous）{模块引用(require)} {模块定义(exports)} {模块标识(module)}
    *nodejs

AMD (Asynchronous Module Definition 异步模块定义)
    *require.js和curl.js
    AMD就只有一个接口：define(id?,dependencies?,factory);
define(['dep1','dep2'],function(dep1,dep2){...});


CMD
define(function(require,exports,module){...});
    *SeaJS
"Common Module Definition"
通用模块定义
Sea.js 更贴近 CommonJS Modules/1.1 和 Node Modules 规范。






SeaJS对模块的态度是懒执行, 而RequireJS对模块的态度是预执行








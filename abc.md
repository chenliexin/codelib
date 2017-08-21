二进制，tcp流，文件流
nodejs
- 非阻塞io
- 事件循环
- 单线程#不会造成死锁

计时器的ref和unref方法


ex6 module: import/export

es6 Class 只是 OOP 语法糖，升级了 es5 构造函数的原型链继承写法

将大程序拆分成相互依赖的小文件，用简单的方法拼装。如其他语言的 require/import

社区约定的模块加载方案：
    CommonJS 用于服务端
    AMD 用于客户端

设计思想：尽量静态化，编译时就能确定依赖关系，以及输入和输出的变量

    AMD Asynchronous Module Definition 异步模块定义
    require([module], callback);
    require.js和curl.js
    define(function(){})
    define([module], function(){})

OSI Open System Interconnection 开放式系统互联
    七层结构
        物理层



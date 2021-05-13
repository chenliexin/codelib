P3-3能力模型（专业能力）
性能调优(1级) 学习级
架构设计(2级) 应用级
编码能力(2级) 应用级
模块设计(2级) 应用级

- 性能调优
  - 听说过雅虎军规吗？（根据回答追问2-3个深入问题）
  - 说一下用过的性能优化方法？（根据回答追问2-3个深入问题）
  - 相关技术点：
    - http相关，https、方法、状态码等
    - dns域名
    - 缓存
    - 加载策略和资源引用方式
    - dom性能
    - css性能相关
    - 图片
    - cookies
    - 重定向
    - cdn
  - 性能监测
    - 工具，devtool审计、Lighthouse等
    - 性能api
  - 说一下对前端安全的理解？（根据回答追问1-2个深入问题）
    - 技术点：
    - xxs，csrf跨站请求伪造，怎么防止
    - 跨域限制了什么，解决方案
    - csp
- 架构设计
  - 你最擅长的框架？试着比较一下三大框架？
  - MVVM和MVC
  - 虚拟dom和dom diff
  - react/vue
    - 组件通讯
    - 生命周期和nextTick
    - 双向数据绑定
    - 状态和属性问题
    - hooks，遵循原则
    - key属性的用处和好处
    - 如有需要，怎么去操作dom
    - 受控和非受控组件
    - 高阶组件/插槽slot
    - children属性包含了什么内容
    - Fragments的作用
    - SSR相关
    - redux核心原则/vuex
      - action和mutation
    - react-router使用/Vue路由守卫
    - 说说你觉得的最佳实践
  - 参见：工程化
  - node相关
    - node特性和核心模块
    - 用过哪些框架，对比一下
    - Cluster模式和pm2
    - 如何debug
    - 包管理器和版本、锁版本等
    - 中间件理解，（洋葱模型），上下文理解
  - 用过的Ui框架
- 编码能力
  - 参见：基本面
  - 小程序
    - 文件结构和原理
    - 页面的生命周期有哪些
    - 页面进入后/离开会触发哪些函数
    - 页面间数据通信的方式（全局globalData，通过url，浏览器存储）
    - 小程序的优化手段
    - 小程序中的异步编程
    - 用什么框架进行开发，了解多端框架吗
- 模块设计
  - 各种模块风格（commonjs、esm、iife等）及其对比
  - 面向对象理解（webmail使用）
  - 常见的异常类型（Error），如何处理异常
  - 常用的工具库
  - 设计模式和数据结构

- 基本面
  - html
    - 语义化的理解
    - html5新增表单特性
    - iframe相关
  - css
    - css选择器及权重
    - 盒模型和布局方式（移动端着重flex弹性布局）
      - 竖直居中问题
      - inline-block空隙问题
    - css单位（移动端着重rem单位使用和优缺点）
      - 1像素问题
    - 动画和过渡
    - 媒体查询
  - js
    - 原型和原型链、闭包、构造函数和实例
    - 闭包、作用域和作用域链（iife使用场景）
    - 拷贝和继承
      - 对象相等问题
    - 严格模式
    - this关键字
    - call、apply、bind
    - 代码执行顺序：同步、async、promise、异步
      - 事件循环
      - 事件委托和代理、冒泡
    - 数学计算问题
      - 0.1+0.2问题
      - 小数位数问题
    - 数组相关（特别是es6中的数据方法）
      - 去重、排序、扁平化、交并补
    - 移动端手势事件
  - es6及以上
    - 解构赋值
    - 同步实现（generator、promis、yield next、await async）
    - 声明类与继承：class、extend
    - 箭头函数和this
    - Set,Map数据结构
    - Class相关
    - 装饰器
  - 浏览器
    - 输入url到看到页面的过程（越细越好，dns、tcp、http、缓存、渲染过程、资源加载过程、js解析、重绘和重布局等）
      - 重绘和重布局相关，引起重布局的因素
    - 浏览器存储：各种storage
  - pwa相关（移动端着重）
    - 特性列举
    - serviceworker
    - cachestroage
    - pwa特性列举，有没有落地过
- 工程化
  - css预处理和后处理
  - babel编译过程的主要步骤
    - babel-preset、babel-register
  - webpakc相关（有没有用过其他打包工具，对比一下）
    - 打包原理
    - 常用插件
    - 热更新原理
    - 什么是treeshaking
    - 打包优化方法
  - runner相关
- 工具或模式
  - git相关
    - 回滚的方式（revert，reset）
    - 分支管理
    - 子模块submodulue
  - 有做code review吗，追问细节
  - restful接口架构的优缺点
  - 命令行和工具
  - 写测试代码，说说看法
- 学习
  - 日常学习方式
  - 如何看待前端接下来的发展
  - 说说你最近接触到的新东西
  - 有自己的项目吗
  - 看源码吗



- 对nodejs有一定使用经验，在ssr、服务部署、热更新等有实践
- 在前端工程化方面，在typescript、webpack、ci有经验
- 对原生js、vuejs等有较深入理解，react落地经验稍少
- 在框架、工具、团队建设和团队协作有自己的理解

# css html
- 选择器权重
- css布局
- animate、svg、canvas
- BEM命名规范
- css预处理后处理
- 更强的语义化
- web存储
- 拥有宽高的行内元素
- Iframe通信
- DPR = 设备像素 / CSS像素
- http请求过程
- 同源策略
- 缓存
- pwa

# js
- DOM事件流三个阶段
- 事件监听、代理、广播
- 页面渲染过程
- JS引擎解释过程
- 闭包、作用域链和原型链、this
- serviceWorker、CacheStorage

# 工程化
- babel
  - 原理，解析、转换、生成
  - 词法分析、语法分析
  - 抽象语法树AST

# es6
- promise

# node
- node介绍
- koa设计理念
- 部署
- 数据库，schema，redis

# 其他
- git、ssh
- 前端安全
- npm发布包

- 类组件和函数组件之间的区别是啥
  - 高阶组件、纯函数
- 副作用
- 操作dom，合成事件
- 什么是 React Fiber
- 如何避免组件的重新渲染
- 真实 DOM 和虚拟 DOM 的区别
  - 你对虚拟 DOM 有什么了解？解释其工作机制
- Redux的理解、运用场景
  - 三大原则：单一数据源、State只读、使用纯函数来执行修改


目标 react nodejs

基础、vue、webpack，nodejs、express和koa，typescirpt


- 支持本地存储，封装较复杂的indexdbAPI成简单的 api使用
- 简单微前端架构的搭建
  - 子应用独立？
- 使用express搭建web服务，提供接口返回pdf

- vue
  - 单向数据流
  - computed 和 watch 的区别和运用的场景
  - 一个数组项赋值
  - 生命周期的理解，ssr
    - 在什么阶段才能访问操作DOM
    - 父组件可以监听到子组件的生命周期
  - 组件中 data 为什么是一个函数
  - Vue 组件间通信有哪几种方式
  - Vuex
  - vue-router 路由模式有几种
    - hash 和 history 
    - 钩子函数
  - Vue 是如何实现数据双向绑定的
  - 优化
  - key的作用
  - 说说你使用 Vue 框架踩过最大的坑是什么？怎么解决的？
  - slot插槽
  - this.$nextTick()  

- typescirpt
  - 使用版本
  - 泛型
  - 定义promise的返回值
  - 大项目里面如何组织类型声明：命名空间、模块
  - 声明文件的作用是
  - 装饰器
  - 重载
  - 声明合并
  - 

- koa
  - express和koa
  - 什么是koa
  - 构造request、response、context对象上下文
  - 错误捕获和错误处理
  - 中间件机制和剥洋葱模型的实现
  - koa中间件有哪些，自己实现的呢

- nodejs
  - 现在的稳定版本是
  - 睡眠5秒
  - 部署
  - buffer和stream
  - node 事件循环机制
  - node全局对象
  - commonjs和esm
  - Node的异步I/O

- 基础
  - 用原生js实现继承的方式有哪些

- 安全
  - csp

- webpack 
  - webpack的基本功能和工作原理？
  - webpack构建过程
  - webpack打包原理
  - webpack如何配置单页面和多页面的应用程序
  - plugin和loader
    - 有哪些常见的Loader？你用过哪些Loader？
    - 自己写过吗
  - 什么是Tree-shaking？CSS可以Tree-shaking？
  - 你用过哪些可以提高效率的插件
  - .source map

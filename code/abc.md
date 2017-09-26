
### html
### css
### javascript
- BOM
  - window、screen、location、history、navigator
  - timer
  - alert、confirm、prompt
  - cookis
- 数据类型
  - 基本类型、引用类型、基本引用类型
  - 基本类型用的是栈内存
  - 引用类型用的是堆内存
  - 深拷贝：递归拷贝或者JSON序列化对象
  - 闭包、作用域、作用域链、原型
- 内置对象
  - Number
  - Boolean
  - String
  - Object
  - Function
  - Array
  - Date
  - RegExp
  - Error
  - Math
  - JSON
  - Global
  - Arguments
- 严格模式
  - 禁止使用全局、with、eval、保留字
  - 不能重名、重复参数、
  - 禁止八进制
  - 不允许对arguments赋值
- script标签中，defer属性使得浏览器延迟脚本的执行直到文档载入和解析完成，async属性使得浏览器可以尽快执行脚本而不阻塞文档解析。async属性优先于defer属性
- 时间线
  - 创建Document对象，解析HTML并添加ELement对象和Text节点，document.readystate = 'loading'
  - 解析HTML过程中，遇到script（非async、非defer）时下载执行并暂停解析器
  - 解析HTML过程中，遇到script（async）时下载但不暂停解析器，并在下载完成后尽快执行
  - 解析HTML完成，document.readystate = 'interactive'
  - script（defer）在此时按出现顺序执行（仍可能有异步脚本未执行）
  - 同步脚本执行完毕，Document对象触发DOMContentLoaded事件（仍可能有异步脚本未执行）
  - 异步事件执行完毕（可能还有其他如图片未完全载入），document.readystate = 'complete'，并Window对象触发load事件

### babel
- 编译器：解析、转换、生成
- 配置 `.babelrc` 或 `package.json [babel]` ，环境配置 `env`
- 命令行 `babel-cli`
- 引用钩子 `babel-register`
- 核心 `babel-core`
- 垫片 `babel-polyfill`
- 插件 `preset-env` 、 `preset-stage` 、 `transform`
### 数据结构
- 栈：后进先出的数据结构，支撑push和pop
- 队列：先进先出的数据结构
- 链表：节点指向对象的数据集合
  - 单链表、双链表、循环链表
- 树：无向、联通的无环图
  - 二叉树：满二叉树、完美二叉树、完全二叉树
  - 树状数组
- 堆
- 哈希
- 指针：指针就是内存地址
- 排序
### http

- url > dns解析出ip > tcp三次握手 > http请求 > http响应或重定向 > 视情况决定释放tcp连接 > 客户端解析html > 资源重新发起http请求
- http请求头
  - Accept, Accept-Charset, Accept-Encoding, Accept-Language
  - Cache-Control, Date, If-Match...
  - Cookie
  - Content-Length, Content-Type
  - Referer
  - User-Agent
- http响应头
  - Cache-Control, Date, ETag, Expires, Last-Modified
  - Content-Encoding, Content-Language, Content-Length, Content-Type
- http状态码
  - 1信息：100继续、101切换协议
  - 2成功：201已创建、202已接受、206部分内容
  - 3重定向：
  - 4客户端错误：400语法错误、401身份认证、403拒绝
  - 5服务端错误：500内部错误、501不支持请求、502网关、503服务维护、505http版本
- 同源：域名、端口、协议
  - 限制：cookie, ajax, iframe, storage
  - 单向跨域
    - jsonp 只支持get
    - proxy 代理
    - cors 跨域资源共享
    - window.name
    - webSocket
  - 双向跨域
    - location.hash
    - postMessage

### https

  - http + 加密 + 认证 + 完整性保护
  - http直接和tcp通信，https通过ssl和tcp通信，通过tls传输
    - ssl，Secure Sockets Layer 安全套接层
    - tls，Transport Layer Security 传输层安全
    - ssl和tls在传输层对网络连接进行加密
  - 通过ssl证书进行认证

### cache

- 分类：数据库、代理服务器、cdn、浏览器
- cdn内容分发网络
  - 包括分布式存储、负载均衡、网络请求的重定向和内容管理4个要件
- 浏览器缓存
  - 请求前：过期策略
    - Cache-Control：no-cache、max-age/s-maxage、max-stale
    - Expires
  - 请求前：协商策略
    - ETag
    - Last-Modified
  - 响应后：存储策略
    - Cache-Control：public/private、no-store、no-cache、max-age/s-maxage
    - Pragma

### dns

- 域名系统：域名和ip相互映射的分布式数据库
- 前端优化
  - 减少dns解析次数
  - dns预获取 `dns-prefetch`

### tcp/ip

- 网络通讯协议，四层
  - 链路层：处理硬件部分
  - 网络层：处理数据包
  - 传输层： `tcp` 、udp
  - 应用层： `dns` 、 `http` 、ftp
- tcp三次握手
  - 客户端发送报文给服务端
  - 服务端收到报文，回应报文
  - 客户端收到报文，连接建立，开始传输数据
- 常用端口
  - 21 ftp
  - 22 ssh
  - 23 telnet
  - 80 http
  - 443 https

### linux

- 指令
  - 文件：cd、ls、mkdir、cat查看、mv移动或重命名、rm、find、grep
  - 系统：stat文件信息、who/whoami、top当前最大开销进程、du目录大小、df磁盘大小、ping、kill
  - 打包压缩：tar、gzip
  - 电源：reboot、halt关机、shutdown
  - vim：q退出、w保存
- 目录
  - bin二进制文件、etc配置、dev设备、tmp临时文件、usr用户、home、boot引导、lib
- ssh

### site

jquery/zepto

stylus
less
css3 animate flex

mustache
pug

git

### 前后端分离
- 大分离：服务端拉数据并渲染
  - 接口校验
- 小分离：客户端拉数据并渲染
  - token
  - MVVM

### node
- 特点：异步I/O、非阻塞、事件、回调、单线程、跨平台
  - 单线程
    - 优点：不用处理状态同步、没有死锁、没有上下文切换开销
    - 缺点：无法利用cpu多核、健壮性、不适合大量计算
    - 解决：使用子进程、pm2模块实现负载均衡
- 核心
  - assert断言、console控制台
  - Buffer缓冲器、stream流、querystring查询字符串、string_decode编码
  - child_process子进程、cluster集群、process进程
  - dns域名服务器、http、https、net网络、url网址
  - Error异常、V8引擎
  - events事件
  - fs文件、module模块、os系统、path路径、Zlib压缩
  - global全局、timer计算器、util工具
### npm
  - 淘宝镜像
- yarn
### koa
### 
seajs
gulp
webpack

spa
vue
react

mocha
tdd

apply




### 前端优化

合并请求、域名拆分、开启Gzip、开启keepalive、Minify

### 设计模式

设计模式（Design pattern）是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。

- 单体模式
  - 命名空间
- 工厂模式：提供创建对象的接口
  - 根据领导（调用者）的指示（参数），生产相应的产品（对象）
  - 简单工厂模式：使用一个类，通常是单体，来生成实例。
  - 复杂工厂模式：
- 外观模式
  - 外观模式就是一个函数，封装了复杂的操作。

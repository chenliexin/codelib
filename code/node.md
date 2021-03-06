




# 版本管理

n, nvm
nvm-windows
    https://github.com/coreybutler/nvm-windows
    nvm-setup.zip
    管理员模式运行
镜像
    https://npm.taobao.org/mirrors/node/
    https://npm.taobao.org/mirrors/npm/




## 兼容性
http://node.green/



作为 Web 应用开发者，
我们不需要知道实现的细节，更不想与这些细节纠缠从而降低开发效率

## 简介

单线程
    避免上下文切换，CPU和内存在同一时间集中处理一件事
    事件队列
    事件循环检查

    异步I/O和事件驱动，替代多线程
异步I/O libeio
    基于事件
    非阻塞：磁盘I/O、网络通信、数据库查询、客户端请求
    事件队列
    回调函数
事件驱动 libev
    所有异步I/O操作都会在完成时发送一个事件到事件队列
    始终在事件循环中
    事件循环是隐式的，对开发者不可见

CommonJS规范
    模块（modules）、包（packages）、系统（system）、二进制（binary）、控制台（console） 、编码（encodings） 、文件系统（filesystems） 、套接字（sockets） 、单元测试（unit testing）

    模块

        一个文件就是一个模块
        require()
        exports
        module.exports
            不可以通过对 exports 直接赋值代替对 module.exports 赋值。exports 实际上只是一个和 module.exports 指向同一个对象的变量，它本身会在模块执行结束后释放，但 module 不会，因此只能通过指定module.exports 来改变访问接口。
    包
        包是实现某功能模块的集合，用于发布和维护
        严格规范
            package.json 必须在根目录
            二进制文件在bin目录
            js代码在lib目录
            文档在doc目录
            单元测试在test目录

??调试
    node debug index.js
    远程调试
        node --debug[=port] index.js
        node --debug-brk[=port] index.js
        Eclipse 调试IDE
        **node-inspector 在线调试

底层C/C++

## 模块

核心模块
    node提供，编译成二进制代码，如 fs、 http、 net、 vm
    最高加载优先级
文件模块
    加载顺序.js .json .node
    按路径加载



## 核心

### process



全局对象global 相当于客户端window
    ??process node进程状态对象 常用于写本地命令行程序
    .argv 运行参数数组 第一个是node 第二个是文件名 往后是一个个参数
    ??.stdout 标准输出流
    ??.stdin 标准输入流
    console
util 提供常用函数集合，弥补js功能过于简单
    util.inherits(constructor, superConstructor)是一个实现对象间原型继承的函数
    util.inspect(object,[showHidden],[depth],[colors])是一个将任意对象转换为字符串的方法，通常用于调试和错误输出
        showHidden true，将会输出更多隐藏信息
        depth 表示最大递归的层数，默认会递归2层，null 表示将不限
        color true，输出格式将会以 ANSI 颜色编码
    util.isArray()、util.isRegExp()、util.isDate()、 util.isError()
    util.format()、 util.debug()
event
    .EventEmitter 只有一个对象，核心是事件监听和发射
        .on(event, listener)
        .emit(event, [arg1], [arg2], [...])  支持多事件监听，并同时按顺序发射
            .emit('error') 如果没有error监听，node会当做异常，退出程序并打印调用栈
        .once(event, listener) 发射后移除监听
        .removeListener(event, listener)
        EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器，如果指定 event，则移除指定事件的所有监听器
    !!大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、 net、http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类
fs
    提供了文件的读取、写入、更名、删除、遍历目录、链接等 POSIX 文件系统操作
    所有的操作都提供了异步的和同步的两个版本
    .readFile(filename,[encoding],[callback(err,data)])
    .readFileSync(filename, [encoding])如果有错误发生， fs 将会抛出异常，你需要使用 try 和 catch 捕捉并处理异常
    .open(path, flags, [mode], [callback(err, fd)])
        flags
            r ：以读取模式打开文件。
            r+ ：以读写模式打开文件。
            w ：以写入模式打开文件，如果文件不存在则创建。
            w+ ：以读写模式打开文件，如果文件不存在则创建。
            a ：以追加模式打开文件，如果文件不存在则创建。
            a+ ：以读取追加模式打开文件，如果文件不存在则创建。
            mode 参数用于创建文件时给文件指定权限，默认是 0666
            回调函数将会传递一个文件描述符 fd
    .read(fd, buffer, offset, length, position, [callback(err, bytesRead,buffer)])
        ??buffer
        从指定的文件描述符 fd 中读取数据并写入 buffer 指向的缓冲区对象。 offset 是buffer 的写入偏移量。 length 是要从文件中读取的字节数。 position 是文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。回调函数传递bytesRead 和 buffer，分别表示读取的字节数和缓冲区对象。
        !!一般来说，除非必要，否则不要使用这种方式读取文件，因为它要求你手动管理缓冲区和文件指针，尤其是在你不知道文件大小的时候，这将会是一件很麻烦的事情
http
    .Server 服务端
        .createServer
            是.Server的一个实例
            请求对象req和响应对象res
        事件
            request 参数 req 和res，分别是http.ServerRequest 和 http.ServerResponse 的实例
            connection
            close
            其他
        http.ServerRequest
            HTTP 请求一般可以分为两部分： 请求头（Request Header）和请求体（Requset Body）。
                控制请求体
                data ：当请求体数据到来时，该事件被触发。该事件提供一个参数 chunk，表示接收到的数据。如果该事件没有被监听，那么请求体将会被抛弃。该事件可能会被调用多次。
                end ：当请求体数据传输完成时，该事件被触发，此后将不会再有数据到来。
                close： 用户当前请求结束时，该事件被触发。不同于 end，如果用户强制终止了传输，也还是调用close。
        http.ServerResponse
            http.ServerResponse 有三个重要的成员函数，用于返回响应头、响应内容以及结束请求
            response.writeHead(statusCode, [headers])：向请求的客户端发送响应头
            response.write(data, [encoding])：向请求的客户端发送响应内容
            response.end([data], [encoding])：结束响应
    客户端
        .request(options, callback) 类似ajax
        .get(options, callback)
        http.ClientRequest 是由 http.request 或 http.get 返回产生的对象，表示一个已经产生而且正在进行中的 HTTP请求。它提供一个 response 事件，即 http.request或 http.get 第二个参数指定的回调函数的绑定对象。我们也可以显式地绑定这个事件
        http.ClientResponse 与 http.ServerRequest 相似





        http.ServerResponse
            response.writeHead(statusCode, [headers]) 向请求的客户端发送响应头
            response.write(data, [encoding]) 向请求的客户端发送响应内容
            response.end([data], [encoding]) 结束响应 参数意义和response.write相同。如果不调用该函数，客户端将永远处于等待状态


### querystring


querystring.stringify(obj,[sep],[eq])
对象格式化成参数字符串 [sep]指分隔符 默认& , [eq]指分配符 默认=

querystring.parse(str, [sep], [eq], [options])
参数字符串格式化成对象

querystring.escape(param)
querystring.unescape(param)
querystring.unescapeBuffer(param)
编码解码

.encode .decode ==? .stringify .parse


### url

url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
解析一个url为各部件
parseQueryString 默认false 是否解析query

url.resolve(from, to) 拼接URL
.resolveObject
url.format(urlObj)  parse的逆向
    href 属性会被忽略处理.
    protocol无论是否有末尾的 : (冒号)，会同样的处理
    这些协议包括 http, https, ftp, gopher, file 后缀是 :// (冒号-斜杠-斜杠).
    所有其他的协议如 mailto, xmpp, aim, sftp, foo, 等 会加上后缀 : (冒号)
    auth 如果有将会出现.
    hostname 如果 host 属性没被定义，则会使用此属性.
    port 如果 host 属性没被定义，则会使用此属性.
    host 优先使用，将会替代 hostname 和port
    pathname 将会同样处理无论结尾是否有/ (斜杠)
    search 将会替代 query属性
    query (object类型; 详细请看 querystring) 如果没有 search,将会使用此属性.
    search 无论前面是否有 ? (问号)，都会同样的处理
    hash无论前面是否有# (井号, 锚点)，都会同样处理
.Url






### 开发框架

express
koa
koa2

### 模板引擎

ejs
[ect](http://ectjs.com/)
handlebars

### 数据库

mongodb
    connect-mongo

### 监听

supervisour


## 工具库

### loadsh

### pm2

steup 第一次发布的时候

版本号格式化
    semver

终端配色
    chalk

终端打开页面
    opn

代理
    http-proxy-middleware






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

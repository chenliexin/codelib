
!这些东西是写中间件的时候用到的

Koa 应用是一个包含一系列中间件 generator 函数的对象。 这些中间件函数基于 request 请求以一个类似于栈的结构组成并依次执行。 

Koa 包含了像 content-negotiation（内容协商）、cache freshness（缓存刷新）、proxy support（代理支持）和 redirection（重定向）等常用任务方法。

 Connect 简单地将控制权交给一系列函数来处理，直到函数返回。 与之不同，当执行到 yield next 语句时，Koa 暂停了该中间件，继续执行下一个符合请求的中间件('downstrem')，然后控制权再逐级返回给上层中间件('upstream')。




? 没明白
应用配置是 app 实例属性，目前支持的配置项如下：
app.name 应用名称（可选项）
app.env 默认为 NODE_ENV 或者 development
app.proxy 如果为 true，则解析 "Host" 的 header 域，并支持 X-Forwarded-Host
app.subdomainOffset 默认为2，表示 .subdomains 所忽略的字符偏移量。

app.listen(...)
    Koa 应用并非是一个 1-to-1 表征关系的 HTTP 服务器。 一个或多个Koa应用可以被挂载到一起组成一个包含单一 HTTP 服务器的大型应用群。
    app.listen(3000); 可以添加好多个
        var http = require('http');
        var koa = require('koa');
        var app = koa();
        http.createServer(app.callback()).listen(3000);        

app.callback()
返回一个适合 http.createServer() 方法的回调函数用来处理请求。 您也可以使用这个回调函数将您的app挂载在 Connect/Express 应用上。

app.use(function)
为应用添加指定的中间件

app.keys=
设置签名Cookie密钥，该密钥会被传递给 KeyGrip。当然，您也可以自己生成 KeyGrip 实例：
app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
在进行cookie签名时，只有设置 signed 为 true 的时候，才会使用密钥进行加密：
this.cookies.set('name', 'tobi', { signed: true });

错误处理
默认情况下Koa会将所有错误信息输出到 stderr，除非 NODE_ENV 是 "test"。为了实现自定义错误处理逻辑（比如 centralized logging），您可以添加 "error" 事件监听器。
app.on('error', function(err){
  log.error('server error', err);
});
如果错误发生在 请求/响应 环节，并且其不能够响应客户端时，Contenxt 实例也会被传递到 error 事件监听器的回调函数里。

app.on('error', function(err, ctx){
  log.error('server error', err, ctx);
});
当发生错误但仍能够响应客户端时（比如没有数据写到socket中），Koa会返回一个500错误(Internal Server Error)。

无论哪种情况，Koa都会生成一个应用级别的错误信息，以便实现日志记录等目的。


Context(上下文)

Koa Context 将 node 的 request 和 response 对象封装在一个单独的对象里面，其为编写 web 应用和 API 提供了很多有用的方法。

这些操作在 HTTP 服务器开发中经常使用，因此其被添加在上下文这一层，而不是更高层框架中，因此将迫使中间件需要重新实现这些常用方法。

context 在每个 request 请求中被创建，在中间件中作为接收器(receiver)来引用，或者通过 this 标识符来引用：

app.use(function *(){
  this; // is the Context
  this.request; // is a koa Request
  this.response; // is a koa Response
});
许多 context 的访问器和方法为了便于访问和调用，简单的委托给他们的 ctx.request 和 ctx.response 所对应的等价方法， 比如说 ctx.type 和 ctx.length 代理了 response 对象中对应的方法，ctx.path 和 ctx.method 代理了 request 对象中对应的方法。


### API

ctx.req Node 的 request 对象
ctx.res Node 的 response 对象
ctx.request Koa 的 Request 对象
    ctx.header
    ctx.method
    ctx.method=
    ctx.url
    ctx.url=
    ctx.originalUrl
    ctx.path
    ctx.path=
    ctx.query
    ctx.query=
    ctx.querystring
    ctx.querystring=
    ctx.host
    ctx.hostname
    ctx.fresh
    ctx.stale
    ctx.socket
    ctx.protocol
    ctx.secure
    ctx.ip
    ctx.ips
    ctx.subdomains
    ctx.is()
    ctx.accepts()
    ctx.acceptsEncodings()
    ctx.acceptsCharsets()
    ctx.acceptsLanguages()
    ctx.get()
ctx.response Koa 的 Response 对象
    ctx.body
    ctx.body=
    ctx.status
    ctx.status=
    ctx.length=
    ctx.length
    ctx.type=
    ctx.type
    ctx.headerSent
    ctx.redirect()
    ctx.attachment()
    ctx.set()
    ctx.remove()
    ctx.lastModified=
    ctx.etag=
ctx.cookies.get(name, [options]) 
ctx.cookies.set(name, value, [options])
ctx.throw(msg, [status])
ctx.respond

# koa2

### koa-generator

如果你喜欢babel + koa2可以参考Minimal koa v2 boilerplate.
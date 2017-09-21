/**
 * koa2
**/
const Koa = require('koa');
const app = new Koa();

app.env = 'dev'; // NODE_ENV, "development"
app.proxy = true; // if true: 则解析 "Host" 的 header 域，并支持 X-Forwarded-Host
app.subdomainOffset = 2; // 2, .subdomains 所忽略的字符偏移量

app.listen(3000);
// or
var http = require('http');
http.createServer(app.callback()).listen(3000);

// middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});
app.use(async ctx => {
  ctx.body = 'Hello World';
});

/**
 * app.keys=
 * 设置签名 cookie 密钥，该密钥会被传递给 KeyGrip
 * 也可以自己生成 KeyGrip 实例作为密钥
 * cookie 签名时，只有设置 signed 为 true，才使用密钥进行加密
**/
app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
ctx.cookies.set('name', 'tobi', { signed: true });

/**
 * app.context
 * 上下文原型
 * 这可能是更高性能的中间件，更少的依赖引入
 * 但可能被认为是一种反模式
**/
app.context.db = db();
app.use(async ctx => {
  console.log(ctx.db);
});

/**
 * 错误处理
 * Koa 会将所有错误信息输出到 stderr，除非 NODE_ENV 是 "test"
 * 自定义错误处理逻辑可以添加 "error" 事件监听器
**/
app.on('error', (err, ctx) => {
  log.error('server error', err, ctx)
});

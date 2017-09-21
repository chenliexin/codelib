const Koa = require('koa');
const koaStatic = require('koa-static');
const app = new Koa();

app.name = 'codelib';
app.env = 'dev';

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(1);
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
  console.log(ctx.body);
});

app.use(koaStatic('img'));

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  console.log(3);
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
  console.log(4);
  return ctx.body = 'Hello World11';
});

// response

app.use(async ctx => {
  console.log(5);
  ctx.body = 'Hello World';
  // ctx.state = 200;
  // ctx.res.end()
  console.log(6);

});

app.listen(3000);

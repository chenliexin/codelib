const Koa = require('koa');
const koaStatic = require('koa-static');
const app = new Koa();

app.use(koaStatic('dist'));

app.use(async ctx => {
  ctx.body = 'Hello World';
});

console.log('localhost:3388');

app.listen(3388);

/**
 * koa-server入口文件
 * @author：Sheldon-Yee
 */

const Koa =  require('koa'),
      koa = require('koa-router')(),
      json = require('koa-json'),
      logger = require('koa-logger'),//引入各种依赖
      bodyparser = require('koa-bodyparser');

const PORT = 8889,
      app = new Koa();
//--------------------------------------------------------------------中间件串联
      app.use(bodyparser());
      app.use(json());
      app.use(logger());

      app.use(async(ctx,next)=>{
          let start = new Date();
          ctx.body = "Hello koa And vue"
          await next();
          let ms = new Date() - start;
          console.log(this.method,this.url,ms);
      })

      app.on('error',(err,ctx)=>{
        console.log('server error', err);
      })

      app.listen(PORT,() => {
          console.log(`Koa is listening in ${PORT}`);
      })

      module.exports = app;
const Koa = require('koa');
const koaRouter = require('koa-router');
const server = require('koa-static');
const path = require('path');

const PORT = 3030;

const app = new Koa();
const router = koaRouter();

app.use(router.routes());

router.get('/index', async (ctx, next)=> {
	ctx.body = 'Hello Koa2.0!';
});

router.get('/user',async (ctx,next)=>{
    ctx.body = "user.html"
})


app.listen(3000, ()=>console.log('Koa start at 3000...'));
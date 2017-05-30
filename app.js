/**
 * Main program input
 * @author：Sheldon-Yee
 */

const path = require('path');
const fs = require('fs');
const jwt = require('koa-jwt');
const server = require('koa-static');//deal with static-resource of html css js or imgs
const router = require('koa-router')();
const logger = require('koa-logger');
const json = require('koa-json')();
const bodyparser = require('koa-bodyparser');
const auth = require('./server/routes/auth.js');
const api = require('./server/routes/api.js')
const Koa = require('koa');
const cors = require('kcors');
const PORT = 7000;
const app = new Koa();

//-------------------------------------------------------------------------middleware
app.use(cors());
app.use(json);
app.use(bodyparser());
app.use(router.routes());
app.use(server(`${__dirname}/dist`));
app.use(logger());
//----------------------------------------------------------------------------


//connect the mongoDB with mongoose 
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/todoDB');
mongoose.connection.on('error',(err)=>{
      console.log('error happen for db'); 
}).once('open',()=>{
      console.log('we are connect') 
})

router.use('/auth',auth.routes());
router.use('/api',api.routes());

app.on('error',(err)=>{
      console.log(`sever error is ${err}`)
})

app.listen(PORT,()=>{
      console.log(`Koa is listening in ${PORT}`);
});

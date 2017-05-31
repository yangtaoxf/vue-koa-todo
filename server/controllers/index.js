/**
 * init the model 
 * @author : Sheldon-Yee
 */

const {$_getUser,$_signUp} = require('../models/signIn');
const {$_getTodolistByName,$_createTodolist,$_removeTodoList,$_updateStatus} = require('../models/todolist');
const jwt = require('jsonwebtoken');//json web token

const getUserInfo  = async (ctx,next)=>{
    
    const { username , password } = ctx.request.body;
    const userInfo  = await $_getUser(username , password);
    if(userInfo !== null){// 如果查无此用户会返回null
        if(password === userInfo.password){
             const userToken = {
                name : userInfo.username
            };
            const secret = 'vue-koa-demo';
            const token = jwt.sign(
                userToken,
                secret
            );// sign token
            ctx.body = {
                success: true,
                token: token, //  return token
                username : userInfo.username
            }
        }else{// if the password is correct
           ctx.body = {
                success : false,// success标志位是方便前端判断返回是正确与否
                message:'Incorrect password'
            }
        }
    }else{
        ctx.body = {
            success : false ,
            message : 'The user name does not exist'
        }
    }

}

const signIn = async (ctx,next)=>{
    const {username , password} = ctx.request.body;
    const result = await $_signUp(username,password);
    ctx.body = result
}

const getTodoList = async (ctx,next)=>{ // get user todolist 
    const {username} = ctx.params.user; // get the params from url
    const result = await $_getTodolistByName(username);
    const list = result.data[0].list;
    ctx.body = list; // 将请求的结果放到response的body里返回
}

const createTodoList = async (ctx,next)=>{ // create a todolist
     const data = ctx.request.body; // post requrest，data in request.body
     const result = await $_createTodolist(data);
     ctx.body = {
         data:result,
         success : true
     }
}

const removeTodoList = async (ctx,next)=>{
    const {user,content} = ctx.params;    
    const result = await $_removeTodoList(content,user)
    ctx.body = {
        data : result,
        remove:true
    }
}

const updateStatus = async (ctx,next)=>{
    const {user,content,status} = ctx.params;
    const data = {content,status};
    const result = await $_updateStatus(data,user);
    ctx.body  = {
        data : result,
        update:true
    }
}

module.exports = {
    getUserInfo,
    signIn,
    getTodoList,
    createTodoList,
    removeTodoList,
    updateStatus
}
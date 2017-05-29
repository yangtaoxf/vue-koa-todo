/**
 * init the model 
 * @author : Sheldon-Yee
 */

const {$_getUser,$_signUp} = require('../models/signIn');
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
            );// 签发token
            ctx.body = {
                success: true,
                token: token, // 返回token
                username : userInfo.username
            }
        }else{// 如果密码正确
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

module.exports = {
    getUserInfo,
    signIn
}
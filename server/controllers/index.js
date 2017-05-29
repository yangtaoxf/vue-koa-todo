/**
 * init the model 
 * @author : Sheldon-Yee
 */

const {$_getUser,$_signUp} = require('../models/signIn');

const getUserInfo = async (ctx,next)=>{
    const { username , password } = ctx.request.body;
    const result = await $_getUser(username , password);
    ctx.body = result;
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
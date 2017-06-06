/**
 * @author : Sheldon-Yee
 * User mongoDB database operations
 */
const {userSchema,listSchema} = require('../schema');
const mongoose = require('mongoose');

const UserModel = mongoose.model('User',userSchema);


const $_signUp = async (username,password) =>{
    let condiction = {username,password};
    let body = await UserModel.findOneAndUpdate(condiction,{username,password},{
         upsert:true,
         new:true
    }).then(user=>{
        return {
            status : 1,
            data:user
        }
    })
    return body;
}//register username

const $_getUser = async (username) =>{
    let result = await UserModel.findOne({username}).then(data=>{
        return data;
    })
    return result
}//Use a username and password to log in

module.exports = {
    $_getUser,
    $_signUp
}
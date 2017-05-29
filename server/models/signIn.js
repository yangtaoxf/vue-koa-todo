/**
 * @author : Sheldon-Yee
 * mongoDB database operations
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

const $_getUser = async (username,password) =>{
    let result = {
        success : false,
        message : 'The user name does not exist'
    };
    let body = await UserModel.findOne({username}).then(data=>{
        // if(!data){
        //     return result
        // }else{
        //     if(password === data.password){
        //         return {success : true ,
        //                 message : 'Sign in suceesfully',
        //                 username : data.username
        //                };
        //     }else{
        //         return {success : false , message : 'Incorrect password'};
        //     }
        // }
        return data;
    })
    return body
}//Use a username and password to log in

module.exports = {
    $_getUser,
    $_signUp
}
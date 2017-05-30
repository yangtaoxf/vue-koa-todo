/**
 * @author:SheldonYee
 * addressbook mongoDB database operations
 */

const {userSchema,listSchema} = require('../schema');
const mongoose = require('mongoose');

const ListModel = mongoose.model('todolist',listSchema);
const UserModel = mongoose.model('User',userSchema);

const $_getTodolistByName = async (username)=>{
    let result = await UserModel.find(username).exec().then(_list=>{
        return {
            status : 1,
            data : _list
        }
    })
    return result;
}

const $_createTodolist = async (data,username)=>{
    let result = await UserModel.find(username)
    .update({'$addToSet':{'list':{content:data.content,status:data.status}}}).then(_data=>{
        return {
            status:1,
            add : true
        }
    })
}

const $_removeTodoList = async (data,username)=>{
    let result = await UserModel.find(username)
    .update({'$pull':{'list':{content:data}}}).then(_data=>{
        return {
            status:1,
            remove:true
        }
    })
}

const $_updateStatus = async (data,username) =>{
    let result = await UserModel.find(username)
    .update({'$set':{content:data.content,status:!data.status}})
    .then(_data=>{
        return {
            status:1,
            update:true
        }
    })
}

module.exports = {
    $_getTodolistByName,
    $_createTodolist,
    $_removeTodoList,
    $_updateStatus
}
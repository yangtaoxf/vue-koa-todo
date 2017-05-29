/*
*create schema @author Sheldon-Yee 
*/

const {Schema} = require('mongoose');

const listSchema = new Schema({
    content:String,
    status:Boolean
})//Content schema

const userSchema = new Schema({
    username : String,
    password : String,
    list:[listSchema]
},{
    _id:false,
    strict: false
})//User schema


module.exports = {
    userSchema,
    listSchema
}
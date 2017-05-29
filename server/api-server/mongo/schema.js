/*
*create schema @author Sheldon-Yee 
*/

const {Schema} = require('mongoose');

const userSchema = new Schema({
    user_id: String,
    password : String,
    list:[{
        status:Boolean,
        content:String
    }]
})

module.exports = {
    userSchema
}
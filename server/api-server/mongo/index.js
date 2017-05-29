/*
*Create a model @author Sheldon-Yee 
*/
const mongoose = require('mongoose');
const {userSchema} = require('./schema.js');//to get database schema
//The first parameter represents the name of collection
const UserModel = mongoose.model('User',userSchema);

//Define different database operations




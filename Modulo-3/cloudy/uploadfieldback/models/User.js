const mongoose = require("mongoose");
const {Schema,model} = mongoose


const userSchema = new Schema({

    username:{
        type:String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required: true,
        unique:true,
        //colocar validdacion
    },
    password:{
        type:String,
        required:true
    },
    avatar:{type:String},

},{timestamps:true}) 


module.exports = model("User",userSchema)

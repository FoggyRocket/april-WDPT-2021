const {Schema,model}= require("mongoose")

const userSchema = new Schema({

    username:{
        type:String,
        unique:true,
        required: true,
    },
    email:{
        type:String,
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

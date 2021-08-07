const {Schema,model}= require("mongoose")

const userSchema = new Schema({

    username:{
        type:String,
        unique:true,
        
    },
    email:{
        type:String,
        unique:true,
        required: true,
        //colocar validdacion
    },
    password:{
        type:String,
    },
    birthDay:Date,
    avatar:{type:String},
    //Id para la conexion con  RedSocial
    googleID:String,
    facebookID:String

},{timestamps:true}) 


module.exports = model("User",userSchema)

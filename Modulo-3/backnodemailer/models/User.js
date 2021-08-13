const {Schema,model} = require("mongoose")
const userSchema = new Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    status:{
        enum:["Pending","Active"],
        default:"Pending"
    },
    confirmationCode:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    }
},{timestamps:true})

module.exports = model("User",userSchema)
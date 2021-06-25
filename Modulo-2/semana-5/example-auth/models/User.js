//mongoose 

const mongoose = require("mongoose")
const { Schema,model} = mongoose;

//Schema === ESQUELETO (la info que va a contener)


const userSchema = new Schema({

    name:{
        type:String,
        required:[true,"Debes agregar un nombre" ] //<== es con un mensaje Custom
        //required:true <==== esto es para dejarlo dee forma 
        //normal
    },
    email:{
        type:String,
        required:[true,"Debes agregar un correo electronico" ],
        unique:[true,"Este correo  ya esta registraddo" ],  
    },
    password:{
        type:String,
        required:[true,"Debes agregar una contraseña" ],
    },
    role:{
        type:String,
        default:"USER",
        enum:["ADMIN","USER"]
    }



},{timestamps:true})

//exportar
module.exports = model("User",userSchema);
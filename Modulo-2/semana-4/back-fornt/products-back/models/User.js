//importamos a mongoose y luego lo  destructuramos!

const mongoose = require("mongoose");
const { Schema, model} = mongoose;

//Esquema es todo el esqueloto de información 
//que va a contener mi modelo

const userSchema = new Schema({
    email:{
        type:String,
        unique:[true,"Este email ya fue registrado"],
        required:[true,"Se necesita un email"]
    },
    password:{
        type:String,
        required:[true,"Debes agregar una contraseña"]
    },
    username: String,
},{timestamps:true});

//no hay que olvidar que tenemos que exportar
module.exports = model("User",userSchema)
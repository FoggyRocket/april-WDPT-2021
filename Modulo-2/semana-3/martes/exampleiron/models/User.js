const mongoose = require("mongoose")
const { Schema, model } = mongoose;

const userSchema =  new Schema({
  name:String,
  username:{
    type: String,
    unique:[true,"El nombre de usuario ya existe"]
  },
  email:{
    type:String,
    required :[true,"Debes agregar un email"],
    unique:[true,"El email ya existe"]

  }
},
{timestamps:true})


//muy my importante siempre hay que exportar
module.exports = model("User",userSchema);
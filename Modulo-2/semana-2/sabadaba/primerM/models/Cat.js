const mongoose = require("mongoose");
//Destructuramos para poder para obtener unimaente los methodos que requierimos!
// y ademas tener limpio el codigo!!!!! :3
const { Schema, model } = mongoose;

//Creamos el esqueleto de nuestrom modelo
//para saber que datos le vamos a mandar!!!!!
const catSchema = new Schema({
    name:{
        type:String,
        unique:true,
        required:true,
    },
    raza:String,
    age:{
        type:Number,
        min:1
    }
});

//Esto es muy importante siempre siempre exportar!!!!!!!!
module.exports = model("Cat",catSchema)
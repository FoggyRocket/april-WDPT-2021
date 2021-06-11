const mongoose = require("mongoose");
const { Schema, model} =  mongoose;


const restaurantSchema = new Schema({
    name:{
        type:String,
        required:[true,"Lo siento es necesario un nombre!!"],
        unique:[true, "El restaurante ya existe 🤔"],
    },
    address:{
        type:String,
        required:[true,"Tienes que agregar una dirección"]
    },
    capacity:{
        type:Number,
        min: [10,"La capacidad minima requerida es de 10 personas"],
        require:true
    },
    description:{
        type:String,
        minlength:50,
        maxlength:140,
    },
    isAvailable:{
        type:Boolean,
        default:true
    },
    rate:{
        type:Number,
        min:0,
        max:5
    },
    //nuestra primera ref!!!!!
    //97473927498327hh7h1278321 
    _owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true,"Debes agregar un propietario"]
    }
},{timestamps:true});

module.exports = model("Restaurant",restaurantSchema);
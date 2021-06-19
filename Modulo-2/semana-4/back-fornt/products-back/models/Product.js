const mongoose = require("mongoose")
const { Schema,model} = mongoose


const productSchema = new Schema({
    name:{
        type:String,
        required:[true,"Debes agregar un nombre a tu producto"]
    },
    price:{
        type:Number,
        min:[1,"El precio es muy bajo"]
    },
    image:{
        type:String,
        default:"https://www.e-factoryae.com/static/img/uploads/default-product-image.png?AspxAutoDetectCookieSupport=1"
    },
    description:{
        type:String,
        required:[true,"Debes agregar una descripción del producto"]
    },
    _seller:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:[true,"Debes indicar quien es el vendedor"]
    }



},{timestamps:true})



module.exports = model("Product",productSchema)
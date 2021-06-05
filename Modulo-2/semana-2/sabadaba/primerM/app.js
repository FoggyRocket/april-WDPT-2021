const mongoose = require("mongoose");
//aqui importamos al modelo CAt para poder crear actualizar eliminar o simplemente leer!
const Cat = require("./models/Cat");


//connection

mongoose.connect("mongodb://localhost/mogoose-test",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then( x =>
    console.log(`Connect to Mongo! Database: "${x.connections[0].name}"`)
    )
.catch( error =>
    console.log("Error connecting to mongo", error)
    )

/**
 * creamos un nuevo gato con los siguientes datos!!
 * @param {name:String,age:Number,raza:String} data
 */
function createCat(data){
    Cat.create(data)
    .then(catCreated => console.log(`Se creo un gato: ${catCreated}`))
    .catch(error=>console.log("algo salio mal paps!!",error))
}



let kitty = {
    name:"Bola de pelos",
    raza:"Egipcio",
    age:1
}

createCat(kitty)
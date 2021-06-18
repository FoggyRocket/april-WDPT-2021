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
 * C.R.U.D.
 * creamos un nuevo gato con los siguientes datos!!
 * @param {name:String,age:Number,raza:String} data
 */

///CREATE
function createCat(data){
    Cat.create(data)
    .then(catCreated => console.log(`Se creo un gato: ${catCreated}`))
    .catch(error=>console.log("algo salio mal paps!!",error))
};

///Read

function getAllCats(){
    //find() busca todas las colecciones del modelo
    //find({filter}) nos trae lo que logre encontrar almacenado en un []
    Cat.find()
    .then(allCats => console.log("todos los gatos",allCats))
    .catch(error=>console.log("algo salio mal en todos los gatos! paps!!",error))

}


function getCatByName(name){
    //find trae todos y regre un []
    //findOne trae solamente y regresa {}
    //[{...}]  perro[0].name perro[0].edad
    //{} perro.name
    Cat.findOne({name})
    .then(cat => console.log("todos los gatos",cat))
    .catch(error=>console.log("algo salio mal en un solo gato! paps!!",error))

}
/**
 *
 * @param String id
 */
function getCatById(id){
    //findById busca por medio de "_id" y regresa ese unico elemento regresa en un {}
    Cat.findById(id)
    .then(cat => console.log("por id el gato",cat))
    .catch(error=>console.log("algo salio mal en un solo gato! paps!!",error))

}
//end Read

//UPDATE

function updateCat(name,newRaza){
    Cat.updateOne({name},{raza:newRaza})
    .then(cat => console.log("Se actualizo",cat))
    .catch(error=>console.log("algo salio mal en un solo gato! paps!!",error))
}


function updateCatbyId(id,newName){
    //{new:true} es para regregresar los datos actualizados
    Cat.findByIdAndUpdate(id, {name:newName}, {new:true})
    .then(cat => console.log("Se actualizo",cat))
    .catch(error=>console.log("algo salio mal en un solo gato! paps!!",error))
}

function updateCats(raza,newRaza){
    Cat.updateMany({raza},{raza:newRaza},{new:true})
    .then(cat => console.log("Se actualizo",cat))
    .catch(error=>console.log("algo salio mal en un solo gato! paps!!",error))
}

//DELETE

function deleteCatByName(name){
    Cat.deleteOne({name})
    .then(() => console.log("Se Elimino"))
    .catch(error=>console.log("algo salio mal en un solo gato! paps!!",error))
}

function deleteCats(raza){
    Cat.deleteMany({raza})
    .then(() => console.log("Se eliminaron varios gatos"))
    .catch(error=>console.log("algo salio mal en un solo gato! paps!!",error))
}
function deleteCatById(id){
    Cat.findByIdAndRemove(id)
    .then(() => console.log("Se elimino por id"))
    .catch(error=>console.log("algo salio mal en un solo gato! paps!!",error))
}



function getMany(){
    const  promise1 = Cat.find() //5s
    const  promise2 = Cat.findOne({name:venus}) //1min
    .then((values) => console.log("valores",values))
    .catch(error=>console.log("algo salio mal en un solo gato! paps!!",error))


    Promise.all([promise1,promise2])
}






let kitty = {
    name:"Bola de pelos",
    raza:"Egipcio",
    age:1
}

createCat(kitty)
const mongoose = require("mongoose");


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

//Model a  manita

const Cat = mongoose.model('Cat',{ name: String } );

const kitty = new Cat( { name: "Venus" } );

/*kitty
    .save()
    .then(newCat => console.log(` A new cat is created: ${newCat}`))
    .catch( error => console.log("Error create cat", error));*/

function getAllCats(){
    Cat.find()
    .then(allCats=> console.log(" All Cats ==>",allCats))
    .catch(error=>console.log("All cats Error", error))
}


//getAllCats()

function getCatByName(name){
    /**
     * name
     * name = "perrito"
     * { name: "perrito"}
     */
    console.log("ejemplo ===>", { name })
    Cat.find( { name } )
    .then(cat=> console.log(" cat ==>",cat))
    .catch(error=>console.log("All cats Error", error))
}

//getCatByName("Venus")
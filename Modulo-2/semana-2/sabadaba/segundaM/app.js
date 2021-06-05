const bodyParser = require("body-parser")
const express = require("express")

const app = express()
app.use(bodyParser.json())


function diHola(req,res,next){
    console.log("Hola banda!!!")
    setTimeout(()=>next(),5000)
    
}

//cuando entremos a la raiz nos muestre este texto
app.get("/", diHola, (req, res, next)=>{
    res.send("Hola este es mi server")
})

//Route params
app.get("/users/:id",(req,res,next)=>{
    res.json(req.params)
    // const {name} = req.params
    //User.findOne({name})
})
//Many or much
app.get("/users/:id/profile/:username",(req,res,next)=>{
    res.json(req.params)
    // const {name,username} = req.params
    //User.findById(id)
    //User.findOne({name:username })
})

//Query
//http://localhost:3000/search?perro=Nova&edad=8&genero=hembra
app.get("/search",(req,res,next)=>{
    res.json(req.query)
})

//POST
app.post("/login",(req,res,next)=>{
    ///{}
    console.log(`Username:${req.body.username} &&& ${req.body.password}`)
    res.json(req.body)
})

app.listen(3000,()=>{
    console.log(`App Corriendo en el puerto 3000`)
})
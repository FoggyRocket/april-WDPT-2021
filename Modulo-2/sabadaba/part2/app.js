const { response } = require("express");
const express = require("express");


const app = express()

/**
 * stacist o public
 */

app.use(express.static("public"))

/**
 * Routes
 */
//get es para? ====> solicitir info
app.get("/",(request, response)=>{ 

    response.sendFile(`${__dirname}/views/home.html`)
 })

app.get('/login',(req,res)=>{
    res.sendFile(`${__dirname}/views/login.html`)
});
app.get('/login/perro',(req,res)=>{
    res.send("<h1>Hola Perro</h1>")
});




 //para corret el server
 app.listen(3000,()=>{
     console.log("el server esta corriendo xD")
 })
const http =  require("http");
const chalk  = require("chalk");


const server = http.createServer((request,response)=>{

console.log( chalk.yellow(`petición desde ${request.url}`) )

    if(request.url === "/"){
        response.write("Que onda estas en mi server local")
        response.end();
    } else if(request.url === "/login"){
        response.write("Que onda ya te vas a ingresar")
        response.end();
    }else{
        response.write("404 page")
        response.end()
    }

})


server.listen(3000, ()=>{
    console.log( chalk.green('Estamos corriendo en el puerto 3000 :D '))
})
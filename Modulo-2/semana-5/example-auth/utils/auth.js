//esto no va a servir para verificar si exitee un usuario y un token

const jwt = require("jsonwebtoken")
const User = require("../models/User")


//exportar mi util directamente

exports.veryToken = (req,res,next) => {
     const { token } =  req.cookies;
     jwt.verify( token, process.env.SECRET, (error,decoded)=>{
    //va nuestro codigo!!!!
        if(error){
            return res.status(401).json( { msg:"epa epa no te has logueaado",error } )
        }
    //decoded = { id } osea es un objeto ccon la llavee id (seegun lo que ustedes guardeen
    //esto va a bbusscar con el objeto en la llave id
    User.findById(decoded.id)
        .then(user =>{
           req.user = user 
        })
    
        next()

     })

}
const express = require('express');
const router = express.Router();
const User = require("../models/User")
//importar bcryp 
const bcrypt = require("bcrypt")

router.post("/signup",(req,res)=>{

  const {email, password, ...restUser} = req.body

  //
  bcrypt.hash(password,10)
  .then(hashedPasssword =>{
   

    User.create({email,password:hashedPasssword, ...restUser})
    .then( () =>{
        res.status(200).json( { msg:"Usuario creado con éxito" } )
    })
  }).catch(error=>{
    //res.status(400).json({msg:'Mensaje custom', error })
    res.status(400).json( error )
})

})




router.post("/login",(req,res)=>{
  const {email,password} = req.body

    //tengo que verificar si existe ese email!!!
    User.findOne({ email })
    .then(user=>{
        //validdo si existe el email
        if(user === null){
          return res.status(404).json({msg:'Email no encontrado'})
        }

      bcrypt.compare(password,user.password)
      .then(match=>{
        if(match){
          //para borrar la ccontraseña del user
          //tengo que parse o converetir user a objeto
          const withoutPass = user.toObject()
          delete withoutPass.password
          delete withoutPass.__v
          res.status(200).json({user:withoutPass ,msg:"Bienvenido"})
        }else{
          return  res.status(401).json({msg:'Password erroneo'})

        }
        

      })
      
    })
    .catch(error=>{
      //res.status(400).json({msg:'Mensaje custom', error })
      res.status(400).json( {error} )
  })
})






module.exports = router;

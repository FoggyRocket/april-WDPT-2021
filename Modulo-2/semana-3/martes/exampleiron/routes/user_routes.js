//para crear una ruta  que tenemos que importar express
// router 

const express =  require("express");
const router = express.Router();
const User = require("../models/User");


/*
  GET user list
*/

router.get("/",(req, res,next)=>{
  //find() para traer todos las colecciones del documento user!!!
  User.find()
    .then(allUser=>{
                        //{allUser:[...]}
      res.status(200).json({ allUser })
    })
    .catch(error=>{
        res.status(400).json({msj:"Algo salio mal",error})
    })
})
/**
 * POST creat USER
 */

router.post("/",(req,res,next)=>{

  User.create(req.body)
  .then(user=>{
    res.status(201).json({ user })
  })
  .catch(error=>{
    res.status(400).json({msj:"Algo salio mal",error})

  })
})

/**
 * UPDATE
 */

 router.patch("/edit-user/:id",(req,res,next)=>{
  const { id } = req.params
  User.findByIdAndUpdate(id, req.body, {new:true})
  .then(newUser=>{
    res.status(201).json({ newUser })
  })
  .catch(error=>{
    res.status(400).json({msj:"Algo salio mal",error})

  })
})

//siempre siempre siempre va hasta a abajo!!! (Final del archivo)
module.exports = router;

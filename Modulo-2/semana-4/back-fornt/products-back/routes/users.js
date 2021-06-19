const express = require('express');
const router = express.Router();
const User = require("../models/User")


router.post("/signup",(req,res)=>{

  User.create(req.body)
  .then( () =>{
      res.status(200).json( { msg:"Usuario creado con éxito" } )
  })
  .catch(error=>{
      //res.status(400).json({msg:'Mensaje custom', error })
      res.status(400).json( error )
  })
})






module.exports = router;

const express = require('express');
const router = express.Router();
const User = require("../models/User");
const uploader = require("../helpers/multer");
/* GET users listing. */

router.post("/",uploader.single("avatar") , (req, res,next)=>{

  let avatar
  if(req.file){
     avatar = req.file.path
  }
  

  User.create({...req.body,  avatar })
    .then(user=> res.status(200).json({result:user}) )
    .catch(error=> res.status(402).json({ error }))

})

router.get("/",(req,res)=>{
  res.status(200).json({msg:"todo chido"})
})

module.exports = router;

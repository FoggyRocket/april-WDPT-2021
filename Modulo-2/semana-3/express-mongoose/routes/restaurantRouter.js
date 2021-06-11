const express = require('express');
const Restaurant = require('../models/Restaurant');
const router = express.Router();

/* CREAR el C.R.U.D. */
router.post('/',(req,res)=>{
            //create({...})
            //req.body =  {....}
    Restaurant.create(req.body)
    .then(restaurant=> {
       res.status(201).json({restaurant});
    })
    .catch(err => res.status(400).json(err));
})

router.get('/', function(req, res, next)/* => */ {
    //res.json({ title: 'Express' });
    Restaurant.find()
    //populate nos rive para saber que contine el  id 
    .populate("_owner")
    .then(restaurant=> res.status(201).json({restaurant}))
    .catch(error => res.status(400).json(error))
  });

  // salu2 a la banda pedototota
  router.patch("/edit-restaurant/:id",(req,res,next)=>{
      const { id } = req.params
      Restaurant.findByIdAndUpdate(id,req.body, {new:true})
      .then(
          newRestaurant=>{
              res.status(201).json(newRestaurant)
          }
      )
      .catch(error=>{
          res.status(400).json({msj:"Algo salio mal",error})
      })
  })

  // Delete
router.delete('/delete/:id', (req, res, next) => {
    const {id} = req.params
    Restaurant.findByIdAndDelete(id)
    .then(() => res.status(200).json({msj: "Se ha eliminado correctamente"}))
    .catch(error => res.status(400).json(error))
})

module.exports = router;

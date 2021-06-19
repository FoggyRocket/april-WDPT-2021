//necesitamos importar los elemtos para nustras rutas
// express router(que viene de express) modelo(s)(a usar )

const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


//creo mis rutas para /products

/**
 * Sintax router
 * 
 * router.method("/ruta",(req,res,next)=>{
 *  ...code
 * para retornar usamos 
 * res.status(code).json({...})
 * })
 * 
 * */

router.get("/",(req,res)=>{
    //Model <== es propieda de mongoose
    // find <== es un metodo de mongoose
    Product.find()
    .then(products =>{
        res.status(200).json( { result:products } )
    })
    .catch(error=>{
        res.status(400).json({msg:'Mensaje custom', error })
        //res.status(400).json( error )
    })

});

router.post("/",(req,res)=>{

    Product.create(req.body)
    .then(product =>{
        res.status(200).json( { result:product } )
    })
    .catch(error=>{
        //res.status(400).json({msg:'Mensaje custom', error })
        res.status(400).json( error )
    })
})

//necesitamos exportarlo

module.exports = router;
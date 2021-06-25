const express = require('express');
const router = express.Router();
//importar cosas importantes!!
const User = require('../models/User')
const bcrypt = require('bcrypt')
const  jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', (req, res, next) =>{
  res.status(200).json({msg:"Todo ok "})
});


router.post('/signup',(req,res,next)=>{
  //hay que cachar los valores que  mandan del fronte y vienen en el req.body
  const {email,password,confirmPassword,name } = req.body

  if(password !== confirmPassword){
    return res.status(403).json({msg:'Las contraseñas no coinciden'})
  }

  bcrypt.hash(password,10)
  .then( hashedPass =>{

      const user = {
        email,
        password:hashedPass,
        name
      }

      User.create(user)
      .then(()=>{
        res.status(200).json({msg:"Todo chido se creo un usuario bien "})
      })

  })
  .catch(error=>{
    res.status(400).json({msg:"Hubo un error",error})
  })

});


router.post('/login', (req,res)=>{

  //trabaja toda tu logica
  // email y password req.body
  //opcion a)
        /*
          {
            email:'example@demo.com,
            password:"valor"
          }
        */
  const {email, password} = req.body
  //opcion b)
  // const email = req.body.email
  // const password = req.body.password
                  //email:perro@perro.com
  User.findOne( { email } )
  .then( user =>{
    // recordemos  que si el FindOne no encuetra el valor este regresa  como "null"
    if(user === null ) return res.status(404).json({msg:'Epale Epale no existe ese  correo'})

    //vamoss  a comparar los password para poder acceder!!!!
                //perro     ihsf9hdsf9hdsf9sdhf8sdh89f
          //compare nos va a reegresar solo un true || false 
    bcrypt.compare(password, user.password )
    .then(match => {
      if(match){

        //aqui vamos a crear el jwt y mandar el user  sin el password

        //Borramos el password para  el ussuario de esta forma
        const withoutPass = user.toObject()
        delete withoutPass.password

        //vamos a crear el jwt esto nos generara un token mezclando un (id)  mas la palabra secreta
        // y le vamos a dar una duracion vida dee un dia!!!!
        const token = jwt.sign( { id : user._id } ,process.env.SECRET,{
          expiresIn:"1d"
        })

        res.cookie("token",token,{
          expires:new Date(Date.now +  86400000),
          secure:false,
          httpOnly:true
        }).status(200).json({user:withoutPass, code:200})


      }else{
        return res.status(401).json({msg:"Epa epa compa esa contraseña no es correcta"})
      }
    })


  })
  .catch(error=>{
    res.status(400).json({msg:"Hubo un error",error})
  })
 
})




module.exports = router;

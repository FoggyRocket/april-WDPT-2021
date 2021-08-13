
const bcrypt = require("bcrypt");
const User = require("../models/User")
const passport = require("../helpers/passport"); // <--- importamos passport


exports.signupProcess = async (req,res,next)=>{
    const {email,password,role,...restUser} = req.body
   try{
        if(!email || !password){
            return res.status(400).json({msg:"email and Password empty"})
        }

        const hasPass = bcrypt.hashSync(password,bcrypt.genSaltSync(12))

        const newUser = await User.create({
                email,
                password:hasPass,
                ...restUser
            })
        res.status(201).json({result:newUser})

    }catch(error){
        res.status(400).json( {error} )
    }
};

exports.loginProcess = (req,res,next)=>{

    passport.authenticate("local", (error,user,errDetails)=>{
        if(error){
            return res.status(500).json({error})
        }
        if(!user){
            return res.status(500).json({ error: errDetails })

        }

        req.login(user, (err)=>{
            if(err){
                return res.status(500).json({ error: err })
            }
            res.status(200).json({result:user})
        })
    })(req,res,next)
};


exports.logoutProcess = (req,res)=>{
    req.logout()
    res.status(200).json({msg:"Logged out"})
};

exports.getCurrentUser = (req,res)=>{
    res.status(200).json({result: req.user || {} })
};


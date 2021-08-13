
const bcrypt = require("bcrypt");
const User = require("../models/User")
const passport = require("../helpers/passport"); // <--- importamos passport
const {  transporter } = require("../helpers/sendMail") // <--- importamos trasporter de sendMail

exports.signupProcess = async (req,res,next)=>{
    const {email,password,role,...restUser} = req.body
   try{
        const characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let confirmationCode = '';
        for (let i = 0; i < 25; i++) {
            confirmationCode += characters[Math.floor(Math.random() * characters.length )];
        }

        if(!email || !password){
            return res.status(400).json({msg:"email and Password empty"})
        }

        const hasPass = bcrypt.hashSync(password,bcrypt.genSaltSync(12))

        const newUser = await User.create({
                email,
                password:hasPass,
                confirmationCode,
                ...restUser
            })
        await  transporter.sendMail({
            from:"Perro Dylan <dyl.blink.1.8.2@gmail.com>",
            to:email,
            subject:"Verficate porfa",
            text: `Textito`,
            html:`<a href="http://localhost:3001/api/auth/confirm/${confirmationCode}">entra en este link </a>`,
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


exports.confirmationCode = async (req,res) => {
    try{
        const {confirmationCode} = req.params;
        const user = await User.findOneAndUpdate({ confirmationCode },{ status:"Active" },{new: true })
        console.log("usser",user)
        res.status(200).json({ result:user, msg:"Congrats user active"})

    }catch(error){
        console.log("error",error)

        res.status(400).json({error})
    }

}


const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/User")
const GoogleStrategy = require("passport-google-oauth20").Strategy

//convertir a cadena
passport.serializeUser((user,callback)=>{
    callback(null,user._id)
});
// convertir a objeto
passport.deserializeUser(async (id,callback)=>{
    try{
        const user = await  User.findById(id)
        callback(null,user)
    }catch(error){
        console.log("hubo un error deserializeUser")
        callback(error,null)
    }
});


passport.use(
    new LocalStrategy(
        {
            usernameField: "email" //usernameField:"username"
        },
        async (email, password, callback)=>{
            try{
                const user = await User.findOne({ email })
                if(!user){
                    return callback(null,false,{msg:"Incorrect email or ..."})
                }
                if(!bcrypt.compareSync(password,user.password)){
                    return callback(null,false,{msg:"Incorrect password or  ..."})
                }
                callback(null,user)

            }catch(error){
                callback(error,null)
            }
        }
    )
);
//Nuevas Estrategias a utilizar!!!

passport.use(
    new GoogleStrategy({
            clientID:process.env.GOOGLE_KEY,
            clientSecret:process.env.GOOGLE_SECRET,
            callbackURL:process.env.GOOGLE_CALLBACK,
        },                           //callback = cb
        async (accesToken, refreshToken,profile,cb)=>{
            console.log("PROFILE",profile)
            try{
                //verificamos si hay un googleID registrado
                const user = await User.findOne({ googleID: profile.id })

                //si ya esta registrado
                if(user){
                    return cb(null, user)
                }

                const newUser = await User.create({
                    googleID: profile.id,
                    email:profile.emails[0].value,
                    avatar:profile.photos[0].value,
                })
                return cb(null,newUser)
            }catch(error){
                return cb(error,null)
            }
        
        }
    )
)


module.exports  = passport
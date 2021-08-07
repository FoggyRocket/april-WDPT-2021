require("dotenv").config()//<--- inicializamos el .env
//dependencias
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//lo que usamos
const mongoose = require("mongoose")
const cors = require("cors")
const session = require("express-session")
const passport = require("./helpers/passport"); //<---- passport del helper

//Rutas
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth'); //<----- Rutas


//La conexion 
mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology:true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error("Error connecting to mongo", err)
  })

const app = express();
//Middelware para exprss
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//CORS 
app.use(
    cors({
            origin:["http://localhost:3000","https://www.mipagina.com"],
            credentials:true
        })
    )
//Session
app.use(
    session({
        secret : process.env.SECRET,
        saveUninitialized:true,
        resave:true
    })
)

//iniclizar Passport helper
app.use( passport.initialize() )
app.use( passport.session() )



app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth',authRouter);

module.exports = app;

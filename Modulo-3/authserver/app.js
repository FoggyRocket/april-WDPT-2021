require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose")
const session = require('express-session'); //<------ esto es lo nuevo
const passport = require("./helpers/passport"); //<---- passport del helper

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth'); //<----- Rutas

//Pimero la conexion
mongoose
    .connect(process.env.DB,{
        useUnifiedTopology: true
        })
    .then(x => {
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    })
    .catch(err => {
    console.error("Error connecting to mongo", err)
    })
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//usaremos las sessions para utilizarla en nuestra app
app.use(
    session({
        secret:process.env.SECRET,
        saveUninitialized:true,
        resave:true
    })
)

//utilizar Passport!!!
app.use( passport.initialize() )
app.use( passport.session() )


app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth',authRouter) //<---- Agregar rutasss
module.exports = app;

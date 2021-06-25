//importar dotevn
require("dotenv").config() //<=== de esta manera utilizamos el dotevn

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
//importamos mongoose y cors 
const mongoose = require("mongoose")
const cors = require("cors")

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//Agregamos la conexion dee mongoose

mongoose.connect(process.env.DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then((x)=>{
    console.log(`Connect to Mongo! Database name: "${x.connections[0].name}"`)
}).catch((err)=>{
    console.log("Error connecting to mongo", err)
})

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;

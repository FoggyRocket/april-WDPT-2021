//Vamo a usar el poderosisimo .env
require("dotenv").config();

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose")
const cors = require("cors")

//Hacer la conexion a mongoose!!
mongoose
    .connect( process.env.DB ,{
        useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then( x => 
        console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    )
    .catch(error =>
        console.log("Error connecting to mongo",error)
    )




const app = express();

//usamos cors despues de app = express();
app.use(
    cors({
        origin:["http://localhost:3000"],
    })
)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Import routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/products');
//agregamos el prefijo api para no causar conflicto 
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products',productRouter);

module.exports = app;

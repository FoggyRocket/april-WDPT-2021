const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRouter');
///hacemos la conexion!!!
//esto es lo unico por el momento!!!
mongoose.connect("mongodb://localhost/express-mongoose",{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(x=>{
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
})
.catch(error => console.log("Error connecting to mongo",error) )
//


const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//
const restaurantRouter = require("./routes/restaurantRouter")

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/restaurant',restaurantRouter)

module.exports = app;

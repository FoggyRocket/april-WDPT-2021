require("dotenv").config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose")
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const cors = require("cors")

mongoose.connect(process.env.DB,{
    useUnifiedTopology:true
})
.then((x)=>{
    console.log(`Connect to Mongo! Database name: "${x.connections[0].name}"`)
}).catch((err)=>{
    console.log("Error connecting to mongo", err)
})




const app = express();
app.use(cors({
    origin:["http://localhost:3000"]
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;

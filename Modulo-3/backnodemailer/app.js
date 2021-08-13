require("dotenv").config()

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose")
const session = require("express-session")
const passport = require("./helpers/passport"); //<---- passport del helper

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

mongoose
  .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
	  useCreateIndex: true
    })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
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
app.use('/api/auth', authRouter);

module.exports = app;

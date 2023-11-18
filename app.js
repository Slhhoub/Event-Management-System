const express = require('express');
const app=express();
const events = require('./routes/router-event');
const users = require('./routes/user-event');
const db =require('./config/dataebase');
const session = require('express-session');
const flash =require('connect-flash');
const passport = require('passport');
const passportSetup=require('./config/passport-setup');


// listen && port
const port=3000;
app.listen(port,()=>{
    console.log(`server connect successfully : http://localhost:${port}`);
});
// session and flash 
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 6000 * 15 }
  }))
app.use(flash());
// bring passport
app.use(passport.initialize());
app.use(passport.session());
// router import
app.use(events);
app.use(users);
// bring ejs template
app.set('view engine','ejs');
//bring static folders
app.use(express.static('public'));
app.use(express.static('node_modules'));






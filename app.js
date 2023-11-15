const express = require('express');
const app=express();
const router = require('./routes/router-event');
const db =require('./config/dataebase');
const session = require('express-session');
const flash =require('connect-flash');


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
// router import
app.use(router);
// bring ejs template
app.set('view engine','ejs');
//bring static folders
app.use(express.static('public'));
app.use(express.static('node_modules'));




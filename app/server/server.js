require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const session = require('express-session');

const app = express();

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));

//MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

//DATABASE CONNECTION
massive(process.env.CONNECTIONSTRING).then( db => {
  app.set('db', db);
});

//AUTHENTICATION

let PORT = 3005;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})

const express = require('express')
const session = require('express-session')
const app = express()
const port = 3001

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('./user');
require('./Database')

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());

app.post('/signup', async (req, res)=>{
  UserModel.register(await new UserModel({ username: "bsdafjbdsfa@gmail.com" }), "password", (err)=>{
    if(err) {
      return res.send(`sign up err: ${err}`)
    }

    passport.authenticate('local')(req, res, ()=>{
      res.send('/')
    })
  })
})

app.post('/signin', passport.authenticate('local'), (req, res)=>{
  res.redirect('/');
  res.json({ status: 'signed in' })
})

app.get('/signout', (req, res)=>{
  req.logout();
  res.redirect('/');
  res.json({ status: 'signed out' })
})

app.listen(port, () => {
  console.log(`Lstening at http://localhost:${port}`)
})
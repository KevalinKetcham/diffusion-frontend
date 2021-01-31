const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
const session = require('express-session')
const port = 3001

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('./user');
require('./Database')

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

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
  UserModel.register(await new UserModel({ username: req.body.username }), req.body.password, (err)=>{
    if(err) {
      return res.send(`sign up err: ${err}`)
    }

    console.log(`New user signed up: ${req.body.username}`)

    passport.authenticate('local')(req, res, ()=>{
      res.redirect('/')
    })
  })
})

app.post('/signin', passport.authenticate('local', { successRedirect: 'http://localhost:3000/faq', failureRedirect: 'http://localhost:3000/signin' }), (req, res)=>{
  console.log(req.body.username + ' signed in!')
})

app.get('/signout', (req, res)=>{
  req.logout();
  res.redirect('/');
  res.json({ status: 'signed out' })
})

app.get('/', (req, res) => {
  res.send('/ route')
})

app.listen(port, () => {
  console.log(`Lstening at http://localhost:${port}`)
})
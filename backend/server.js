const express = require('express')
const app = express()

const mongoose = require('mongoose')
require('./Database')
var UserModel = require('./User');

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
let bcrypt = require('bcrypt');
const port = 3001

const jwt = require('jsonwebtoken');
let genToken = (user) => {
    return jwt.sign({
        sub: user.id
    }, 'secret');
}

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(new LocalStrategy(
    (username, password, done) => {
        UserModel.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
        });
    }
));

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromBodyField('jwt');
opts.secretOrKey = 'secret';

passport.use(new JwtStrategy(opts, function(token, done) {
    UserModel.findOne({id: token.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

// passport.use(UserModel.createStrategy());
// passport.serializeUser(UserModel.serializeUser());
// passport.deserializeUser(UserModel.deserializeUser());

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(passport.initialize());
app.use(passport.session());

app.post('/signup',
    async (req, res) => {
        console.log('User ' + req.body.email + ' with password ' + req.body.password + ' reached this route!')

        await UserModel.findOne({ email: req.body.email }, async (err, docs)=>{
            if(docs === null) {
                let password = await bcrypt.hash(req.body.password, 10)
                await UserModel.create({ email: req.body.email, password: password })

                console.log('User with email ' + req.body.email + ' created!')
                res.send('User with email ' + req.body.email + ' created!')
            } else {
                console.log('Email already in use!')
                res.send('Email already in use!')
            }
        })
    }
)

app.post('/signin',
    async (req, res) => {
        console.log('User ' + req.body.email + ' with password ' + req.body.password + ' hit this route!')

        await UserModel.findOne({ email: req.body.email }, async (err, docs) => {
            if(docs === null) {
                res.send('No user with this email found!')
            } else {
                let userPassword = docs.password;
                let compare = await bcrypt.compare(req.body.password, userPassword)
                if(compare) {
                    res.send('Signed in!')
                } else {
                    res.send('Incorrect password!')
                }
            }
        })

    }
);

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
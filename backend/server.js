const express = require('express')
const app = express()

var UserModel = require('./user');
require('./Database')

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
const port = 3001

const jwt = require('jsonwebtoken');
let genToken = (user) => {
    return jwt.sign({
        sub: user.id
    }, 'secret');
}

var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(UserModel.createStrategy());
passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());

passport.use(new LocalStrategy(
    function(username, password, done) {
      UserModel.findOne({ username: username }, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        if (user.authenticate(password, (err, isMatch)=>{
            if (err) throw err;
            console.log(password, isMatch);
        })) {
            return done(null, false);
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

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(passport.initialize());
app.use(passport.session());

app.post('/signup', async (req, res)=>{
  UserModel.register(await new UserModel({ username: req.body.username }), req.body.password, (err)=>{
    if(err) {
      res.send(`sign up err: ${err}`)
    } else {
        console.log(`New user signed up: ${req.body.username}`)
        res.status(200).send()
    }
  })
})

app.post('/signin', passport.authenticate('local'),
    (req, res) => {
        // console.log(req)
        console.log(res)
        // console.log(done)
    }
);

// app.post('/signin', passport.authenticate('jwt', { session: false }), (req, res)=>{
//     console.log('Signed in!')

//     let token = genToken(req.user)
//     console.log(token)

//     res.send(token)

// //   res.status(200).send('cow')
// //   res.status(400).send('Invalid password')
// })

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
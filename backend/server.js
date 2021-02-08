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

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/signup',
    async (req, res) => {
        console.log('User ' + req.body.email + ' with password ' + req.body.password + ' reached this route!')

        await UserModel.findOne({ email: req.body.email }, async (err, docs)=>{
            if(docs === null) {
                let password = await bcrypt.hash(req.body.password, 10)
                await UserModel.create({ email: req.body.email, password: password })

                console.log('User with email ' + req.body.email + ' created!')
                res.status(200).json({ message: 'User with email ' + req.body.email + ' created!' })
            } else {
                console.log('Email already in use!')
                res.json({ message: 'Email already in use!' })
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
                    res.send(req.body.email + ' signed in!')
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
const express = require('express')
const app = express()
const port = 3001

let UserModel = require('./user')

let msg = new UserModel({
  username: 'sdafdsfasdf',
  email: 'sdafdsfafdom@gmail.com',
  password: 'sdafdsfdsffds'
})

msg.save()
   .then(doc => {
     console.log(doc)
   })
   .catch(err => {
     console.error(err)
   })



app.get('/signup', (req, res) => {
    res.send('Hello Wofdkmsgnkjdfgad!')
  })

app.get('/login', (req, res) => {
  res.send('Helfdglo World!')
})

app.listen(port, () => {
  console.log(`Lstening at http://localhost:${port}`)
})
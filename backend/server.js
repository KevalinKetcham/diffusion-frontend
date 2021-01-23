const express = require('express')
const app = express()
const port = 3001

app.get('/signup', (req, res) => {
    res.send('Hello Wofdkmsgnkjdfgad!')
  })

app.get('/login', (req, res) => {
  res.send('Helfdglo World!')
})

app.listen(port, () => {
  console.log(`Lstening at http://localhost:${port}`)
})
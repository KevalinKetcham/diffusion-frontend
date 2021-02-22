const express = require('express');
const app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const cookieParser = require('cookie-parser');
app.use(cookieParser())

const cors = require('cors')
app.use(cors())

require('dotenv').config();
const PORT = process.env.PORT;

const auth = require('./Auth');
const upload = require('./Upload');
app.use('/auth', auth);
app.use('/upload', upload);

app.listen(PORT, () => {
  console.log(`Lstening at http://localhost:${PORT}`)
})


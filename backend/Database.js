require('dotenv').config()
const DB = process.env.DB;

let mongoose = require('mongoose');

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error(`Database connection error. Error: ${err}`)
       })
  }
}

module.exports = new Database()

let Database = require('./database')
let mongoose = require('mongoose')
let validator = require('validator')

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value) => {
      return validator.isEmail(value)
    }
  },
  password: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('UserData', userSchema)
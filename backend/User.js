let mongoose = require('mongoose')
let validator = require('validator')
let passportLocalMongoose = require('passport-local-mongoose')

let userSchema = new mongoose.Schema({

})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema)

  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // email: {
  //   type: String,
  //   required: true,
  //   unique: true,
  //   lowercase: true,
  //   validate: (value) => {
  //     return validator.isEmail(value)
  //   }
  // },
  // password: {
  //   type: String,
  //   required: true,
  // }
let mongoose = require('mongoose');
let bcrypt = require('bcrypt');

let UserModel = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }
})

// UserModel.pre('save',
//   async (next) => {
//     let user = this.password;
//     console.log(user)
//     let hash = await bcrypt.hash(this.password, 10);

//     this.password = hash;
//     next();
//   }
// )

// UserModel.methods.isValidPassword = async (password) => {
//   let user = this;
//   let compare = await bcrypt.compare(password, user.password);

//   return compare;
// }

module.exports = mongoose.model('User', UserModel)


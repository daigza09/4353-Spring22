const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true, maxLength: 150 },
  addressLine1: { type: String, required: true, maxLength: 100 },
  addressLine2: { type: String, maxLength: 100 },
  city: { type: String, required: true, maxLength: 100 },
  state: { type: String, required: true, maxLength: 9 },
  zipcode: { type: String, required: true, maxLength: 9 }
});

module.exports = mongoose.model('User', userSchema)

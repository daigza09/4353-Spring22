const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  email: { type: String, required: true, maxLength: 50 },
  password: { type: String, required: true, maxLength: 50 },
  fullName: { type: String, required: true, maxLength: 150 },
  addressLine1: { type: String, required: true, maxLength: 100 },
  addressLine2: { type: String, required: true, maxLength: 100 },
  city: { type: String, required: true, maxLength: 100 },
  state: { type: String, required: true, maxLength: 6 },
  zipcode: { type: String, required: true, maxLength: 9 }
});

const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;






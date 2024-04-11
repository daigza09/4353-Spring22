const mongoose = require('mongoose');

const clientProfileSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    maxLength: 150,
  },
  address1: {
    type: String,
    maxLength: 100,
  },
  address2: {
    type: String,
    maxLength: 100,
  },
  zipcodeNumber: {
    type: String,
    maxLength: 9,
  },
  city: {
    type: String,
    maxLength: 100,
  },
  userLocation: {
    type: String,
    maxLength: 5,
  },
});

const User = mongoose.model('ClientProfile', clientProfileSchema);

module.exports = User;

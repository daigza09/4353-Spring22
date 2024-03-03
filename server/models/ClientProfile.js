const mongoose = require('mongoose');

const clientProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fullName: { type: String, required: true, maxlength: 50 },
  address1: { type: String, required: true, maxlength: 100 },
  address2: { type: String, maxlength: 100 },
  city: { type: String, required: true, maxlength: 100 },
  state: { type: String, required: true },
  zipcode: { type: String, required: true, minlength: 5, maxlength: 9 },
});

module.exports = mongoose.model('ClientProfile', clientProfileSchema);
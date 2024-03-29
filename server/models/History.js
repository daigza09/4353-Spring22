const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const historySchema = new Schema({
  fuelType: { type: String, enum: ['Diesel', 'Gasoline'], default: '' },
  numGallons: { type: Number, default: 0 }, // Change data type to Number
  purchaseDate: { type: Date, default: Date.now }, // Use Date type for dates
  deliveryDate: { type: Date, default: Date.now }, // Use Date type for dates
  total: { type: Number, default: 0 }, // Change data type to Number
});

module.exports = mongoose.model('History', historySchema);
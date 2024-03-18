const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelQuoteSchema = new Schema({
  gasLocation: { type: String, enum: ['01-TX', '02-FL', '03-NY'], default: '' },
  fuelType: { type: String, enum: ['Diesel', 'Gasoline'], default: '' },
  numGallons: { type: Number, default: 0 }, // Change data type to Number
  purchaseDate: { type: Date, default: Date.now }, // Use Date type for dates
  pricePerGallon: { type: Number, default: 0 }, // Change data type to Number
  deliveryDate: { type: Date, default: Date.now }, // Use Date type for dates
  deliveryAddress: { type: String, default: '' },
  total: { type: Number, default: 0 }, // Change data type to Number
});

module.exports = mongoose.model('FuelQuote', fuelQuoteSchema);
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelQuoteSchema = new Schema({
  gasLocation: { type: String, enum: ['01-TX', '02-FL', '03-NY'], default: '' },
  fuelType: { type: String, enum: ['Diesel', 'Gasoline'], default: '' },
  numGallons: { type: String, default: '' },
  purchaseDate: { type: String, default: '' },
  pricePerGallon: { type: String, default: '' },
  deliveryDate: { type: String, default: '' },
  deliveryAddress: { type: String, default: '' },
  total: { type: String, default: '' },
});

module.exports = mongoose.model('FuelQuote', fuelQuoteSchema);

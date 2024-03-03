const mongoose = require('mongoose');

const Schema = mongoose.Schema

const fuelQuoteSchema = new Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gallonsRequested: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  deliveryDate: { type: Date, required: true },
  suggestedPrice: { type: Number },
  totalAmountDue: { type: Number },
});

module.exports = mongoose.model('FuelQuote', fuelQuoteSchema);
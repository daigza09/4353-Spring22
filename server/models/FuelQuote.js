const mongoose = require('mongoose');

const fuelQuoteSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gallonsRequested: { type: Number, required: true },
  deliveryAddress: { type: String, required: true },
  deliveryDate: { type: Date, required: true },
  suggestedPrice: { type: Number },
  totalAmountDue: { type: Number },
});

module.exports = mongoose.model('FuelQuote', fuelQuoteSchema);
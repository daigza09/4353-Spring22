/*const FuelQuote = require('../models/FuelQuote');

exports.getAllQuotes = (req, res) => {
  // get all client quotes
};

exports.createQuote = (req, res) => {
  // create a new fuel quote
};*/
const getOrder = (req, res) => {
  res.json({message: 'Get orders'})
}

module.exports  = {
  getOrder
}
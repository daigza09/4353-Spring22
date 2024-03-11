const FuelQuote = require('../models/FuelQuote');

/*exports.getAllQuotes = (req, res) => {
  // get all client quotes
};

exports.createQuote = (req, res) => {
  // create a new fuel quote
};*/

// @desc Get fuel quote orders 
// @route GET /order
// @access Private after authentication
const getOrder = (req, res) => {
  res.json({message: 'Get orders'})
}

// @desc Make fuel quote orders 
// @route POST /order
// @access Private after authentication
const makeOrder = (req, res) => {
  console.log(req.body);
  
  res.json({message: 'Make orders'});
}

// @desc Update fuel quote orders 
// @route PUT /order/:id
// @access Private after authentication
const updateOrder = (req, res) => {
  res.json({message:`Update order ${req.params.id}`})
}

// @desc Delete fuel quote orders 
// @route DELETE /order/:id
// @access Private after authentication
const deleteOrder = (req, res) => {
  res.json({message:`Delete order ${req.params.id}`})
}

// @desc Get all customer orders 
// @route Get /order/:Customerid
// @access Private after authentication
const getAllOrders = (req, res) => {
  res.json({message: `This should return all the orders of customer ${req.params.id}`})
}
module.exports  = {
  getOrder,
  makeOrder, 
  updateOrder,
  deleteOrder,
  getAllOrders
}
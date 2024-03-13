const asyncHandler = require('express-async-handler');
const FuelQuote = require('../models/FuelQuote');
// when you interact with the DB you are returned a promise
// because of this promise we have to use async await

/*exports.getAllQuotes = (req, res) => {
  // get all client quotes
};

exports.createQuote = (req, res) => {
  // create a new fuel quote
};*/

// @desc Get fuel quote orders 
// @route GET /order
// @access Private after authentication
const getOrder = async (req, res) => {
  // orders is the same as quotes
  const orders = await FuelQuote.find()
  res.json(orders)
}

// @desc Make fuel quote orders 
// @route POST /order
// @access Private after authentication
const makeOrder = async (req, res) => {
  console.log(req.body);

  if(!req.body.text){
    res.status(400);
    throw new Error('Please add a text field');
  }

  res.json({message: 'Make orders'});
}

// @desc Update fuel quote orders 
// @route PUT /order/:id
// @access Private after authentication
const updateOrder = asyncHandler(async (req, res) => {
  res.json({message:`Update order ${req.params.id}`})
})

// @desc Delete fuel quote orders 
// @route DELETE /order/:id
// @access Private after authentication
const deleteOrder = asyncHandler(async (req, res) => {
  res.json({message:`Delete order ${req.params.id}`})
})

// @desc Get all customer orders 
// @route Get /order/:Customerid
// @access Private after authentication
const getAllOrders = asyncHandler(async (req, res) => {
  res.json({message: `This should return all the orders of customer ${req.params.id}`})
})
module.exports  = {
  getOrder,
  makeOrder, 
  updateOrder,
  deleteOrder,
  getAllOrders
}
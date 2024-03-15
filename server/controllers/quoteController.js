const asyncHandler = require('express-async-handler');
const FuelQuote = require('../models/FuelQuote');

const getOrder = asyncHandler(async (req, res) => {
  // orders is the same as quotes
  const orders = await FuelQuote.find()
  res.json(orders)
})

// @desc Make fuel quote orders 
// @route POST /order
// @access Private after authentication
const makeOrder = asyncHandler(async (req, res) => {
  console.log(req.body); // Log the request body for debugging

  try {
    // Create a new FuelQuote instance using the request body
    const order = new FuelQuote({
      gasLocation: req.body.gasLocation,
      fuelType: req.body.fuelType,
      numGallons: req.body.numGallons,
      purchaseDate: req.body.purchaseDate,
      pricePerGallon: req.body.pricePerGallon,
      deliveryDate: req.body.deliveryDate,
      deliveryAddress: req.body.deliveryAddress,
      total: req.body.total,
    });

    // Save the new order instance to the database
    await order.save();

    // Respond with a success message
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    // Log and handle any errors that occur during order creation
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'An error occurred while creating the order' });
  }
});

const updateOrder = asyncHandler(async (req, res) => {

  res.json({message:`Update order ${req.params.id}`})

})

const deleteOrder = asyncHandler(async (req, res) => {
  res.json({message:`Delete order ${req.params.id}`})
})

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
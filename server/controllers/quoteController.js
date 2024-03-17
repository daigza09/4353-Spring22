const asyncHandler = require('express-async-handler');
const FuelQuote = require('../models/FuelQuote');

const getOrder = asyncHandler(async (req, res) => {
  const orders = await FuelQuote.find()
  res.json(orders)
})


const makeOrder = asyncHandler(async (req, res) => {
  console.log(req.body);
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
    // Handle any errors that occur during order creation
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'An error occurred while creating the order' });
  }

  
})

const getAllOrders = asyncHandler(async (req, res) => {
  res.json({message: `This should return all the orders of customer ${req.params.id}`})
})

module.exports  = {
  getOrder,
  makeOrder, 
  getAllOrders
}
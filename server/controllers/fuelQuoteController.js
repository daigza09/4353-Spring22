const asyncHandler = require('express-async-handler');
const HistoryData = require('../models/History');
const FuelQuote = require('../models/FuelQuote');

  const createFuelForm = asyncHandler(async (req, res) => {
    try{
    const order = new HistoryData({
      fuelType: req.body.fuelType,
      email: req.body.email,
      numGallons: req.body.numGallons,
      purchaseDate: req.body.purchaseDate,
      deliveryDate: req.body.deliveryDate,
      total: req.body.total,
      
    });
    
      // Save the new order instance to the database
      await order.save();
  
      // Respond with a success message
      res.status(201).json({ message: 'Order created successfully-REEM', order });
    } 
    catch (error){  
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'An error occurred while creating the order' });
    }
  })
  
  const getAllOrders = asyncHandler(async (req, res) => {
    try {
      const orders = await FuelQuote.find();
  
      console.log(orders);
      res.json(orders);
  
    } catch (error) {
      // Handle any errors that occur during fetching orders
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'An error occurred while fetching orders' });
    }
  });

  module.exports  = {
    getAllOrders,
    createFuelForm,
  }
const asyncHandler = require('express-async-handler');
const HistoryData = require('../models/History');
const FuelQuote = require('../models/FuelQuote');
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://test1234:test1234@mern4353cluster.v0haveh.mongodb.net/?retryWrites=true&w=majority&appName=mern4353'; // Replace with your MongoDB URI
const client = new MongoClient(uri);

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
  
  const getAllOrders = async (req, res) => {
    const { email } = req.query; // Extract email parameter from the request query
    
    try {
      await client.connect(); // Connect to MongoDB
  
      const database = client.db('test'); // Use the 'test' database
      const collection = database.collection('fuelquotes'); // Use the 'fuelquotes' collection
  
      let query = {}; // Default query
      
      if (email) {
        // If email parameter is provided, filter by email
        query = { email: email };
      }
  
      // Find documents in the collection based on the query
      const orders = await collection.find(query).toArray();
      
      console.log(orders);
      res.json(orders);
    } catch (error) {
      // Handle any errors that occur during fetching orders
      console.error('Error fetching orders:', error);
      res.status(500).json({ error: 'An error occurred while fetching orders' });
    } finally {
      await client.close(); // Close the MongoDB connection
    }
  };

  module.exports  = {
    getAllOrders,
    createFuelForm,
  }
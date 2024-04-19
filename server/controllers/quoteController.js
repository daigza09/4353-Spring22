const asyncHandler = require('express-async-handler');
const User = require('../models/User'); 
const FuelQuote = require('../models/FuelQuote');

const makeOrder = asyncHandler(async (req, res) => {
  console.log(req.body);
  try {
    // Create a new FuelQuote instance using the request body
    const order = new FuelQuote({
      email: req.body.email,
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

const getUserAddress = asyncHandler(async (req, res) => {
  try {
    const { email } = req.query;
    const user = await  User.find({ email });
    //console.log(user);
    if (!user || user.length === 0) {
        return res.status(404).json({ message: 'User not found' });
    }
    const dataAdd = user[0].addressLine1;

    console.log(`User with email ${email} exists!!`);
    console.log(dataAdd);
    res.status(201).json({ message: 'Address retrieved successfully', dataAdd});
  } catch (error){
    console.error('Error retrieving user address:', error);
    res.status(500).json({ error: 'An error occurred while retreiving user address' });
  }
})

const getPastOrders = asyncHandler(async(req,res)=>{
  try{
    const { email } = req.query;
    const user = await FuelQuote.find({ email });
    //console.log(user);

    const hasOrdered = user.length > 0 ? true : false;

    res.status(200).json({ message: 'Past orders have been retrieved', hasOrdered });

    console.log(hasOrdered);

  } catch(err){
    console.error('Error retreiving users previous orders:', error);
    res.status(500).json({error: 'An error occured while retreiving users orders'});
  }
})

const getUserState = asyncHandler(async(req, res) => {
  try{
    const { email } = req.query;
    const user = await User.find({ email });
    //console.log(user);

    const userState = user[0].state;
    console.log(`User with email ${email} exists!!`);
    console.log(userState);

    res.status(201).json({ message: 'State retrieved successfully', userState});
  } catch(err){
    console.error('Error retrieving user state:', err);
    res.status(500).json({ error: 'An error occurred while retreiving user state' });
  }
})

module.exports  = {
  makeOrder,
  getUserAddress, 
  getPastOrders,
  getUserState,
}
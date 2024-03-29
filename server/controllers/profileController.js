const User = require('../models/ClientProfile');
const asyncHandler = require('express-async-handler');

// is passed in the frontend and we use 'email' to fill in the rest of the
// PUT ,, users info to populate the boxes in our frontend
const updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    res.status(201).json({ message: 'User updated', updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST ,, and it takes in a user email as an api param and returns the user's full info 
const getUserProfileByEmail2 = async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      console.log(`User with email that email exists!!`);
      res.json({
        fullName: user.fullName,
        email: user.email,
        address1: user.address1,
        address2: user.address2,
        zipcodeNumber: user.zipcodeNumber,
        city: user.city,
        userLocation: user.userLocation
      });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// POST ,, and the body is creating a user for us to use
const createUser = async (req, res) => {
  try {
    const { fullName, email, address1, address2, zipcodeNumber, city, userLocation } = req.body;
    const newUser = new User({
      fullName,
      email,
      address1,
      address2,
      zipcodeNumber,
      city,
      userLocation
    });
    await newUser.save();
    res.status(201).json({ message: 'New user created', newUser});
  } catch (error) {
    console.log(error); 
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUserProfileByEmail2, updateUserProfile };
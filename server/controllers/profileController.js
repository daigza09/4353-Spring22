const User = require('../models/ClientProfile');
const asyncHandler = require('express-async-handler');

// update user profile , PUT
const updateUserProfile = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get user profile by email , GET
const getUserProfileByEmail = async (req, res) => {
  try {
      const user = await User.findOne({ email: req.params.email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      console.log(`User with email ${req.params.email} exists`);
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

// get user profile by email , POST
const getUserProfileByEmail2 = async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      console.log(`User with email ${req.body.email} exists!!`);
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

// create a new user ,  POST
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
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createUser, getUserProfileByEmail, getUserProfileByEmail2, updateUserProfile };
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { email: req.params.email },
      req.body,
      { new: true }
    );
    console.log(`User updated with email: ${req.params.email}`);
    res.status(201).json({ message: 'User updated', updatedUser });
  } catch (error) {
    console.error(`Error updating user with email: ${req.params.email}`);
    res.status(500).json({ message: error.message });
  }
});

const getUserProfileByEmail2 = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log(`User with email ${req.body.email} exists`);
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
    console.error(`Error finding user with email ${req.body.email}`);
    res.status(500).json({ message: error.message });
  }
});

const createUser = asyncHandler(async (req, res) => {
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
    console.log(`New user created with email: ${email}`);
    res.status(201).json({ message: 'New user created', newUser });
  } catch (error) {
    console.error(`Error creating new user: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
});

module.exports = { createUser, getUserProfileByEmail2, updateUserProfile };

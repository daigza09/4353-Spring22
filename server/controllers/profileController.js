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

const getUserInfo = asyncHandler(async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.find({ email });
    console.log(user);
    if (!user || user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const userData = user[0]; // sssuming there's only one user with the given email

    console.log(`User with email ${email} exists!!`);
    console.log(userData);
    res.status(201).json({ message: 'User information retrieved successfully', user: userData });
  } catch (error) {
    console.error('Error retrieving user information:', error);
    res.status(500).json({ error: 'An error occurred while retrieving user information' });
  }
});


module.exports = { getUserProfileByEmail2, updateUserProfile, getUserInfo };

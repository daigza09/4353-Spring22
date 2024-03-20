const asyncHandler = require('express-async-handler');
const User = require('../models/Signup');

// create a new user , POST
const signup = async (req, res) => {
  const { email, password, fullName, addressLine1, addressLine2, city, state, zipcode } = req.body;

  // Check if any required fields are missing
  if (!email || !password || !fullName || !addressLine1 || !city || !state || !zipcode) {
    return res.status(400).json({ error: 'Please provide all required fields (email, password, fullName, addressLine1, city, state, zipcode)' });
  }

  try {
    // Check if the email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Create a new user instance
    const user = new User({
      email,
      password,
      fullName,
      addressLine1,
      addressLine2,
      city,
      state,
      zipcode
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'Signup successful', user });
    // Respond with all of the user's details
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};




const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    // Find user by ID
    const user = await User.findOne({ _id: userId });

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Return user details
    res.status(200).json({
      fullName: user.fullName,
      email: user.email,
      password: user.password,
      addressLine1: user.addressLine1,
      addressLine2: user.addressLine2,
      city: user.city,
      state: user.state,
      zipcode: user.zipcode
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const checkEmailExists = async (req, res) => {
  const email = req.params.email;
  try {
      const existingUser = await User.findOne({ email });
      res.status(200).json({ exists: !!existingUser });
  } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { signup, getUserById, checkEmailExists };










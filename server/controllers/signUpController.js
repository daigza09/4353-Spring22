const asyncHandler = require('express-async-handler');
const User = require('../models/Signup');

const signup = async (req, res) => {
  const { email, password, fullName, addressLine1, addressLine2, city, state, zipcode } = req.body;

  console.log('Received data:', req.body); 

  if (!email || !password || !fullName || !addressLine1 || !city || !state || !zipcode) {
    console.log('Missing fields detected');
    return res.status(400).json({ error: 'Please provide all required fields (email, password, fullName, addressLine1, city, state, zipcode)' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Email already exists');
      return res.status(400).json({ error: 'Email already exists' });
    }

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

    await user.save();

    console.log('User saved successfully');
    res.status(201).json({ message: 'Signup successful', user });

  } catch (error) {
    console.log('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({
      fullName: user.fullName,
      email: user.email,
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












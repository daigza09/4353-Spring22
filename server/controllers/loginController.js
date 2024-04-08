const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const Login = require('../models/Login');

exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: 'Please provide email and password' });
    }
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
  
      if (!isMatch) {
        throw new Error('Invalid email or password');
      }

      const login = new Login({ email, password });
      await login.save();
  
      const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
      const refreshToken = jwt.sign({ userId: user._id }, process.env.REFRESH_TOKEN_SECRET);
  
      res.status(200).json({ message: 'Login successful', accessToken, refreshToken });
    } catch (error) {
      res.status(401).json({ error: error.message });
    }
  });


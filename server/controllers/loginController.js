const asyncHandler = require('express-async-handler');
const Signup = require('../models/Signup'); 

exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
        return res.status(400).json({ error: 'Please provide email and password' });
    }

    try {
        const user = await Signup.findOne({ email });

        // Check if user exists
        if (!user) {
            throw new Error('User not found');
        }

        if (user.password !== password) {
            throw new Error('Invalid email or password');
        }

        // Respond with user details
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(401).json({ error: error.message });
    }
});






const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { verifyToken } = require('../middlewares/authMiddleware');
const { verifyRefreshToken } = require('../middlewares/authMiddleware');

router.get('/', verifyToken, (req, res) => {
    const userId = req.user._id; 

    res.json({ message: `User with ID ${userId} accessed the protected route` });
});


router.post('/', verifyRefreshToken, (req, res) => {
    try {
        const accessToken = jwt.sign({ userId: req.user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });

        res.status(200).json({ accessToken });
    } catch (error) {
        console.error(error);
        res.status(403).json({ error: 'Error generating access token' });
    }
});


module.exports = router;




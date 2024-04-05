const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Authorization header is missing' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        console.log("Decoded Token:", decoded);

        const user = await User.findById(decoded.userId);

        if (!user) {
            console.log("User not found in database. Decoded userId:", decoded.userId);
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user; 

        console.log("Req User:", req.user);

        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ error: 'Invalid token' });
    }
};


exports.verifyRefreshToken = async (req, res, next) => {
    const refreshToken = req.body.refreshToken || req.headers['x-refresh-token'];

    if (!refreshToken) {
        return res.status(401).json({ error: 'Refresh token is missing' });
    }

    try {
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        if (Date.now() >= decoded.exp * 1000) {
            return res.status(403).json({ error: 'Refresh token has expired' });
        }

        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(403).json({ error: 'Invalid refresh token' });
    }
};



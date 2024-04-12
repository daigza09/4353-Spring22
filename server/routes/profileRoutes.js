const express = require('express');
const router = express.Router();

const { 
    updateUserProfile, 
    getUserInfo
} = require('../controllers/profileController');

// updates user profile, to update
router.put('/api/users/:email', updateUserProfile); // STEP 3

// returns user info
router.get('/info', getUserInfo);

module.exports = router;

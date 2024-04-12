const express = require('express');
const router = express.Router();

const { 
    createUser, 
    getUserProfileByEmail2, 
    updateUserProfile, 
    getUserInfo
} = require('../controllers/profileController');

// create a new user
router.post('/api/users', createUser); // STEP 1 * MODIFIABLE *

// get user profile by email , to create
router.post('/api/users/getByEmail', getUserProfileByEmail2); // STEP 2

// updates user profile, to update
router.put('/api/users/:email', updateUserProfile); // STEP 3

// returns user info
router.get('/info', getUserInfo);



module.exports = router;

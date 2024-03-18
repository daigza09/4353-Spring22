const express = require('express');
const router = express.Router();
const { createUser, getUserProfileByEmail, getUserProfileByEmail2, updateUserProfile } = require('../controllers/profileController');

// create a new user
router.post('/api/users', createUser);

// get user via email , to find
router.get('/api/users/email/:email', getUserProfileByEmail);

// get user profile by email , to create
router.post('/api/users/getByEmail', getUserProfileByEmail2);

// updates user profile, to update
router.put('/api/users/:email', updateUserProfile);

module.exports = router;

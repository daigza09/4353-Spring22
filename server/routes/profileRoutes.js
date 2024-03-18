const express = require('express');
const router = express.Router();
const { createUser, getUserProfileByEmail, getUserProfileByEmail2 } = require('../controllers/profileController');

// create a new user
router.post('/api/users', createUser);

// get user via email , to create
router.get('/api/users/email/:email', getUserProfileByEmail);

// get user profile by email , to find 
router.post('/api/users/getByEmail', getUserProfileByEmail2);

module.exports = router;

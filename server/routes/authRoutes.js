const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// controller functions
const { login, register } = require('../controllers/authController')

router.post('/login', authController.login);
router.post('/register', authController.register);

module.exports = router;

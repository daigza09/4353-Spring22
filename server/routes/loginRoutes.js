const express = require('express');
const router = express.Router();
const { login } = require('../controllers/loginController');


router.post('/', login); // Handle POST requests for login

router.get('/', login);

module.exports = router;


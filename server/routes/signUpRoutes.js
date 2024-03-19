const express = require('express');
const router = express.Router();

// Import signup controller
const { signup } = require('../controllers/signUpController');

//*** */
const { getUserById } = require('../controllers/signUpController');


router.post('/', signup);

//***** */
router.get('/:id', getUserById);

// Import signup controller
const {checkEmailExists } = require('../controllers/signUpController');

// Route to check if email exists
router.get('/check-email/:email', checkEmailExists);




module.exports = router;






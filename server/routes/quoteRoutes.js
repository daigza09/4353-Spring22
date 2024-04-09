const express = require('express');
const router = express.Router();
const {
    makeOrder, 
    getUserAddress
} = require('../controllers/quoteController')

router.get('/getAddress', getUserAddress);

// create an order
router.post('/', makeOrder);


module.exports = router;
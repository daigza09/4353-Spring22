const express = require('express');
const router = express.Router();
const {
    getOrder, 
    makeOrder, 
} = require('../controllers/quoteController')

router.get('/', getOrder);

// create an order
router.post('/', makeOrder);


module.exports = router;
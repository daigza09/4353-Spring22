const express = require('express');
const router = express.Router();
const {
    getOrder, 
    makeOrder, 
    getAllOrders,
} = require('../controllers/quoteController')

router.get('/', getOrder);

// create an order
router.post('/', makeOrder);


// retreiving all customer orders

router.get('/customer/:id', getAllOrders);

module.exports = router;
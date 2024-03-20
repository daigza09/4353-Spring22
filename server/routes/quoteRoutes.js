const express = require('express');
const router = express.Router();
const {
    getOrder, 
    makeOrder, 
    getAllOrders,
    getAllOrdersByID,
} = require('../controllers/quoteController')

router.get('/', getOrder);

// create an order
router.post('/', makeOrder);


// retreiving all customer orders

router.get('/customer', getAllOrders);
router.get('/customer/:id', getAllOrdersByID);

module.exports = router;
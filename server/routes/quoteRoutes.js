const express = require('express');
const router = express.Router();
const {
    makeOrder, 
    getUserAddress, 
    getPastOrders
} = require('../controllers/quoteController')

router.get('/getAddress', getUserAddress);

router.post('/', makeOrder);

router.get('/prevOrders', getPastOrders);
module.exports = router;
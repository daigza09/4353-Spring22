const express = require('express');
const router = express.Router();
const {
    makeOrder, 
    getUserAddress, 
    getPastOrders,
    getUserState,
    getPrice,
} = require('../controllers/quoteController')

router.get('/getAddress', getUserAddress);

router.post('/', makeOrder);

router.get('/prevOrders', getPastOrders);

router.get('/userState', getUserState);

router.get('/pricingModule', getPrice);

module.exports = router;
const express = require('express');
const router = express.Router();
const {
    getAllOrders,
    getAllOrdersByID,
    createFuelForm,
} = require('../controllers/fuelQuoteController')

// retreiving all customer orders

router.get('/', getAllOrders);
router.post('/createHistory', createFuelForm);

module.exports = router;
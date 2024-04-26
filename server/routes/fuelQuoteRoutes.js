const express = require('express');
const router = express.Router();
const {
    getAllOrders,
    createFuelForm,
    getAllOrdersTest,
} = require('../controllers/fuelQuoteController')

// retreiving all customer orders

router.get('/', getAllOrders);
router.get('/testOrders', getAllOrdersTest);

router.post('/createHistory', createFuelForm);

module.exports = router;
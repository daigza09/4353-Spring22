const express = require('express');
const router = express.Router();
const {getOrder} = require('../controllers/quoteController')
//const quoteController = require('../controllers/quoteController');
//const authMiddleware = require('../middlewares/authMiddleware');

//uncomment the following when the middleware is set up
//router.get('/quotes', authMiddleware.verifyToken, quoteController.getAllQuotes);
//router.post('/quotes', authMiddleware.verifyToken, quoteController.createQuote);
//router.post('/order', quoteController.customerOrder);

router.get('/', getOrder)

// create an order
router.post('/', (req,res) => {
    res.json({message:'Set order'})
})

// update order
router.put('/:id', (req,res) => {
    res.json({message:`Update order ${req.params.id}`})
})

// delete order 
router.delete('/:id', (req,res) => {
    res.json({message: `Delete order ${req.params.id}`})
})
module.exports = router;
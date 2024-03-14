const express = require('express');
const router = express.Router();
const quoteRouter = require('../controllers/quoteController')
//const quoteController = require('../controllers/quoteController');
//const authMiddleware = require('../middlewares/authMiddleware');

//uncomment the following when the middleware is set up
//router.get('/quotes', authMiddleware.verifyToken, quoteController.getAllQuotes);
//router.post('/quotes', authMiddleware.verifyToken, quoteController.createQuote);
//router.post('/order', quoteController.customerOrder);

router.get('/', quoteRouter.getOrder);

// create an order
router.post('/', quoteRouter.makeOrder);

// retreiving all customer orders

router.get('/customer/:id', quoteRouter.getAllOrders);

// update order or delete order
router.route('/:id').delete(quoteRouter.deleteOrder).put(quoteRouter.updateOrder);
module.exports = router;
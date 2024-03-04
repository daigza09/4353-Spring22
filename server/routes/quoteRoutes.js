const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/quotes', authMiddleware.verifyToken, quoteController.getAllQuotes);
router.post('/quotes', authMiddleware.verifyToken, quoteController.createQuote);

module.exports = router;
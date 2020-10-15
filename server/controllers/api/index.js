const router = require('express').Router();
const userRoutes = require('./user-routes');
const quoteRoutes = require('./quote-routes');
// const categoryRoutes = require('./category-routes');
// const profitRoutes = require('./product_profit-routes');

router.use('/users', userRoutes);
router.use('/quotes', quoteRoutes);
// router.use('/categories', categoryRoutes);
// router.use('/profits', profitRoutes);

module.exports = router
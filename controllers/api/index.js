const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const todoRoutes = require('./todo-routes.js');
const recipeRoutes = require('./recipe-routes');
const giftRoutes = require('./gift-routes');

router.use('/users', userRoutes);
router.use('/todo', todoRoutes);
router.use('/recipes', recipeRoutes);
router.use('/gifts', giftRoutes);

module.exports = router;
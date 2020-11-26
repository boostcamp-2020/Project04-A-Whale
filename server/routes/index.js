const router = require('express').Router();
const userRouter = require('./user');
const achieveRouter = require('./achieve');

router.use('/user', userRouter);
router.use('/achieve', achieveRouter);

module.exports = router;

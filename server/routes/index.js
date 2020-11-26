const router = require('express').Router();
const userRouter = require('./user');

router.use('/user', userRouter);

module.exports = router;

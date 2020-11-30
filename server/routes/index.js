const router = require('express').Router();
const userRouter = require('./user');
const bucketRouter = require('./bucket');
const achieveRouter = require('./achieve');

router.use('/users', userRouter);
router.use('/buckets', bucketRouter);
router.use('/achieve', achieveRouter);

module.exports = router;

const router = require('express').Router();
const userRouter = require('./user');
const bucketRouter = require('./bucket');
const achieveRouter = require('./achieve');
const followRouter = require('./follow');

router.use('/users', userRouter);
router.use('/buckets', bucketRouter);
router.use('/achieves', achieveRouter);
router.use('/follows', followRouter);

module.exports = router;

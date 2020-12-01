const router = require('express').Router();
const userRouter = require('./user');
const bucketRouter = require('./bucket');
const achieveRouter = require('./achieve');
const detailRouter = require('./detail');

router.use('/users', userRouter);
router.use('/buckets', bucketRouter);
router.use('/achieve', achieveRouter);
router.use('/details', detailRouter);

module.exports = router;

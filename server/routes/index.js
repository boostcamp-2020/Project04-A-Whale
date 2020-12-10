const router = require('express').Router();
const uploadRouter = require('./upload');
const userRouter = require('./user');
const bucketRouter = require('./bucket');
const achieveRouter = require('./achieve');
const detailRouter = require('./detail');
const followRouter = require('./follow');
const feedRouter = require('./feed');

router.use('/upload', uploadRouter);
router.use('/users', userRouter);
router.use('/buckets', bucketRouter);
router.use('/achieves', achieveRouter);
router.use('/follows', followRouter);
router.use('/details', detailRouter);
router.use('/feeds', feedRouter);

module.exports = router;

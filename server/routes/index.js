const router = require('express').Router();
const uploadRouter = require('./upload');
const userRouter = require('./user');
const bucketRouter = require('./bucket');
const achieveRouter = require('./achieve');
const followRouter = require('./follow');

router.use('/upload', uploadRouter);
router.use('/users', userRouter);
router.use('/buckets', bucketRouter);
router.use('/achieves', achieveRouter);
router.use('/follows', followRouter);

module.exports = router;

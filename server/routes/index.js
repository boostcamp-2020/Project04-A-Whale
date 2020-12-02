const router = require('express').Router();
const objectStorageRouter = require('./object_storage');
const userRouter = require('./user');
const bucketRouter = require('./bucket');
const achieveRouter = require('./achieve');
const followRouter = require('./follow');

router.use('/objects', objectStorageRouter);
router.use('/users', userRouter);
router.use('/buckets', bucketRouter);
router.use('/achieves', achieveRouter);
router.use('/follows', followRouter);

module.exports = router;

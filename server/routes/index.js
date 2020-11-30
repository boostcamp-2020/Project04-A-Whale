const router = require('express').Router();
const userRouter = require('./user');
const bucketRouter = require('./bucket');
const achieveRouter = require('./achieve');

router.use('/user', userRouter);
router.use('/bucket', bucketRouter);
router.use('/achieves', achieveRouter);

module.exports = router;

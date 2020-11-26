const router = require('express').Router();
const userRouter = require('./user');
const bucketRouter = require('./bucket');

router.use('/user', userRouter);
router.use('/bucket', bucketRouter);

module.exports = router;

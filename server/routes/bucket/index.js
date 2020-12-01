const router = require('express').Router();
const controller = require('./controller');

router.get('/presets', controller.presets);
router.get('/', controller.getBuckets);
router.post('/', controller.create);
router.patch('/:bucketNo/', controller.updateBucket);
router.get('/:bucketNo/details', controller.getDetails);

module.exports = router;

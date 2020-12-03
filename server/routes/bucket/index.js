const router = require('express').Router();
const controller = require('./controller');

router.get('/presets', controller.presets);
router.get('/', controller.getBuckets);
router.post('/', controller.create);
router.patch('/:no', controller.updateBucket);

module.exports = router;

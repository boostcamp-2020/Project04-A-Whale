const router = require('express').Router();
const controller = require('./controller');
const middlewares = require('../../middlewares/auth');

router.get('/presets', middlewares.jwtAuth, controller.presets);
router.get('/', middlewares.jwtAuth, controller.getBuckets);
router.get('/:no', middlewares.jwtAuth, controller.getBucketsbyNo);
router.post('/', middlewares.jwtAuth, controller.create);
router.patch('/:no', middlewares.jwtAuth, controller.updateBucket);

module.exports = router;

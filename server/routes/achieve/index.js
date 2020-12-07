const router = require('express').Router();
const controller = require('./controller');

router.get('/:bucketNo', controller.getAchieve);
router.post('/', controller.setAchieve);
router.put('/:no', controller.updateAchieve);

module.exports = router;

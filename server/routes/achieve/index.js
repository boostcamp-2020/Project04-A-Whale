const router = require('express').Router();
const controller = require('./controller');

router.get('/:bucketNo', controller.getAchieve);
router.post('/', controller.setAchieve);
router.put('/:bucketNo', controller.updateAchieve);
router.delete('/:bucketNo', controller.deleteAchieve);

module.exports = router;

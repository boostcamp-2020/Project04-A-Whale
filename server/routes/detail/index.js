const router = require('express').Router();
const controller = require('./controller');

router.get('/:bucketNo', controller.getDetails);
router.patch('/:no', controller.updateDetailStatus);
router.delete('/:no', controller.deleteDetail);

module.exports = router;

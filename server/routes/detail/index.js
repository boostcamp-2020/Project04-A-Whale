const router = require('express').Router();
const controller = require('./controller');

router.patch('/status/:detailNo', controller.updateDetailStatus);
router.get('/:bucketNo', controller.getDetails);

module.exports = router;

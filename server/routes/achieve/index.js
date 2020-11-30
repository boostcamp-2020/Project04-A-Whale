const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.setAchieve);
router.put('/:no', controller.updateAchieve);

module.exports = router;

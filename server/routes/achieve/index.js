const router = require('express').Router();
const controller = require('./controller');
const middlewares = require('../../middlewares/auth');

router.get('/:bucketNo', middlewares.jwtAuth, controller.getAchieve);
router.post('/', middlewares.jwtAuth, controller.setAchieve);
router.put('/:no', middlewares.jwtAuth, controller.updateAchieve);

module.exports = router;

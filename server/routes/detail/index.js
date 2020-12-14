const router = require('express').Router();
const controller = require('./controller');
const middlewares = require('../../middlewares/auth');

router.get('/:bucketNo', middlewares.jwtAuth, controller.getDetails);
router.get('/dday/:dday', controller.getDetailsByDDay);
router.post('/', middlewares.jwtAuth, controller.createDetail);
router.patch('/:no', middlewares.jwtAuth, controller.updateDetail);
router.delete('/:no', middlewares.jwtAuth, controller.deleteDetail);

module.exports = router;

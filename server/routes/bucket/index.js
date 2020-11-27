const router = require('express').Router();
const controller = require('./controller');

router.get('/presets', controller.presets);
router.post('/', controller.create);

module.exports = router;

const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.upload.single('file'), controller.setObject);

module.exports = router;

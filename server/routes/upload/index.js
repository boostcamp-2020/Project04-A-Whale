const router = require('express').Router();
const controller = require('./controller');
const middlewares = require('../../middlewares/auth');
const { upload } = require('../../middlewares/upload');

router.post('/', middlewares.jwtAuth, upload.single('file'), controller.uploadFile);

module.exports = router;

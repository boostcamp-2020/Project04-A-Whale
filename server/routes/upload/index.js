const router = require('express').Router();
const controller = require('./controller');
const { upload } = require('../../middlewares/upload');

router.post('/', upload.single('file'), controller.uploadFile);

module.exports = router;

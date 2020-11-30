const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.getUsers);

module.exports = router;

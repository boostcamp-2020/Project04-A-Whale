const router = require('express').Router();
const controller = require('./controller');
const middlewares = require('../../middlewares/auth');

router.get('/', middlewares.jwtAuth, controller.getFeeds);

module.exports = router;

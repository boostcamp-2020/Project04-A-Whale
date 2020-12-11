const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/info', controller.getUserInfo);
router.get('/:id', controller.isDuplicated);
router.get('/', middlewares.jwtAuth, controller.getUsers);
router.post('/', controller.setUser);
router.post('/login', middlewares.localAuth, controller.login);

module.exports = router;

const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/info', middlewares.jwtAuth, controller.getUserInfo);
router.get('/info/:no', middlewares.jwtAuth, controller.getUserInfoByNo);
router.get('/:id', controller.isDuplicated);
router.get('/', middlewares.jwtAuth, controller.getUsers);
router.get('/search', middlewares.jwtAuth, controller.searchUsers);
router.post('/', controller.setUser);
router.post('/login', middlewares.localAuth, controller.login);

module.exports = router;

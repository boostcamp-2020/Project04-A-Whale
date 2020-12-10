const router = require('express').Router();
const middlewares = require('../../middlewares/auth');
const controller = require('./controller');

router.get('/search', controller.searchUsers);
router.get('/:id', controller.isDuplicated);
router.get('/', middlewares.jwtAuth, controller.getUsers);
router.get('/info', controller.getUserInfo);
router.get('/info/:no', controller.getUserInfoByNo);
router.post('/', controller.setUser);
router.post('/login', middlewares.localAuth, controller.login);

module.exports = router;
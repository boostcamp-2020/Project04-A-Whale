const router = require('express').Router();
const controller = require('./controller');
const middlewares = require('../../middlewares/auth');

router.get('/counts', middlewares.jwtAuth, controller.getFollowCounts);
router.get('/following', middlewares.jwtAuth, controller.getFollowingList);
router.get('/followed', middlewares.jwtAuth, controller.getFollowedList);
router.get('/isfollowing', middlewares.jwtAuth, controller.isFollowing);
router.post('/', middlewares.jwtAuth, controller.setFollowing);
router.delete('/:no', middlewares.jwtAuth, controller.deleteFollowing);

module.exports = router;

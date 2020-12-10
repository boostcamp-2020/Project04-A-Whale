const router = require('express').Router();
const controller = require('./controller');

router.get('/counts', controller.getFollowCounts);
router.get('/following', controller.getFollowingList);
router.get('/followed', controller.getFollowedList);
router.get('/isfollowing', controller.isFollowing);
router.post('/', controller.setFollowing);
router.delete('/:no', controller.deleteFollowing);

module.exports = router;

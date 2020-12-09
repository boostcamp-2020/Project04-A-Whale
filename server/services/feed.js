const db = require('./db/feed');

exports.addFeed = async (userNo, content) => {
  const result = await db.insertFeed(userNo, content);
  return result;
};

exports.getFeeds = async (followingList) => {
  const followingUserNos = followingList.map((user) => user.followed_no);
  const result = await db.selectFeeds(followingUserNos);
  return result;
};

const db = require('./db/feed');

exports.addFeed = async (userNo, content) => {
  const result = await db.insertFeed(userNo, content);
  return result;
};

exports.getFeeds = async (userNo) => {
  const result = await db.selectFeeds(userNo);
  // 팔로워 no 목록
  // in 으로 userNo에 해당하는 것들만 출력
  return result;
};

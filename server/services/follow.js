const db = require('./db/follow');

/*
 * 팔로우 수, 팔로워 수 조회
 */
exports.getFollowCounts = async (userNo) => {
  const followingList = await db.selectFollowingList(userNo);
  const followedList = await db.selectFollowedList(userNo);
  return { followingCount: followingList.length, followedCount: followedList.length };
};

/*
 * 내가 팔로우한 사람 목록 조회
 */
exports.getFollowingList = async (userNo) => {
  const followingList = await db.selectFollowingList(userNo);
  return followingList.map((v) => {
    return { nickname: v['user.nickname'], description: v['user.nickname'], no: v['user.no'] };
  });
};

/*
 * 나를 팔로우 하는 사람 목록 조회
 */
exports.getFollowedList = async (userNo) => {
  const followedList = await db.selectFollowedList(userNo);
  return followedList;
};

/*
 * 팔로우 추가
 */
exports.setFollowing = async ({ userNo, followingNo }) => {
  const result = await db.insertFollowing({ userNo, followingNo });
  return result;
};

/*
 * 팔로우 삭제
 */
exports.deleteFollowing = async (followingNo, followedNo) => {
  const result = await db.deleteFollowing(followingNo, followedNo);
  return result;
};

exports.isFollowing = async (following, followed) => {
  const result = await db.isFollowing(following, followed);
  return result;
};

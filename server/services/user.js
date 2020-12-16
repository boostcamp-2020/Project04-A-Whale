const db = require('./db/user');
const fdb = require('./db/follow');

/*
 * id 중복 개수 조회
 */
exports.isDuplicated = async (id) => {
  const cnt = await db.isDuplicated(id);
  return !!cnt;
};

/*
 * 전체 유저 조회
 */
exports.getUsers = async () => {
  const users = await db.selectUsers();
  return users;
};

/*
 * 사용자 가입
 */
exports.setUser = async (data) => {
  const users = await db.insertUser(data);
  return users;
};

/*
 * 유저 정보 조회
 */
exports.getUserInfo = async (no) => {
  const user = await db.selectUser(no);
  const follower = await fdb.selectFollowedList(no);
  const following = await fdb.selectFollowingList(no);
  const total = user.buckets.length;

  const achieve = user.buckets.reduce((prev, bucket) => {
    if (bucket.status === 'A') return prev + 1;
    return prev;
  }, 0);
  delete user.dataValues.buckets;
  const temp = { ...user.dataValues };
  const achieveRate = Math.round((achieve / total) * 100);
  temp.achieveRate = Number.isNaN(achieveRate) ? 0 : achieveRate;
  temp.followerCount = follower.length;
  temp.followingCount = following.length;

  return temp;
};

exports.searchUser = async (keyword) => {
  const user = await db.selectUserByKeyword(keyword);
  return user;
};

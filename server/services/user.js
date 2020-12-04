const db = require('./db/user');

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

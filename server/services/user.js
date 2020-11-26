const db = require('./db/user');

/*
 * 전체 유저 조회
 */
exports.getUsers = async () => {
  const users = await db.selectUsers();
  return users;
};

const db = require('./db/user');

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

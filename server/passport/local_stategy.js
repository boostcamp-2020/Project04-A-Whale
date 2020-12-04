// local 인증
const bcrypt = require('bcrypt');
const db = require('../services/db/user');

const localConfig = { usernameField: 'id', passwordField: 'password' };

const localVerify = async (id, password, done) => {
  try {
    const user = await db.selectUserFromPassport(id);
    if (!user) {
      return done(null, false);
    }
    const compareResult = await bcrypt.compare(password, user.password);
    if (!compareResult) {
      return done(null, false);
    }
    return done(null, user);
  } catch (error) {
    return done(null);
  }
};

module.exports = { localConfig, localVerify };

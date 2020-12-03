const { ExtractJwt } = require('passport-jwt');
const db = require('../services/db/user');

const jwtConfig = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_ACCESS_TOKEN_SECRET,
};

const jwtVerify = async (jwtPayload, done) => {
  try {
    const user = await db.selectUserFromPassport(jwtPayload.id);
    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  } catch (error) {
    done(error);
  }
};

module.exports = { jwtConfig, jwtVerify };

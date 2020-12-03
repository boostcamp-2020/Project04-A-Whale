const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const { Strategy: JWTStrategy } = require('passport-jwt');

const { localConfig, localVerify } = require('./local_stategy');
const { jwtConfig, jwtVerify } = require('./jwt_stategy');

module.exports = () => {
  passport.use('local', new LocalStrategy(localConfig, localVerify));
  passport.use('jwt', new JWTStrategy(jwtConfig, jwtVerify));
};

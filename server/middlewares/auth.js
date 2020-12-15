const passport = require('passport');

exports.localAuth = passport.authenticate('local', { session: false });
exports.jwtAuth = passport.authenticate('jwt', { session: false });

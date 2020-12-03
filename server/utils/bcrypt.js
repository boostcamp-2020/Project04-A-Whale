const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.hashingPw = (pw) => bcrypt.hash(pw, saltRounds);

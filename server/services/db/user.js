const { hashingPw } = require('../../utils/bcrypt');
const { User } = require('../../models');

exports.selectUserFromPassport = async (id) => {
  const results = await User.findOne({
    attributes: ['no', 'id', 'password', 'nickname'],
    where: { id },
    raw: true,
  });

  return results;
};

exports.selectUsers = async () => {
  const results = await User.findAll({
    attributes: ['no', 'id'],
    raw: true,
  });

  return results;
};

exports.insertUser = async ({ id, password, nickname, description }) => {
  const userData = {
    id,
    password: await hashingPw(password),
    nickname,
    description,
  };

  const results = await User.create(userData);

  return results;
};

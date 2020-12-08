const { hashingPw } = require('../../utils/bcrypt');
const { User, Bucket } = require('../../models');

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

exports.selectUser = async (no) => {
  const results = await User.findOne({
    attributes: ['nickname', 'description', 'rank'],
    include: [
      {
        model: Bucket,
      },
    ],
    where: { no },
  });
  return results;
};

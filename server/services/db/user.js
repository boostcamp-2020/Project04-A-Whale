const { User } = require('../../models');

exports.selectUsers = async () => {
  const results = await User.findAll({
    attributes: ['no', 'id'],
    raw: true,
  });

  return results;
};

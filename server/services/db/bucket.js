const { Op } = require('sequelize');
const { Bucket, Detail, User } = require('../../models');

exports.getPresets = async (keyword) => {
  const results = await Bucket.findAll({
    attributes: ['no', 'title', 'description', 'refCount'],
    where: {
      title: {
        [Op.like]: `%${keyword}%`,
      },
    },
    raw: true,
    include: [
      {
        model: User,
        attributes: ['nickname'],
      },
    ],
  });

  return results;
};

exports.create = async (title, description, userNo) => {
  const results = await Bucket.create({
    title,
    description,
    status: 'O',
    userNo,
  });

  return results;
};

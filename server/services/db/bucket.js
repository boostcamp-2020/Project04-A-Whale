const { Op } = require('sequelize');
const { Bucket, Detail } = require('../../models');

exports.getPresets = async (keyword) => {
  const results = await Bucket.findAll({
    attributes: ['no', 'title', 'description', 'refCount'],
    where: {
      title: {
        [Op.like]: `%${keyword}%`,
      },
    },
    include: [
      {
        model: Detail,
        attributes: ['title', 'dueDate'],
      },
    ],
  });

  return results;
};

exports.create = async (title, description, userNo) => {
  const results = await Bucket.create({
    title,
    description,
    bucketStatus: 'O',
    userNo,
  });

  return results;
};

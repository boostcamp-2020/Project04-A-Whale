const { Op } = require('sequelize');
const { Bucket, Detail, User, Achieve } = require('../../models');

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

exports.selectBuckets = async (userNo) => {
  const results = await Bucket.findAll({ raw: true, where: { userNo } });

  return results;
};

exports.updateBucketStatus = async (bucketNo, status) => {
  const results = await Bucket.update({ status }, { where: { no: bucketNo } });

  return results[0];
};

exports.selectBucketDetails = async (bucketNo) => {
  const results = await Detail.findAll({ raw: true, where: { bucketNo } });

  return results;
};

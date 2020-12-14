const { Op } = require('sequelize');
const { Bucket, User, Achieve } = require('../../models');

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

exports.updateBucketStatus = async (no, status) => {
  const results = await Bucket.update({ status }, { where: { no } });

  return results[0];
};

exports.updateBucketTitleDesc = async (no, title, description) => {
  const results = await Bucket.update({ title, description }, { where: { no } });

  return results[0];
};

exports.selectBucket = async (no) => {
  const results = await Bucket.findOne({ raw: true, where: { no } });

  return results;
};

exports.selectBucketWithAchieve = async (no) => {
  const results = await Bucket.findOne({
    raw: true,
    where: { no },
    include: [
      {
        model: Achieve,
        attributes: ['no', 'description'],
      },
    ],
  });

  return results;
};

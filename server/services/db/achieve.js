const { Achieve } = require('../../models');

exports.selectAchieve = async (no) => {
  const result = await Achieve.findOne({
    where: { no },
    raw: true,
  });

  return result;
};

exports.selectBucketAchieve = async (bucketNo) => {
  const result = await Achieve.findOne({
    where: { bucketNo },
    raw: true,
  });

  return result;
};

exports.insertAchieve = async ({ description, bucketNo }) => {
  const result = await Achieve.create({
    description,
    bucketNo,
    raw: true,
  });

  return result;
};

exports.updateAchieve = async ({ description, no }) => {
  const result = await Achieve.update(
    {
      description,
    },
    {
      where: { no },
      raw: true,
    }
  );

  return result;
};

exports.deleteAchieve = async (no) => {
  const result = await Achieve.destroy({
    where: { no },
    raw: true,
  });

  return result;
};

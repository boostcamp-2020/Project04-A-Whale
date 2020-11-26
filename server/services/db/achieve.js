const { Achieve } = require('../../models');

exports.selectAchieve = async (bucketNo) => {
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

exports.updateAchieve = async ({ description, bucketNo }) => {
  const result = await Achieve.update(
    {
      description,
    },
    {
      where: { bucketNo },
      raw: true,
    }
  );

  return result;
};

exports.deleteAchieve = async (bucketNo) => {
  const result = await Achieve.destroy({
    where: { bucketNo },
    raw: true,
  });

  return result;
};

const { Achieve } = require('../../models');

exports.selectAchieve = async (achieveNo) => {
  const result = await Achieve.findOne({
    where: { achieveNo },
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

exports.deleteAchieve = async (achieveNo) => {
  const result = await Achieve.destroy({
    where: { achieveNo },
    raw: true,
  });

  return result;
};

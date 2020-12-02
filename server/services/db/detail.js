const { Detail } = require('../../models');

exports.bulkCreate = async (details) => {
  const results = await Detail.bulkCreate(details);

  return results;
};

exports.updateDetailStatus = async (detailNo, status) => {
  const results = await Detail.update({ status }, { where: { no: detailNo } });

  return results[0];
};

exports.selectDetails = async (bucketNo) => {
  const results = await Detail.findAll({
    raw: true,
    where: { bucketNo },
    order: [['dueDate', 'ASC']],
  });

  return results;
};

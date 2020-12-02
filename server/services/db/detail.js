const { Detail } = require('../../models');

exports.bulkCreate = async (details) => {
  const results = await Detail.bulkCreate(details);

  return results;
};

exports.updateDetailStatus = async (no, status) => {
  const results = await Detail.update({ status }, { where: { no } });

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

exports.deleteDetail = async (no) => {
  const results = await Detail.destroy({ where: { no } });

  return results;
};

exports.createDetail = async (bucketNo, title, dueDate) => {
  const results = await Detail.create({ bucketNo, status: 'O', title, dueDate });

  return results.dataValues;
};

const { Detail } = require('../../models');

exports.bulkCreate = async (details) => {
  const results = await Detail.bulkCreate(details);

  return results;
};

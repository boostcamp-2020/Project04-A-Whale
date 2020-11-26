const db = require('./db/detail');

exports.bulkCreate = async (details) => {
  const newBucket = await db.bulkCreate(details);
  return newBucket;
};

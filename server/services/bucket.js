const db = require('./db/bucket');

exports.getPresets = async (filter) => {
  const buckets = await db.getPresets(filter);
  return buckets;
};

exports.create = async (title, description, userNo) => {
  const newBucket = await db.create(title, description, userNo);
  return newBucket;
};

exports.getBuckets = async (userNo) => {
  const buckets = await db.selectBuckets(userNo);
  return buckets;
};

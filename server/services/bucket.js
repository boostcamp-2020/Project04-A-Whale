const db = require('./db/bucket');

exports.getPresets = async (filter) => {
  const buckets = await db.getPresets(filter);
  return buckets;
};

exports.create = async (title, description, userNo) => {
  const newBucket = await db.create(title, description, userNo);
  return newBucket;
};

const initialBucket = () => {
  const result = {};
  result.openBuckets = [];
  result.achieveBuckets = [];
  result.giveUpBuckets = [];
  return result;
};

const bucketsByStatus = (buckets) => {
  const result = initialBucket();

  buckets.forEach((bucket) => {
    if (bucket.status === 'O') result.openBuckets.push(bucket);
    if (bucket.status === 'A') result.achieveBuckets.push(bucket);
    if (bucket.status === 'G') result.giveUpBuckets.push(bucket);
  });
  return result;
};

exports.getBuckets = async (userNo) => {
  const buckets = await db.selectBuckets(userNo);
  return bucketsByStatus(buckets);
};

exports.updateStatus = async (bucketNo, status) => {
  const result = await db.updateStatus(bucketNo, status);
  return result;
};

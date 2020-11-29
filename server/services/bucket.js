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
  result.openCount = 0;
  result.achieveCount = 0;
  result.giveUpCount = 0;
  result.openBuckets = [];
  result.achieveBuckets = [];
  result.giveUpBuckets = [];
  return result;
};

const bucketsByStatus = (buckets) => {
  const result = initialBucket();

  buckets.forEach((bucket) => {
    if (bucket.bucketStatus === 'O') {
      result.openCount += 1;
      result.openBuckets.push(bucket);
    }
    if (bucket.bucketStatus === 'A') {
      result.achieveCount += 1;
      result.achieveBuckets.push(bucket);
    }
    if (bucket.bucketStatus === 'G') {
      result.giveUpCount += 1;
      result.giveUpBuckets.push(bucket);
    }
  });
  return result;
};

exports.getBuckets = async (userNo) => {
  const buckets = await db.selectBuckets(userNo);
  return bucketsByStatus(buckets);
};

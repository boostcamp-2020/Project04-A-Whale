const db = require('./db/bucket');

exports.getPresets = async (filter) => {
  const buckets = await db.getPresets(filter);
  return buckets.map((bucket) => {
    return {
      no: bucket.no,
      title: bucket.title,
      description: bucket.description,
      refCount: bucket.refCount,
      nickname: bucket['user.nickname'],
    };
  });
};

exports.create = async (title, description, userNo) => {
  const newBucket = await db.create(title, description, userNo);
  return newBucket;
};

const initialBuckets = () => {
  const result = {};
  result.openBuckets = [];
  result.achieveBuckets = [];
  result.giveUpBuckets = [];
  return result;
};

const bucketsByStatus = (buckets) => {
  const result = initialBuckets();

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

exports.getBucketsByBucketNos = async (bucketNos) => {
  const buckets = await db.selectBucketsByBucketNos(bucketNos);
  return buckets;
};

exports.updateBucketStatus = async (no, status) => {
  const result = await db.updateBucketStatus(no, status);
  return result;
};

exports.updateBucketTitleDesc = async (no, title, description) => {
  const result = await db.updateBucketTitleDesc(no, title, description);
  return result;
};

exports.getBucketWithAchieve = async (no) => {
  const result = await db.selectBucketWithAchieve(no);
  const temp = { ...result, achieveComment: result['achieve.description'] };
  delete temp['achieve.description'];
  return temp;
};

exports.getBucket = async (no) => {
  const result = await db.selectBucket(no);
  return result;
};

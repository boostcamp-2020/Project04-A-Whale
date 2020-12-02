const db = require('./db/bucket');
const adb = require('./db/achieve');

exports.getPresets = async (filter) => {
  const buckets = await db.getPresets(filter);
  return buckets;
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

exports.updateBucketStatus = async (no, status) => {
  const result = await db.updateBucketStatus(no, status);
  return result;
};

exports.updateBucketTitleDesc = async (no, title, description) => {
  const result = await db.updateBucketTitleDesc(no, title, description);
  return result;
};

const initialDetails = () => {
  const result = {};
  result.openDetails = [];
  result.achieveDetails = [];
  result.achieveComment = null;
  return result;
};

const detailsByStatus = (details) => {
  const result = initialDetails();

  details.forEach((detail) => {
    if (detail.status === 'O') result.openDetails.push(detail);
    if (detail.status === 'A') result.achieveDetails.push(detail);
  });
  return result;
};

exports.getDetails = async (bucketNo) => {
  const details = await db.selectBucketDetails(bucketNo);
  const achieve = await adb.selectAchieve(bucketNo);
  const result = detailsByStatus(details);
  if (achieve) {
    result.achieveComment = achieve.description;
  }
  return result;
};

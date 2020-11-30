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

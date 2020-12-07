const db = require('./db/detail');

exports.bulkCreate = async (details) => {
  const newBucket = await db.bulkCreate(details);
  return newBucket;
};

exports.updateDetailStatus = async (no, status) => {
  const result = await db.updateDetailStatus(no, status);
  return result;
};

exports.updateBucketTitleDueDate = async (no, title, dueDate) => {
  const result = await db.updateBucketTitleDueDate(no, title, dueDate);
  return result;
};

const initialDetails = () => {
  const result = {};
  result.openDetails = [];
  result.achieveDetails = [];
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
  const details = await db.selectDetails(bucketNo);
  const result = detailsByStatus(details);
  return result;
};

exports.deleteDetail = async (no) => {
  const result = await db.deleteDetail(no);
  return result;
};

exports.createDetail = async (bucketNo, title, dueDate) => {
  const result = await db.createDetail(bucketNo, title, dueDate);
  return result;
};

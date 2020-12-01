const db = require('./db/detail');
const adb = require('./db/achieve');

exports.bulkCreate = async (details) => {
  const newBucket = await db.bulkCreate(details);
  return newBucket;
};

exports.updateDetailStatus = async (detailNo, status) => {
  const result = await db.updateDetailStatus(detailNo, status);
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
  const details = await db.selectDetails(bucketNo);
  const achieve = await adb.selectAchieve(bucketNo);
  const result = detailsByStatus(details);
  if (achieve) {
    result.achieveComment = achieve.description;
  }
  return result;
};

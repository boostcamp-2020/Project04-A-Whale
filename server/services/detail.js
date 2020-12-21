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

exports.getDetailsByDDay = async (userNo, dday) => {
  const details = await db.selectDetailsByDDay(userNo, dday);
  return details;
};

const formattingBurndownChart = (details) => {
  if (!details.length) return [];
  const dates = details.map(({ dueDate }) => dueDate);
  let prevDate = null;
  if (details.length === 1) prevDate = details[0].createdAt;
  else {
    prevDate = details.reduce((prev, { createdAt }) => (prev > createdAt ? createdAt : prev));
  }
  if (prevDate) {
    dates.push(prevDate.split(' ')[0]);
  }
  const uniqueDate = [...new Set(dates)].sort();

  const result = uniqueDate.map((date, index) => {
    const burndownChart = {
      name: date,
      Ideal_burndown: ((uniqueDate.length - 1 - index) / (uniqueDate.length - 1)) * details.length,
      Completed_tasks: details.filter(
        ({ status, updatedAt }) =>
          status === 'A' && prevDate < updatedAt.split(' ')[0] && updatedAt.split(' ')[0] <= date
      ).length,
      Remaining_tasks:
        details.filter(({ status }) => status === 'O').length +
        details.filter(({ status, updatedAt }) => status === 'A' && updatedAt.split(' ')[0] > date)
          .length,
    };
    prevDate = date;
    return burndownChart;
  });
  return result;
};

exports.getBurnDownChart = async (bucketNo) => {
  const details = await db.selectDetails(bucketNo);
  const result = formattingBurndownChart(details);
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

const db = require('./db/achieve');

/*
 * 조회
 */
exports.getAchieve = async (bucketNo) => {
  const achieve = await db.selectAchieve(bucketNo);
  return achieve;
};

/*
 * 추가
 */
exports.setAchieve = async (data) => {
  const result = await db.insertAchieve(data);
  return result;
};

/*
 * 수정
 */
exports.updateAchieve = async (data) => {
  const result = await db.updateAchieve(data);
  return result;
};

/*
 * 삭제
 */
exports.deleteAchieve = async (bucketNo) => {
  const result = await db.deleteAchieve(bucketNo);
  return result;
};

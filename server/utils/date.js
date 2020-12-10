/* 오늘로부터 1주일전 날짜 반환 */
exports.lastWeek = () => {
  const d = new Date();
  const dayOfMonth = d.getDate();
  d.setDate(dayOfMonth - 7);
  return getDateStr(d);
};

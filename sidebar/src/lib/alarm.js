export const createAlarm = (lengthOfDueDetails, time) => {
  // 알람 등록
  const date = new Date();
  const hhmm = time.split(':').map((e) => Number(e));
  date.setHours(hhmm[0], hhmm[1]);
  const name = String(lengthOfDueDetails);
  const when = date.getTime();
  const periodInMinutes = 24 * 60;
  chrome.alarms.create(name, {
    when,
    periodInMinutes,
  });
  console.log('알람이 등록되었습니다.');
};

export const removeAllAlarms = async () => {
  // 알람 삭제
  await chrome.alarms.clearAll();
  console.log('알람이 모두 삭제되었습니다.');
  return null;
};

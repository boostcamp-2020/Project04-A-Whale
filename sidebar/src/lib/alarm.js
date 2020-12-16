import { getDetailsByDDay } from './api';
import { setWhaleLocalStorage } from './whaleLocalStorage';

export const createAlarm = (lengthOfDueDetails, time) => {
  // 알람 등록
  const date = new Date();
  const hhmm = time.split(':').map((e) => Number(e));
  date.setHours(hhmm[0], hhmm[1]);
  const name = String(lengthOfDueDetails);
  const when = date.getTime();
  const periodInMinutes = 24 * 60;
  whale.alarms.create(name, {
    when,
    periodInMinutes,
  });
  console.log('알람이 등록되었습니다.');
};

export const removeAllAlarms = async () => {
  // 알람 삭제
  await whale.alarms.clearAll();
  console.log('알람이 모두 삭제되었습니다.');
  return null;
};

export const updateAlarm = async (items, dueDetails, { sw, alarm }) => {
  // 설정 및 응답 저장
  console.log('local에 저장되는 스케줄', dueDetails);
  setWhaleLocalStorage({ ...items, sw, alarm, dueDetails });
  // 알람 삭제
  await removeAllAlarms();
  // 알람 생성
  createAlarm(dueDetails.length, alarm.time);
  return null;
};

export const updateDueDetailsAndAlarm = async (items, { sw, alarm }) => {
  // api 요청
  let dueDetails = [];
  try {
    const response = await getDetailsByDDay(alarm.dday);
    dueDetails = response.data.data;
  } catch (error) {
    dueDetails = [];
  }
  updateAlarm(items, dueDetails, { sw, alarm });
  return null;
};

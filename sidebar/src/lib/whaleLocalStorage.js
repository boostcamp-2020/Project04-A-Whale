export const setWhaleLocalStorage = (data) => {
  whale.storage.local.set(data, () => {
    console.log('기록 되었습니다.');
  });
};

export const getWhaleLocalStorage = (keys, callback) => {
  whale.storage.local.get(keys, callback);
};

export const removeAPIStorage = (keys, callback) => {
  try {
    whale.storage.local.remove(keys, callback);
  } catch (error) {
    console.log('확장앱 API 이용불가');
  }
};

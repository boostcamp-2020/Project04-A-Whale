export const setChromeLocalStorage = (data) => {
  chrome.storage.local.set(data, () => {
    console.log('기록 되었습니다.');
  });
};

export const getChromeLocalStorage = (keys, callback) => {
  chrome.storage.local.get(keys, callback);
};

export const removeAPIStorage = (keys, callback) => {
  try {
    chrome.storage.local.remove(keys, callback);
  } catch (error) {
    console.log('확장앱 API 이용불가');
  }
};

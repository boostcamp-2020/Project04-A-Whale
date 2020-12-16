export const setChromeLocalStorage = (data) => {
  chrome.storage.local.set(data, () => {
    console.log('기록 되었습니다.');
  });
};

export const getChromeLocalStorage = (keys, callback) => {
  chrome.storage.local.get(keys, callback);
};

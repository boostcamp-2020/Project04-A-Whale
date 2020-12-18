import { getWhaleLocalStorage } from './whaleLocalStorage';

export const setIsExt = (value) => localStorage.setItem('isExt', value);
export const removeIsExt = (value) => localStorage.removeItem('isExt');
const getIsExt = () => localStorage.getItem('isExt');

export const loadBuckets = (dispatch, callback) => {
  try {
    const api = '/api/buckets';
    if (getIsExt() === 'false' || getIsExt() === null) {
      console.log('익스텐션이 아니거나, 설정체크가 안댐');
      dispatch(callback);
    } else if (getIsExt() === 'true') {
      getWhaleLocalStorage([api], (items) => {
        if (items[api] === 'modified' || JSON.stringify(items[api]) === '{}') {
          console.log('버킷 받아옴');
          dispatch(callback);
        }
      });
    }
  } catch (error) {
    console.log(error);
    setIsExt('false');
    dispatch(callback);
  }
};

export const loadUserInfo = (dispatch, callback) => {
  try {
    const api = '/api/users/info';
    if (getIsExt() === 'false' || getIsExt() === null) {
      console.log('익스텐션이 아니거나, 설정체크가 안댐');
      dispatch(callback);
    } else if (getIsExt() === 'true') {
      getWhaleLocalStorage([api], (items) => {
        if (items[api] === 'modified' || JSON.stringify(items[api]) === '{}') {
          console.log('유저 받아옴');
          dispatch(callback);
        }
      });
    }
  } catch (error) {
    console.log(error);
    setIsExt('false');
    dispatch(callback);
  }
};

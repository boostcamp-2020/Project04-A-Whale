import { getWhaleLocalStorage } from './whaleLocalStorage';

export const setIsExt = (value) => localStorage.setItem('isExt', value);
export const removeIsExt = (value) => localStorage.removeItem('isExt');
const getIsExt = () => localStorage.getItem('isExt');

export const loadBuckets = (dispatch, callback) => {
  try {
    const api = '/api/buckets';
    if (getIsExt() === 'false' || getIsExt() === null) {
      dispatch(callback);
    } else if (getIsExt() === 'true') {
      getWhaleLocalStorage([api], (items) => {
        if (items[api] === 'modified' || JSON.stringify(items[api]) === '{}') {
          dispatch(callback);
        }
      });
    }
  } catch (error) {
    setIsExt('false');
    dispatch(callback);
  }
};

export const loadUserInfo = (dispatch, callback) => {
  try {
    const api = '/api/users/info';
    if (getIsExt() === 'false' || getIsExt() === null) {
      dispatch(callback);
    } else if (getIsExt() === 'true') {
      getWhaleLocalStorage([api], (items) => {
        if (items[api] === 'modified' || JSON.stringify(items[api]) === '{}') {
          dispatch(callback);
        }
      });
    }
  } catch (error) {
    setIsExt('false');
    dispatch(callback);
  }
};

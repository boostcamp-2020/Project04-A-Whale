import axios from 'axios';
import { setWhaleLocalStorage } from './whaleLocalStorage';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://101.101.210.76:8000';

axios.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
  config.timeout = 2000;
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response || error.code === 'ECONNABORTED') {
      alert('서버 응답 지연으로 인해 이 기능을 잠시 사용할 수 없습니다.');
      return;
    }
    if (error.response.status === 401) {
      if (localStorage.getItem('accessToken')) {
        alert('인증 시간이 만료되었습니다. 다시 로그인해주세요.');
        localStorage.removeItem('accessToken');
        window.location.reload(false);
      }
    }
  }
);

// user
export const userLogin = ({ id, password }) =>
  axios.post('/api/users/login', {
    id,
    password,
  });

export const userRegister = ({ id, password, nickname, description }) =>
  axios.post('/api/users', {
    id,
    password,
    nickname,
    description,
  });

export const getUser = () => {
  return axios.get('/api/users/info').then((res) => {
    try {
      setWhaleLocalStorage({ '/api/users/info': 'not modified' });
      return res;
    } catch (error) {
      return res;
    }
  });
};

export const isDuplicated = (id) => axios.get(`/api/users/${id}`);

// buckets
export const getBuckets = () => {
  const res = axios.get('/api/buckets').then((res) => {
    try {
      setWhaleLocalStorage({ '/api/buckets': 'not modified' });
      return res;
    } catch (error) {
      return res;
    }
  });
  return res;
};
export const getBucketsbyNo = (no) => axios.get(`/api/buckets/${no}`);

export const createBucket = (title, description, details, ref) =>
  axios
    .post('/api/buckets', {
      title,
      description,
      details,
      ref,
    })
    .then((res) => {
      try {
        setWhaleLocalStorage({ '/api/buckets': 'modified' });
        setWhaleLocalStorage({ '/api/users/info': 'modified' });
        return res;
      } catch (error) {
        return res;
      }
    });

export const getPresets = (keyword) => axios.get(`/api/buckets/presets?keyword=${keyword}`);

export const updateBucketStatus = ({ no, status }) =>
  axios
    .patch(`/api/buckets/${no}`, {
      status,
    })
    .then((res) => {
      try {
        setWhaleLocalStorage({ '/api/buckets': 'modified' });
        setWhaleLocalStorage({ '/api/users/info': 'modified' });
        return res;
      } catch (error) {
        return res;
      }
    });

export const updateBucketInfo = ({ no, title, description }) =>
  axios
    .patch(`/api/buckets/${no}`, {
      title,
      description,
    })
    .then((res) => {
      try {
        setWhaleLocalStorage({ '/api/buckets': 'modified' });
        setWhaleLocalStorage({ '/api/users/info': 'modified' });
        return res;
      } catch (error) {
        return res;
      }
    });

// details
export const getDetails = (bucketNo) => axios.get(`/api/details/${bucketNo}`);

export const getDetailsByDDay = (dday) => axios.get(`/api/details/dday/${dday}`);

export const updateDetailStatus = ({ no, status }) =>
  axios
    .patch(`/api/details/${no}`, {
      status,
    })
    .then((res) => {
      try {
        setWhaleLocalStorage({ '/api/buckets': 'modified' });
        setWhaleLocalStorage({ '/api/users/info': 'modified' });
        return res;
      } catch (error) {
        return res;
      }
    });

export const updateDetailInfo = ({ no, title, dueDate }) =>
  axios.patch(`/api/details/${no}`, {
    title,
    dueDate,
  });
export const deleteDetail = ({ no }) => axios.delete(`/api/details/${no}`);

export const createDetail = ({ bucketNo, title, dueDate }) =>
  axios
    .post(`/api/details`, {
      bucketNo,
      title,
      dueDate,
    })
    .then((res) => {
      try {
        setWhaleLocalStorage({ '/api/buckets': 'modified' });
        setWhaleLocalStorage({ '/api/users/info': 'modified' });
        return res;
      } catch (error) {
        return res;
      }
    });

// achieves
export const setAchieves = ({ bucketNo, description }) =>
  axios
    .post('/api/achieves', {
      bucketNo,
      description,
    })
    .then((res) => {
      try {
        setWhaleLocalStorage({ '/api/buckets': 'modified' });
        setWhaleLocalStorage({ '/api/users/info': 'modified' });
        return res;
      } catch (error) {
        return res;
      }
    });

export const updateAchieves = ({ achieveNo, description }) =>
  axios
    .put(`/api/achieves/${achieveNo}`, {
      description,
    })
    .then((res) => {
      try {
        setWhaleLocalStorage({ '/api/buckets': 'modified' });
        setWhaleLocalStorage({ '/api/users/info': 'modified' });
        return res;
      } catch (error) {
        return res;
      }
    });

export const uploadObjectStorage = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const config = {
    header: { 'content-type': 'multipart/form-data' },
  };
  return axios.post(`/api/upload/`, formData, config);
};

// follow
export const setFollowing = (followingNo) => axios.post('/api/follows', { followingNo });
export const deleteFollowing = (no) => axios.delete(`/api/follows/${no}`);

export const getFollowedUsers = () => axios.get('/api/follows/followedusers');
export const getFollowingUsers = () => axios.get('/api/follows/followingusers');
export const searchUser = (keyword) => axios.get(`/api/follows/search?keyword=${keyword}`);
export const getUserInfo = (no) => axios.get(`/api/users/info/${no}`);
export const isFollowing = ({ followed }) =>
  axios.get(`/api/follows/isfollowing?followed=${followed}`);

// feed
export const getFeeds = () => axios.get('/api/feeds');

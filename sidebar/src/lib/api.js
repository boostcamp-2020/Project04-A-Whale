import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://localhost:8000';

axios.interceptors.request.use((config) => {
  config.headers = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
  return config;
});

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    if (error.response.status === 401 && localStorage.getItem('accessToken')) {
      alert('accessToken 기한 만료! 재로그인해주세요');
      localStorage.removeItem('accessToken');
      window.location.reload(false);
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

export const getUser = () => axios.get('/api/users/info');

export const isDuplicated = (id) => axios.get(`/api/users/${id}`);

// buckets
export const getBuckets = () => axios.get('/api/buckets');
export const getBucketsbyNo = (no) => axios.get(`/api/buckets/${no}`);

export const createBucket = (title, description, details, ref) =>
  axios.post('/api/buckets', {
    title,
    description,
    details,
    ref,
  });

export const getPresets = (keyword) => axios.get(`/api/buckets/presets?keyword=${keyword}`);

export const updateBucketStatus = ({ no, status }) =>
  axios.patch(`/api/buckets/${no}`, {
    status,
  });

export const updateBucketInfo = ({ no, title, description }) =>
  axios.patch(`/api/buckets/${no}`, {
    title,
    description,
  });

// details
export const getDetails = (bucketNo) => axios.get(`/api/details/${bucketNo}`);

export const updateDetailStatus = ({ no, status }) =>
  axios.patch(`/api/details/${no}`, {
    status,
  });

export const updateDetailInfo = ({ no, title, dueDate }) =>
  axios.patch(`/api/details/${no}`, {
    title,
    dueDate,
  });

export const deleteDetail = ({ no }) => axios.delete(`/api/details/${no}`);

export const createDetail = ({ bucketNo, title, dueDate }) =>
  axios.post(`/api/details`, {
    bucketNo,
    title,
    dueDate,
  });

// achieves
export const setAchieves = ({ bucketNo, description }) =>
  axios.post('/api/achieves', {
    bucketNo,
    description,
  });

export const updateAchieves = ({ achieveNo, description }) =>
  axios.put(`/api/achieves/${achieveNo}`, {
    description,
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
export const isFollowing = ({ following, followed }) =>
  axios.get(`/api/follows/isfollowing?following=${following}&followed=${followed}`);

// feed
export const getFeeds = () => axios.get('/api/feeds');

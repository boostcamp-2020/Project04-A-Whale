import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '/';

// buckets
export const getBuckets = () => axios.get('/api/buckets');

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

// achieves
export const setAchieves = ({ bucketNo, description }) => {
  return axios.post('/api/achieves', {
    bucketNo,
    description,
  });
};

export const updateAchieves = ({ achieveNo, description }) => {
  return axios.put(`/api/achieves/${achieveNo}`, {
    description,
  });
};

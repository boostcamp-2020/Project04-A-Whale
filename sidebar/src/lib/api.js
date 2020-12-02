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

export const updateBucketStatus = ({ bucketNo, status }) =>
  axios.patch(`/api/buckets/${bucketNo}`, {
    status,
  });

export const updateBucketInfo = ({ bucketNo, title, description }) =>
  axios.patch(`/api/buckets/${bucketNo}`, {
    title,
    description,
  });

// details
export const getDetails = (bucketNo) => axios.get(`/api/details/${bucketNo}`);

export const updateDetailStatus = ({ detailNo, status }) =>
  axios.patch(`/api/details/${detailNo}`, {
    status,
  });

export const updateDetailInfo = ({ detailNo, detail }) =>
  axios.patch(`/api/buckets/${detailNo}`, {
    detail,
  });

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

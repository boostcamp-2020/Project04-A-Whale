import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'http://101.101.210.76:8000';

axios.interceptors.response.use(({ data }) => data);

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

export const getDetails = (bucketNo) => axios.get(`/api/buckets/${bucketNo}/details`);

export const updateBucketStatus = ({ bucketNo, status }) =>
  axios.patch(`/api/buckets/${bucketNo}/status`, {
    status,
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

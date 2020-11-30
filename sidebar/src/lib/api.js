import axios from 'axios';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '/';

// buckets
export const getBuckets = () => axios.get('/api/buckets');

export const updateBucketStatus = (bucketNo, status) => {
  return axios.patch(`/api/buckets/${bucketNo}/status`, {
    status,
  });
};

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

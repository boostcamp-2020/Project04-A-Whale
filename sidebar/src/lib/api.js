import axios from 'axios';

export const createBucket = (title, description, details, ref) =>
  axios.post('/api/buckets', {
    title,
    description,
    details,
    ref,
  });

export const getPresets = (keyword) =>
  axios.get(`/api/buckets/presets?keyword=${keyword}`);

export const getDetails = (bucketNo) =>
  axios.get(`/api/buckets/${bucketNo}/details`);

export const getBuckets = () => axios.get('/api/buckets');

export const updateBucketStatus = ({ bucketNo, status }) => {
  return axios.patch(`/api/buckets/${bucketNo}/status`, {
    status,
  });
};

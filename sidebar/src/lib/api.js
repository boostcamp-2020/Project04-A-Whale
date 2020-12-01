import axios from 'axios';

export const getBuckets = () => axios.get('/api/buckets');

export const updateBucketStatus = ({ bucketNo, status }) => {
  return axios.patch(`/api/buckets/${bucketNo}/status`, {
    status,
  });
};

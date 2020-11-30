import axios from 'axios';

export const getBuckets = () => axios.get('/api/buckets');

export const updateBucketStatus = (bucketNo, status) => {
  axios.patch(`/api/buckets/${bucketNo}/status`, {
    status,
  });
};

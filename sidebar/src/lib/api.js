import axios from 'axios';

export const getBuckets = () => axios.get('/api/bucket/list');

export const updateBucketStatus = (bucketNo, status) => {
  axios.patch(`/api/bucket/status/${bucketNo}`, {
    status,
  });
};

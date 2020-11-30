import axios from 'axios';

export const createBucket = (title, description, details, ref) =>
  axios.post('http://localhost:8000/api/buckets', {
    title,
    description,
    details,
    ref,
  });

export const getPresets = (keyword) =>
  axios.get(`http://localhost:8000/api/buckets/presets?keyword=${keyword}`);

export const getDetails = (bucketNo) =>
  axios.get(`http://localhost:8000/api/buckets/${bucketNo}/details`);

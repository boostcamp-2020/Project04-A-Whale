import axios from 'axios';

export const createBucket = ( title, description, details, ref) => axios.post('/api/buckets', {
    title: title,
    description: description,
    details: details,
    ref: ref,
});

export const getPresets = ( keyword ) => axios.get(`/api/buckets/presets?keyword=${keyword}`);

export const getDetails = ( bucketNo ) => axios.get(`/api/buckets/${bucketNo}/details`);
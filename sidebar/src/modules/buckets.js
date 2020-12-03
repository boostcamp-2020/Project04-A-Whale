import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_BUCKETS = 'buckets/GET_BUCKETS';
const GET_BUCKETS_SUCCESS = 'buckets/GET_BUCKETS_SUCCESS';

const UPDATE_BUCKET_STATUS = 'buckets/UPDATE_BUCKET_STATUS';
const UPDATE_BUCKET_STATUS_SUCCESS = 'buckets/UPDATE_BUCKET_STATUS_SUCCESS';

const UPDATE_BUCKET_INFO = 'buckets/UPDATE_BUCKET_INFO';
const UPDATE_BUCKET_INFO_SUCCESS = 'buckets/UPDATE_BUCKET_INFO_SUCCESS';

export const getBuckets = createRequestThunk(GET_BUCKETS, api.getBuckets);
export const updateBucketStatus = createRequestThunk(UPDATE_BUCKET_STATUS, api.updateBucketStatus);
export const updateBucketInfo = createRequestThunk(UPDATE_BUCKET_INFO, api.updateBucketInfo);

const initialState = {
  buckets: {
    openBuckets: [],
    achieveBuckets: [],
    giveUpBuckets: [],
  },
};

const insertBucket = (array, bucket) => {
  const index = array.findIndex((data) => bucket.no < data.no);
  if (index === -1) array.push(bucket);
  else array.splice(index, 0, bucket);
};

const updateStatusBucket = (addArray, removeArray, idx, status) => {
  removeArray[idx].status = status;
  insertBucket(addArray, removeArray[idx]);
  removeArray.splice(idx, 1);
};

const getUpdateStatusBuckets = ({ buckets }, { no, status }) => {
  const openIdx = buckets.openBuckets.findIndex((bucket) => bucket.no === no);

  if (openIdx > -1 && status === 'G') {
    updateStatusBucket(buckets.giveUpBuckets, buckets.openBuckets, openIdx, status);
    return buckets;
  }

  const giveUpIdx = buckets.giveUpBuckets.findIndex((bucket) => bucket.no === no);

  updateStatusBucket(buckets.openBuckets, buckets.giveUpBuckets, giveUpIdx, status);
  return buckets;
};

const updateInfoBucket = (array, idx, title, description) => {
  array[idx].title = title;
  array[idx].description = description;
};

const getUpdateInfoBuckets = ({ buckets }, { no, title, description }) => {
  const openIdx = buckets.openBuckets.findIndex((bucket) => bucket.no === no);
  const achieveIdx = buckets.achieveBuckets.findIndex((bucket) => bucket.no === no);
  const giveUpIdx = buckets.giveUpBuckets.findIndex((bucket) => bucket.no === no);

  if (openIdx > -1) updateInfoBucket(buckets.openBuckets, openIdx, title, description);
  else if (giveUpIdx > -1) updateInfoBucket(buckets.openBuckets, openIdx, title, description);
  else updateInfoBucket(buckets.achieveBuckets, achieveIdx, title, description);

  return buckets;
};

const buckets = handleActions(
  {
    [GET_BUCKETS_SUCCESS]: (state, action) => ({
      ...state,
      buckets: action.payload.data,
    }),
    [UPDATE_BUCKET_STATUS_SUCCESS]: (state, action) => ({
      ...state,
      buckets: getUpdateStatusBuckets(state, action.params),
    }),
    [UPDATE_BUCKET_INFO_SUCCESS]: (state, action) => ({
      ...state,
      buckets: getUpdateInfoBuckets(state, action.params),
    }),
  },
  initialState
);

export default buckets;

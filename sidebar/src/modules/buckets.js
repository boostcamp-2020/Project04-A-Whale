import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_BUCKETS = 'buckets/GET_BUCKETS';
const GET_BUCKETS_SUCCESS = 'buckets/GET_BUCKETS_SUCCESS';

const UPDATE_BUCKET_STATUS = 'buckets/CHANGE_BUCKET_STATUS';
const UPDATE_BUCKET_STATUS_SUCCESS = 'buckets/UPDATE_BUCKET_STATUS_SUCCESS';

export const getBuckets = createRequestThunk(GET_BUCKETS, api.getBuckets);
export const updateBucketStatus = createRequestThunk(UPDATE_BUCKET_STATUS, api.updateBucketStatus);

const initialState = {
  buckets: null,
};

const buckets = handleActions(
  {
    [GET_BUCKETS_SUCCESS]: (state, action) => ({
      ...state,
      buckets: action.payload,
    }),
    [UPDATE_BUCKET_STATUS_SUCCESS]: (state, action) => ({
      ...state,
      buckets: {
        ...state.buckets,
        status: action.payload.status,
      },
    }),
  },
  initialState
);

export default buckets;

import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_BUCKETS = 'buckets/GET_BUCKETS';
const GET_BUCKETS_SUCCESS = 'buckets/GET_BUCKETS_SUCCESS';
const GET_BUCKETS_FAILURE = 'buckets/GET_BUCKETS_FAILURE';

const UPDATE_BUCKET_STATUS = 'buckets/CHANGE_BUCKET_STATUS';
const UPDATE_BUCKET_STATUS_SUCCESS = 'buckets/UPDATE_BUCKET_STATUS_SUCCESS';
const UPDATE_BUCKET_STATUS_FAILURE = 'buckets/UPDATE_BUCKET_STATUS_FAILURE';

export const getBuckets = createRequestThunk(GET_BUCKETS, api.getBuckets);
export const updateBucketStatus = createRequestThunk(UPDATE_BUCKET_STATUS, api.updateBucketStatus);

const initialState = {
  loading: {
    GET_BUCKETS: false,
    UPDATE_BUCKET_STATUS: false,
  },
  buckets: null,
};

const buckets = handleActions(
  {
    [GET_BUCKETS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_BUCKETS: true,
      },
    }),
    [GET_BUCKETS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_BUCKETS: false,
      },
      buckets: action.payload,
    }),
    [GET_BUCKETS_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        GET_BUCKETS: false,
      },
    }),
    [UPDATE_BUCKET_STATUS]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        UPDATE_BUCKET_STATUS: true,
      },
    }),
    [UPDATE_BUCKET_STATUS_SUCCESS]: (state, action) => ({
      ...state,
      loading: {
        ...state.loading,
        UPDATE_BUCKET_STATUS: false,
      },
      buckets: {
        ...state.buckets,
        status: action.payload.status, // 확인 필요
      },
    }),
    [UPDATE_BUCKET_STATUS_FAILURE]: (state) => ({
      ...state,
      loading: {
        ...state.loading,
        UPDATE_BUCKET_STATUS: false,
      },
    }),
  },
  initialState
);

export default buckets;

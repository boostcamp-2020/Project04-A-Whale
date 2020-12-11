import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_USERBUCKETS = 'userinfo/GET_USERBUCKETS';
const GET_USERBUCKETS_SUCCESS = 'userinfo/GET_USERBUCKETS_SUCCESS';
const GET_ISFOLLOWING = 'userinfo/GET_ISFOLLOWING';
const GET_ISFOLLOWING_SUCCESS = 'userinfo/GET_ISFOLLOWING_SUCCESS';
const GET_USERINFO = 'userinfo/GET_USERINFO';
const GET_USERINFO_SUCCESS = 'userinfo/GET_USERINFO_SUCCESS';

export const getUserBuckets = createRequestThunk(GET_USERBUCKETS, api.getBucketsbyNo);
export const getIsFollowing = createRequestThunk(GET_ISFOLLOWING, api.isFollowing);
export const getUserInfo = createRequestThunk(GET_USERINFO, api.getUserInfo);

const initialState = {
  userInfo: {},
  isFollowing: false,
  buckets: {
    openBuckets: [],
    achieveBuckets: [],
    giveUpBuckets: [],
  },
};

const buckets = handleActions(
  {
    [GET_USERBUCKETS_SUCCESS]: (state, action) => ({
      ...state,
      buckets: action.payload.data,
    }),
    [GET_ISFOLLOWING_SUCCESS]: (state, action) => ({ ...state, isFollowing: action.payload.data }),
    [GET_USERINFO_SUCCESS]: (state, action) => ({
      ...state,
      userInfo: action.payload.data,
    }),
  },
  initialState
);

export default buckets;

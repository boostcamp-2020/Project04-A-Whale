import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_FEEDS = 'feeds/GET_FEEDS';
const GET_FEEDS_SUCCESS = 'feeds/GET_FEEDS_SUCCESS';

export const getFeeds = createRequestThunk(GET_FEEDS, api.getFeeds);

const initialState = {
  feeds: null,
};

const feeds = handleActions(
  {
    [GET_FEEDS_SUCCESS]: (state, action) => ({
      ...state,
      feeds: action.payload.data,
    }),
  },
  initialState
);

export default feeds;

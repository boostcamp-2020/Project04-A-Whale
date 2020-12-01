import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_DETAILS = 'details/GET_DETAILS';
const GET_DETAILS_SUCCESS = 'details/GET_DETAILS_SUCCESS';

export const getDetails = createRequestThunk(GET_DETAILS, api.getDetails);

const initialState = {
  details: {
    openDetails: [],
    achieveDetails: [],
    achieveComment: null,
  },
};

const details = handleActions(
  {
    [GET_DETAILS_SUCCESS]: (state, action) => ({
      ...state,
      details: action.payload.data,
    }),
  },
  initialState
);

export default details;

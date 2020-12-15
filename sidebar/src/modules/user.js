import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

const GET_USER = 'user/GET_USER';
const GET_USER_SUCCESS = 'user/GET_USER_SUCCESS';

export const getUser = createRequestThunk(GET_USER, api.getUser);

const initialState = {
  user: null,
};

const user = handleActions(
  {
    [GET_USER_SUCCESS]: (state, action) => ({
      ...state,
      user: action.payload.data,
    }),
  },
  initialState
);

export default user;

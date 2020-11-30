import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
  ADD_DETAIL,
  INPUT_DESC,
  INPUT_TITLE,
  REMOVE_DETAIL,
  RESET_BUCKET,
  LOAD_PRESET,
} from './actions/actionTypes';

const initialState = {
  title: '',
  description: '',
  details: [],
};

const createbucket = handleActions(
  {
    [INPUT_TITLE]: (state, { payload: input }) => ({ ...state, title: input }),
    [INPUT_DESC]: (state, { payload: input }) => ({ ...state, description: input }),
    [ADD_DETAIL]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.details.push(input);
      }),
    [REMOVE_DETAIL]: (state, { payload: input }) =>
      produce(state, (draft) => {
        const idx = draft.details.indexOf(input);
        draft.details.splice(idx, 1);
      }),
    [LOAD_PRESET]: (state, { payload: input }) => {
      const { title, description, details } = input;
      return { title: title, description: description, details: details };
    },
    [RESET_BUCKET]: (state, action) => initialState,
  },
  initialState
);

export default createbucket;

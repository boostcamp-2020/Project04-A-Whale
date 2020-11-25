import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
  ADD_DETAIL,
  INPUT_DESC,
  INPUT_TITLE,
  REMOVE_DETAIL,
  RESET_BUCKET,
} from './actions/actionTypes';

const initialState = {
  title: '',
  description: '',
  details: ['detail1', 'detail2'],
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
    [RESET_BUCKET]: (state, action) => initialState,
  },
  initialState
);

export default createbucket;

import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
  ADD_DETAIL,
  INPUT_DESC,
  INPUT_TITLE,
  REMOVE_DETAIL,
  RESET_BUCKET,
  LOAD_PRESET,
  CREATE_BUCKET,
  UPDATE_DETAILDUE,
} from './actions/actionTypes';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

export const createBucket = createRequestThunk(CREATE_BUCKET, api.createBucket);

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
        draft.details.push({ title: input.title, status: 'O', dueDate: input.dueDate });
      }),
    [UPDATE_DETAILDUE]: (state, { payload: input }) =>
      produce(state, (draft) => {
        const idx = state.details.findIndex((element) => element.title === input.title);
        draft.details[idx].dueDate = input.dueDate;
      }),
    [REMOVE_DETAIL]: (state, { payload: input }) =>
      produce(state, (draft) => {
        const idx = state.details.findIndex((element) => element.title === input);
        draft.details.splice(idx, 1);
      }),
    [LOAD_PRESET]: (state, { payload: input }) => {
      console.log(input);
      const { bucketTitle, bucketDescription, bucketDetails } = input;
      return { title: bucketTitle, description: bucketDescription, details: bucketDetails };
    },
    [CREATE_BUCKET]: (state, action) => ({
      ...state,
    }),
    [RESET_BUCKET]: (state, action) => initialState,
  },
  initialState
);

export default createbucket;

import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';
import getFormatDate from '../lib/date';

export const INPUT_TITLE = 'createbucket/INPUT_TITLE';
export const INPUT_DESC = 'createbucket/INPUT_DESC';
export const ADD_DETAIL = 'createbucket/ADD_DETAIL';
export const UPDATE_DETAILDUE = 'createbucket/UPDATE_DETAILDUE';
export const REMOVE_DETAIL = 'createbucket/REMOVE_DETAIL';
export const LOAD_PRESET = 'createbucket/LOAD_PRESET';
export const CREATE_BUCKET = 'createbucket/CREATE_BUCKET';
export const RESET_BUCKET = 'createbucket/RESET_BUCKET';

export const inputTitleAction = createAction(INPUT_TITLE, (input) => input);
export const inputDescAction = createAction(INPUT_DESC, (input) => input);
export const addDetailAction = createAction(ADD_DETAIL, (input) => input);
export const updateDetailDueAction = createAction(UPDATE_DETAILDUE, (input) => input);
export const removeDetailAction = createAction(REMOVE_DETAIL, (input) => input);
export const loadPresetAction = createAction(LOAD_PRESET, (input) => input);
export const createBucketAction = createAction(CREATE_BUCKET);
export const resetBucketAction = createAction(RESET_BUCKET);
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
      const { bucketTitle, bucketDescription, bucketDetails } = input;
      const newBucketDetails = bucketDetails.map((detail) => {
        return { ...detail, status: 'O', dueDate: getFormatDate(new Date()) };
      });
      return { title: bucketTitle, description: bucketDescription, details: newBucketDetails };
    },
    [CREATE_BUCKET]: (state, action) => ({
      ...state,
    }),
    [RESET_BUCKET]: (state, action) => initialState,
  },
  initialState
);

export default createbucket;

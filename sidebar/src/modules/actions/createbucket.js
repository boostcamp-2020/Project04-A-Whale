import { createAction } from 'redux-actions';
import { ADD_DETAIL, INPUT_DESC, INPUT_TITLE, REMOVE_DETAIL, RESET_BUCKET } from './actionTypes';

export const inputTitleAction = createAction(INPUT_TITLE, (input) => input);
export const inputDescAction = createAction(INPUT_DESC, (input) => input);
export const addDetailAction = createAction(ADD_DETAIL, (input) => input);
export const removeDetailAction = createAction(REMOVE_DETAIL, (input) => input);
export const resetBucketAction = createAction(RESET_BUCKET);

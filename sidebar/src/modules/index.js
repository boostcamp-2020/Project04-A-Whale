import { combineReducers } from 'redux';
import createbucket from './createbucket';
import acheiveState from './achieve';

const rootReducer = combineReducers({
  createbucket,
  acheiveState,

});

export default rootReducer;

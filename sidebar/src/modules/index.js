import { combineReducers } from 'redux';
import createbucket from './createbucket';
import acheiveState from './achieve';
import buckets from './buckets';

const rootReducer = combineReducers({
  createbucket,
  acheiveState,
  buckets,
});

export default rootReducer;

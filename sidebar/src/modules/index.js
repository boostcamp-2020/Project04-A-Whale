import { combineReducers } from 'redux';
import createbucket from './createbucket';
import acheiveState from './achieve';
import buckets from './buckets';
import loading from './loading';

const rootReducer = combineReducers({
  createbucket,
  acheiveState,
  buckets,
  loading,
});

export default rootReducer;

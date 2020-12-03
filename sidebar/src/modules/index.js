import { combineReducers } from 'redux';
import createbucket from './createbucket';
import acheiveState from './achieve';
import buckets from './buckets';
import loading from './loading';
import details from './details';

const rootReducer = combineReducers({
  createbucket,
  acheiveState,
  buckets,
  loading,
  details,
});

export default rootReducer;

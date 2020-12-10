import { combineReducers } from 'redux';
import createbucket from './createbucket';
import acheiveState from './achieve';
import buckets from './buckets';
import loading from './loading';
import details from './details';
import follow from './follow';
import userinfo from './userinfo';

const rootReducer = combineReducers({
  createbucket,
  acheiveState,
  buckets,
  loading,
  details,
  follow,
  userinfo,
});

export default rootReducer;

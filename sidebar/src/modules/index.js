import { combineReducers } from 'redux';
import createbucket from './createbucket';
import acheive from './achieve';
import buckets from './buckets';
import loading from './loading';
import details from './details';
import user from './user';
import feeds from './feeds';

const rootReducer = combineReducers({
  createbucket,
  acheive,
  buckets,
  loading,
  details,
  user,
  feeds,
});

export default rootReducer;

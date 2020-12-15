import { createStore } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../modules';

const persistConfig = {
  key: 'root',
  storage,
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

export default enhancedReducer;

import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import dotenv from 'dotenv';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

dotenv.config();

const logger = createLogger();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk, logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

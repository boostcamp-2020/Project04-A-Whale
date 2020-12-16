import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';
import enhancedReducer from './store';

const logger = createLogger();

const store = createStore(
  enhancedReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, logger))
);

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();

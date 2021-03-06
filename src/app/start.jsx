import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/Layout/component.jsx';
import mainReducer from './components/Layout/reducer.js';

const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(mainReducer, preloadedState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

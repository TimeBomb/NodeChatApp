global._config = require('../../config.browser.json')

import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../both/main/component.js';
import mainReducer from '../both/main/reducer.js';

//TODO: Figure all this jazz out. See http://redux.js.org/docs/recipes/ServerRendering.html

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Create Redux store with initial state
const store = createStore(mainReducer, preloadedState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

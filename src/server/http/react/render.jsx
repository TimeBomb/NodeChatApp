import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import baseHtml from './html/base.html';
import serializeJs from 'serialize-javascript';
import Mustache from 'mustache';
import App from '../../../browser/main/component.jsx';
import AppReducer from '../../../browser/main/reducer.js';

function handleRender(request, response) {
	const store = createStore(AppReducer);
	const preloadedState = store.getState() || {};
	const appHtml = renderToString(
		<Provider store={store}>
			<App />
		</Provider>
	);

	response.send(Mustache.render(baseHtml, {
		appHtml: appHtml,
		preloadedState: serializeJs(preloadedState)
	}));
}

// TODO: Better class name
export default function RenderReactToServer(dependencies) {
	if (!dependencies.expressServer) {
		throw new Error('Must pass required dependencies to RenderReactToServer');
	}

	dependencies.expressServer.use(handleRender);
};

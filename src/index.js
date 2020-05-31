import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { FetchList } from './reducers/reducer';
import * as serviceWorker from './serviceWorker';

// configuring store and connecting redux to react through provider
ReactDOM.render(
	<div>
		<Provider store={createStore(FetchList)}>
			<App />
		</Provider>
	</div>,

	document.getElementById('root')
);

serviceWorker.unregister();

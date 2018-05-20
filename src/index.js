import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './store';
import { fetch as catFetch } from './actions/category';
import { fetch as blogFetch } from './actions/blog';
import 'semantic-ui-css/semantic.min.css';

store.dispatch(blogFetch());
store.dispatch(catFetch());

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

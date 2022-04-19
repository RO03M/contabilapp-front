import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from "./reducers";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={createStore(reducers)}>
			<App/>
		</Provider>
	</QueryClientProvider>,
	document.getElementById('root')
);

reportWebVitals();

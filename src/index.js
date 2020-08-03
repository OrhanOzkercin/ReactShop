import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';

ReactDOM.render(
	// Provider makes all children of it can reach reducers and actions
	<Provider store={store}>
		<BrowserRouter>
			<React.StrictMode>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</React.StrictMode>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

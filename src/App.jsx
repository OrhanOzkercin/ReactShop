import React from 'react';

import './App.css';
import HomePage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => {
	return (
		<div className='d'>
			<h1>HatsPage</h1>
		</div>
	);
};

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop/hats' component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;

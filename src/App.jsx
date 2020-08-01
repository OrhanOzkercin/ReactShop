import React, { useState, useEffect } from 'react';

import { auth } from './firebase/config';

import './App.css';
import HomePage from './pages/home/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import Signinsignup from './pages/signinsignup/Signinsignup';

function App() {
	const [currentUser, SetCurrentUser] = useState(null);
	useEffect(() => {
		const unsub = auth.onAuthStateChanged((user) => {
			SetCurrentUser(user);
		});
		return () => {
			unsub();
		};
	}, [currentUser, SetCurrentUser]);
	return (
		<div className='App'>
			<Header currentUser={currentUser} />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop/' component={ShopPage} />
				<Route path='/signin/' component={Signinsignup} />
			</Switch>
		</div>
	);
}

export default App;

import React, { useState, useEffect } from 'react';

import { auth, createUserProfileDocument } from './firebase/config';
import './App.css';
import HomePage from './pages/home/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import Signinsignup from './pages/signinsignup/Signinsignup';

function App() {
	const [currentUser, SetCurrentUser] = useState(null);

	useEffect(() => {
		const unsub = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) =>
					SetCurrentUser({ id: snapshot.id, ...snapshot.data() })
				);
			} else {
				SetCurrentUser(userAuth);
			}
		});

		return () => {
			unsub();
		};
	}, []);

	return (
		<div className='App'>
			<Header currentUser={currentUser} SetCurrentUser={SetCurrentUser} />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/shop/' component={ShopPage} />
				<Route path='/signin/' component={Signinsignup} />
			</Switch>
		</div>
	);
}

export default App;

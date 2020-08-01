import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/config';
import './App.css';
import HomePage from './pages/home/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import Signinsignup from './pages/signinsignup/Signinsignup';

function App() {
	const currentUser = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();

	const SetCurrentUser = (user) =>
		dispatch(setCurrentUser(user)); /* {type:'SET_CURRENT_USER, payload: user}*/

	useEffect(() => {
		const unsub = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) =>
					SetCurrentUser({ id: snapshot.id, ...snapshot.data() })
				);
			} else {
				console.log(userAuth);
				SetCurrentUser(userAuth);
			}
		});

		return () => {
			unsub();
		};
		// eslint-disable-next-line
	}, [dispatch]);

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

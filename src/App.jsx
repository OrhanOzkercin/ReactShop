import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentUser } from './redux/user/user.actions';
import { auth, createUserProfileDocument } from './firebase/config';
import './App.css';
import HomePage from './pages/home/Homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/Shoppage';
import Header from './components/header/Header';
import Signinsignup from './pages/signinsignup/Signinsignup';
import { selectCurrentUser } from './redux/user/user.selectors';
import Checkoutpage from './pages/checkout/Checkoutpage';

function App() {
	const currentUser = useSelector((state) => selectCurrentUser(state));
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
				SetCurrentUser(userAuth);
			}
		});

		return () => {
			unsub();
		};
		// eslint-disable-next-line
	}, [dispatch]);
	console.log(currentUser);
	return (
		<div className='App'>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route
					exact
					path='/signin'
					render={() => (currentUser ? <Redirect to='/' /> : <Signinsignup />)}
				/>
				<Route path='/checkout' component={Checkoutpage} />
			</Switch>
		</div>
	);
}

export default App;

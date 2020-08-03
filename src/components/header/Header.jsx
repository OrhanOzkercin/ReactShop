import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assests/logo.svg';
import { auth } from '../../firebase/config';
import './Header.scss';
import { setCurrentUser } from '../../redux/user/user.actions';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';

const Header = () => {
	const currentUser = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	const SetCurrentUser = (user) => dispatch(setCurrentUser(user));

	const hidden = useSelector((state) => state.cart.hidden);
	return (
		<>
			<div className='header'>
				<Link className='logo-container' to='/'>
					<Logo className='logo' />
				</Link>
				<div className='options'>
					<Link className='option' to='/shop'>
						Shop
					</Link>
					<Link className='option' to='/contact'>
						Contact
					</Link>
					{currentUser ? (
						<div
							className='option'
							onClick={() => {
								auth.signOut();

								SetCurrentUser({});
							}}
						>
							Sign Out
						</div>
					) : (
						<Link to='/signin'>Sign In</Link>
					)}
					<CartIcon />
				</div>
				{hidden ? null : <CartDropdown />}
			</div>
		</>
	);
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assests/logo.svg';
import { auth } from '../../firebase/config';
import { setCurrentUser } from '../../redux/user/user.actions';
import CartIcon from '../cart-icon/Cart-icon';
import CartDropdown from '../cart-dropdown/Cart-dropdown';
import {
	HeaderContainer,
	LogoContainer,
	Options,
	Option,
} from './Header.style';

const Header = () => {
	const currentUser = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	const SetCurrentUser = (user) => dispatch(setCurrentUser(user));

	const hidden = useSelector((state) => state.cart.hidden);
	return (
		<>
			<HeaderContainer>
				<LogoContainer to='/'>
					<Logo />
				</LogoContainer>
				<Options>
					<Option to='/shop'>Shop</Option>
					<Option to='/contact'>Contact</Option>
					{currentUser ? (
						<Option
							as='div'
							onClick={() => {
								auth.signOut();

								SetCurrentUser({});
							}}
						>
							Sign Out
						</Option>
					) : (
						<Link to='/signin'>Sign In</Link>
					)}
					<CartIcon />
				</Options>
				{hidden ? null : <CartDropdown />}
			</HeaderContainer>
		</>
	);
};

export default Header;

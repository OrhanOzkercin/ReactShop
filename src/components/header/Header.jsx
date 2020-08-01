import React from 'react';

import './Header.scss';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/config';

import { ReactComponent as Logo } from '../../assests/logo.svg';

const Header = ({ currentUser, SetCurrentUser }) => {
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
								SetCurrentUser(null);
							}}
						>
							Sign Out
						</div>
					) : (
						<Link to='/signin'>Sign In</Link>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;

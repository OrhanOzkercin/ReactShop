import React from 'react';

import { ReactComponent as Basket } from '../../assests/basket.svg';
import './Cart-icon.scss';
import { useDispatch } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
	const dispatch = useDispatch();

	const ToggleCartHidden = () => dispatch(toggleCartHidden());
	return (
		<div className='cart-icon' onClick={() => ToggleCartHidden()}>
			<Basket className='shopping-icon' />
			<span className='item-count'>0</span>
		</div>
	);
};

export default CartIcon;

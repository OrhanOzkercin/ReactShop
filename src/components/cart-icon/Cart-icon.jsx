import React from 'react';

import { ReactComponent as Basket } from '../../assests/basket.svg';
import './Cart-icon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = () => {
	const dispatch = useDispatch();
	const itemsCount = useSelector((state) => {
		console.log('called');
		return state.cart.cartItems.reduce(
			(acc, cartItem) => acc + cartItem.quantity,
			0
		);
	});
	const ToggleCartHidden = () => dispatch(toggleCartHidden());
	return (
		<div className='cart-icon' onClick={() => ToggleCartHidden()}>
			<Basket className='shopping-icon' />
			<span className='item-count'>{itemsCount}</span>
		</div>
	);
};

export default CartIcon;

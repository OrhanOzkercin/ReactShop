import React from 'react';

import { ReactComponent as Basket } from '../../assests/basket.svg';
import './Cart-icon.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartIcon = () => {
	const dispatch = useDispatch();
	const itemsCount = useSelector((state) => {
		return selectCartItems(state).reduce(
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

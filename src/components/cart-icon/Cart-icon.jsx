import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import { CartIconContainer, CustomBasket, ItemCount } from './Cart-icon.style';

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
		<CartIconContainer onClick={() => ToggleCartHidden()}>
			<CustomBasket />
			<ItemCount>{itemsCount}</ItemCount>
		</CartIconContainer>
	);
};

export default CartIcon;

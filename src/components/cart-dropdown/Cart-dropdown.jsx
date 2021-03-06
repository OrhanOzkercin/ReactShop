import React from 'react';

import CustomButton from '../custom-button/Custom-botton';
import CartItem from '../cart-item/Cart-item';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from './Cart-dropdown.style';

const CartDropdown = () => {
	const cartItems = useSelector((state) => selectCartItems(state));
	const dispatch = useDispatch();
	const toggleCartDropdown = () => dispatch(toggleCartHidden());
	const history = useHistory();
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<EmptyMessage>Cart is empty</EmptyMessage>
				)}
			</CartItems>
			<CustomButton
				onClick={() => {
					toggleCartDropdown();
					history.push('/checkout');
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</CartDropdownContainer>
	);
};

export default CartDropdown;

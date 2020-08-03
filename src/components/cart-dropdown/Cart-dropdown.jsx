import React from 'react';

import './Cart-dropdown.scss';
import CustomButton from '../custom-button/Custom-botton';
import CartItem from '../cart-item/Cart-item';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
const CartDropdown = () => {
	const cartItems = useSelector((state) => selectCartItems(state));
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;

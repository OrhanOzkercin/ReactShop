import React from 'react';

import './Cart-dropdown.scss';
import CustomButton from '../custom-button/Custom-botton';
import CartItem from '../cart-item/Cart-item';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useHistory } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = () => {
	const cartItems = useSelector((state) => selectCartItems(state));
	const dispatch = useDispatch();
	const toggleCartDropdown = () => dispatch(toggleCartHidden());
	const history = useHistory();
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className='empty-message'>Cart is empty</span>
				)}
			</div>
			<CustomButton
				onClick={() => {
					toggleCartDropdown();
					history.push('/checkout');
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</div>
	);
};

export default CartDropdown;

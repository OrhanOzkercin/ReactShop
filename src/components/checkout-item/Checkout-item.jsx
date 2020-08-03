import React from 'react';

import './Checkout-item.scss';
import {
	removeCartItem,
	decreaseQuantity,
	addCartItem,
} from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';

const CheckoutItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	const RemoveCartItem = (item) => dispatch(removeCartItem(item));
	const AddCartItem = (item) => dispatch(addCartItem(item));
	const DecreaseQuantity = (item) => dispatch(decreaseQuantity(item));
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<div className='checkout-item'>
			<div className='image-container'>
				<img src={imageUrl} alt='item' />
			</div>
			<span className='name'>{name}</span>
			<span className='quantity'>
				<div className='arrow' onClick={() => DecreaseQuantity(cartItem)}>
					&#10094;
				</div>
				<span className='value'> {quantity}</span>
				<div className='arrow' onClick={() => AddCartItem(cartItem)}>
					&#10095;
				</div>
			</span>
			<span className='price'>₺{price}</span>
			<div className='remove-button' onClick={() => RemoveCartItem(cartItem)}>
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;

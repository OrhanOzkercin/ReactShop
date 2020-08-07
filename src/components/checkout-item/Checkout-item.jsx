import React from 'react';

import {
	removeCartItem,
	decreaseQuantity,
	addCartItem,
} from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';
import {
	CheckoutItemContainer,
	ImageContainer,
	SpanWidth23,
	Quantity,
	Arrow,
	Value,
	RemoveButton,
} from './Checkout-item.style';

const CheckoutItem = ({ cartItem }) => {
	const dispatch = useDispatch();
	const RemoveCartItem = (item) => dispatch(removeCartItem(item));
	const AddCartItem = (item) => dispatch(addCartItem(item));
	const DecreaseQuantity = (item) => dispatch(decreaseQuantity(item));
	const { name, imageUrl, price, quantity } = cartItem;

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt='item' />
			</ImageContainer>
			<SpanWidth23>{name}</SpanWidth23>
			<Quantity>
				<Arrow onClick={() => DecreaseQuantity(cartItem)}>&#10094;</Arrow>
				<Value> {quantity}</Value>
				<Arrow onClick={() => AddCartItem(cartItem)}>&#10095;</Arrow>
			</Quantity>
			<SpanWidth23>₺{price}</SpanWidth23>
			<RemoveButton onClick={() => RemoveCartItem(cartItem)}>
				&#10005;
			</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;

import React from 'react';

import {
	CartItemContainer,
	CustomImage,
	ItemDetails,
	Name,
} from './Cart-item.style';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<CartItemContainer>
		<CustomImage src={imageUrl} alt='item' />
		<ItemDetails>
			<Name>{name}</Name>
			<span className='price'>
				₺{price} x {quantity}
			</span>
		</ItemDetails>
	</CartItemContainer>
);

export default CartItem;

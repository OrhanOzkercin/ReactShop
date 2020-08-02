import React from 'react';

import './Cart-item.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
	<div className='cart-item'>
		<img src={imageUrl} alt='item' />
		<div className='item-details'>
			<span className='name'>{name}</span>
			<span className='price'>
				₺{price} x {quantity}
			</span>
		</div>
	</div>
);

export default CartItem;

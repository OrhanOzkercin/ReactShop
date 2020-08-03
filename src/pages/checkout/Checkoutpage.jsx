import React from 'react';

import './Checkoutpage.scss';
import { useSelector } from 'react-redux';
import {
	selectCartItems,
	selectCartTotalCost,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/Checkout-item';

const CheckoutPage = () => {
	const cartItems = useSelector((state) => selectCartItems(state));
	const cartItemsTotalCost = useSelector((state) => selectCartTotalCost(state));

	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>

			{cartItems.map((item) => (
				<CheckoutItem key={item.id} cartItem={item} />
			))}
			<div className='total'>
				<span>TOTAL ₺{cartItemsTotalCost}</span>
			</div>
		</div>
	);
};

export default CheckoutPage;

import React from 'react';

import { useSelector } from 'react-redux';
import {
	selectCartItems,
	selectCartTotalCost,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/Checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/Stripe-button';
import {
	CheckoutPageContainer,
	CheckoutHeader,
	HeaderBlock,
	Total,
	Warning,
} from './Checkoutpage.style';

const CheckoutPage = () => {
	const cartItems = useSelector((state) => selectCartItems(state));
	const cartItemsTotalCost = useSelector((state) => selectCartTotalCost(state));

	return (
		<CheckoutPageContainer>
			<CheckoutHeader>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</CheckoutHeader>
			{cartItems.map((item) => (
				<CheckoutItem key={item.id} cartItem={item} />
			))}
			<Total>
				<span>TOTAL ₺{cartItemsTotalCost}</span>
			</Total>
			<Warning>
				*Please use credit card information below for test-warning
				<br />
				4242 4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
			</Warning>
			<StripeCheckoutButton price={cartItemsTotalCost} />
		</CheckoutPageContainer>
	);
};

export default CheckoutPage;

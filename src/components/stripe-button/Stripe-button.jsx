import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51H1wJWFgqnyPzsmwC2x8SdCSHALiydZKaKA2Ksb0ZlZw6ZKjYYcSncKjUjLXv1nvJsbcbdBq0Uu03UdU5qtijXoi00PI8zuXqt';
	const onToken = (token) => {
		alert('Payment Succesful');
	};
	return (
		<StripeCheckout
			label='Pay Now!'
			name='ReactShop Ltd.'
			billingAddress
			shippingAddress
			description={`Your total is ₺${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			currency='Tr'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;

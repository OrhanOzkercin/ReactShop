import React from 'react';

import './Cart-dropdown.scss';
import CustomButton from '../custom-button/Custom-botton';

const CartDropdown = () => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'></div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	);
};

export default CartDropdown;

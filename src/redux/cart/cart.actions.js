import { CartActionTyes } from '../types';

export const toggleCartHidden = () => ({
	type: CartActionTyes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
	type: CartActionTyes.ADD_ITEM,
	payload: item,
});

export const removeCartItem = (item) => ({
	type: CartActionTyes.REMOVE_ITEM,
	payload: item,
});

export const decreaseQuantity = (item) => ({
	type: CartActionTyes.DECREASE_QUANTITY,
	payload: item,
});

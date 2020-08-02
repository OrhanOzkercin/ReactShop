import { CartActionTyes } from '../types';

export const toggleCartHidden = () => ({
	type: CartActionTyes.TOGGLE_CART_HIDDEN,
});

export const addCartItem = (item) => ({
	type: CartActionTyes.ADD_ITEM,
	payload: item,
});

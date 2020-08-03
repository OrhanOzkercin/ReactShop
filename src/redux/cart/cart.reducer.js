import { CartActionTyes } from '../types';
import { addItemToCart, decreaseQuantityOfItem } from './cart.util';

const INITIAL_STATE = {
	hidden: true,
	cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionTyes.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden,
			};
		case CartActionTyes.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload),
			};
		case CartActionTyes.REMOVE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(
					(cartItem) => cartItem.id !== action.payload.id
				),
			};
		case CartActionTyes.DECREASE_QUANTITY:
			return {
				...state,
				cartItems: decreaseQuantityOfItem(state.cartItems, action.payload),
			};
		default:
			return state;
	}
};

export default CartReducer;

import SHOP_DATA from '../../pages/shop/Shopdata';

const INITIAL_STATE = {
	collections: SHOP_DATA,
};

const ShopReduder = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default ShopReduder;

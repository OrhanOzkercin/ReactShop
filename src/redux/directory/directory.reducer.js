const INITIAL_STATE = {
	sections: [
		{
			title: 'hats',
			imageUrl:
				'https://images.unsplash.com/photo-1587137255285-c0092032998a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
			id: 1,
			linkUrl: 'shop/hats',
		},
		{
			title: 'jackets',
			imageUrl:
				'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
			id: 2,
			linkUrl: 'shop/jackets',
		},
		{
			title: 'sneakers',
			imageUrl:
				'https://images.unsplash.com/photo-1580977251970-221b2fa3f554?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
			id: 3,
			linkUrl: 'shop/sneakers',
		},
		{
			title: 'womens',
			imageUrl:
				'https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
			size: 'large',
			id: 4,
			linkUrl: 'shop/womens',
		},
		{
			title: 'mens',
			imageUrl:
				'https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
			size: 'large',
			id: 5,
			linkUrl: 'shop/mens',
		},
	],
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default DirectoryReducer;

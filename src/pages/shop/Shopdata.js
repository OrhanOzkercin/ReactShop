const SHOP_DATA = {
	hats: {
		id: 1,
		title: 'Hats',
		routeName: 'hats',
		items: [
			{
				id: 1,
				name: 'Summer Style',
				imageUrl:
					'https://images.unsplash.com/photo-1565465295423-68c959a599ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80',
				price: 25,
			},
			{
				id: 2,
				name: 'Orange Classic',
				imageUrl:
					'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=664&q=80',
				price: 18,
			},
			{
				id: 3,
				name: 'Orange Cap',
				imageUrl:
					'https://images.unsplash.com/photo-1593724707119-304c12f7cf56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				price: 35,
			},
			{
				id: 4,
				name: 'Black Classic',
				imageUrl:
					'https://images.unsplash.com/photo-1525428020182-b3da25c7ae7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 25,
			},
			{
				id: 5,
				name: 'Red Cool Lady',
				imageUrl:
					'https://images.unsplash.com/photo-1551734413-5943d61e002a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 18,
			},
			{
				id: 6,
				name: 'Beauty Orange',
				imageUrl:
					'https://images.unsplash.com/photo-1579542145952-05fd27275991?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80',
				price: 14,
			},
			{
				id: 7,
				name: 'Red Beanie',
				imageUrl:
					'https://images.unsplash.com/photo-1529008338-310c24f458ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
				price: 28,
			},
			{
				id: 8,
				name: 'Cool Brown Cap',
				imageUrl:
					'https://images.unsplash.com/photo-1575846171058-979e0c211b54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				price: 34,
			},
		],
	},
	sneakers: {
		id: 2,
		title: 'Sneakers',
		routeName: 'sneakers',
		items: [
			{
				id: 10,
				name: 'Nike Air Drop',
				imageUrl:
					'https://images.unsplash.com/photo-1581619818895-ab2029baf938?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 600,
			},
			{
				id: 11,
				name: 'Nike Air F1',
				imageUrl:
					'https://images.unsplash.com/photo-1581067675198-463d66478d0e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1239&q=80',
				price: 680,
			},
			{
				id: 12,
				name: 'Adidas Classic',
				imageUrl:
					'https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				price: 410,
			},
			{
				id: 13,
				name: 'Adidas Greyforce',
				imageUrl:
					'https://images.unsplash.com/photo-1556803471-c9eb6d50eb1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
				price: 440,
			},
			{
				id: 14,
				name: 'Adidas Blackshadow',
				imageUrl:
					'https://images.unsplash.com/photo-1529062815681-c5145b0ac7b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
				price: 560,
			},
			{
				id: 15,
				name: 'New Balance Roadmap',
				imageUrl:
					'https://images.unsplash.com/photo-1586294310459-93fd1c8dcb4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				price: 360,
			},
			{
				id: 16,
				name: 'Vans Black',
				imageUrl:
					'https://images.unsplash.com/photo-1485736231968-0c8ad5c9e174?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				price: 590,
			},
			{
				id: 17,
				name: 'Vans Creme',
				imageUrl:
					'https://images.unsplash.com/photo-1595179562588-e73fd557ef00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				price: 500,
			},
		],
	},
	jackets: {
		id: 3,
		title: 'Jackets',
		routeName: 'jackets',
		items: [
			{
				id: 18,
				name: 'Green Jean Shearling',
				imageUrl:
					'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 125,
			},
			{
				id: 19,
				name: 'Black Cool ',
				imageUrl:
					'https://images.unsplash.com/photo-1551016514-f5df89acb36c?ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80',
				price: 190,
			},
			{
				id: 20,
				name: 'Blue Jean Jacket',
				imageUrl:
					'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 130,
			},
			{
				id: 21,
				name: 'Grey Tuff',
				imageUrl:
					'https://images.unsplash.com/photo-1548712370-806c729f72ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				price: 265,
			},
			{
				id: 22,
				name: 'Black Shearling',
				imageUrl:
					'https://images.unsplash.com/flagged/photo-1578398297852-4d2bfe74cefe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
				price: 285,
			},
		],
	},
	womens: {
		id: 4,
		title: 'Womens',
		routeName: 'womens',
		items: [
			{
				id: 23,
				name: 'Striped Top',
				imageUrl:
					'https://images.unsplash.com/photo-1530981785497-a62037228fe9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 55,
			},
			{
				id: 24,
				name: 'Red Blouse',
				imageUrl:
					'https://images.unsplash.com/photo-1586448773336-7777388c8a9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
				price: 30,
			},
			{
				id: 25,
				name: 'Blue Dress',
				imageUrl:
					'https://images.unsplash.com/photo-1587301427108-933c0d3ce321?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 80,
			},
			{
				id: 26,
				name: 'Jean Short',
				imageUrl:
					'https://images.unsplash.com/photo-1587557250504-d3175ac5ce0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
				price: 110,
			},
			{
				id: 27,
				name: 'White Dress',
				imageUrl:
					'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 145,
			},
			{
				id: 28,
				name: 'Light Blue Dress	',
				imageUrl:
					'https://images.unsplash.com/photo-1518905806784-7afa475beb82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 135,
			},
			{
				id: 29,
				name: 'Orange Blouse',
				imageUrl:
					'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 40,
			},
		],
	},
	mens: {
		id: 5,
		title: 'Mens',
		routeName: 'mens',
		items: [
			{
				id: 30,
				name: 'White shirt',
				imageUrl:
					'https://images.unsplash.com/photo-1545596281-a183a368b1d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
				price: 75,
			},
			{
				id: 31,
				name: 'Lumberjacl Shirtt',
				imageUrl:
					'https://images.unsplash.com/photo-1550091346-1e823a403e60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80ps://i.ibb.co/qMQ75QZ/floral-shirt.png',
				price: 80,
			},
			{
				id: 32,
				name: 'Jean Coat',
				imageUrl:
					'https://images.unsplash.com/photo-1576339458004-2d6ba7051dcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
				price: 125,
			},
			{
				id: 33,
				name: 'Rose T-shirt',
				imageUrl:
					'https://images.unsplash.com/photo-1527534156596-5ba1e6d5f017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80',
				price: 45,
			},
			{
				id: 34,
				name: 'Georger Orwell Tshirt',
				imageUrl:
					'https://images.unsplash.com/photo-1530286910461-6a1960d1e83a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
				price: 50,
			},
			{
				id: 35,
				name: 'Green T-shirt',
				imageUrl:
					'https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
				price: 35,
			},
		],
	},
};

export default SHOP_DATA;

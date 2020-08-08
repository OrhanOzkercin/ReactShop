import React from 'react';

import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';
import {
	CollectionItemContainer,
	BgImage,
	CollectionFooter,
	Name,
	Price,
	Button,
} from './Collection-item.style';

const CollectionItem = ({ item }) => {
	const dispatch = useDispatch();
	const AddCartItem = (item) => dispatch(addCartItem(item));

	const { name, imageUrl, price } = item;
	return (
		<CollectionItemContainer>
			<BgImage className='image' imageUrl={imageUrl} />
			<CollectionFooter>
				<Name>{name}</Name>
				<Price>₺{price}</Price>
			</CollectionFooter>
			<Button onClick={() => AddCartItem(item)} isInverted>
				Add to cart
			</Button>
		</CollectionItemContainer>
	);
};

export default CollectionItem;

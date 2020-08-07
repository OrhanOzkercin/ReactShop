import React from 'react';

import { useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/Collection-item';
import { CollectionPageContainer, Title, Items } from './Collectionpage.style';

const CollectionPage = ({ match }) => {
	const collection = useSelector((state) =>
		selectCollection(match.params.collectionId)(state)
	);

	const { title, items } = collection;
	return (
		<CollectionPageContainer>
			<Title>{title}</Title>
			<Items>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</Items>
		</CollectionPageContainer>
	);
};

export default CollectionPage;

import React from 'react';

import CollectionPreview from '../collection-preview/Collection-preview';

import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionOverviewContainer } from './Collection-overview.style';

const CollectionOverview = () => {
	const collections = useSelector((state) =>
		selectCollectionsForPreview(state)
	);
	return (
		<CollectionOverviewContainer>
			{collections.map(({ id, ...props }) => (
				<CollectionPreview key={id} {...props} />
			))}
		</CollectionOverviewContainer>
	);
};

export default CollectionOverview;

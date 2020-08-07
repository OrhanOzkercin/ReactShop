import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview';

import './Collection-overview.scss';
import { useSelector } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = () => {
	const collections = useSelector((state) =>
		selectCollectionsForPreview(state)
	);
	return (
		<div className='collections-overview'>
			{collections.map(({ id, ...props }) => (
				<CollectionPreview key={id} {...props} />
			))}
		</div>
	);
};

export default CollectionOverview;

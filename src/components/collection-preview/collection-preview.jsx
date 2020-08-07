import React from 'react';

import CollectionItem from '../collection-item/Collection-item';

import {
	CollectionPreviewContainer,
	Title,
	Preview,
} from './Collection-preview.style';

const CollectionPreview = ({ items, title }) => {
	return (
		<CollectionPreviewContainer>
			<Title>{title.toUpperCase()}</Title>
			<Preview>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</Preview>
		</CollectionPreviewContainer>
	);
};

export default CollectionPreview;

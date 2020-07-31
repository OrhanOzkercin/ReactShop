import React from 'react';

import CollectionItem from '../collection-item/collection-item';

import './collection-preview.scss';

const CollectionPreview = ({ items, title }) => {
	return (
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...props }) => (
						<CollectionItem key={id} id={id} {...props} />
					))}
			</div>
		</div>
	);
};

export default CollectionPreview;

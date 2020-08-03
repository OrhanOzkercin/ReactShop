import React, { useState } from 'react';

import SHOP_DATA from './Shopdata';
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = () => {
	const [collections, SetCollections] = useState(SHOP_DATA);
	return (
		<div className='shop-page'>
			{collections.map(({ id, ...props }) => (
				<CollectionPreview key={id} {...props} />
			))}
		</div>
	);
};

export default ShopPage;

import React, { useState } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview';
import { useSelector } from 'react-redux';
import { selectShopItems } from '../../redux/shop/shop.selectors';

const ShopPage = () => {
	const collections = useSelector((state) => selectShopItems(state));
	return (
		<div className='shop-page'>
			{collections.map(({ id, ...props }) => (
				<CollectionPreview key={id} {...props} />
			))}
		</div>
	);
};

export default ShopPage;

import React from 'react';

import CollectionOverview from '../../components/collection-overview/Collection-overview';
import { Route } from 'react-router-dom';
import CategoryPage from '../collection/Collectionpage';

const ShopPage = ({ match }) => {
	return (
		<div className='shop-page'>
			<Route exact path={`${match.path}`} component={CollectionOverview} />
			<Route path={`/shop/:collectionId`} component={CategoryPage} />
		</div>
	);
};

export default ShopPage;

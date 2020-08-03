import React from 'react';

import './Collectionpage.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CategoryPage = ({ match }) => {
	const collection = useSelector((state) =>
		selectCollection(match.params.collectionId)(state)
	);

	console.log(collection);

	return (
		<div className='category'>
			<h2>CategoryPAge</h2>
		</div>
	);
};

export default CategoryPage;

import React from 'react';

import './collection-item.scss';
import CustomButton from '../custom-button/Custom-botton';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item }) => {
	const dispatch = useDispatch();
	const AddCartItem = (item) => dispatch(addCartItem(item));

	const { name, imageUrl, price } = item;
	return (
		<div className='collection-item'>
			<div
				className='image'
				style={{ backgroundImage: `url(${imageUrl})` }}
			></div>
			<div className='collection-footer'>
				<span className='name'>{name}</span>
				<span className='price'>₺{price}</span>
			</div>
			<CustomButton onClick={() => AddCartItem(item)} isInverted>
				Add to cart
			</CustomButton>
		</div>
	);
};

export default CollectionItem;

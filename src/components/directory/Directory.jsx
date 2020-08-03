import React from 'react';
import MenuItem from '../menu-item/Menu-item';

import './Directory.scss';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = () => {
	const sections = useSelector((state) => selectDirectorySections(state));
	return (
		<div className='directory'>
			{sections.map(({ id, ...props }) => (
				<MenuItem key={id} {...props} />
			))}
		</div>
	);
};

export default Directory;

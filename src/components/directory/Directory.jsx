import React from 'react';
import MenuItem from '../menu-item/Menu-item';

import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';
import { DirectoryContainer } from './Directory.style';

const Directory = () => {
	const sections = useSelector((state) => selectDirectorySections(state));
	return (
		<DirectoryContainer>
			{sections.map(({ id, ...props }) => (
				<MenuItem key={id} {...props} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;

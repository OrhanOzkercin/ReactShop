import React from 'react';

import './Custom-botton.scss';

const CustomButton = ({ children, isGoogle, ...props }) => {
	return (
		<button
			className={`custom-button ${isGoogle && 'google-sign-in'}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;

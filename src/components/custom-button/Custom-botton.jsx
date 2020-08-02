import React from 'react';

import './Custom-botton.scss';

const CustomButton = ({ children, isGoogle, isInverted, ...props }) => {
	return (
		<button
			className={`custom-button ${isGoogle && 'google-sign-in'} ${
				isInverted && 'inverted'
			}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;

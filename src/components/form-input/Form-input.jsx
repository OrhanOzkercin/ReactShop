import React from 'react';

import './Form-input.scss';

const FormInput = ({ label, ...props }) => {
	return (
		<div className='group'>
			<input className='form-input' {...props} />
			{label ? (
				<label
					className={`${props.value.length} ? 'shrink' : '' form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};

export default FormInput;

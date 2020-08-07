import React from 'react';

import {
	GroupContainer,
	FormInputLabel,
	FormInputContainer,
} from './Form-input.style';

const FormInput = ({ label, ...props }) => {
	return (
		<GroupContainer>
			<FormInputContainer {...props} />
			{label ? (
				<FormInputLabel className={`${props.value.length ? 'shrink' : ''}`}>
					{label}
				</FormInputLabel>
			) : null}
		</GroupContainer>
	);
};

export default FormInput;

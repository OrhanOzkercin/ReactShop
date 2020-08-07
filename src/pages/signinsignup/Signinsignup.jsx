import React from 'react';
import Signin from '../../components/signin/Signin';

import Signup from '../../components/signup/Signup';
import { SigninSignupContainer } from './Signinsignup.style';

const Signinsignup = () => {
	return (
		<SigninSignupContainer>
			<Signin />
			<Signup />
		</SigninSignupContainer>
	);
};

export default Signinsignup;

import React from 'react';
import Signin from '../../components/signin/Signin';

import './Signinsignup.scss';
import Signup from '../../components/signup/Signup';

const Signinsignup = () => {
	return (
		<div className='sign-in-and-sign-up'>
			<Signin />
			<Signup />
		</div>
	);
};

export default Signinsignup;

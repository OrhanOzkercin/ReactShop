import React, { useState } from 'react';

import './Signin.scss';
import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-botton';

import { signInWithGoogle } from '../../firebase/config';

const Signin = () => {
	const [email, SetEmail] = useState('');
	const [password, SetPassword] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		SetEmail('');
		SetPassword('');
	};
	return (
		<div className='sign-in'>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={(e) => SetEmail(e.target.value)}
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={(e) => SetPassword(e.target.value)}
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogle>
						Sign In with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default Signin;

import React, { useState } from 'react';

import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-botton';

import { signInWithGoogle, auth } from '../../firebase/config';
import { SigninContainer, Buttons } from './Signin.style';

const Signin = () => {
	const [email, SetEmail] = useState('');
	const [password, SetPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await auth.signInWithEmailAndPassword(email, password);
			SetEmail('');
			SetPassword('');
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<SigninContainer>
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					type='email'
					name='email'
					value={email}
					label='Email'
					onChange={(e) => SetEmail(e.target.value)}
					required
				/>
				<FormInput
					type='password'
					name='password'
					label='Password'
					value={password}
					onChange={(e) => SetPassword(e.target.value)}
					required
				/>
				<Buttons>
					<CustomButton type='submit'>Sign In</CustomButton>
					<CustomButton onClick={signInWithGoogle} isGoogle>
						Sign In with Google
					</CustomButton>
				</Buttons>
			</form>
		</SigninContainer>
	);
};

export default Signin;

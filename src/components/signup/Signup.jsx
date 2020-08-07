import React, { useState } from 'react';

import FormInput from '../form-input/Form-input';
import CustomButton from '../custom-button/Custom-botton';

import { auth, createUserProfileDocument } from '../../firebase/config';

import { SignupContainer, Title } from './Signup.style';

const Signup = () => {
	const [displayName, SetDisplayName] = useState('');
	const [email, SetEmail] = useState('');
	const [password, SetPassword] = useState('');
	const [confirmPassword, SetConfirmPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			alert("Passwords don't match");
			return;
		}
		try {
			const user = await auth.createUserWithEmailAndPassword(email, password);
			await createUserProfileDocument(user, { displayName });
			SetDisplayName('');
			SetEmail('');
			SetPassword('');
			SetConfirmPassword('');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<SignupContainer>
			<Title>I do not have an account</Title>
			<span>Signup with your email and password</span>
			<form className='sign-up-form' onSubmit={handleSubmit}>
				<FormInput
					type='text'
					name='displayName'
					value={displayName}
					onChange={(e) => SetDisplayName(e.target.value)}
					label='Display Name'
					required
				/>
				<FormInput
					type='email'
					name='email'
					value={email}
					onChange={(e) => SetEmail(e.target.value)}
					label='Email'
					required
				/>
				<FormInput
					type='password'
					name='password'
					value={password}
					onChange={(e) => SetPassword(e.target.value)}
					label='Password'
					required
				/>
				<FormInput
					type='password'
					name='confirmPassword'
					value={confirmPassword}
					onChange={(e) => SetConfirmPassword(e.target.value)}
					label='Confirm Pasword'
					required
				/>
				<CustomButton type='submit'>SIGN UP</CustomButton>
			</form>
		</SignupContainer>
	);
};

export default Signup;

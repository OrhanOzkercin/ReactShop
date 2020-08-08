import React from 'react';
import {
	ContactFormContainer,
	Input,
	Label,
	Button,
	Textarea,
} from './Contact-form.style';

const ContactForm = () => {
	return (
		<ContactFormContainer>
			<Label htmlFor='name'>Name</Label>
			<Input type='text' id='name' required />
			<Label htmlFor='email'>Email</Label>
			<Input type='email' id='email' required />
			<Label htmlFor='textarea'>Message</Label>
			<Textarea type='textarea' id='textarea' required />
			<Button type='submit'>Send</Button>
		</ContactFormContainer>
	);
};

export default ContactForm;

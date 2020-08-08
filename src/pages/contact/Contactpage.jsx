import React from 'react';
import ContactForm from '../../components/contact-form/Contact-form';
import { ContactPageContainer, SvgContainer } from './Contactpage.style';
import { ReactComponent as Contactsvg } from '../../assests/contact.svg';

const ContactPage = () => {
	return (
		<ContactPageContainer>
			<ContactForm />
			<SvgContainer>
				<Contactsvg />
			</SvgContainer>
		</ContactPageContainer>
	);
};

export default ContactPage;

import React from 'react';
import { FooterContainer, Copyright, Link } from './Footer.style';

const Footer = () => {
	return (
		<FooterContainer>
			<Copyright>
				Made with 💖 in Izmir by
				<Link href='https://orhanozkercin.com'>Orhan Ozkercin</Link>
			</Copyright>
		</FooterContainer>
	);
};

export default Footer;

import styled from 'styled-components';

export const FooterContainer = styled.div`
	position: static;
	bottom: 0;
	left: 0;
	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;

	color: #000;
	padding: 30px 10%;
	margin: 0 10%;
`;

export const Copyright = styled.div`
	font-size: 15px;
	font-family: 'Antic Slab', serif;
`;

export const Link = styled.a`
	transition: transform 0.2s;
	display: inline-block;
	&:hover {
		background-color: #bbd196;
		color: white;
		transform: scale(1.2) rotate(3deg);
		padding: 2px 5px;
	}
`;

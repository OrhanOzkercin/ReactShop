import styled, { css } from 'styled-components';

const regularButtonStyles = css`
	background-color: black;
	color: white;
	border: none;
	&:hover {
		background-color: white;
		color: black;
	}
`;

const invertedButtonStyles = css`
	background-color: white;
	color: black;
	&:hover {
		background-color: black;
		color: white;
	}
`;
const googleSignInStyles = css`
	background-color: #4285f4;
	color: white;
	&:hover {
		background-color: #357ae8;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogle) {
		return googleSignInStyles;
	}

	return props.isInverted ? invertedButtonStyles : regularButtonStyles;
};

export const CustomButtonContainer = styled.button`
	display: flex;
	justify-content: center;
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 25px 0 25px;
	font-size: 13px;

	text-transform: uppercase;

	font-weight: bolder;

	border: 1px solid black;

	cursor: pointer;

	${getButtonStyles}
`;

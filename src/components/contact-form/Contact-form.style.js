import styled, { css } from 'styled-components';

const inputsStyle = css`
	width: 30vw;
	margin: 10px 0;
	margin-bottom: 2rem;
	padding: 0.6rem 0.5rem;
	border-radius: 40px;
	border: 2px solid #bbd195;
	outline: none;
	&:focus {
		border: 2px solid #aab056;
	}
`;

export const ContactFormContainer = styled.form`
	display: flex;
	flex-direction: column;
	padding: 6rem;
`;

export const Input = styled.input`
	display: inline-block;

	${inputsStyle}
`;

export const Textarea = styled.textarea`
	${inputsStyle}

	height: 120px;
	resize: vertical;
	border-radius: 20px;
`;

export const Label = styled.label`
	font-size: 1.1rem;
	letter-spacing: 0.15em;
	margin-bottom: 0.2rem;
	color: #216016;
`;

export const Button = styled.button`
	font-size: 1.1rem;
	padding: 10px 30px;
	background: transparent;
	border: 3px solid #aab056;
	border-radius: 10px;
	cursor: pointer;
	outline: none;
	&:hover {
		border: 3px solid #778056;
		box-shadow: 0 0.1rem 0.4rem #555;
		opacity: 0.8;
	}
	&:focus {
		box-shadow: 0 0.1rem 0.6rem #777;
		opacity: 0.9;
	}
`;

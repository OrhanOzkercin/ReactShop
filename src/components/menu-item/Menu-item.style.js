import styled from 'styled-components';

export const MenuItemContainer = styled.div`
	min-width: 30%;
	height: 240px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;

	&:first-child {
		margin-right: 7.5px;
	}

	&:last-child {
		margin-left: 7.5px;
	}

	&.large {
		height: 380px;
	}

	&:hover {
		cursor: pointer;
		overflow: hidden;

		& .background-image {
			transition: transform 4s cubic-bezier(0.03, 0.67, 0.83, 0.84);
			transform: scale(1.1) translateZ(0);
		}
		& .content {
			opacity: 1;
			background-color: #fff;
			opacity: 0.8;
		}
	}
`;

export const BgImage = styled.div`
  background-image: url('${(props) => props.imageUrl}');  
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
`;

export const Content = styled.div`
	position: absolute;
	height: 90px;
	padding: 0 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	background-color: #fff;
	opacity: 0.7;
	text-transform: uppercase;
`;

export const Title = styled.h1`
	font-weight: bold;
	margin-bottom: 6px;
	font-size: 22px;
	color: #4a4a4a;
`;
export const SubTitle = styled.span`
	font-weight: lighter;
	font-size: 16px;
`;

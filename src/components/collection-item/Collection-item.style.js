import styled from 'styled-components';
import CustomButton from '../custom-button/Custom-botton';

export const CollectionItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 15vw;
	height: 350px;
	align-items: center;
	position: relative;
	margin-bottom: 10px;
	&:hover {
		.image {
			opacity: 0.8;
		}
		button {
			opacity: 0.85;
			display: block;
		}
	}
`;

export const BgImage = styled.div`
	background-image: url('${(props) => props.imageUrl}');
	width: 100%;
	height: 95%;
	background-size: cover;
	background-position: center;
	margin-bottom: 5px;
`;

export const CollectionFooter = styled.div`
	width: 100%;
	height: 5%;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
`;

export const Name = styled.span`
	width: 90%;
	margin-bottom: 15px;
`;
export const Price = styled.span`
	width: 10%;
`;

export const Button = styled(CustomButton)`
	width: 80%;
	opacity: 0.7;
	position: absolute;
	top: 250px;
	display: none;
`;

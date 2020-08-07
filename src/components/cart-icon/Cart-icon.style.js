import styled from 'styled-components';
import { ReactComponent as Basket } from '../../assests/basket.svg';

export const CartIconContainer = styled.div`
	width: 60px;
	height: 60px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const CustomBasket = styled(Basket)`
	width: 30px;
	height: 30px;
`;

export const ItemCount = styled.span`
	position: absolute;
	font-size: 13px;
	font-weight: bold;
	color: #795b10;
	top: 28px;
	left: 26px;
`;

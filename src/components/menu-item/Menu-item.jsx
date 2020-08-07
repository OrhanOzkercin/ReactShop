import React from 'react';
import { withRouter } from 'react-router-dom';
import {
	MenuItemContainer,
	BgImage,
	Content,
	Title,
	SubTitle,
} from './Menu-item.style';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
	return (
		<MenuItemContainer
			className={`${size}`}
			onClick={() => history.push(`${match.url}${linkUrl}`)}
		>
			<BgImage className='background-image' imageUrl={imageUrl}></BgImage>
			<Content className='content'>
				<Title>{title}</Title>
				<SubTitle>SHOP NOW</SubTitle>
			</Content>
		</MenuItemContainer>
	);
};

export default withRouter(MenuItem);

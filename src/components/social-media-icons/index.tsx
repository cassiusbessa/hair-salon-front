import React from 'react';
import './styles.scss';
import instagramIcon from '@assets/social-media-icons/icon-instagram.svg';
import tiktokIcon from '@assets/social-media-icons/icon-tik-tok.svg';

const SocialMediaIcons = () => (
	<div className='social-media-icons-container'>
		<img src={instagramIcon} alt='Instagram Icon' />
		<img src={tiktokIcon} alt='Tik-Tok Icon' />
	</div>
);

export default SocialMediaIcons;

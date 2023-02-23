import React from 'react';
import './styles.scss';
import logo from '@assets/intro/logo.svg';

const Logo = () => (
	<div className='logo-container'>
		<img src={logo} alt='logo' />
	</div>
);

export default Logo;

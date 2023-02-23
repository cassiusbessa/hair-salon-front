import React, {useState} from 'react';
import CatchPhrase from '@components/catchphrase';
import IntroNavBar from '@components/intro-nav-bar';
import Logo from '@components/logo';
import './styles.scss';
import SocialMediaIcons from '@components/social-media-icons';
const Intro = () => (
	<div className='intro-container'>
		<div className='intro-content-container'>
			<Logo />
			<CatchPhrase />
			<IntroNavBar />
			<SocialMediaIcons />
		</div>
	</div>
);

export default Intro;

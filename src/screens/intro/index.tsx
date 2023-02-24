import React, {useState} from 'react';
import CatchPhrase from '@components/catchphrase';
import IntroNavBar from '@components/intro-nav-bar';
import Logo from '@components/logo';
import './styles.scss';
import SocialMediaIcons from '@components/social-media-icons';
import IntroBackgroundVideo from '@components/intro-background-video';
const Intro = () => (
	<div className='intro-container'>
		<IntroBackgroundVideo />
		<div className='intro-content'>
			<Logo />
			<CatchPhrase />
			<IntroNavBar />
			<SocialMediaIcons />
		</div>
	</div>
);

export default Intro;

import React, {useState} from 'react';
import CatchPhrase from '../../components/catchphrase';
import IntroNavBar from '../../components/intro-nav-bar';
import './styles.scss';
const Intro = () => (
	<div className='intro-container'>
		<div className='intro-content-container'>
			<CatchPhrase />
			<IntroNavBar />
		</div>
	</div>
);

export default Intro;

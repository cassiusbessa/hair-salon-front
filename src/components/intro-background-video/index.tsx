import React from 'react';
import backgroundVideo from '@assets/intro/intro-hair-video.mp4';
import './styles.scss';

const IntroBackgroundVideo = () => (
	<div className='intro-background-video-container'>
		<video autoPlay loop muted>
			<source src={backgroundVideo} type='video/mp4' />
		</video>
	</div>
);

export default IntroBackgroundVideo;

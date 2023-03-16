import './styles.scss';
import instagramIcon from '@assets/social-media-icons/icon-instagram.svg';
import tiktokIcon from '@assets/social-media-icons/icon-tik-tok.svg';

const SocialMediaIcons = () => (
	<div className='social-media-icons-container'>
		<a href='https://www.instagram.com/sulatophair/' target='_blank' rel='noreferrer'><img src={instagramIcon} alt='Instagram Icon' /></a>
		<img src={tiktokIcon} alt='Tik-Tok Icon' />
	</div>
);

export default SocialMediaIcons;

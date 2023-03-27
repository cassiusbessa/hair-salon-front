import SvgWhatsAppIcon from '@assets/social-media-icons/svg-whatsapp-icon';
import './styles.scss';
import instagramIcon from '@assets/social-media-icons/icon-instagram.svg';
// import tiktokIcon from '@assets/social-media-icons/icon-tik-tok.svg';

const SocialMediaIcons = () => (
	<div className='social-media-icons-container'>
		<a href='https://www.instagram.com/sulatophair/' target='_blank' rel='noreferrer'><img src={instagramIcon} alt='Instagram Icon' /></a>
		{/* <a href='https://www.tiktok.com/@sulatop1' target='_blank' rel='noreferrer'><img src={tiktokIcon} alt='TikTok Icon' /></a> */}
		<SvgWhatsAppIcon />
	</div>
);

export default SocialMediaIcons;

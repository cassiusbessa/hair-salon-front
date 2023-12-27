import SvgWhatsAppIcon from '@assets/social-media-icons/svg-whatsapp-icon';
import './styles.scss';
import instagramIcon from '@assets/social-media-icons/icon-instagram.svg';

const SocialMediaIcons = () => (
  <div className='social-media-icons-container'>
    <a href='https://www.instagram.com/sulatopbc/' target='_blank' rel='noreferrer'>
      <img loading='lazy' src={instagramIcon} alt='Instagram Icon' />
    </a>
    <SvgWhatsAppIcon />
  </div>
);

export default SocialMediaIcons;

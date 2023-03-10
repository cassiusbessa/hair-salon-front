import SocialMediaIcons from '@components/social-media-icons';
import './styles.scss';
import SvgWhatsAppIcon from '@assets/footer/svg-whatsapp-icon';

const Contacts = () => {
	return (
		<div className='footer-contacts'>
			<p>Contatos:</p>
			<div><SvgWhatsAppIcon /><span>(21)9999-999</span></div>
			<SocialMediaIcons />
		</div>
	);
};

export default Contacts;

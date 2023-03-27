import SocialMediaIcons from '@components/social-media-icons';
import './styles.scss';
import SvgPhoneIcon from '@assets/footer/svg-phone-icon';

const Contacts = () => {
	return (
		<div className='footer-contacts'>
			<p>Contatos:</p>
			<div><SvgPhoneIcon phoneNumber='+552199385-8905' /><span>(21)99385-8905</span></div>
			<SocialMediaIcons />
		</div>
	);
};

export default Contacts;

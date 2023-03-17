import Address from './components/address/address';
import Contacts from './components/contacts/contacts';
import GoogleMaps from './components/google-maps/google-maps';
import Schedules from './components/schedules/schedules';
import './styles.scss';

const Footer = () => {
	return (
		<footer className='footer-container' id='footer'>
			<div className='footer-content'>
				<Address />
				<Contacts />
				<GoogleMaps />
				<Schedules />
			</div>
		</footer>
	);
};

export default Footer;

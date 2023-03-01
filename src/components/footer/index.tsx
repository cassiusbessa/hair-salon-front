import Adress from './components/adress/adress';
import Contacts from './components/contacts/contacts';
import GoogleMaps from './components/google-maps/google-maps';
import Schedules from './components/schedules/schedules';
import './styles.scss';

const Footer = () => {
	return (
		<footer className='footer'>
			<Adress />
			<Contacts />
			<GoogleMaps />
			<Schedules />
		</footer>
	);
};

export default Footer;

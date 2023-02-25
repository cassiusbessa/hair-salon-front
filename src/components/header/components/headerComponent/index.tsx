import logo from '@assets/intro/logo.svg';
import SvgHamburguerIcon from '@assets/header/SvgHamburguerIcon';
import {primaryDarkGreen} from '@styles/inline-colors';
import './style.scss';

const HeaderComponent = () => (
	<header className='header'>
		<img src={logo} alt='Logo Icon' height='100%' />
		<SvgHamburguerIcon onClickColor={primaryDarkGreen} />
	</header>
);

export default HeaderComponent;

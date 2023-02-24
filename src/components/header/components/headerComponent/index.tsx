import logo from '@assets/intro/logo.svg';
import SvgHamburguerIcon from '@assets/header/SvgHamburguerIcon';
import './style.scss';

const HeaderComponent = () => (
	<header className='header'>
		<img src={logo} alt='Logo Icon' height='100%' />
		<SvgHamburguerIcon color='red' />
	</header>
);

export default HeaderComponent;

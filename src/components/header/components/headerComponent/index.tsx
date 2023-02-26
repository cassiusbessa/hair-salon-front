import {type SetStateAction, type Dispatch} from 'react';
import logo from '@assets/intro/logo.svg';
import SvgHamburguerIcon from '@assets/header/SvgHamburguerIcon';
import {primaryDarkGreen} from '@styles/inline-colors';
import './style.scss';

type Props = {
	toggleDropdown: () => void;
};

const HeaderComponent = ({toggleDropdown}: Props) => (
	<header className='header'>
		<img src={logo} alt='Logo Icon' height='100%' />
		<button onClick={toggleDropdown}>
			<SvgHamburguerIcon onClickColor={primaryDarkGreen} />
		</button>
	</header>
);

export default HeaderComponent;

import {useState} from 'react';
import DropdownComponent from './components/dropdownComponent';
import HeaderComponent from './components/headerComponent';
import './styles.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='header-dropdown-container'>
			<HeaderComponent toggleDropdown={toggleDropdown} />
			<DropdownComponent isOpen={isOpen} />
		</div>
	);
};

export default Header;

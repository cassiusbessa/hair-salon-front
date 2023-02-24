import './styles.scss';
import DropdownComponent from './components/dropdownComponent';
import HeaderComponent from './components/headerComponent';

const Header = () => (
	<div className='header-dropdown-container'>
		<HeaderComponent />
		<DropdownComponent />
	</div>
);

export default Header;

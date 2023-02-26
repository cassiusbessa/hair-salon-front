import {useState, type LegacyRef} from 'react';
import DropdownComponent from './components/dropdownComponent';
import HeaderComponent from './components/headerComponent';
import {useClickOutSide} from '../../custom-hooks/useClickOutSide';
import './styles.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const domNode = useClickOutSide(() => {
		setIsOpen(false);
	}) as LegacyRef<HTMLDivElement>;

	const handlerClickHamburguer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='header-dropdown-container' ref={domNode}>
			<HeaderComponent onClickHamburguer={handlerClickHamburguer} />
			<DropdownComponent isOpen={isOpen}/>
		</div>
	);
};

export default Header;

import {useState, type LegacyRef} from 'react';
import DropdownComponent from './components/dropdownComponent';
import HeaderComponent from './components/headerComponent';
import {useClickOutSide} from '../../custom-hooks/useClickOutSide';
import './styles.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [resideUp, setresideUp] = useState(false);

	const domNode = useClickOutSide(() => {
		setresideUp(false);
		setIsOpen(false);
	}) as LegacyRef<HTMLDivElement>;

	const handlerClickHamburguer = () => {
		setresideUp(!isOpen);
		setIsOpen(!isOpen);
	};

	return (
		<div className={`header-dropdown-container ${resideUp ? 'resize-up' : ''}`} ref={domNode}>
			<HeaderComponent onClickHamburguer={handlerClickHamburguer} />
			<DropdownComponent isOpen={isOpen}/>
		</div>
	);
};

export default Header;

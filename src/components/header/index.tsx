import {useState, type LegacyRef, useEffect} from 'react';
import DropdownComponent from './components/dropdown-component';
import HeaderComponent from './components/header-component';
import {useClickOutSide} from '@custom-hooks/use-click-out-side';
import './styles.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [resideUp, setResideUp] = useState(false);
	const [opacity, setopacity] = useState(0);

	useEffect(() => {
		function handlerScroll() {
			if ((window.scrollY / window.innerHeight) > 0.5) {
				setopacity(window.scrollY / window.innerHeight);
			} else {
				setopacity(0);
			}
		}

		window.addEventListener('scroll', handlerScroll);

		return (() => {
			window.removeEventListener('scroll', handlerScroll);
		});
	}, []);

	const domNode = useClickOutSide(() => {
		setResideUp(false);
		setIsOpen(false);
	}) as LegacyRef<HTMLDivElement>;

	const handlerClickHamburguer = () => {
		setResideUp(!isOpen);
		setIsOpen(!isOpen);
	};

	return (
		<div className={`header-dropdown-container ${resideUp ? 'resize-up' : ''}`} ref={domNode}>
			<HeaderComponent onClickHamburguer={handlerClickHamburguer} style={{opacity}} />
			<DropdownComponent isOpen={isOpen}/>
		</div>
	);
};

export default Header;

import {useState, type LegacyRef, useEffect} from 'react';
import DropdownComponent from './components/dropdown-component';
import HeaderComponent from './components/header-component';
import {useClickOutSide} from '@custom-hooks/use-click-out-side';
import './styles.scss';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [opacity, setopacity] = useState(0);
	const [display, setDisable] = useState('none');

	useEffect(() => {
		function handlerScroll() {
			if ((window.scrollY / window.innerHeight) > 0.5) {
				setopacity(window.scrollY / window.innerHeight);
				setDisable('grid');
			} else {
				setopacity(0);
				setDisable('none');
				setIsOpen(false);
			}
		}

		window.addEventListener('scroll', handlerScroll);

		return (() => {
			window.removeEventListener('scroll', handlerScroll);
		});
	}, []);

	const domNode = useClickOutSide(() => {
		setIsOpen(false);
	}) as LegacyRef<HTMLDivElement>;

	const handlerClickHamburguer = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='header-dropdown-container' style={{display}} ref={domNode}>
			<HeaderComponent onClickHamburguer={handlerClickHamburguer} style={{opacity}} />
			<DropdownComponent isOpen={isOpen}/>
		</div>
	);
};

export default Header;

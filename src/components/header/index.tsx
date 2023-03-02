import {useState, type LegacyRef, useEffect} from 'react';
import {useClickOutSide} from '@custom-hooks/use-click-out-side';
import './styles.scss';

import DropdownHeaderMobile from './components/dropdown-header-mobile';
import HeaderMobile from './components/header-mobile';
import HeaderDesktop from './components/header-desktop/header-desktop';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [opacity, setOpacity] = useState(0);
	const [display, setDisable] = useState('none');

	useEffect(() => {
		function handlerScroll() {
			if ((window.scrollY / window.innerHeight) > 0.5) {
				setOpacity(window.scrollY / window.innerHeight);
				setDisable('grid');
			} else {
				setOpacity(0);
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
			<HeaderMobile onClickHamburguer={handlerClickHamburguer} style={{opacity}} />
			<DropdownHeaderMobile isOpen={isOpen}/>
			<HeaderDesktop style={{opacity}} />
		</div>
	);
};

export default Header;

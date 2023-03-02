import logo from '@assets/intro/logo.svg';
import {primaryDarkGreen} from '@styles/inline-colors';
import SvgHamburguerIcon from '@assets/header/svg-hamburguer-icon';
import './style.scss';

type Props = {
	onClickHamburguer?: () => void;
	myRef?: React.LegacyRef<HTMLElement> | undefined;
	onScroll?: React.UIEventHandler<HTMLElement> | undefined;
	style?: React.CSSProperties | undefined;
};

const HeaderMobile = ({onClickHamburguer, myRef, onScroll, style}: Props) => (
	<header className='header-mobile' onScroll={onScroll} ref={myRef} style={style}>
		<img src={logo} alt='Logo Icon' height='100%' />
		<button onClick={onClickHamburguer}>
			<SvgHamburguerIcon onClickColor={primaryDarkGreen} />
		</button>
	</header>
);

export default HeaderMobile;

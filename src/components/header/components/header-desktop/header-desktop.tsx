import logo from '@assets/intro/logo.svg';
import './styles.scss';

import SocialMediaIcons from '@components/social-media-icons';

type Props = {
	style: React.CSSProperties | undefined;
};

const HeaderDesktop = ({style}: Props) => {
	return (
		<header className='header-desktop' style={style}>
			<div className='header-container'>
				<img src={logo} alt='Logo Icon' height='100%' />
				<nav>
					<ul>
						<li><a href='#'>Conheça-me</a></li>
						<li><a href='#'>Trabalhos</a></li>
						<li><a href='#'>Serviços</a></li>
						<li><a href='#'>Endereços</a></li>
						<li><a href='#'>Contatos</a></li>
						<li><a href='#'>Agende</a></li>
					</ul>
					<SocialMediaIcons />
				</nav>
			</div>
		</header>
	);
};

export default HeaderDesktop;

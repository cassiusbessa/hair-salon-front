import logo from '@assets/intro/logo.png';
import './styles.scss';

import SocialMediaIcons from '@components/social-media-icons';
import {links} from '@assets/links';

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
						{links.map(link => (
							<li key={`${link.tag}-desktop-header`}> <a href={link.href}>{link.tag}</a> </li>
						))}
						<li><a href='https://contate.me/sula-top' target='_blank' rel='noopener noreferrer'>Agende</a></li>
					</ul>
					<SocialMediaIcons />
				</nav>
			</div>
		</header>
	);
};

export default HeaderDesktop;

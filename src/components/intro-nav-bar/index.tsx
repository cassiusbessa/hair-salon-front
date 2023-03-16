import './styles.scss';
import {links} from '@assets/links';

const IntroNavBar = () => (
	<div className='nav-bar-container'>
		<ul>
			{links.slice(0, (links.length / 2) + 1).map(link => (
				<li key={`${link.tag}-intro-nav-bar`}> <a href={link.href}>{link.tag}</a></li>
			))}
		</ul>
		<ul>
			{links.slice((links.length / 2) + 1).map(link => (
				<li key={`${link.tag}-intro-nav-bar`}> <a href={link.href}>{link.tag}</a></li>
			))}
			<li className='booking'><a href='https://contate.me/sula-top' target='_blank' rel='noopener noreferrer'>Agende Agora</a> </li>
		</ul>
	</div>
);

export default IntroNavBar;

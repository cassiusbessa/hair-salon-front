import {links} from '@assets/links';
import SocialMediaIcons from '@components/social-media-icons';
import './styles.scss';

type Props = {
	isOpen: boolean;
};

const DropdownHeaderMobile = ({isOpen}: Props) => (
	<div className={`dropdown ${isOpen ? 'open' : ''}`}>
		<nav>
			<ul>
				{links.map(link => (
					<li key={`${link.tag}-dropdown-header`}> <a href={link.href}>{link.tag}</a> </li>
				))}
				<li><a href='https://contate.me/sula-top' target='_blank' rel='noopener noreferrer'>Agende</a></li>
			</ul>
		</nav>
		<SocialMediaIcons />
	</div>
);

export default DropdownHeaderMobile;

import {links} from '@assets/links';
import SocialMediaIcons from '@components/social-media-icons';
import './styles.scss';

type Props = {
	isOpen: boolean;
	handleOpen: () => void;
};

const DropdownHeaderMobile = ({isOpen, handleOpen}: Props) => (
	<div className={`dropdown ${isOpen ? 'open' : ''}`}>
		<nav>
			<ul onClick={handleOpen}>
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

import SocialMediaIcons from '@components/social-media-icons';
import './styles.scss';

type Props = {
	isOpen: boolean;
};

const DropdownHeaderMobile = ({isOpen}: Props) => (
	<div className={`dropdown ${isOpen ? 'open' : ''}`}>
		<nav>
			<div>Conheça-me</div>
			<div>Trabalhos</div>
			<div>Serviços</div>
			<div>Endereços</div>
			<div>Contatos</div>
			<div>Agende</div>
		</nav>
		<SocialMediaIcons />
	</div>
);

export default DropdownHeaderMobile;

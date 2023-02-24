import SocialMediaIcons from '@components/social-media-icons';
import './styles.scss';

const DropdownComponent = () => (
	<div className='dropdown'>
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

export default DropdownComponent;

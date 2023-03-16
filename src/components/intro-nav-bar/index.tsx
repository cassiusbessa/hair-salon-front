import './styles.scss';

const IntroNavBar = () => (
	<div className='nav-bar-container'>
		<ul>
			<li><a href='#know-me'>Conheça-me</a></li>
			<li><a href='#specialty'>Especialidade</a></li>
			<li><a href='#our-works'>Trabalhos</a></li>
		</ul>
		<ul>
			<li><a href='#footer'>Contatos</a></li>
			<li><a href='#footer'>Endereço</a></li>
			<li className='booking'>AGENDE AGORA</li>
		</ul>
	</div>
);

export default IntroNavBar;

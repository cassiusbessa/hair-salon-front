import sulaPhoto from '@assets/know-me/sula-photo.png';
import './styles.scss';

const KnowMe = () => (
	<div className='know-me-container'>
		<h1>Conheça-me</h1>
		<div className='know-me-content'>
			<img src={sulaPhoto} alt='Sula' />
			<p> Aqui nós iremos escrever dois parágrafos sobre a dona do salão. Contar sobre qualidades, cursos, experiencias e etc </p>
		</div>
	</div>
);

export default KnowMe;

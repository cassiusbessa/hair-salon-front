import sulaPhoto from '@assets/know-me/sula-photo.png';
import './styles.scss';

const KnowMe = () => (
	<section className='know-me-container'>
		<h2>Conheça-me</h2>

		<div className='know-me-content'>

			<div className='knowme-img-wraper'>
				<img src={sulaPhoto} alt='Sula' />
			</div>

			<p> Aqui nós iremos escrever dois parágrafos sobre a dona do salão. Contar sobre qualidades, cursos, experiencias e etc </p>

		</div>
	</section>
);

export default KnowMe;

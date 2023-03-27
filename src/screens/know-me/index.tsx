import sulaPhoto from '@assets/know-me/sula-photo.png';
import './styles.scss';

const KnowMe = () => (
	<section className='know-me-container scroll ' id='know-me'>
		<h2>Conheça-me</h2>
		<div className='know-me-content'>
			<div className='know-me-img-wraper'>
				<img src={sulaPhoto} alt='Sula' />
			</div>
			<p className='g-txt-just-inter-word'> Sula é altamente qualificada e experiente na indústria de beleza, tendo investido em muitos cursos e treinamentos para manter suas habilidades afiadas. Ela é atenciosa e dedicada a garantir que todos os clientes recebam um serviço de alta qualidade e personalizado. Sua vasta experiência inclui trabalhar com todos os tipos de cabelo e pele, tornando-a capaz de lidar com qualquer desafio. Sua paixão pelo que faz é refletida em seu trabalho excepcional, o que a torna uma referência em nossa comunidade de beleza </p>
		</div>
	</section>
);

export default KnowMe;

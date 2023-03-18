import Carousel from '@components/carousel';
import './styles.scss';
import CarouselTextItem from '@components/carousel-text-item';
import {useSelector} from 'react-redux';
import {incrementCurrentItem, decrementCurrentItem, setMaxItems, setIsFrozen, setCurrentItem} from '@states/testimonials-reducer';
import {type RootState} from '@store/redux-store';
import CarouselDots from '@components/carousel-dots';

const items = [
	{content: '"Eu amo vir a este salão! O atendimento é excelente e sempre saio com um corte de cabelo perfeito. Recomendo a todos!" - Ana Cristóvão', alt: ''},
	{content: 'Eu não confio meu cabelo em nenhum outro lugar além deste salão. Eles sempre fazem um trabalho excepcional e me sinto maravilhosa toda vez que saio daqui." - Maria Cruz da Silva', alt: ''},
	{content: '"Eu vim para este salão para uma mudança completa de visual e eles superaram todas as minhas expectativas. A equipe é incrível e me deixou tão confortável durante todo o processo. Obrigada por me deixar mais confiante!" - Juliana Bessa', alt: ''},
	{content: '"Eu estava procurando por um lugar onde pudesse tratar bem do meu cabelo e encontrei neste salão. A hidratação que fizeram em meu cabelo deixou-o super saudável e brilhante. Recomendo!" - Carla Rodrigues', alt: ''},
	{content: '"Meu cabelo é complicado e eu tinha dificuldade em encontrar alguém que pudesse lidar com ele até que eu encontrei este salão. Eles sabem exatamente o que fazer e sempre me surpreendem com o resultado final." - Bruna Ferreira Souza', alt: ''},
];

const Testimonials = () => {
	const testimonialsStates = useSelector((state: RootState) => state.testimonials);
	const testimonialsActions = {
		incrementCurrentItem,
		decrementCurrentItem,
		setMaxItems,
		setIsFrozen,
		setCurrentItem,
	};

	return (
		<section className='testimonials box-shadow'>
			<div className='testimonials-header'>
				<h2>Depoimentos</h2>
			</div>
			<Carousel
				Element={CarouselTextItem}
				actions={testimonialsActions}
				items={items}
				states={testimonialsStates}
				style={{height: '90%'}}
			/>
			<div className='testimonials-footer'>
				<CarouselDots actions={testimonialsActions} states={testimonialsStates} />
			</div>
		</section>
	);
};

export default Testimonials;

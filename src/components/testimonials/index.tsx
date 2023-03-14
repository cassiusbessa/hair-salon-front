import Carousel from '@components/carousel';
import './styles.scss';
import CarouselTextItem from '@components/carousel-text-item';
import {useSelector} from 'react-redux';
import {incrementCurrentItems, decrementCurrentItems, setMaxItems, setIsFrozen, setCurrentItem} from '@states/testimonials-reducer';
import {type RootState} from '@store/redux-store';
import CarouselDots from '@components/carousel-dots';

const items = [
	{content: 'Some testimonial to give an example 1 Some testimonial to give an example 1 Some testimonial to give an example 1 Some testimonial to give an example 1 Some testimonial to give an example 1 Some testimonial to give an example 1', alt: ''},
	{content: 'Some testimonial to give an example 2 Some testimonial to give an example 2 Some testimonial to give an example 2 Some testimonial to give an example 2 Some testimonial to give an example 2 Some testimonial to give an example 2', alt: ''},
	{content: 'Some testimonial to give an example 3 Some testimonial to give an example 3 Some testimonial to give an example 3 Some testimonial to give an example 3 Some testimonial to give an example 3 Some testimonial to give an example 3', alt: ''},
	{content: 'Some testimonial to give an example 4 Some testimonial to give an example 4 Some testimonial to give an example 4', alt: ''},
	{content: 'Some testimonial to give an example 5 Some testimonial to give an example 5 Some testimonial to give an example 5', alt: ''},
];

const Testimonials = () => {
	const testimonialsStates = useSelector((state: RootState) => state.testimonials);
	const testimonialsActions = {
		incrementCurrentItems,
		decrementCurrentItems,
		setMaxItems,
		setIsFrozen,
		setCurrentItem,
	};

	return (
		<section className='testimonials'>
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

import Carousel from '@components/carousel';
import './styles.scss';
import CarouselImageItem from '@components/carousel-image-item';
import {useSelector} from 'react-redux';
import {incrementCurrentItem, decrementCurrentItem, setMaxItems, setIsFrozen, setCurrentItem} from '@states/our-works-reducer';
import {type RootState} from '@store/redux-store';
import CarouselDots from '@components/carousel-dots';
import carousel1 from '@assets/our-works/carousel1.jpg';
import carousel2 from '@assets/our-works/carousel2.jpg';
import carousel3 from '@assets/our-works/carousel3.jpg';
import carousel4 from '@assets/our-works/carousel4.jpg';

const items = [
	{content: carousel1, alt: 'Haircut Image'},
	{content: carousel2, alt: 'Haircut Image'},
	{content: carousel3, alt: 'Haircut Image'},
	{content: carousel4, alt: 'Haircut Image'},
];

const OurWorks = () => {
	const ourWorksStates = useSelector((state: RootState) => state.ourWorks);
	const ourWorksActions = {
		incrementCurrentItem,
		decrementCurrentItem,
		setMaxItems,
		setIsFrozen,
		setCurrentItem,
	};

	return (
		<div className='our-works-carousel box-shadow' id='our-works'>
			<Carousel
				Element={CarouselImageItem}
				states={ourWorksStates}
				actions={ourWorksActions}
				items={items}
				style={{height: '80%'}}
			/>
			<div className='carousel-images-footer'>
				<h2>Nossos trabalhos</h2>
				<CarouselDots actions={ourWorksActions} states={ourWorksStates} />
			</div>
		</div>
	);
};

export default OurWorks;

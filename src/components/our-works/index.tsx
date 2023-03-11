import Carousel from '@components/carousel';
import './styles.scss';
import CarouselImageItem from '@components/carousel-image-item';
import {useSelector} from 'react-redux';
import {incrementCurrentItems, decrementCurrentItems, setMaxItems, setIsFrozen, setCurrentItem} from '@states/carousel-images';
import {type RootState} from '@store/redux-store';
import CarouselDots from '@components/carousel-dots';

const items = [
	{content: 'https://source.unsplash.com/random/250x250?animal', alt: 'Animal Image'},
	{content: 'https://source.unsplash.com/random/250x250?nature', alt: 'Nature Image'},
	{content: 'https://source.unsplash.com/random/250x250?beach', alt: 'Beach Image'},
	{content: 'https://source.unsplash.com/random/250x250?night', alt: 'Night Image'},
	{content: 'https://source.unsplash.com/random/250x250?street', alt: 'Street Image'},
];

const OurWorks = () => {
	const carouselImagesStates = useSelector((state: RootState) => state.carouselImages);
	const carouselImagesActions = {
		incrementCurrentItems,
		decrementCurrentItems,
		setMaxItems,
		setIsFrozen,
		setCurrentItem,
	};

	return (
		<section className='our-works-carousel'>
			<Carousel
				Element={CarouselImageItem}
				states={carouselImagesStates}
				actions={carouselImagesActions}
				items={items}
			/>
			<div className='carousel-images-footer'>
				<p>Nossos trabalhos</p>
				<CarouselDots actions={carouselImagesActions} states={carouselImagesStates} />
			</div>
		</section>
	);
};

export default OurWorks;

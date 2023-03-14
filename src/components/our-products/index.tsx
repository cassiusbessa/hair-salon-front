import Carousel from '@components/carousel';
import './styles.scss';
import CarouselImageItem from '@components/carousel-image-item';
import {useSelector} from 'react-redux';
import {incrementCurrentItems, decrementCurrentItems, setMaxItems, setIsFrozen, setCurrentItem} from '@states/our-products-reducer';
import {type RootState} from '@store/redux-store';
import CarouselDots from '@components/carousel-dots';

const items = [
	{content: 'https://source.unsplash.com/random/250x250?animal', alt: 'Animal Image'},
	{content: 'https://source.unsplash.com/random/250x250?nature', alt: 'Nature Image'},
	{content: 'https://source.unsplash.com/random/250x250?beach', alt: 'Beach Image'},
	{content: 'https://source.unsplash.com/random/250x250?night', alt: 'Night Image'},
	{content: 'https://source.unsplash.com/random/250x250?street', alt: 'Street Image'},
];

const OurProducts = () => {
	const ourProductsStates = useSelector((state: RootState) => state.ourProducts);
	const ourProductsActions = {
		incrementCurrentItems,
		decrementCurrentItems,
		setMaxItems,
		setIsFrozen,
		setCurrentItem,
	};

	return (
		<div className='our-products-carousel'>
			<Carousel
				Element={CarouselImageItem}
				states={ourProductsStates}
				actions={ourProductsActions}
				items={items}
				style={{height: '80%'}}
			/>
			<div className='carousel-images-footer'>
				<h2>Nossos produtos</h2>
				<CarouselDots actions={ourProductsActions} states={ourProductsStates} />
			</div>
		</div>
	);
};

export default OurProducts;

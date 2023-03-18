import Carousel from '@components/carousel';
import './styles.scss';
import CarouselImageItem from '@components/carousel-image-item';
import {useSelector} from 'react-redux';
import {incrementCurrentItem, decrementCurrentItem, setMaxItems, setIsFrozen, setCurrentItem} from '@states/our-products-reducer';
import {type RootState} from '@store/redux-store';
import CarouselDots from '@components/carousel-dots';
import product1 from '@assets/our-products/product1.webp';
import product2 from '@assets/our-products/product2.webp';
import product3 from '@assets/our-products/product3.png';
import product4 from '@assets/our-products/product4.webp';

const items = [
	{content: product1, alt: 'Product 1'},
	{content: product2, alt: 'Product 2'},
	{content: product3, alt: 'Product 3'},
	{content: product4, alt: 'Product 4'},
];

const OurProducts = () => {
	const ourProductsStates = useSelector((state: RootState) => state.ourProducts);
	const ourProductsActions = {
		incrementCurrentItem,
		decrementCurrentItem,
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

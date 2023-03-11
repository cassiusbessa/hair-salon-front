/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import {useEffect} from 'react';
import GalleryWrapper from './components/gallery-wrapper/gallery-wrapper';
import './styles.scss';
import {useDispatch, useSelector} from 'react-redux';
import {incrementCurrentItems, decrementCurrentItems, setMaxItems, setIsFrozen} from '../../redux/states/carousel-images';
import {type RootState} from '@store/redux-store';

const items = [
	{content: 'https://source.unsplash.com/random/250x250?animal', alt: 'Animal Image'},
	{content: 'https://source.unsplash.com/random/250x250?nature', alt: 'Nature Image'},
	{content: 'https://source.unsplash.com/random/250x250?beach', alt: 'Beach Image'},
	{content: 'https://source.unsplash.com/random/250x250?night', alt: 'Night Image'},
	{content: 'https://source.unsplash.com/random/250x250?street', alt: 'Street Image'},
];

export type ElementCarouselItems = {
	addToRefs: (el: never) => void;
	elementInfo: {content: string; alt?: string};
	index: number;
};

type Props = {
	Element: ({addToRefs, elementInfo, index}: ElementCarouselItems) => JSX.Element;
};

const Carousel = ({Element}: Props) => {
	const carouselImages = useSelector((state: RootState) => state.carouselImages);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setMaxItems(items.length));
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(incrementCurrentItems());
		}, 3000);

		if (carouselImages.isFrozen) clearInterval(interval);

		return (() => {
			clearInterval(interval);
		});
	}, [carouselImages.isFrozen, carouselImages.maxItems]);

	return (
		<section className='carousel'>
			<div
				className='carousel-container'
				onMouseEnter={() => dispatch(setIsFrozen(true))}
				onMouseLeave={() => dispatch(setIsFrozen(false))}
				onTouchStart={() => dispatch(setIsFrozen(true))}
				onTouchEnd={() => dispatch(setIsFrozen(false))}
			>
				<button
					className='carousel-arrow-left control'
					aria-label='Previous item'
					onClick={() => dispatch(decrementCurrentItems())}
				>
					{'<'}
				</button>
				<button
					className='carousel-arrow-right control'
					aria-label='Next item'
					onClick={() => dispatch(incrementCurrentItems())}
				>
					{'>'}
				</button>
				<GalleryWrapper
					Element={Element}
					items={items}
				/>
			</div>
		</section>
	);
};

export default Carousel;

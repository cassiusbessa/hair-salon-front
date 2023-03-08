import {useEffect, useState} from 'react';
import GalleryWrapper from './components/gallery-wrapper/gallery-wrapper';
import './styles.scss';

type ElementProps = {
	addToRefs: (el: never) => void;
	imageInfo: {link: string; alt: string};
	index: number;
};

type Props = {
	Element: ({addToRefs, imageInfo, index}: ElementProps) => JSX.Element;
};

const Carousel = ({Element}: Props) => {
	const [currentItem, setCurrentItem] = useState(0);
	const [maxItems, setMaxItems] = useState(0);
	const [isFrozen, setIsFrozen] = useState(true);

	const incraseCurrentItem = () => {
		setCurrentItem(prevCurrentItem => {
			let currentItem = prevCurrentItem + 1;
			if (currentItem >= maxItems) {
				currentItem = 0;
			}

			return currentItem;
		});
	};

	const decraseCurrentItem = () => {
		setCurrentItem(prevCurrentItem => {
			let currentItem = prevCurrentItem - 1;
			if (currentItem < 0) {
				currentItem = maxItems - 1;
			}

			return currentItem;
		});
	};

	useEffect(() => {
		const items = document.querySelectorAll('.carousel-item');
		setMaxItems(items.length);
		// setIsFrozen(false);
	}, []);

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		incraseCurrentItem();
	// 		console.log('set interval ativo');
	// 	}, 3000);

	// 	if (isFrozen) clearInterval(interval);

	// 	return (() => {
	// 		clearInterval(interval);
	// 	});
	// }, [isFrozen]);

	const generateDots = () => {
		const dots = [];
		for (let index = 0; index < maxItems; index++) {
			dots.push(<div className={index === currentItem ? 'current-dot' : ''}></div>);
		}

		return dots;
	};

	return (
		<section className='carousel'>
			<div
				className='carousel-container'
				onMouseEnter={() => {
					setIsFrozen(true);
				}}
				onMouseLeave={() => {
					setIsFrozen(false);
				}}
			>
				<button className='carousel-arrow-left control' aria-label='Previous image' onClick={decraseCurrentItem}>{'<'}</button>
				<button className='carousel-arrow-right control' aria-label='Next image' onClick={incraseCurrentItem}>{'>'}</button>
				<GalleryWrapper currentItem={currentItem} Element={Element} />
			</div>

			<div className='carousel-footer'>
				<p>Nossos trabalhos</p>
				<div className='carousel-dots'>
					{generateDots()}
				</div>
			</div>
		</section>
	);
};

export default Carousel;

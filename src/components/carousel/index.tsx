/* eslint-disable @typescript-eslint/no-confusing-void-expression */
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

	useEffect(() => {
		setIsFrozen(false);
	}, []);

	const increaseCurrentItem = () => {
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
		const interval = setInterval(() => {
			increaseCurrentItem();
		}, 5000);

		if (isFrozen) clearInterval(interval);

		return (() => {
			clearInterval(interval);
		});
	}, [isFrozen]);

	const generateDots = () => {
		const dots = [];
		for (let i = 0; i < maxItems; i++) {
			dots.push(<div key={i} onClick={() => setCurrentItem(i)} className={i === currentItem ? 'current-dot' : ''}></div>);
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
				onTouchStart={() => {
					setIsFrozen(true);
				}}
				onTouchEnd={() => {
					setIsFrozen(false);
				}}
			>
				<button className='carousel-arrow-left control' aria-label='Previous item' onClick={decraseCurrentItem}>
					{'<'}
				</button>
				<button className='carousel-arrow-right control' aria-label='Next item' onClick={increaseCurrentItem}>
					{'>'}
				</button>
				<GalleryWrapper
					currentItem={currentItem}
					Element={Element}
					setCurrentItem={setCurrentItem}
					setMaxItems={setMaxItems}
				/>
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

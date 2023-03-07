import {useEffect, useState} from 'react';
import GalleryWrapper from './components/gallery-wrapper/gallery-wrapper';
import './styles.scss';

const Carousel = () => {
	const [currentItem, setCurrentItem] = useState(0);
	const [maxItems, setMaxItems] = useState(0);

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

		const repositionCurrentItem = () => {
			items.forEach(item => {
				item.classList.remove('carousel-current-item');
			});

			items[currentItem].scrollIntoView({inline: 'center', behavior: 'smooth'});
			items[currentItem].classList.add('carousel-current-item');
		};

		repositionCurrentItem();
	}, [currentItem]);

	return (
		<section className='carousel-container'>
			<button className='carousel-arrow-left control' aria-label='Previous image' onClick={decraseCurrentItem}>{'<'}</button>
			<button className='carousel-arrow-right control' aria-label='Next image' onClick={incraseCurrentItem}>{'>'}</button>
			<GalleryWrapper />
		</section>
	);
};

export default Carousel;

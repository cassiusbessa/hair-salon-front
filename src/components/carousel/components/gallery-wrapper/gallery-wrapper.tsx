import {useEffect, useRef, useState} from 'react';
import './styles.scss';
import {type CarouselActions, type CarouselStates, type ElementCarouselItems} from '@components/carousel';
import {useDispatch} from 'react-redux';

type Props = {
	Element: ({elementInfo, index}: ElementCarouselItems) => JSX.Element;
	items: Array<{content: string; alt?: string}>;
	states: CarouselStates;
	actions: CarouselActions;
};

const GalleryWrapper = ({Element, items, states, actions}: Props) => {
	const [scrollGallery, setScrollGallery] = useState({start: 0, end: 0});
	const dispatch = useDispatch();

	const wrapperRef = useRef(null);
	const itemsRefs = useRef([]);

	const updateCurrentItem = (e: React.TouchEvent<HTMLDivElement>) => {
		// const wrapperElement = wrapperRef.current as unknown as HTMLDivElement;
		// const itemElement: HTMLDivElement = itemsRefs.current[states.currentItem];
		// const newCurrentItem = Math.round(wrapperElement.scrollLeft / itemElement.offsetWidth);
		// console.log(itemElement.clientWidth);
		// console.log(itemElement.clientWidth, newCurrentItem);
		// wrapperElement.scrollLeft = (itemElement.clientWidth * newCurrentItem);
		return e.currentTarget.scrollLeft;
		// dispatch(actions.setCurrentItem(newCurrentItem));
	};

	const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		const start = e.currentTarget.scrollLeft;
		setScrollGallery((prevState: {start: number; end: number}) => ({...prevState, start}));
		console.log('start', scrollGallery.start);
	};

	const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
		const end = e.currentTarget.scrollLeft;
		setScrollGallery((prevState: {start: number; end: number}) => ({...prevState, end}));
		console.log('start', scrollGallery.start);
		console.log('end', scrollGallery.end);
		if (scrollGallery.end === scrollGallery.start) return null;
		if (scrollGallery.end > scrollGallery.start) dispatch(actions.incrementCurrentItems());
		if (scrollGallery.end < scrollGallery.start) dispatch(actions.decrementCurrentItems());
	};

	const addToRefs = (el: never) => {
		if (el && !itemsRefs.current.includes(el)) {
			itemsRefs.current.push(el);
		}
	};

	useEffect(() => {
		const wrapperElement = wrapperRef.current as unknown as HTMLDivElement;
		const itemElement: HTMLDivElement = itemsRefs.current[states.currentItem];
		wrapperElement.scrollLeft = (itemElement.clientWidth * states.currentItem);
	}, [states.currentItem, states.maxItems]);

	return (
		<div className='carousel-gallery-wrapper' ref={wrapperRef} onTouchStartCapture={handleTouchStart} onTouchEnd={handleTouchEnd}>
			<div className='carousel-gallery'>
				{
					items.map((item, index) => (
						<div
							key={item.content}
							ref={addToRefs}
							className={`carousel-item ${index === 0 ? 'carousel-current-item' : ''}`}
						>
							<Element elementInfo={item} index={index} />
						</div>
					))
				}
			</div>
		</div>
	);
};

export default GalleryWrapper;

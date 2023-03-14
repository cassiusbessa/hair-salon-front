import {useEffect, useRef} from 'react';
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
	const dispatch = useDispatch();

	const wrapperRef = useRef(null);
	const itemsRefs = useRef([]);

	const updateCurrentItem = () => {
		const wrapperElement = wrapperRef.current as unknown as HTMLDivElement;
		const itemElement: HTMLDivElement = itemsRefs.current[states.currentItem];
		const newCurrentItem = Math.round(wrapperElement.scrollLeft / itemElement.offsetWidth);
		dispatch(actions.setCurrentItem(newCurrentItem));
		wrapperElement.scrollLeft = (itemElement.clientWidth * newCurrentItem);
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
		<div className='carousel-gallery-wrapper' ref={wrapperRef} onTouchEnd={updateCurrentItem}>
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

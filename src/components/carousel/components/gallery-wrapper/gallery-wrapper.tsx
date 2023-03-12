import {useEffect, useRef} from 'react';
import './styles.scss';
import {type CarouselActions, type CarouselStates, type ElementCarouselItems} from '@components/carousel';
import {useDispatch, useSelector} from 'react-redux';

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
		const itemElement: HTMLImageElement = itemsRefs.current[states.currentItem];

		const newCurrentItem = Math.round(wrapperElement.scrollLeft / itemElement.width);
		dispatch(actions.setCurrentItem(newCurrentItem));
	};

	const addToRefs = (el: never) => {
		if (el && !itemsRefs.current.includes(el)) {
			itemsRefs.current.push(el);
		}
	};

	useEffect(() => {
		const itemElement: HTMLDivElement = itemsRefs.current[states.currentItem];
		const wrapperElement = wrapperRef.current as unknown as HTMLDivElement;
		// console.log(itemElement.offsetWidth);

		wrapperElement.scrollLeft = ((itemElement.clientWidth || itemElement.offsetWidth) * states.currentItem);
	}, [states.currentItem, states.maxItems]);

	const handlerOnTouchEnd = () => {
		setTimeout(() => {
			updateCurrentItem();
		}, 1000);
	};

	return (
		<div className='carousel-gallery-wrapper' ref={wrapperRef} onTouchEnd={handlerOnTouchEnd}>
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

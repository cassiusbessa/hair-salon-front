/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import {useEffect, useRef} from 'react';
import './styles.scss';
import {type CarouselActions, type CarouselStates, type ElementCarouselItems} from '@components/carousel';

type Props = {
	Element: ({elementInfo, index}: ElementCarouselItems) => JSX.Element;
	items: Array<{content: string; alt?: string}>;
	states: CarouselStates;
};

const GalleryWrapper = ({Element, items, states}: Props) => {
	const wrapperRef = useRef(null);
	const itemsRefs = useRef([]);

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
		<div
			className='carousel-gallery-wrapper'
			ref={wrapperRef}
		>
			<div
				className='carousel-gallery'
			>
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

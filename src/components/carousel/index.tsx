import {useEffect} from 'react';
import GalleryWrapper from './components/gallery-wrapper/gallery-wrapper';
import './styles.scss';
import {useDispatch} from 'react-redux';
import {type ActionCreatorWithPayload, type ActionCreatorWithoutPayload} from '@reduxjs/toolkit';

export type CarouselActions = {
	incrementCurrentItem: ActionCreatorWithoutPayload;
	decrementCurrentItem: ActionCreatorWithoutPayload;
	setMaxItems: ActionCreatorWithPayload<number>;
	setIsFrozen: ActionCreatorWithPayload<boolean>;
	setCurrentItem: ActionCreatorWithPayload<number>;
};

export type CarouselStates = {
	currentItem: number;
	maxItems: number;
	isFrozen: boolean;
};

export type ElementCarouselItems = {
	elementInfo: {content: string; alt?: string};
	index: number;
};

type Props = {
	Element: ({elementInfo, index}: ElementCarouselItems) => JSX.Element;
	states: CarouselStates;
	actions: CarouselActions;
	items: Array<{content: string; alt: string}>;
	style?: React.CSSProperties | undefined;
};

const Carousel = ({Element, states, actions, items, style}: Props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.setMaxItems(items.length));
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(actions.incrementCurrentItem());
		}, 3000);

		if (states.isFrozen) clearInterval(interval);

		return (() => {
			clearInterval(interval);
		});
	}, [states.isFrozen, states.maxItems]);

	return (
		<div
			className='carousel'
			onMouseEnter={() => dispatch(actions.setIsFrozen(true))}
			onMouseLeave={() => dispatch(actions.setIsFrozen(false))}
			onTouchStart={() => dispatch(actions.setIsFrozen(true))}
			onTouchEnd={() => dispatch(actions.setIsFrozen(false))}
			style={style}
		>
			<button
				className='carousel-arrow-left control'
				aria-label='Previous item'
				onClick={() => dispatch(actions.decrementCurrentItem())}
			>
				{'<'}
			</button>
			<button
				className='carousel-arrow-right control'
				aria-label='Next item'
				onClick={() => dispatch(actions.incrementCurrentItem())}
			>
				{'>'}
			</button>
			<GalleryWrapper
				Element={Element}
				items={items}
				states={states}
			/>
		</div>
	);
};

export default Carousel;

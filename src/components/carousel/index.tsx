/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import {useEffect} from 'react';
import GalleryWrapper from './components/gallery-wrapper/gallery-wrapper';
import './styles.scss';
import {useDispatch} from 'react-redux';
import {type ActionCreatorWithPayload, type ActionCreatorWithoutPayload} from '@reduxjs/toolkit';

export type CarouselActions = {
	incrementCurrentItems: ActionCreatorWithoutPayload;
	decrementCurrentItems: ActionCreatorWithoutPayload;
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
	addToRefs: (el: never) => void;
	elementInfo: {content: string; alt?: string};
	index: number;
};

type Props = {
	Element: ({addToRefs, elementInfo, index}: ElementCarouselItems) => JSX.Element;
	states: CarouselStates;
	actions: CarouselActions;
	items: Array<{content: string; alt: string}>;
};

const Carousel = ({Element, states, actions, items}: Props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actions.setMaxItems(items.length));
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(actions.incrementCurrentItems());
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
		>
			<button
				className='carousel-arrow-left control'
				aria-label='Previous item'
				onClick={() => dispatch(actions.decrementCurrentItems())}
			>
				{'<'}
			</button>
			<button
				className='carousel-arrow-right control'
				aria-label='Next item'
				onClick={() => dispatch(actions.incrementCurrentItems())}
			>
				{'>'}
			</button>
			<GalleryWrapper
				Element={Element}
				items={items}
				states={states}
				actions={actions}
			/>
		</div>
	);
};

export default Carousel;

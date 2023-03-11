import {useEffect, useRef} from 'react';
import './styles.scss';
import {type ElementCarouselItems} from '@components/carousel';
import {useDispatch, useSelector} from 'react-redux';
import {setCurrentItem} from '@states/carousel-images';
import {type RootState} from '@store/redux-store';

type Props = {
	Element: ({addToRefs, elementInfo, index}: ElementCarouselItems) => JSX.Element;
	items: Array<{content: string; alt?: string}>;
};

const GalleryWrapper = ({Element, items}: Props) => {
	const carouselImages = useSelector((state: RootState) => state.carouselImages);
	const dispatch = useDispatch();

	const wrapperRef = useRef(null);
	const itemsRefs = useRef([]);

	const updateCurrentItem = () => {
		const wrapperElement = wrapperRef.current as unknown as HTMLDivElement;
		const itemElement: HTMLImageElement = itemsRefs.current[carouselImages.currentItem];

		const newCurrentItem = Math.round(wrapperElement.scrollLeft / itemElement.width);
		dispatch(setCurrentItem(newCurrentItem));
	};

	const addToRefs = (el: never) => {
		if (el && !itemsRefs.current.includes(el)) {
			itemsRefs.current.push(el);
		}
	};

	useEffect(() => {
		const itemElement: HTMLImageElement = itemsRefs.current[carouselImages.currentItem];
		const wrapperElement = wrapperRef.current as unknown as HTMLDivElement;

		wrapperElement.scrollLeft = (itemElement.clientWidth * carouselImages.currentItem);
	}, [carouselImages.currentItem]);

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
						<Element addToRefs={addToRefs} elementInfo={item} index={index} key={index} />
					))
				}
			</div>
		</div>
	);
};

export default GalleryWrapper;

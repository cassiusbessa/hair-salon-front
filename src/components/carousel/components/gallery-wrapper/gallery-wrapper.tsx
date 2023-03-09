import {useEffect, useRef} from 'react';
import './styles.scss';

const items = [
	{link: 'https://source.unsplash.com/random/250x250?animal', alt: 'Animal Image'},
	{link: 'https://source.unsplash.com/random/250x250?nature', alt: 'Nature Image'},
	{link: 'https://source.unsplash.com/random/250x250?beach', alt: 'Beach Image'},
	{link: 'https://source.unsplash.com/random/250x250?night', alt: 'Night Image'},
	{link: 'https://source.unsplash.com/random/250x250?street', alt: 'Street Image'},
];

type ElementProps = {
	addToRefs: (el: never) => void;
	imageInfo: {link: string; alt: string};
	index: number;
};

type Props = {
	currentItem: number;
	Element: ({addToRefs, imageInfo, index}: ElementProps) => JSX.Element;
	setCurrentItem: React.Dispatch<React.SetStateAction<number>>;
	setMaxItems: React.Dispatch<React.SetStateAction<number>>;
};

const GalleryWrapper = ({currentItem, Element, setCurrentItem, setMaxItems}: Props) => {
	const wrapperRef = useRef(null);

	const itemsRefs = useRef([]);
	itemsRefs.current = [];

	useEffect(() => {
		setMaxItems(items.length);
	}, []);

	const updateCurrentItem = () => {
		const wrapperElement = wrapperRef.current as unknown as HTMLDivElement;
		const itemElement: HTMLImageElement = itemsRefs.current[currentItem];

		const newCurrentItem = Math.round(wrapperElement.scrollLeft / itemElement.width);
		setCurrentItem(newCurrentItem);
	};

	const addToRefs = (el: never) => {
		if (el && !itemsRefs.current.includes(el)) {
			itemsRefs.current.push(el);
		}
	};

	useEffect(() => {
		const itemElement: HTMLImageElement = itemsRefs.current[currentItem];
		const wrapperElement = wrapperRef.current as unknown as HTMLDivElement;

		wrapperElement.scrollLeft = (itemElement.clientWidth * currentItem);
	}, [currentItem]);

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
						<Element addToRefs={addToRefs} imageInfo={item} index={index} key={index} />
					))
				}
			</div>
		</div>
	);
};

export default GalleryWrapper;

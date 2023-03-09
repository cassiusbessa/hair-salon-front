import {useEffect, useRef} from 'react';
import './styles.scss';

const images = [
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
	maxItems: number;
	setMaxItems: React.Dispatch<React.SetStateAction<number>>;
};

const GalleryWrapper = ({currentItem, Element, setCurrentItem, maxItems, setMaxItems}: Props) => {
	const wrapperRef = useRef(null);

	const itemsRefs = useRef([]);
	itemsRefs.current = [];

	const updateCurrentItem = () => {
		const wrapperElement = wrapperRef.current as unknown as HTMLDivElement;
		const itemElement: HTMLImageElement = itemsRefs.current[currentItem];

		const oi = Math.round(wrapperElement.scrollLeft / itemElement.width);
		console.log(oi);
		setCurrentItem(oi);
	};

	useEffect(() => {
		const items = document.querySelectorAll('.carousel-item');
		setMaxItems(items.length);
	}, []);

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

	return (
		<div className='carousel-gallery-wrapper' ref={wrapperRef} onTouchEnd={() => {
			setTimeout(() => {
				updateCurrentItem();
			}, 1000);
		}}>
			<div className='carousel-gallery'>
				{
					images.map((item, index) => (
						<Element addToRefs={addToRefs} imageInfo={item} index={index} key={index} />
					))
				}
			</div>
		</div>
	);
};

export default GalleryWrapper;

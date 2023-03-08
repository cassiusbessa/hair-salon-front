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
};

const GalleryWrapper = ({currentItem, Element}: Props) => {
	const revealRefs = useRef([]);
	revealRefs.current = [];

	const addToRefs = (el: never) => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el);
		}
	};

	useEffect(() => {
		revealRefs.current.forEach((element: HTMLImageElement) => {
			element.classList.remove('carousel-current-item');
		});

		const element: HTMLImageElement = revealRefs.current[currentItem];
		element.scrollIntoView({inline: 'center', behavior: 'smooth'});
		element.classList.add('carousel-current-item');
	}, [currentItem]);

	return (
		<div className='carousel-gallery-wrapper'>
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

import './styles.scss';

type Props = {
	addToRefs: (el: never) => void;
	imageInfo: {link: string; alt: string};
	index: number;
};

const ImageForCarousel = ({addToRefs, imageInfo, index}: Props) => {
	return (
		<>
			<img
				key={imageInfo.link}
				className={`carousel-item ${index === 0 ? 'carousel-current-item' : ''}`}
				src={imageInfo.link}
				alt={imageInfo.alt}
				ref={addToRefs}
				loading='lazy'
			/>
		</>
	);
};

export default ImageForCarousel;

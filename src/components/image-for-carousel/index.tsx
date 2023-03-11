import './styles.scss';
import {type ElementCarouselItems} from '@components/carousel';

const ImageForCarousel = ({addToRefs, elementInfo, index}: ElementCarouselItems) => {
	return (
		<img
			key={elementInfo.content}
			className={`carousel-item ${index === 0 ? 'carousel-current-item' : ''}`}
			src={elementInfo.content}
			alt={elementInfo.alt}
			ref={addToRefs}
			loading='lazy'
		/>
	);
};

export default ImageForCarousel;

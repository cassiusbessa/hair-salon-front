import './styles.scss';
import {type ElementCarouselItems} from '@components/carousel';

const CarouselImageItem = ({elementInfo, index}: ElementCarouselItems) => {
	return (
		<img
			className='carousel-image-item'
			src={elementInfo.content}
			alt={elementInfo.alt}
			loading='lazy'
			width='100%'
		/>
	);
};

export default CarouselImageItem;

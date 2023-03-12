import {type ElementCarouselItems} from '@components/carousel';
import './styles.scss';

const CarouselTextItem = ({addToRefs, elementInfo, index}: ElementCarouselItems) => {
	return (
		<div
			key={elementInfo.content}
			className={`carousel-item ${index === 0 ? 'carousel-current-item' : ''}`}
			ref={addToRefs}
		>
			{elementInfo.content}
		</div>
	);
};

export default CarouselTextItem;

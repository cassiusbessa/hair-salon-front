import {type ElementCarouselItems} from '@components/carousel';
import './styles.scss';

const CarouselTextItem = ({elementInfo}: ElementCarouselItems) => {
	return (
		<div className='carousel-text-item'>
			<p
				key={elementInfo.content}
			>
				{elementInfo.content}
			</p>
		</div>
	);
};

export default CarouselTextItem;

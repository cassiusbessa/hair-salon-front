import {type ElementCarouselItems} from '@components/carousel';
import './styles.scss';

const CarouselTextItem = ({elementInfo}: ElementCarouselItems) => {
	return (
		<div className='carousel-text-item'>
			<p
				key={elementInfo.content}
				className='g-txt-just-inter-word'
			>
				{elementInfo.content}
			</p>
		</div>
	);
};

export default CarouselTextItem;

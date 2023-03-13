import './styles.scss';
import {type ElementCarouselItems} from '@components/carousel';

const CarouselImageItem = ({elementInfo}: ElementCarouselItems) => {
	return (
		<div className='carousel-image-item' style={{backgroundImage: `url(${elementInfo.content})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundOrigin: 'content-box', backgroundPosition: 'center center'}} />
	);
};

export default CarouselImageItem;

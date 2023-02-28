/* eslint-disable no-mixed-spaces-and-tabs */
import React, {useEffect} from 'react';
import './styles.scss';
import carrouselArrow from '@assets/info-card/arrow.svg';
import CarrouselDotsContainer from './components/carrousel-dots-container';

type Props = {
	title: string;
	content: string[];
	isCarrousel?: boolean;
};

const InfoCard = ({title, content, isCarrousel}: Props) => {
	const twelveSeconds = 12000;
	const [activeIndex, setActiveIndex] = React.useState(0);

	const handleLeftArrowClick = () => {
		if (activeIndex === 0) {
			setActiveIndex(content.length - 1);
		} else {
			setActiveIndex(activeIndex - 1);
		}
	};

	const handleRightArrowClick = () => {
		if (activeIndex === content.length - 1) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	};

	const handleDotClick = (index: number) => {
		setActiveIndex(index);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleRightArrowClick();
		}, twelveSeconds);
		return () => {
			clearInterval(interval);
		};
	}, [activeIndex]);

	return (
		<div className='info-card-container'>
			<div className='info-card-title' >
				<h2>{title}</h2>
			</div>
			{isCarrousel
				? <>
      	<button type='button' className='left-arrow' onClick={handleLeftArrowClick}>
        	<img src={carrouselArrow} alt='arrow' />
      	</button>
      	<p className={isCarrousel ? 'carrousel-text' : ''}>{content[activeIndex]}</p>
      	<button type='button' className='right-arrow' onClick={handleRightArrowClick}>
      		<img src={carrouselArrow} alt='arrow' />
      	</button>
      	<CarrouselDotsContainer quantity={content.length} setActiveIndex={handleDotClick} activeIndex={activeIndex} />
				</>
				: <p>{content[0]}</p>
			}
		</div>
	);
};

export default InfoCard;

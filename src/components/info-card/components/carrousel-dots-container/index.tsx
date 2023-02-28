import React from 'react';
import './styles.scss';

type Props = {
	quantity: number;
	activeIndex: number;
	setActiveIndex: (index: number) => void;
};

const CarrouselDotsContainer = ({quantity, activeIndex, setActiveIndex}: Props) => {
	const dots = Array.from(Array(quantity).keys());

	return (
		<div className='carrousel-dots-container'>
			{dots.map((_dot, index) => (
				<div
					key={index}
					className={`carrousel-dot ${activeIndex === index ? 'active' : ''}`}
					onClick={() => {
						setActiveIndex(index);
					}}
				/>
			))}
		</div>
	);
};

export default CarrouselDotsContainer;

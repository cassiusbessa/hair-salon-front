import {useState, useEffect} from 'react';

export function useCarousel<T>(initialItems: T[], interval = 12000) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [items] = useState<T[]>(initialItems);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActiveIndex((activeIndex + 1) % items.length);
		}, interval);

		return () => {
			clearInterval(intervalId);
		};
	}, [activeIndex, interval, items]);

	const handleDotClick = (index: number) => {
		setActiveIndex(index);
	};

	const handleArrowClick = (direction: 'left' | 'right') => {
		const lastIndex = items.length - 1;

		if (direction === 'left') {
			setActiveIndex(activeIndex === 0 ? lastIndex : activeIndex - 1);
		} else {
			setActiveIndex(activeIndex === lastIndex ? 0 : activeIndex + 1);
		}
	};

	return {
		activeIndex,
		items,
		handleDotClick,
		handleArrowClick,
	};
}

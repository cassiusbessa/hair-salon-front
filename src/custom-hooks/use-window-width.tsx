/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import {useEffect, useState} from 'react';

export const useWindowWidthResize = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handlerResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handlerResize);

		return (() => window.removeEventListener('resize', handlerResize));
	}, []);

	return windowWidth;
};

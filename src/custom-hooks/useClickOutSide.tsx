import {useEffect, useRef, type MutableRefObject, type LegacyRef} from 'react';

export const useClickOutSide = (handler: () => void) => {
	const domNode: MutableRefObject<HTMLElement | undefined> = useRef();

	useEffect(() => {
		const handlerIfNoTarget = (e: any) => {
			if (!domNode.current?.contains(e.target as Node)) {
				handler();
			}
		};

		document.addEventListener('mousedown', handlerIfNoTarget);

		return () => {
			document.removeEventListener('mousedown', handlerIfNoTarget);
		};
	});

	return domNode;
};

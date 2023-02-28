import { useEffect, useState } from 'react';

interface ISvgIcon {
	onHoverColor?: string;
	onClickColor?: string;
	color?: string;
	className?: string;
	width?: number;
	height?: number;
}

const SvgArrowDropdownIcon = ({
	className,
	color = 'white',
	height,
	onClickColor,
	onHoverColor,
	width
}: ISvgIcon) => {
	const [isHover, setIsHover] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [colorItem, setColorItem] = useState(color ?? 'white')

	useEffect(() => {
		if (isActive) {
			setColorItem(onClickColor ?? 'white')
			return
		} 

		if (isHover) {
			setColorItem(onHoverColor ?? 'white')
		} else {
			setColorItem(color ?? 'white')
		}
	}, [isHover, isActive])

	const handlerMouseUp = () => {
		setTimeout(() => {
			setIsActive(false)
		}, 50)
	}

	return (
		<svg
			onMouseEnter={onHoverColor ? () => setIsHover(true) : undefined}
			onMouseLeave={onHoverColor ? () => setIsHover(false) : undefined}
			onMouseDown={onClickColor ? () => setIsActive(true) : undefined}
			onMouseUp={onClickColor ? handlerMouseUp : undefined}
			className={className ?? 'svg-arrow-dropdown-icon'}
			width={width ? width : (height ?? 12) * 1.66666667}
			height={height ? height : (width ?? 20) * 0.6}
			viewBox='0 0 20 12'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M13.0281 9.87008L19.5846 3.31357C19.8507 3.04594 20 2.6839 20 2.30653C20 1.92915 19.8507 1.56712 19.5846 1.29948C19.4518 1.1656 19.2938 1.05933 19.1198 0.98681C18.9457 0.91429 18.759 0.876953 18.5704 0.876953C18.3819 0.876953 18.1952 0.91429 18.0211 0.98681C17.847 1.05933 17.689 1.1656 17.5562 1.29948L11.014 7.87027C10.8812 8.00416 10.7232 8.11043 10.5492 8.18295C10.3751 8.25547 10.1884 8.2928 9.99984 8.2928C9.81127 8.2928 9.62456 8.25547 9.45049 8.18295C9.27643 8.11043 9.11844 8.00416 8.98565 7.87027L2.44342 1.29948C2.17634 1.0305 1.81334 0.878639 1.43429 0.877299C1.05523 0.87596 0.691174 1.02526 0.422194 1.29234C0.153214 1.55943 0.0013485 1.92242 9.53674e-06 2.30148C-0.00132942 2.68053 0.147968 3.04459 0.415052 3.31357L6.97156 9.87008C7.77505 10.6726 8.86423 11.1233 9.99984 11.1233C11.1354 11.1233 12.2246 10.6726 13.0281 9.87008Z'
				fill={colorItem}
				strokeWidth="5"
				strokeMiterlimit="2.3662"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default SvgArrowDropdownIcon;
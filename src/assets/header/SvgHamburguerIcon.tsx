import { useState } from 'react';

interface ISvgIcon {
	hoverColor?: string;
	color?: string;
	className?: string;
	width?: string;
	height?: string;
}

const SvgHamburguerIcon = (props: ISvgIcon) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<svg
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className={props.className ?? 'svg-hamburguer-icon'}
			width={props.width ?? '70'}
			height={props.width ?? '61'}
			viewBox="0 0 70 61"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15 15.5H55M15 30.9601H55M15 45.5H55"
				stroke={isHover ? props.hoverColor : props.color ?? 'white'}
				stroke-width="5"
				stroke-miterlimit="2.3662"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	)
}

export default SvgHamburguerIcon;

import { useEffect, useState } from 'react';

interface ISvgIcon {
	onHoverColor?: string;
	onClickColor?: string;
	color?: string;
	className?: string;
	width?: string;
	height?: string;
}

const SvgHamburguerIcon = (props: ISvgIcon) => {
	const [isHover, setIsHover] = useState(false);
	const [isActive, setIsActive] = useState(false);
	const [colorItem, setColorItem] = useState(props.color ?? 'white')

	useEffect(() => {
		if (isActive) {
			setColorItem(props.onClickColor ?? 'white')
			return
		} 

		if (isHover) {
			setColorItem(props.onHoverColor ?? 'white')
		} else {
			setColorItem(props.color ?? 'white')
		}
	}, [isHover, isActive])

	const handlerMouseUp = () => {
		setTimeout(() => {
			setIsActive(false)
		}, 50)
	}

	return (
		<svg
		onMouseEnter={props.onHoverColor ? () => setIsHover(true) : undefined}
		onMouseLeave={props.onHoverColor ? () => setIsHover(false) : undefined}
		onMouseDown={props.onClickColor ? () => setIsActive(true) : undefined}
		onMouseUp={props.onClickColor ? handlerMouseUp : undefined}
			className={props.className ?? 'svg-hamburguer-icon'}
			width={props.width ?? '56'}
			height={props.width ?? '48'}
			viewBox="0 0 70 61"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15 15.5H55M15 30.9601H55M15 45.5H55"
				stroke={colorItem}
				strokeWidth="5"
				strokeMiterlimit="2.3662"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default SvgHamburguerIcon;

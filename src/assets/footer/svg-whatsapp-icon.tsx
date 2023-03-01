import { useEffect, useState } from 'react';

interface ISvgIcon {
	onHoverColor?: string;
	onClickColor?: string;
	color?: string;
	className?: string;
	width?: number;
	height?: number;
}

const SvgWhatsAppIcon = ({
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
			width={width ?? 26}
			height={height ?? 28}
			fill={colorItem}
			viewBox='0 0 26 28'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M21.9343 4.06933C19.5633 1.44667 16.4112 0.00116667 13.0533 0C6.13367 0 0.501918 6.223 0.498751 13.874C0.497695 16.3193 1.07618 18.7063 2.17508 20.811L0.393188 28L7.04785 26.0703C8.88146 27.1763 10.9463 27.7585 13.047 27.7597H13.0522C19.9708 27.7597 25.6036 21.5355 25.6068 13.8845C25.6089 10.178 24.3041 6.69083 21.9343 4.06933ZM13.0533 25.4158H13.0491C11.1764 25.4158 9.34066 24.8593 7.73822 23.8082L7.35714 23.5585L3.40805 24.703L4.46262 20.447L4.21455 20.0107C3.16948 18.1743 2.61844 16.0522 2.6195 13.874C2.62161 7.51567 7.30331 2.34267 13.0586 2.34267C15.8454 2.34267 18.4655 3.54433 20.4353 5.72367C22.4051 7.90417 23.4892 10.801 23.4881 13.8822C23.485 20.2428 18.8043 25.4158 13.0533 25.4158ZM18.7769 16.779C18.4634 16.6052 16.9211 15.7663 16.6329 15.6508C16.3458 15.5353 16.1368 15.477 15.9267 15.8235C15.7166 16.17 15.117 16.9517 14.9334 17.1838C14.7507 17.4148 14.5671 17.444 14.2535 17.2702C13.94 17.0963 12.9287 16.7312 11.7306 15.5493C10.7985 14.63 10.1683 13.4948 9.98565 13.1472C9.80303 12.7995 9.96665 12.6128 10.1229 12.4402C10.2643 12.285 10.4364 12.0353 10.5937 11.8323C10.752 11.6317 10.8038 11.487 10.9093 11.2548C11.0138 11.0238 10.9621 10.8208 10.8829 10.647C10.8038 10.4743 10.1767 8.7675 9.91598 8.07333C9.66157 7.39667 9.40294 7.48883 9.20976 7.47833C9.02714 7.46783 8.81813 7.46667 8.60806 7.46667C8.39904 7.46667 8.05913 7.553 7.772 7.90067C7.48487 8.24833 6.67415 9.08717 6.67415 10.7928C6.67415 12.4997 7.79839 14.1482 7.95463 14.3792C8.11086 14.6102 10.1662 18.1125 13.313 19.614C14.0614 19.971 14.6462 20.1845 15.1012 20.3443C15.8528 20.608 16.5369 20.5707 17.0773 20.482C17.6801 20.3828 18.9331 19.6432 19.1949 18.8335C19.4567 18.0238 19.4567 17.3285 19.3775 17.185C19.2994 17.0392 19.0904 16.9528 18.7769 16.779Z'
				fill-rule='evenodd'
				clip-rule='evenodd'
				strokeWidth='5'
			/>
		</svg>
	)
}

export default SvgWhatsAppIcon;
import SvgArrowDropdownIcon from '@assets/dropdown-services/svg-arrow-dropdown-icon';
import './styles.scss';

type Props = {
	onClickArrow: React.MouseEventHandler<HTMLDivElement> | undefined;
	isOpen: boolean;
};

const ServiceTitle = ({onClickArrow, isOpen}: Props) => {
	return (
		<div className='title-services' onClick={onClickArrow}>
			<div>Corte</div>
			<button className={isOpen ? 'rotate-180' : ''}>
				<SvgArrowDropdownIcon />
			</button>
		</div>
	);
};

export default ServiceTitle;

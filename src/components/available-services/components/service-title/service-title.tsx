import SvgArrowDropdownIcon from '@assets/dropdown-services/svg-arrow-dropdown-icon';
import './styles.scss';
import {type DropdownServiceRequirements} from '@components/available-services';

type Props = {
	onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
	isOpen?: boolean;
	requirements: DropdownServiceRequirements;
	className?: string;
};

const ServiceTitle = ({onClick, isOpen, requirements, className}: Props) => {
	return (
		<div className={`title-services ${className ?? ''}`} onClick={onClick}>
			<div>{requirements.title}</div>
			<button className={isOpen ? 'rotate-180' : ''}>
				<SvgArrowDropdownIcon />
			</button>
		</div>
	);
};

export default ServiceTitle;

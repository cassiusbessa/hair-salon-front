import './styles.scss';
import {type DropdownServiceRequirements} from '@components/available-services';

type Props = {
	isOpen: boolean;
	requirements: DropdownServiceRequirements;
};

const ServiceContent = ({isOpen, requirements}: Props) => {
	return (
		<div className={`dropdown-service ${isOpen ? 'open-dropdown-service' : ''}`}>
			<p>
				{requirements.subTitle}<br/><br/>
				{requirements.content}<br/><br/>
				A partir de R$ {requirements.price}
			</p>
		</div>
	);
};

export default ServiceContent;
